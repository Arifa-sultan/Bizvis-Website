"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import ThankYouModal from "@/components/thank-you-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    inquiryType: "Business Interest",
    message: "",
    agreedToTerms: false,
  })

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Contact Us", active: true },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.agreedToTerms) {
      setShowModal(true)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us – Bizvis Inc.</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              If you have questions about our platform, are interested in partnerships, investment opportunities, or
              early access, please fill out the form below and a member of our team will get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-white mb-2 block">
                  Full Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="organization" className="text-white mb-2 block">
                Organization (Optional)
              </Label>
              <Input
                id="organization"
                type="text"
                placeholder="Your business name or affiliation"
                value={formData.organization}
                onChange={(e) => handleInputChange("organization", e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <Label className="text-white mb-4 block">
                Inquiry Type <span className="text-red-400">*</span>
              </Label>
              <div className="space-y-3">
                {["Business Interest", "Business Partnership", "Investor Inquiry", "Media / Press", "Other"].map(
                  (type) => (
                    <div key={type} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id={type}
                        name="inquiryType"
                        value={type}
                        checked={formData.inquiryType === type}
                        onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                        className="w-4 h-4 text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-500"
                      />
                      <Label htmlFor={type} className="text-white cursor-pointer">
                        {type}
                      </Label>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">
                Tell us why you're here
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message or question here"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 min-h-32"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-white text-sm leading-relaxed cursor-pointer">
                I have read and agree to the{" "}
                <a href="/terms-conditions" className="text-blue-400 hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-blue-400 hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-lg font-semibold"
              disabled={!formData.agreedToTerms}
            >
              Submit
            </Button>
          </form>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              Note: This form is intended for general inquiries. If you wish to exercise your privacy rights or request
              data removal, please contact us directly at{" "}
              <a href="mailto:contact@bizvis.io" className="text-blue-400 hover:underline">
                contact@bizvis.io
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />

      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} variant={2} />
    </div>
  )
}
