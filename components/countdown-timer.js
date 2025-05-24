"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer({ targetDate = "2025-05-30T23:59:59" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Parse the target date
    const end = new Date(targetDate)

    // Set initial countdown
    const updateCountdown = () => {
      const now = new Date()
      let diff = Math.max(0, Math.floor((end - now) / 1000))
      const days = Math.floor(diff / (24 * 60 * 60))
      const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60))
      const minutes = Math.floor((diff % (60 * 60)) / 60)
      const seconds = diff % 60
      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const timer = setInterval(() => {
      updateCountdown()
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-mono font-bold text-white bg-gray-800/50 rounded-lg px-6 py-4 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-orange-400">--</div>
          <div className="text-xs text-gray-400 mt-1">DAYS</div>
        </div>
        <div className="text-orange-400">:</div>
        <div className="text-center">
          <div className="text-orange-400">--</div>
          <div className="text-xs text-gray-400 mt-1">HRS</div>
        </div>
        <div className="text-orange-400">:</div>
        <div className="text-center">
          <div className="text-orange-400">--</div>
          <div className="text-xs text-gray-400 mt-1">MIN</div>
        </div>
        <div className="text-orange-400">:</div>
        <div className="text-center">
          <div className="text-orange-400">--</div>
          <div className="text-xs text-gray-400 mt-1">SEC</div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="flex  justify-center gap-2 text-2xl sm:text-3xl font-mono font-bold text-white bg-gray-800/50 rounded-lg px-6 py-4 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-orange-400">{String(timeLeft.days).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400 mt-1">DAYS</div>
        </div>
        <div className="text-orange-400">:</div>
        <div className="text-center">
          <div className="text-orange-400">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400 mt-1">HRS</div>
        </div>
        <div className="text-orange-400">:</div>
        <div className="text-center">
          <div className="text-orange-400">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400 mt-1">MIN</div>
        </div>
        <div className="text-orange-400">:</div>
        <div className="text-center">
          <div className="text-orange-400">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400 mt-1">SEC</div>
        </div>
      </div>
      <p className="text-orange-400 font-medium mt-3 text-sm sm:text-base">
        ⏰ Hurry! Next NSAT registration ends soon.
      </p>
    </div>
  )
}
