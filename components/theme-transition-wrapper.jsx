"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeTransitionWrapper({ children }) {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevTheme, setPrevTheme] = useState(theme)

  useEffect(() => {
    if (theme !== prevTheme && prevTheme !== undefined) {
      setIsTransitioning(true)

      // Add transition effect
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 500)

      setPrevTheme(theme)

      return () => clearTimeout(timer)
    }
  }, [theme, prevTheme])

  return <div className={`transition-all duration-500 ${isTransitioning ? "theme-transition" : ""}`}>{children}</div>
}
