"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")

          // Add stagger effect to children
          const children = entry.target.querySelectorAll(".stagger-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-fadeInUp")
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all sections with animation classes
    const sections = document.querySelectorAll(".fade-in-section, .slide-in-left, .slide-in-right, .scale-in-section")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return null
}
