import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import MobileBottomNavbar from "@/components/mobile-bottom-navbar" // Added import
import { ScrollAnimations } from "@/components/scroll-animations" // Added import
import Hero from "@/components/hero" // Added import
import About from "@/components/about" // Added import
import Events from "@/components/events" // Added import
import Projects from "@/components/projects" // Added import
import Team from "@/components/team" // Added import
import Testimonials from "@/components/testimonials" // Added import
import Resources from "@/components/resources" // Added import
import JoinUs from "@/components/join-us" // Added import
import Contact from "@/components/contact" // Added import

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "DevElite - Elite Developer Community",
  description:
    "Join the most exclusive network of high-achieving student developers. Access world-class mentorship, cutting-edge projects, and direct pathways to top-tier tech companies.",
  keywords: "elite developers, tech community, programming, software engineering, career acceleration, mentorship",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Immediate theme application - no flash */
            :root {
              --bg: 255 255 255;
              --fg: 15 23 42;
            }
            
            @media (prefers-color-scheme: dark) {
              :root {
                --bg: 15 23 42;
                --fg: 248 250 252;
              }
            }
            
            html[data-theme="dark"] {
              --bg: 15 23 42;
              --fg: 248 250 252;
            }
            
            html[data-theme="light"] {
              --bg: 255 255 255;
              --fg: 15 23 42;
            }
            
            html, body {
              background-color: rgb(var(--bg)) !important;
              color: rgb(var(--fg)) !important;
              transition: none !important;
            }
            
            /* Kill all yellow colors immediately */
            * {
              --yellow-50: 59 130 246 !important;
              --yellow-100: 59 130 246 !important;
              --yellow-200: 59 130 246 !important;
              --yellow-300: 59 130 246 !important;
              --yellow-400: 59 130 246 !important;
              --yellow-500: 59 130 246 !important;
              --yellow-600: 59 130 246 !important;
            }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && systemDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className}`} style={{ transition: "none" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen">
            <Navbar />
            <main className="min-h-screen page-enter pb-16 md:pb-0">
              {" "}
              {/* Adjusted padding here */}
              <ScrollAnimations />
              <Hero />
              <div className="fade-in-section">
                <About />
              </div>
              <div className="fade-in-section">
                <Events />
              </div>
              <div className="fade-in-section">
                <Projects />
              </div>
              <div className="fade-in-section">
                <Team />
              </div>
              <div className="fade-in-section">
                <Testimonials />
              </div>
              <div className="fade-in-section">
                <Resources />
              </div>
              <div className="fade-in-section">
                <JoinUs />
              </div>
              <div className="fade-in-section">
                <Contact />
              </div>
            </main>
            <Footer />
            <MobileBottomNavbar /> {/* Added MobileBottomNavbar here */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
