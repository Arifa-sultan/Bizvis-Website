"use client"

import type React from "react"

import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InvestmentModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

export default function InvestmentModal({ isOpen, onClose, onSubmit }: InvestmentModalProps) {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedin: "",
    investorType: "Angel",
    interest: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#3b82f6] p-8">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Become an Investor in the Future of how business <span className="text-cyan-300">and customers engage</span>
            <br />
            <span className="text-cyan-300">in real-time!</span>
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Join our visionary investor circle and be part of transforming how people explore the world around them.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-white mb-2 block text-sm">
                Full Name <span className="text-red-300">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block text-sm">
                Email Address <span className="text-red-300">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedin" className="text-white mb-2 block text-sm">
                LinkedIn or website(Optional)
              </Label>
              <Input
                id="linkedin"
                type="text"
                placeholder="Enters Links"
                value={formData.linkedin}
                onChange={(e) => setFormData((prev) => ({ ...prev, linkedin: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="investorType" className="text-white mb-2 block text-sm">
                Type of Investor
              </Label>
              <Select
                value={formData.investorType}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, investorType: value }))}
              >
                <SelectTrigger className="bg-blue-600 border-white/20 text-white rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Angel">Angel</SelectItem>
                  <SelectItem value="VC">VC</SelectItem>
                  <SelectItem value="Private Equity">Private Equity</SelectItem>
                  <SelectItem value="Individual">Individual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="interest" className="text-white mb-2 block text-sm">
              Tell us a bit about your interest
            </Label>
            <Textarea
              id="interest"
              placeholder="Write"
              value={formData.interest}
              onChange={(e) => setFormData((prev) => ({ ...prev, interest: e.target.value }))}
              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl min-h-24"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3 rounded-full text-lg font-semibold mt-6"
          >
            Submit Interest
          </Button>
        </form>
      </div>
    </div>
  )
}
