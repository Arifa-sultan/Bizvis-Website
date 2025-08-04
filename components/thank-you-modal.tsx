"use client"

import { X, Check } from "lucide-react"
import { useState, useEffect } from "react"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  variant?: 1 | 2 | 3
}

export default function ThankYouModal({ isOpen, onClose, variant = 1 }: ThankYouModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  const getBackgroundClass = () => {
    switch (variant) {
      case 1:
        return "bg-gradient-to-br from-[#1a237e] via-[#3949ab] to-[#5c6bc0]"
      case 2:
        return "bg-gradient-to-br from-[#1a237e] via-[#3949ab] to-[#5c6bc0]"
      case 3:
        return "bg-gradient-to-br from-[#e1bee7] via-[#ce93d8] to-[#ba68c8]"
      default:
        return "bg-gradient-to-br from-[#1a237e] via-[#3949ab] to-[#5c6bc0]"
    }
  }

  const getMessage = () => {
    switch (variant) {
      case 1:
        return "Thank you for joining Bizvis and the future of customer and business connections!"
      case 2:
        return "Thank you for your interest in Bizvis and the future of customer and business connections!"
      case 3:
        return "Thank you for joining Bizvis and the future of customer and business connections!"
      default:
        return "Thank you for joining Bizvis and the future of customer and business connections!"
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className={`relative w-full max-w-md mx-auto rounded-3xl p-8 text-center ${getBackgroundClass()}`}>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
          <X size={24} />
        </button>

        {/* Decorative Elements */}
        <div className="relative mb-8">
          {/* Main Check Circle */}
          <div className="w-20 h-20 mx-auto bg-cyan-400 rounded-full flex items-center justify-center mb-4 relative">
            <Check size={32} className="text-white" />

            {/* Decorative circles and shapes */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute -top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-300 rounded-full"></div>
            <div className="absolute -bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"></div>

            {/* Decorative lines */}
            <div className="absolute -top-6 -left-6 w-8 h-1 bg-orange-400 rounded-full transform rotate-45"></div>
            <div className="absolute -bottom-6 -right-6 w-6 h-1 bg-purple-400 rounded-full transform -rotate-45"></div>
            <div className="absolute -top-8 right-8 w-4 h-1 bg-yellow-400 rounded-full transform rotate-12"></div>

            {/* Small circles */}
            <div className="absolute top-8 -left-8 w-1 h-1 bg-cyan-300 rounded-full"></div>
            <div className="absolute top-12 right-12 w-1 h-1 bg-pink-400 rounded-full"></div>
            <div className="absolute -top-12 left-12 w-1 h-1 bg-green-400 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-4xl font-bold text-white mb-6">Thank you</h2>
        <p className="text-white/90 text-lg leading-relaxed">{getMessage()}</p>
      </div>
    </div>
  )
}
