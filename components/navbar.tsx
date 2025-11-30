"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false)
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Community', href: '/community' },
    { name: 'Docs', href: '/docs' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="w-20 h-20  rounded-lg overflow-hidden">
              <img 
                src="/image.png" 
                alt="FlashPay Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-balance">FlashPay</span>
              <div className="text-[10px] text-muted-foreground opacity-100 transition-all duration-300">
                <span className="inline-block">
                  <span className="inline-block">P</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.1s' }}>o</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.2s' }}>w</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.3s' }}>e</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.4s' }}>r</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.5s' }}>e</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.6s' }}>d</span>
                  <span> </span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.7s' }}>b</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.8s' }}>y</span>
                  <span> </span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '0.9s' }}>A</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.0s' }}>p</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.1s' }}>t</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.2s' }}>o</span>
                  <span className="inline-block hover:animate-bounce text-accent font-bold" style={{ animationDelay: '1.3s' }}>s</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-[20px] text-white hover:text-accent transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/#features" 
              className="text-[20px] text-white hover:text-accent transition-colors duration-200 relative group"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const features = document.getElementById('features');
                  features?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/community" 
              className="text-[20px] text-white hover:text-accent transition-colors duration-200 relative group"
            >
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/docs" 
              className="text-[20px] text-white hover:text-accent transition-colors duration-200 relative group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/generate-paylink">
              <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:glow-cyan-lg transition-all duration-300 hover:scale-105">
                Get Started
                <HiArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/generate-paylink" 
                className="block w-full text-center px-4 py-2 rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
