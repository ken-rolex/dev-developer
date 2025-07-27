"use client"

import Link from "next/link"
import { Home, Calendar, Code, Users, MessageCircle } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function MobileBottomNavbar() {
  const [activeSection, setActiveSection] = useState("hero") // Default to home/hero section
  const observerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport ko root banaya
      rootMargin: "-50% 0px -50% 0px", // Jab section ka 50% view mein ho, tab trigger kare
      threshold: 0, // RootMargin ke saath threshold ki zaroorat nahi
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // '#' hata kar ID set karein
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Saare sections ko observe karein jo navigation mein hain
    const sections = document.querySelectorAll(
      "#hero, #about, #events, #projects, #team, #testimonials, #resources, #join, #contact",
    )
    sections.forEach((section) => observer.observe(section))

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/", sectionId: "hero", icon: Home },
    { name: "Events", href: "#events", sectionId: "events", icon: Calendar },
    { name: "Projects", href: "#projects", sectionId: "projects", icon: Code },
    { name: "Team", href: "#team", sectionId: "team", icon: Users },
    { name: "Contact", href: "#contact", sectionId: "contact", icon: MessageCircle },
  ]

  const handleNavLinkClick = (e, href, sectionId) => {
    e.preventDefault()
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    // URL hash ko update karein bina page reload ke consistency ke liye
    if (href !== "/") {
      window.history.pushState(null, "", href)
    } else {
      window.history.pushState(null, "", "/")
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg md:hidden transition-all duration-300 animate-slideInUp">
      <nav className="flex justify-around h-16 items-center px-2">
        {navItems.map((item) => {
          const isActive = item.sectionId === activeSection

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavLinkClick(e, item.href, item.sectionId)}
              className={`flex flex-col items-center justify-center text-xs font-medium py-1 px-2 rounded-lg transition-colors duration-200 min-h-[48px] w-full ${
                isActive
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              scroll={false} // Next.js ke default scroll behavior ko disable karein
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
