"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [clickCount, setClickCount] = useState(23)

  useEffect(() => {
    // Load click count from localStorage
    const savedCount = localStorage.getItem("nsat-click-count")
    if (savedCount) {
      setClickCount(Number.parseInt(savedCount))
    }
  }, [])

  const handleCTAClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    localStorage.setItem("nsat-click-count", newCount.toString())
    // Open the referral link
    window.open("https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=jaat&utm_campaign=btech-computer-science-portal-referral", "_blank",)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "About NSAT", id: "about-nsat" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Why NST?", id: "why-nst" },
    { label: "FAQs", id: "faqs" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection("hero")}>
              <h1 className="text-xl font-bold text-white">
                NSAT <span className="text-green-400">Discount</span>
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Register & Save ₹300
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 mt-4"
              >
                Register & Save ₹300
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
