import Link from "next/link"
import { Twitter, Instagram, Github, MessageCircle, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 animate-fadeInUp">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 block hover:scale-105 transition-transform duration-200"
            >
              DevCommunity
            </Link>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md">
              Empowering student developers to code, connect, and create the future of technology together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animation-delay-200">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#resources"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="animate-fadeInUp animation-delay-400">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#join"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center animate-fadeInUp animation-delay-600">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DevCommunity. Made with{" "}
            <Heart className="h-4 w-4 inline text-red-500 animate-pulse" /> by students, for students.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
