"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const isScrollingRef = React.useRef(false)
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // Don't update active tab if user just clicked a link
      if (isScrollingRef.current) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = items.map((item) => {
            const element = document.querySelector(item.url)
            if (element) {
              const rect = element.getBoundingClientRect()
              return {
                name: item.name,
                top: rect.top,
                bottom: rect.bottom,
              }
            }
            return null
          }).filter(Boolean)

          // Find the section that's most visible in the viewport
          const viewportMiddle = window.innerHeight / 2
          let closestSection = sections[0]
          let closestDistance = Math.abs(sections[0]?.top || 0)

          sections.forEach((section) => {
            if (section) {
              const distance = Math.abs(section.top - viewportMiddle)
              if (distance < closestDistance && section.top < viewportMiddle) {
                closestDistance = distance
                closestSection = section
              }
            }
          })

          if (closestSection) {
            setActiveTab(closestSection.name)
          }

          ticking = false
        })
        ticking = true
      }
    }

    handleScroll() // Check initial position
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [items])

  const handleClick = (itemName: string) => {
    // Immediately set active tab
    setActiveTab(itemName)
    
    // Prevent scroll listener from updating during smooth scroll
    isScrollingRef.current = true
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    // Re-enable scroll detection after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
    }, 1000)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => handleClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
