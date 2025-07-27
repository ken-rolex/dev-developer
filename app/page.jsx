import Hero from "@/components/hero"
import About from "@/components/about"
import Events from "@/components/events"
import Projects from "@/components/projects"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Resources from "@/components/resources"
import JoinUs from "@/components/join-us"
import Contact from "@/components/contact"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function HomePage() {
  return (
    <main className="min-h-screen page-enter">
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
  )
}
