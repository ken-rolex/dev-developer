"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Enable transitions after everything is loaded
    const timer = setTimeout(() => {
      document.documentElement.classList.add("transitions-enabled")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
