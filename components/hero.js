"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import { useState, useEffect } from "react"

export default function Hero() {
  const [clickCount, setClickCount] = useState(23)

  useEffect(() => {
    const savedCount = localStorage.getItem("nsat-click-count")
    if (savedCount) {
      setClickCount(Number.parseInt(savedCount))
    }
  }, [])

  const handleCTAClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    localStorage.setItem("nsat-click-count", newCount.toString())
    window.open("https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=jaat&utm_campaign=btech-computer-science-portal-referral", "_blank", "noopener,noreferrer")
  }

  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            Limited Time Offer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Save <span className="text-green-400">₹300</span> on Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NSAT Exam Fee
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Register for NSAT using our referral link and pay just{" "}
            <span className="text-green-400 font-bold">₹900</span> instead of{" "}
            <span className="line-through text-red-400">₹1200</span>
          </p>

          <div className="flex flex-col items-center gap-6 pt-8">
            <CountdownTimer daysLeft={7} />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                Register Now & Save ₹300
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="text-sm text-gray-400">
                ✓ Instant discount applied
                <br />✓ No hidden charges
              </div>
            </div>

            <div className="text-center">
              <p className="text-green-400 text-sm font-medium">
                ✨ {clickCount} people have already saved money using this link!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">₹300</div>
              <div className="text-gray-400">Instant Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400">Legitimate Offer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
