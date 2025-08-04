"use client"

import type React from "react"

import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PartnershipModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

export default function PartnershipModal({ isOpen, onClose, onSubmit }: PartnershipModalProps) {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    partnershipType: "Tech Integration",
    website: "",
    idea: "",
    availability: "Yes",
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
      <div className="relative w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#3b82f6] p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Partner with Bizvis — <span className="text-cyan-300">Let's Build the Future Together</span>
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            This officially opens a dialogue between Bizvis and the potential partner, showing intent to work together —
            whether that's through camera integration, technology, promotion, or data-sharing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-white mb-2 block text-sm">
                Full Name
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
              <Label htmlFor="company" className="text-white mb-2 block text-sm">
                Company / Organization
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Enter your email"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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

            <div>
              <Label htmlFor="phone" className="text-white mb-2 block text-sm">
                Phone Number(Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="partnershipType" className="text-white mb-2 block text-sm">
              Type of Partnership
            </Label>
            <Select
              value={formData.partnershipType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, partnershipType: value }))}
            >
              <SelectTrigger className="bg-blue-600 border-white/20 text-white rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tech Integration">Tech Integration</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Distribution">Distribution</SelectItem>
                <SelectItem value="Strategic">Strategic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="website" className="text-white mb-2 block text-sm">
              Website / LinkedIn(Optional)
            </Label>
            <Input
              id="website"
              type="text"
              placeholder="Enter links"
              value={formData.website}
              onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="idea" className="text-white mb-2 block text-sm">
              Tell us why you're idea
            </Label>
            <Textarea
              id="idea"
              placeholder="Write"
              value={formData.idea}
              onChange={(e) => setFormData((prev) => ({ ...prev, idea: e.target.value }))}
              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 rounded-xl min-h-24"
            />
          </div>

          <div>
            <Label className="text-white mb-3 block text-sm">Availability for a quick call?</Label>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="yes"
                  name="availability"
                  value="Yes"
                  checked={formData.availability === "Yes"}
                  onChange={(e) => setFormData((prev) => ({ ...prev, availability: e.target.value }))}
                  className="w-4 h-4 text-blue-500 bg-white/10 border-white/20"
                />
                <Label htmlFor="yes" className="text-white cursor-pointer">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="no"
                  name="availability"
                  value="No"
                  checked={formData.availability === "No"}
                  onChange={(e) => setFormData((prev) => ({ ...prev, availability: e.target.value }))}
                  className="w-4 h-4 text-blue-500 bg-white/10 border-white/20"
                />
                <Label htmlFor="no" className="text-white cursor-pointer">
                  No
                </Label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3 rounded-full text-lg font-semibold mt-6"
          >
            Send Proposal
          </Button>
        </form>
      </div>
    </div>
  )
}
