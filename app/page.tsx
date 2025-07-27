"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Code,
  Database,
  Globe,
  Zap,
  Award,
  Send,
  MessageCircle,
  X,
  Bot,
  User,
  Home,
  UserIcon,
  FolderOpen,
  Phone,
  BookOpen,
  GraduationCap,
  Laptop,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// Static Background Component with Light Animations
const StaticBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base dark background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(120,119,198,0.3), transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(120,119,198,0.4), transparent 55%)",
              "radial-gradient(circle at 20% 20%, rgba(120,119,198,0.3), transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.3), transparent 50%)",
              "radial-gradient(circle at 75% 25%, rgba(6,182,212,0.4), transparent 55%)",
              "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.3), transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute top-0 right-0 w-full h-full"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(160,185,129,0.3), transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(16,185,129,0.4), transparent 55%)",
              "radial-gradient(circle at 20% 80%, rgba(16,185,129,0.3), transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-0 w-full h-full"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 80% 80%, rgba(139,92,246,0.3), transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(139,92,246,0.4), transparent 55%)",
              "radial-gradient(circle at 80% 80%, rgba(139,92,246,0.3), transparent 50%)",
            ],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-full h-full"
        />
      </div>

      {/* Static grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated floating elements */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -15, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -10, 0],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-400/35 rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full"
      />

      {/* Animated border elements */}
      <motion.div
        animate={{
          borderColor: ["rgba(6, 182, 212, 0.2)", "rgba(6, 182, 212, 0.4)", "rgba(6, 182, 212, 0.2)"],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2"
      />
      <motion.div
        animate={{
          borderColor: ["rgba(139, 92, 246, 0.2)", "rgba(139, 92, 246, 0.4)", "rgba(139, 92, 246, 0.2)"],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2"
      />
      <motion.div
        animate={{
          borderColor: ["rgba(16, 185, 129, 0.2)", "rgba(16, 185, 129, 0.4)", "rgba(16, 185, 129, 0.2)"],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2"
      />
      <motion.div
        animate={{
          borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.2)"],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2"
      />
    </div>
  )
}

// Navigation Component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: UserIcon },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Phone },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Scroll spy logic
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pt-4`}
    >
      <div
        className={`${isScrolled ? "backdrop-blur-md bg-black/80" : "backdrop-blur-sm bg-black/60"
          } rounded-full border border-white/10 px-2 py-2 shadow-lg shadow-black/20`}
      >
        <div className="flex items-center justify-center space-x-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${activeSection === item.id
                ? "text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-400/25"
                : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span className="hidden sm:inline text-xs md:text-sm">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

// AI Chatbot Component
const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Anjaneyulu AI✨ Feel free to ask about his projects, experience, or technical expertise!",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const predefinedResponses = {
    skills:
      "Sri Anjaneyulu is proficient in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Python, Git & GitHub, VS Code, and ServiceNow. He's a full-stack developer with expertise in modern web technologies!",
    projects:
      "He has worked on various projects including E-Commerce Platforms, Task Management Apps, Weather Analytics Dashboards, and Social Media Platforms. Each project showcases his full-stack development skills!",
    experience:
      "Sri Anjaneyulu is a passionate Full Stack Developer who loves creating innovative solutions. He has experience in both frontend and backend development, with a focus on modern, scalable applications.",
    contact:
      "You can reach Sri Anjaneyulu through the contact form on this website, or connect with him on LinkedIn, GitHub, or Twitter. He's always open to discussing new opportunities!",
    certifications:
      "He holds certifications from AWS (Certified Developer), Google Cloud (Professional), ServiceNow (Application Developer), and MongoDB University. Always learning and staying updated!",
    about:
      "Sri Anjaneyulu is building the web of tomorrow, one stack at a time! He's passionate about creating user-friendly applications and contributing to open-source projects. When not coding, he enjoys exploring new technologies and sharing knowledge with the developer community.",
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = { type: "user", text: inputMessage }
    setMessages((prev) => [...prev, userMessage])

    // Simple keyword matching for responses
    const lowerInput = inputMessage.toLowerCase()
    let response =
      "That's a great question! Sri Anjaneyulu is a skilled full-stack developer with expertise in modern web technologies. Feel free to explore his portfolio or use the contact form to get in touch!"

    if (lowerInput.includes("skill") || lowerInput.includes("technology") || lowerInput.includes("tech")) {
      response = predefinedResponses.skills
    } else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
      response = predefinedResponses.projects
    } else if (lowerInput.includes("experience") || lowerInput.includes("background")) {
      response = predefinedResponses.experience
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("hire")) {
      response = predefinedResponses.contact
    } else if (lowerInput.includes("certificate") || lowerInput.includes("qualification")) {
      response = predefinedResponses.certifications
    } else if (lowerInput.includes("about") || lowerInput.includes("who")) {
      response = predefinedResponses.about
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      response =
        "Hello! I'm Anjaneyulu AI✨, your personal assistant for learning about Sri Anjaneyulu. What would you like to know?"
    }

    setTimeout(() => {
      const botMessage = { type: "bot", text: response }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputMessage("")
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-44 right-8 z-50 w-80 sm:w-96 h-[480px] backdrop-blur-md bg-black/90 border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">Anjaneyulu AI✨</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-cyan-400/20 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${message.type === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-100 border border-white/20"
                    }`}
                >
                  <div className="flex items-start gap-2">
                    {message.type === "bot" && <Bot className="h-4 w-4 mt-0.5 text-cyan-400 flex-shrink-0" />}
                    {message.type === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [showDemoModal, setShowDemoModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const skills = [
    { name: "HTML", icon: Code, color: "from-orange-400 to-red-500", level: 95 },
    { name: "CSS", icon: Code, color: "from-blue-400 to-blue-600", level: 90 },
    { name: "JavaScript", icon: Code, color: "from-yellow-400 to-yellow-600", level: 88 },
    { name: "React.js", icon: Code, color: "from-cyan-400 to-blue-500", level: 85 },
    { name: "Node.js", icon: Database, color: "from-green-400 to-green-600", level: 82 },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-emerald-600", level: 80 },
    { name: "Python", icon: Code, color: "from-blue-500 to-yellow-500", level: 75 },
    { name: "Git & GitHub", icon: Github, color: "from-gray-400 to-gray-600", level: 90 },
    { name: "VS Code", icon: Code, color: "from-blue-400 to-blue-600", level: 95 },
    { name: "ServiceNow", icon: Globe, color: "from-purple-400 to-purple-600", level: 85 },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "/images/projects/ecommerce-platform.jpg",
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: null,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/images/projects/task-manager.jpg",
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: null, // No live demo available
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather analytics dashboard with interactive charts, forecasting, and location-based weather data visualization.",
      tech: ["Python", "React", "D3.js", "FastAPI"],
      image:
        "/images/projects/weather-dashboard.jpg",
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: null,
    },
    {
      title: "Social Media Platform",
      description:
        "Modern social media platform with real-time messaging, post sharing, and advanced user interaction features.",
      tech: ["React", "Node.js", "Redis", "AWS"],
      image:
        "/images/projects/Social Media Platform.jpg",
      githubUrl: "https://github.com/username/social-platform",
      liveUrl: null, // No live demo available
    },
    {
      title: "Portfolio Website Builder",
      description:
        "Drag-and-drop portfolio website builder with customizable templates, responsive design, and easy deployment options.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image:
        "/images/projects/Portfolio Website Builder.jpg",
      githubUrl: "https://github.com/username/portfolio-builder",
      liveUrl: null,
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chat application powered by AI with natural language processing, context awareness, and multi-language support.",
      tech: ["React", "Python", "OpenAI API", "FastAPI"],
      image:
        "/images/projects/ai-chat-app.jpg",
      githubUrl: "https://github.com/username/ai-chat-app",
      liveUrl: null, // No live demo available
    },
  ]
  const certifications = [
    {
      title: "Introduction to Data Science",
      platform: "Infosys Springboard",
      detail: "Comprehensive introduction to data science fundamentals and analytics",
      date: "June 5, 2025",
      image: "/images/certificates/data-science-cert.jpg",
    },
    {
      title: "Certified System Administrator",
      platform: "ServiceNow",
      detail: "Professional certification for ServiceNow platform administration (Cert No. 27011083)",
      date: "April 13, 2025",
      image: "/images/certificates/servicenow-csa-cert.jpg",
    },
    {
      title: "Certified Application Developer",
      platform: "ServiceNow",
      detail: "Advanced certification for ServiceNow application development (Cert No. 27319603)",
      date: "July 15, 2025",
      image: "/images/certificates/servicenow-cad-cert.jpg",
    },
    {
      title: "Google Cloud Computing Certificate",
      platform: "Google Cloud",
      detail: "Foundational knowledge of Google Cloud Platform services and solutions",
      date: "2024",
      image: "/images/certificates/google-cloud-cert.jpg",
    },

  ]

  // Demo Modal Component
  const DemoModal = () =>
    showDemoModal && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={() => setShowDemoModal(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-cyan-400/30 rounded-2xl p-8 max-w-md mx-4 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
            <ExternalLink className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Live Demo Under Progress</h3>
          <p className="text-gray-300 mb-6">
            This project's live demo is currently being prepared. Please check back as soon as possible🙏
          </p>
          <Button
            onClick={() => setShowDemoModal(false)}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
          >
            Got it!
          </Button>
        </motion.div>
      </motion.div>
    )

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Static Background */}
      <StaticBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Sripalasetti Sri Anjaneyulu
            </h1>
            <div className="mb-8 space-y-2">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Building the web of tomorrow, one stack at a time.
              </p>
              <p className="text-lg md:text-xl text-cyan-400 font-medium">
                Full Stack Developer - MERN 👨‍💻 || Certified System Administrator || Certified Application Developer -
                ServiceNow
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/SriAnjaneyulu.pdf"
                link.download = "SriAnjaneyulu.pdf"
                link.click()
              }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full backdrop-blur-sm bg-transparent"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ChevronDown className="h-8 w-8 text-cyan-400 hover:text-cyan-300 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with expertise in modern web technologies. My journey in
                  software development began with curiosity about how things work behind the scenes, and it has evolved
                  into a deep love for crafting innovative solutions that bridge the gap between design and
                  functionality.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, I specialize in building scalable,
                  user-centric applications using cutting-edge technologies like React.js, Node.js, MongoDB, and Python.
                  I believe in writing clean, efficient code that provides intuitive user experiences.
                </p>
                <p>
                  Beyond technical skills, I'm a continuous learner who stays ahead of industry trends. I actively
                  contribute to open-source projects and share knowledge with the developer community. When I'm not
                  coding, you'll find me exploring new frameworks and working on personal projects that push the
                  boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">Technologies and tools I work with to bring ideas to life</p>
          </motion.div>
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">Languages</h3>
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }} // only go halfway because we're duplicating items
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-6 w-max"
            >

              {[
                ...[
                  { name: "HTML5", icon: "🧡", color: "from-orange-100 to-red-100" },
                  { name: "CSS3", icon: "💙", color: "from-blue-100 to-blue-200" },
                  { name: "JavaScript", icon: "💛", color: "from-yellow-100 to-yellow-200" },
                  { name: "Typescript", icon: "⚕️", color: "from-orange-100 to-red-100" },
                  { name: "SQL", icon: "🛢️", color: "from-green-100 to-blue-100" },
                  { name: "Python", icon: "🐍", color: "from-green-100 to-blue-100" },
                ],
                ...[
                  { name: "HTML5", icon: "🧡", color: "from-orange-100 to-red-100" },
                  { name: "CSS3", icon: "💙", color: "from-blue-100 to-blue-200" },
                  { name: "JavaScript", icon: "💛", color: "from-yellow-100 to-yellow-200" },
                  { name: "Typescript", icon: "⚕️", color: "from-orange-100 to-red-100" },
                  { name: "SQL", icon: "🛢️", color: "from-green-100 to-blue-100" },
                  { name: "Python", icon: "🐍", color: "from-green-100 to-blue-100" },
                ]
              ].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-36 w-52">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                        {skill.name}
                      </h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Frameworks & Libraries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">
            Frameworks & Libraries
          </h3>
          <div className="relative overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {[
                ...[
                  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
                  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
                  { name: "Express", icon: "🚀", color: "from-gray-600 to-gray-700" },
                  { name: "Next.js", icon: "⚡", color: "from-green-500 to-yellow-600" },
                  { name: "Redux", icon: "🔥", color: "from-blue-100 to-blue-200" },
                  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
                ],
                ...[
                  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
                  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
                  { name: "Express", icon: "🚀", color: "from-gray-600 to-gray-700" },
                  { name: "Next.js", icon: "⚡", color: "from-green-500 to-yellow-600" },
                  { name: "Redux", icon: "🔥", color: "from-blue-100 to-blue-200" },
                  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
                ]
              ].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-36 w-52">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                        {skill.name}
                      </h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Tools & Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">
            Tools & Platforms
          </h3>

          <div className="relative overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {Array(2)
                .fill([
                  { name: "ServiceNow", icon: "🔧", color: "from-purple-500 to-purple-600" },
                  { name: "Git & GitHub", icon: "🐙", color: "from-gray-700 to-gray-800" },
                  { name: "VS Code", icon: "💻", color: "from-blue-500 to-blue-600" },
                  { name: "Vercel", icon: "🌐", color: "from-blue-100 to-blue-200" },
                  { name: "NPM & PNPM", icon: "📦", color: "from-yellow-100 to-blue-200" },
                ])
                .flat()
                .map((tool, index) => (
                  <motion.div
                    key={`${tool.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-35 w-52">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-2xl">{tool.icon}</span>
                        </div>
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                          {tool.name}
                        </h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-2 border-white/20 hover:border-purple-400/60 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-purple-400 font-medium">{cert.platform}</p>
                      {cert.date && <p className="text-gray-400 text-sm">{cert.date}</p>}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{cert.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-2 border-white/20 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-0 text-xs"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => {
                          if (project.liveUrl) {
                            window.open(project.liveUrl, "_blank")
                          } else {
                            setShowDemoModal(true)
                          }
                        }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 text-xs"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="relative z-10 py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-xl text-gray-300">Let's build something amazing together</p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="backdrop-blur-md bg-white/5 border-white/10">
          <CardContent className="p-8">
            <form
              action="https://getform.io/f/brondlka"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="text-white mb-1 block">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2 rounded focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Mail ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Mail ID"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2 rounded focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Message"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2 rounded focus:border-cyan-400"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, color: "from-red-500 to-pink-500", href: "mailto:srianjaneyulu0731@gmail.com" },
              { icon: Linkedin, color: "from-blue-600 to-blue-700", href: "https://www.linkedin.com/in/srianjaneyulu0731/" },
              { icon: Github, color: "from-gray-700 to-gray-800", href: "https://github.com/anji0731" },
              { icon: Twitter, color: "from-blue-400 to-blue-500", href: "https://x.com/_OG_18?s=09" },
              { icon: MessageSquare, color: "from-green-500 to-teal-500", href: "https://wa.me/919515416101" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300`}
              >
                <social.icon className="h-6 w-6 text-white" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
            <h4 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h4>
            <p className="text-gray-300">
              I'm always excited to work on new projects and bring innovative ideas to life.
              Let's discuss how we can create something extraordinary together.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>  

      {/* Footer */}
      <footer className="relative z-10 py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Sripalasetti Sri Anjaneyulu
              </h3>
              <p className="text-gray-400 mb-6">
                Building the web of tomorrow, one stack at a time. Full Stack Developer passionate about creating
                innovative digital solutions.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/srianjaneyulu0731/", color: "hover:text-blue-400" },
                  { icon: Github, href: "https://github.com/anji0731", color: "hover:text-gray-300" },
                  { icon: Twitter, href: "https://x.com/_OG_18?s=09", color: "hover:text-blue-400" },
                  { icon: MessageSquare, href: "https://wa.me/919515416101", color: "hover:text-green-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`text-gray-500 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="ml-20">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & Learning */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Education & Learning</h4>
              <ul className="space-y-2">
                {[
                  { name: "Computer Science Student", icon: GraduationCap },
                  { name: "Self-taught Developer", icon: Laptop },
                  { name: "Online Course Enthusiast", icon: BookOpen },
                  { name: "Continuous Learner", icon: Code },
                ].map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-cyan-400" />
                    <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-400 mb-2">© 2025 Sripalasetti Sri Anjaneyulu. All rights reserved.</p>
            <p className="text-gray-400">Made with TypeScript⚕️,React✡️,Next.js💙</p>
          </motion.div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Demo Modal */}
      <DemoModal />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </motion.button>
    </div>
  )
}
