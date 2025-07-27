import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden min-h-screen flex items-center md:min-h-0 md:py-20"
    >
      {/* Background for Desktop */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-black dark:via-slate-900 dark:to-blue-900 hidden md:block">
        {/* Simple DNA Pattern - No Animation */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dna-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M50,50 Q100,25 150,50 Q100,75 50,50 M50,150 Q100,125 150,150 Q100,175 50,150"
                  stroke="url(#dna-gradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="50" cy="50" r="3" fill="url(#dna-gradient)" />
                <circle cx="150" cy="50" r="3" fill="url(#dna-gradient)" />
                <circle cx="50" cy="150" r="3" fill="url(#dna-gradient)" />
                <circle cx="150" cy="150" r="3" fill="url(#dna-gradient)" />
              </pattern>
              <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-pattern)" />
          </svg>
        </div>

        {/* Simple Circuit Board Pattern - No Animation */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M20,20 L80,20 L80,80 L20,80 Z M50,20 L50,80 M20,50 L80,50"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
                <circle cx="20" cy="20" r="2" fill="#8b5cf6" opacity="0.5" />
                <circle cx="80" cy="20" r="2" fill="#06b6d4" opacity="0.5" />
                <circle cx="20" cy="80" r="2" fill="#3b82f6" opacity="0.5" />
                <circle cx="80" cy="80" r="2" fill="#8b5cf6" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        {/* Static Network Connections - No Animation */}
        <div className="absolute inset-0 opacity-10 sm:opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M100,100 Q300,200 500,150 T900,200 M200,300 Q400,250 600,300 T1000,250 M150,500 Q350,400 550,500 T850,450"
              stroke="url(#connection-gradient)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="100" cy="100" r="4" fill="#3b82f6" />
            <circle cx="500" cy="150" r="4" fill="#8b5cf6" />
            <circle cx="900" cy="200" r="4" fill="#06b6d4" />
            <circle cx="200" cy="300" r="4" fill="#3b82f6" />
            <circle cx="600" cy="300" r="4" fill="#8b5cf6" />
            <circle cx="1000" cy="250" r="4" fill="#06b6d4" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Background for Mobile (Simpler) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-black dark:via-slate-900 dark:to-blue-900 md:hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="mobile-dna-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M25,25 Q50,12.5 75,25 Q50,37.5 25,25 M25,75 Q50,62.5 75,75 Q50,87.5 25,75"
                  stroke="url(#mobile-dna-gradient)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="25" cy="25" r="2" fill="url(#mobile-dna-gradient)" />
                <circle cx="75" cy="25" r="2" fill="url(#mobile-dna-gradient)" />
                <circle cx="25" cy="75" r="2" fill="url(#mobile-dna-gradient)" />
                <circle cx="75" cy="75" r="2" fill="url(#mobile-dna-gradient)" />
              </pattern>
              <linearGradient id="mobile-dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#mobile-dna-pattern)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight animate-fadeInUp leading-tight">
            Code. Connect.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow block sm:inline">
              Create.
            </span>
          </h1>

          {/* Animated Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200 px-4 sm:px-0">
            Join the most vibrant student developer community where innovation meets collaboration. Build projects,
            learn together, and shape the future of tech.
          </p>

          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 animate-fadeInUp animation-delay-400 px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 btn-animate transition-all duration-300 border-0 min-h-[48px] w-full sm:w-auto"
            >
              <Link href="#join" className="flex items-center justify-center gap-3 w-full">
                Join Now <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400/80 text-cyan-100 hover:text-white hover:bg-cyan-400/20 backdrop-blur-lg px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-2xl bg-white/5 btn-animate transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 min-h-[48px] w-full sm:w-auto"
            >
              <Link href="#events" className="w-full text-center">
                Explore Events
              </Link>
            </Button>
          </div>

          {/* Animated Tagline */}
          <p className="text-base sm:text-lg text-cyan-200 mb-12 sm:mb-16 animate-fadeInUp animation-delay-600 animate-pulse px-4 sm:px-0">
            "Where student developers turn ideas into reality" ✨
          </p>

          {/* Animated Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col items-center p-6 sm:p-8 bg-white/10 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-400/30 hover:border-blue-400/60 hover:bg-white/20 card-hover transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 animate-scaleIn animation-delay-800 stagger-item">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 border border-blue-400/40 shadow-lg animate-float">
                <Code className="h-8 w-8 sm:h-10 sm:w-10 text-blue-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Learn & Build</h3>
              <p className="text-blue-100 text-center leading-relaxed text-sm sm:text-base">
                Master new technologies through hands-on projects and peer collaboration
              </p>
            </div>

            <div className="flex flex-col items-center p-6 sm:p-8 bg-white/10 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-purple-400/30 hover:border-purple-400/60 hover:bg-white/20 card-hover transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 animate-scaleIn animation-delay-1000 stagger-item">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 border border-purple-400/40 shadow-lg animate-float animation-delay-200">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-purple-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Connect & Network</h3>
              <p className="text-blue-100 text-center leading-relaxed text-sm sm:text-base">
                Build lasting relationships with like-minded developers and industry mentors
              </p>
            </div>

            <div className="flex flex-col items-center p-6 sm:p-8 bg-white/10 dark:bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-emerald-400/30 hover:border-emerald-400/60 hover:bg-white/20 card-hover transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 animate-scaleIn animation-delay-1200 stagger-item sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 border border-emerald-400/40 shadow-lg animate-float animation-delay-400">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Innovate & Impact</h3>
              <p className="text-blue-100 text-center leading-relaxed text-sm sm:text-base">
                Turn your creative ideas into real-world solutions that make a difference
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 bg-gradient-to-t from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent" />
    </section>
  )
}
