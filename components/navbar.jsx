"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const communityRef = useRef(null)
  const resourcesRef = useRef(null)
  const mobileMenuRef = useRef(null) // Ref for the mobile drawer

  const toggleCommunityDropdown = () => {
    setCommunityOpen(!communityOpen)
  }

  const toggleResourcesDropdown = () => {
    setResourcesOpen(!resourcesOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close desktop dropdowns
      if (communityRef.current && !communityRef.current.contains(event.target)) {
        setCommunityOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setResourcesOpen(false)
      }
      // Close mobile drawer if clicked outside, but not if the menu button was clicked
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isOpen) {
        // Check if the click was on the menu button itself
        const menuButton = document.querySelector('.md\\:hidden button[onClick*="setIsOpen"]')
        if (menuButton && menuButton.contains(event.target)) {
          return // Do nothing if the click was on the menu button
        }
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen]) // Depend on isOpen to re-attach listener when drawer opens/closes

  const handleLinkClick = (e, href) => {
    e.preventDefault() // Prevent default Next.js Link behavior
    setIsOpen(false) // Close mobile menu
    setCommunityOpen(false) // Close desktop dropdowns
    setResourcesOpen(false) // Close desktop dropdowns

    const targetId = href.startsWith("#") ? href.substring(1) : "hero" // Default to 'hero' for '/'
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    // Update URL hash without page reload for consistency
    window.history.pushState(null, "", href)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 animate-slideDown"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo with Animation */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 animate-bounceIn"
              scroll={false} // Disable Next.js default scroll
            >
              DevCommunity
            </Link>
          </div>

          {/* Desktop Menu with Enhanced Animations */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link
                href="/"
                onClick={(e) => handleLinkClick(e, "/")}
                className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                scroll={false}
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                scroll={false}
              >
                About
              </Link>
              <Link
                href="#events"
                onClick={(e) => handleLinkClick(e, "#events")}
                className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                scroll={false}
              >
                Events
              </Link>

              {/* Community Dropdown with Animation */}
              <div className="relative" ref={communityRef}>
                <button
                  onClick={toggleCommunityDropdown}
                  className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
                >
                  Community{" "}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-all duration-300 ${
                      communityOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {communityOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-fadeInUp overflow-hidden z-50">
                    <Link
                      href="#projects"
                      onClick={(e) => handleLinkClick(e, "#projects")}
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 stagger-item"
                      scroll={false}
                    >
                      🚀 Projects
                    </Link>
                    <Link
                      href="#team"
                      onClick={(e) => handleLinkClick(e, "#team")}
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 stagger-item"
                      scroll={false}
                    >
                      👥 Team
                    </Link>
                    <Link
                      href="#testimonials"
                      onClick={(e) => handleLinkClick(e, "#testimonials")}
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 stagger-item"
                      scroll={false}
                    >
                      ⭐ Testimonials
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown with Animation */}
              <div className="relative" ref={resourcesRef}>
                <button
                  onClick={toggleResourcesDropdown}
                  className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
                >
                  Resources{" "}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-all duration-300 ${
                      resourcesOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-fadeInUp overflow-hidden z-50">
                    <Link
                      href="#resources"
                      onClick={(e) => handleLinkClick(e, "#resources")}
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 stagger-item"
                      scroll={false}
                    >
                      📚 PDFs & Cheat Sheets
                    </Link>
                    <Link
                      href="#resources"
                      onClick={(e) => handleLinkClick(e, "#resources")}
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 stagger-item"
                      scroll={false}
                    >
                      🛠️ Tools & Links
                    </Link>
                    <Link
                      href="#resources"
                      onClick={(e) => handleLinkClick(e, "#resources")}
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 stagger-item"
                      scroll={false}
                    >
                      🎥 Past Recordings
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="#join"
                onClick={(e) => handleLinkClick(e, "#join")}
                className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                scroll={false}
              >
                Join Us
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="nav-item text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                scroll={false}
              >
                Contact
              </Link>

              <div className="ml-4 animate-scaleIn animation-delay-500">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button with Animation */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="animate-scaleIn animation-delay-300">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2 transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 animate-scaleIn animation-delay-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer with Enhanced Animation */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2 transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-4 space-y-2 mobile-padding">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              🏠 Home
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              ℹ️ About
            </Link>
            <Link
              href="#events"
              onClick={(e) => handleLinkClick(e, "#events")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              📅 Events
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleLinkClick(e, "#projects")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              🚀 Projects
            </Link>
            <Link
              href="#team"
              onClick={(e) => handleLinkClick(e, "#team")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              👥 Team
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => handleLinkClick(e, "#testimonials")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              ⭐ Testimonials
            </Link>
            <Link
              href="#resources"
              onClick={(e) => handleLinkClick(e, "#resources")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              📚 Resources
            </Link>
            <Link
              href="#join"
              onClick={(e) => handleLinkClick(e, "#join")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              🤝 Join Us
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="block px-3 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 stagger-item min-h-[48px] flex items-center"
              scroll={false}
            >
              📞 Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
