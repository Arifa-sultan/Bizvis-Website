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
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Star } from "lucide-react"

export default function CustomerSignupPage() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [showInvestment, setShowInvestment] = useState(false)
  const [showPartnership, setShowPartnership] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    city: "Gen targeting",
    aboutYou: "Track different sources",
    venueTypes: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
  }

  const handleVenueTypeChange = (venueType: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, venueTypes: [...prev.venueTypes, venueType] }))
    } else {
      setFormData((prev) => ({ ...prev, venueTypes: prev.venueTypes.filter((type) => type !== venueType) }))
    }
  }

  const perks = [
    {
      icon: "🏆",
      title: "Founding Member Badge",
      description: "Your legacy status forever in-app",
    },
    {
      icon: "🎯",
      title: "First Access",
      description: "Be first to experience Bizvis",
    },
    {
      icon: "🎁",
      title: "VIP Invites",
      description: "Get launch event perks as they drop—all complimentary",
    },
    {
      icon: "🎪",
      title: "Exclusive Perks",
      description: "Free events, discounts, and more from partner venues",
    },
  ]

  const testimonials = [
    {
      name: "Chris D.",
      image: "/placeholder.svg?height=60&width=60",
      text: "I love when I get to see spots before I go. It saves me time and helps me check the crowd before I leave the house.",
      rating: 5,
    },
    {
      name: "Lauren K.",
      image: "/placeholder.svg?height=60&width=60",
      text: "Honestly, this app would be so useful for seeing the crowd at restaurants, meeting the chefs, business owners, etc.",
      rating: 5,
    },
    {
      name: "Ryan S.",
      image: "/placeholder.svg?height=60&width=60",
      text: "Awesome idea! Being able to see what's going on at different venues before I go would be a total game changer!",
      rating: 5,
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
              See Before You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Go...</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Get Early access to See real-time live views of restaurants, gyms, clubs, and events — so you can make
              smart, informed choices before stepping out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
                Customer Early Access - Sign Up Now
              </Button>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Play size={20} className="text-white ml-1" />
                </div>
                <span className="text-white font-medium">Watch Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Customers Perks */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Founding Customers Perks — <span className="text-green-400">For Early Signups Only</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {perks.map((perk, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {perk.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{perk.title}</h3>
                <p className="text-gray-300 text-sm">{perk.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Customer Early Access - Sign Up Now
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Exciting Feedback <span className="text-green-400">About the Concept</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Genuine comments from early supporters sharing their thoughts on what's coming.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-left">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">"{testimonial.text}"</p>
                <p className="text-white/70 text-xs mt-3">That's next level!</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unlock Early <span className="text-green-400">Access to Bizvis</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-white mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                  required
                />
              </div>

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
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>

              <div>
                <Label htmlFor="zipCode" className="text-white mb-2 block">
                  Zip Code / City
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="Gen targeting"
                  value={formData.zipCode}
                  onChange={(e) => setFormData((prev) => ({ ...prev, zipCode: e.target.value }))}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="city" className="text-white mb-2 block">
                  How did you hear about us?
                </Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, city: value }))}
                >
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Gen targeting">Gen targeting</SelectItem>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="Friend">Friend</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="aboutYou" className="text-white mb-2 block">
                  How did you hear about us?
                </Label>
                <Select
                  value={formData.aboutYou}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, aboutYou: value }))}
                >
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Track different sources">Track different sources</SelectItem>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="Word of mouth">Word of mouth</SelectItem>
                    <SelectItem value="Advertisement">Advertisement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-white mb-4 block">
                What types of places are you most excited to preview live on Bizvis?
              </Label>
              <div className="space-y-3">
                {[
                  "Nightlife - bars, clubs, lounges, and nightlife",
                  "Restaurants - Dining spots, cafes, food halls, etc.",
                  "Gyms - Fitness centers, boutique studios, yoga classes",
                  "Events & Festivals - Live music, pop-ups, public gatherings",
                  "Retail Experiences - In-store events, new drops, shopping energy",
                ].map((venueType) => (
                  <div key={venueType} className="flex items-start space-x-3">
                    <Checkbox
                      id={venueType}
                      checked={formData.venueTypes.includes(venueType)}
                      onCheckedChange={(checked) => handleVenueTypeChange(venueType, checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor={venueType} className="text-white text-sm cursor-pointer leading-relaxed">
                      {venueType}
                    </Label>
                  </div>
                ))}
              </div>
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

      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} variant={3} />
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
