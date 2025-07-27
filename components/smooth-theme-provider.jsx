"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

export function SmoothThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add smooth transition class to body on mount
    document.body.classList.add("theme-transition-slow")

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          // Add transition effect when theme changes
          document.body.classList.add("theme-switching")
          setTimeout(() => {
            document.body.classList.remove("theme-switching")
          }, 500)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted) {
    return <div className="opacity-0">{children}</div>
  }

  return (
    <NextThemesProvider {...props}>
      <div className="opacity-100 transition-opacity duration-300">{children}</div>
    </NextThemesProvider>
  )
}
