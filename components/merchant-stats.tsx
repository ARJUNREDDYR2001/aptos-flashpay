"use client"

import { HiArrowTrendingUp, HiCheckCircle, HiClock, HiXMark } from "react-icons/hi2"

const stats = [
  {
    icon: HiArrowTrendingUp,
    label: "Total Volume",
    value: "$45,230.50",
    change: "+12.5%",
    color: "from-accent to-secondary",
  },
  {
    icon: HiCheckCircle,
    label: "Completed",
    value: "324",
    subtext: "Payments",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: HiClock,
    label: "Pending",
    value: "12",
    subtext: "Awaiting",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: HiXMark,
    label: "Failed",
    value: "3",
    subtext: "Last 30 days",
    color: "from-red-500 to-pink-500",
  },
]

export default function MerchantStats() {
  return (
    <div className="grid md:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div
            key={idx}
            className="bg-glass rounded-2xl p-6 sm:p-8 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:glow-cyan group"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} opacity-20 flex items-center justify-center mb-4 group-hover:opacity-30 transition-opacity`}
            >
              <Icon
                className={`w-6 h-6 text-gradient bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${stat.color.split(" ")[1]}, ${stat.color.split(" ")[3]})`,
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</p>
            {stat.change && <p className="text-xs text-emerald-500 font-medium">{stat.change}</p>}
            {stat.subtext && <p className="text-xs text-muted-foreground">{stat.subtext}</p>}
          </div>
        )
      })}
    </div>
  )
}
