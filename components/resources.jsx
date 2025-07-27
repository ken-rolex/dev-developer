import { Button } from "@/components/ui/button"
import { Download, Play, BookOpen, Video } from "lucide-react"

export default function Resources() {
  const resources = {
    pdfs: [
      {
        title: "JavaScript ES6+ Cheat Sheet",
        description: "Complete reference for modern JavaScript features and syntax",
        downloads: 1240,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "React Hooks Quick Reference",
        description: "Essential hooks with examples and best practices",
        downloads: 890,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Git Commands Mastersheet",
        description: "Every Git command you'll ever need in one place",
        downloads: 2100,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Python Data Structures Guide",
        description: "Comprehensive guide to Python lists, dictionaries, sets, and tuples",
        downloads: 1560,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "CSS Flexbox & Grid Cheat Sheet",
        description: "Visual guide to modern CSS layout techniques",
        downloads: 1890,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Node.js API Development Guide",
        description: "Best practices for building RESTful APIs with Node.js",
        downloads: 1340,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Database Design Fundamentals",
        description: "Essential concepts for designing efficient databases",
        downloads: 980,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Web Security Checklist",
        description: "Complete security checklist for web applications",
        downloads: 1120,
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Docker Commands Reference",
        description: "Essential Docker commands for containerization",
        downloads: 1450,
        icon: <BookOpen className="h-6 w-6" />,
      },
    ],
    recordings: [
      {
        title: "Full-Stack Development Bootcamp",
        description: "Complete 6-hour workshop on building modern web applications",
        duration: "6h 23m",
        views: 3400,
        icon: <Video className="h-6 w-6" />,
      },
      {
        title: "Machine Learning for Beginners",
        description: "Introduction to ML concepts with hands-on Python examples",
        duration: "4h 15m",
        views: 2100,
        icon: <Video className="h-6 w-6" />,
      },
      {
        title: "Mobile App Development with React Native",
        description: "Build your first mobile app from scratch",
        duration: "5h 45m",
        views: 1800,
        icon: <Video className="h-6 w-6" />,
      },
      {
        title: "Advanced JavaScript Concepts",
        description: "Deep dive into closures, promises, and async programming",
        duration: "3h 30m",
        views: 2800,
        icon: <Video className="h-6 w-6" />,
      },
      {
        title: "DevOps Fundamentals Workshop",
        description: "CI/CD, Docker, and cloud deployment strategies",
        duration: "4h 50m",
        views: 1950,
        icon: <Video className="h-6 w-6" />,
      },
      {
        title: "UI/UX Design for Developers",
        description: "Design principles and tools for better user interfaces",
        duration: "2h 45m",
        views: 2300,
        icon: <Video className="h-6 w-6" />,
      },
    ],
  }

  return (
    <section id="resources" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-rotateInUpLeft">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Access our comprehensive collection of cheat sheets, guides, and workshop recordings. Everything you need to
            accelerate your learning journey.
          </p>
        </div>

        {/* PDFs & Cheat Sheets */}
        <div className="mb-16 slide-in-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center animate-bounceInLeft">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3 animate-float" />
            PDFs & Cheat Sheets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.pdfs.map((pdf, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 card-hover stagger-item animate-slideInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 animate-bounceIn animation-delay-200">{pdf.icon}</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 animate-fadeInRight animation-delay-300">
                    {pdf.downloads} downloads
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 animate-fadeInLeft animation-delay-400">
                  {pdf.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 animate-fadeInUp animation-delay-500">
                  {pdf.description}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-animate animate-scaleIn animation-delay-600">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl btn-animate animate-bounceIn animation-delay-1000"
            >
              View More PDFs & Cheat Sheets
            </Button>
          </div>
        </div>

        {/* Past Recordings */}
        <div className="mb-12 slide-in-right">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center animate-bounceInRight">
            <Video className="h-8 w-8 text-green-600 mr-3 animate-float animation-delay-200" />
            Past Workshop Recordings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.recordings.map((recording, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 card-hover stagger-item animate-slideInDown`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 rounded-lg p-3 animate-bounceIn animation-delay-200">
                    {recording.icon}
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                    <div className="animate-fadeInRight animation-delay-300">{recording.duration}</div>
                    <div className="animate-fadeInRight animation-delay-400">{recording.views} views</div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 animate-fadeInLeft animation-delay-500">
                  {recording.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 animate-fadeInUp animation-delay-600">
                  {recording.description}
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-animate animate-scaleIn animation-delay-700">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Recording
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl btn-animate animate-bounceIn animation-delay-1200"
            >
              View More Workshop Recordings
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-sm border border-gray-200 dark:border-gray-700 scale-in-section">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-bounceInDown">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
            We're constantly adding new resources based on community needs. Let us know what topics you'd like us to
            cover next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate animate-slideInLeft animation-delay-500">
              Request Resource
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent btn-animate animate-slideInRight animation-delay-700"
            >
              Contribute Content
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
