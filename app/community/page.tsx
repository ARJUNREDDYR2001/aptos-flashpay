"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

// Mock data for community posts
const mockPosts = [
  {
    id: 1,
    user: "AptosUser123",
    avatar: "/default-avatar.png",
    content: "Just made my first payment using FlashPay! Super smooth experience. Love the UI! 🚀",
    timestamp: "2 hours ago",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    user: "CryptoTrader",
    avatar: "/default-avatar.png",
    content: "The transaction speed is amazing. Completed in seconds! #Aptos #FlashPay",
    timestamp: "5 hours ago",
    likes: 8,
    comments: 1,
  },
  {
    id: 3,
    user: "DeFiEnthusiast",
    avatar: "/default-avatar.png",
    content: "Would love to see more tokens supported in the future. Great work team! 💫",
    timestamp: "1 day ago",
    likes: 15,
    comments: 5,
  },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post = {
      id: posts.length + 1,
      user: "You",
      avatar: "/default-avatar.png",
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
    };
    
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Community Feed</h1>
        
        {/* Create Post */}
        <div className="bg-card p-4 rounded-lg shadow mb-6">
          <textarea
            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
            rows={3}
            placeholder="Share something with the community..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              onClick={handlePost}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-card p-5 rounded-lg shadow">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <img 
                    src={post.avatar} 
                    alt={post.user} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default avatar if image fails to load
                      (e.target as HTMLImageElement).src = '/default-avatar.png';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{post.user}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  </div>
                  <p className="mt-1">{post.content}</p>
                  <div className="flex items-center mt-3 space-x-4 text-sm text-muted-foreground">
                    <button className="flex items-center space-x-1 hover:text-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{post.comments} comments</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
