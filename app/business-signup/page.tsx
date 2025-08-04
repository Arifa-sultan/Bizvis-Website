"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThankYouModal from "@/components/thank-you-modal"
import InvestmentModal from "@/components/investment-modal"
import PartnershipModal from "@/components/partnership-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play } from "lucide-react"

export default function BusinessSignupPage() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [showInvestment, setShowInvestment] = useState(false)
  const [showPartnership, setShowPartnership] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    yourName: "",
    email: "",
    phone: "",
    zipCode: "",
    businessType: "Restaurant",
    website: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
  }

  const venues = [
    { name: "Taste District", type: "Restaurant", image: "/placeholder.svg?height=200&width=300" },
    { name: "Pulse", type: "Fitness", image: "/placeholder.svg?height=200&width=300" },
    { name: "Club Nexus", type: "Nightclub", image: "/placeholder.svg?height=200&width=300" },
    { name: "Style Bay", type: "Retail", image: "/placeholder.svg?height=200&width=300" },
  ]

  const benefits = [
    {
      icon: "🏆",
      title: "Founding Venue Badge",
      description: "Your legacy status forever in-app",
    },
    {
      icon: "🆓",
      title: "Free Setup Support",
      description: "Personal onboarding assistance",
    },
    {
      icon: "🚀",
      title: "Launch Promotion",
      description: "Featured placement during app launch",
    },
    {
      icon: "📈",
      title: "Influence The Product",
      description: "Shape features with direct feedback",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              STREAM TO BE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CHOSEN.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Direct marketing, drive more traffic, and boost revenue — all through real-time streaming as potential
              insights, and smart analytics. Gain a deeper understanding of your customer patterns and preferences to
              grow smarter with Bizvis.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Business Early Access - Sign Up Now
            </Button>
          </div>

          {/* Video Preview */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-8xl font-bold text-white/20 transform rotate-12">BIZVIS</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Live Demo */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Live restaurant demo"
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white text-sm font-medium">We went live on Bizvis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Businesses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built for <span className="text-blue-400">Businesses Like Yours</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Bizvis is designed for any physical space where business is conducted. These venues are just a
            glimpse—official launch will support a much broader range of business types.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {venues.map((venue, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{venue.name.charAt(0)}</span>
                      </div>
                      <span className="text-white font-medium text-sm">{venue.name}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{venue.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Early Access <span className="text-blue-400">Real Advantage</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Founding Venue Partners receive exclusive launch benefits and priority visibility
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Business Early Access - Sign Up Now
          </Button>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Showcase Your Space. <span className="text-blue-400">Drive More Foot Traffic.</span>
            </h2>
            <p className="text-gray-300 text-lg">Early access for venues to join the future of live visibility.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-white mb-2 block">
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="yourName" className="text-white mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="yourName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.yourName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, yourName: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="zipCode" className="text-white mb-2 block">
                  Zip Code / City
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="Enter code / name"
                  value={formData.zipCode}
                  onChange={(e) => setFormData((prev) => ({ ...prev, zipCode: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="businessType" className="text-white mb-2 block">
                  Business Type
                </Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}
                >
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Restaurant">Restaurant</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                    <SelectItem value="Fitness">Fitness</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Services">Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="website" className="text-white mb-2 block">
                Website or Instagram (Optional)
              </Label>
              <Input
                id="website"
                type="text"
                placeholder="Enter links"
                value={formData.website}
                onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-lg font-semibold"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-cyan-400/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-purple-400/20 rounded-full"></div>
            <div className="absolute top-1/2 right-8 w-8 h-8 bg-yellow-400/30 rounded-full"></div>

            <div className="relative z-10">
              <p className="text-white/90 text-lg mb-6">
                Whether you're looking to discover places in real-time or promote your space, join us to be the first to
                see Bizvis.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join the Future of Live Access</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowInvestment(true)}
                  className="bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Explore Opportunities
                </Button>
                <Button
                  onClick={() => setShowPartnership(true)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Investment Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} variant={1} />
      <InvestmentModal
        isOpen={showInvestment}
        onClose={() => setShowInvestment(false)}
        onSubmit={() => setShowThankYou(true)}
      />
      <PartnershipModal
        isOpen={showPartnership}
        onClose={() => setShowPartnership(false)}
        onSubmit={() => setShowThankYou(true)}
      />
    </div>
  )
}
