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
import Image from "next/image"
import Link from "next/link"


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
    { name: "Taste District", type: "Restaurant", image: "/images/taste.png" },
    { name: "Pulse", type: "Fitness", image: "/images/plusefit.png" },
    { name: "Club Nexus", type: "Nightclub", image: "/images/club.png" },
    { name: "Style Bay", type: "Retail", image: "/images/stylebay.png" },
  ]

const perks = [
    {
      icon: "/images/contact1.svg",
      title: "Founding Member Badge",
      description: "Your legacy status forever in-app",
    },
    {
      icon: "/images/contact2.svg",
      title: "First Access",
      description: "Be first to experience Bizvis",
    },
    {
      icon: "/images/contact3.svg",
      title: "VIP Invites",
      description: "Get launch event perks as they drop—all complimentary",
    },
    {
      icon: "/images/contact4.svg",
      title: "Exclusive Perks",
      description: "Free events, discounts, and more from partner venues",
    },
  ]
  

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      {/* Hero Section */}
       <section className="pt-24 pb-16 px-4 min-h-screen overflow-hidden"
        style={
          {
            backgroundImage: "url('/images/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }
        }>
        <div className="container mx-auto text-center flex items-center justify-center  h-screen">
          <div className="max-w-7xl mx-auto w-full  mb-12 flex justify-between items-center ">
            <div className="text-left max-w-2xl w-full ">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                STREAM TO BE{" "}
                <span className="text-[#029CF6] ">CHOSEN</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                <span className="font-bold"> Get Early access to See real-time live views of restaurants, gyms, clubs, and events</span> — so you can make
                smart, informed choices before stepping out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link
                  href="/business-signup"
                  className="bg-[#029CF6]/50 hover:bg-blue-700 border border-[#029CF6] text-white px-4 py-4 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors"
                >
            Business Early Access - Sign Up Now
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2  max-w-2xl w-full ">
              <Image src={'/images/playbtn.png'} alt="play icon" width={100} height={100} className="w-[200px]" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen "
        style={
          {
            backgroundImage: "url('/images/sign up 1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }
        }>
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
      
<section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
           Early Access
          </h2>
          <p className="text-3xl md:text-4xl text-[#029CF6] mb-12 font-semibold">
            — Real Advantage
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16 ">
            {perks.map((perk, index) => (
              <div key={index} className="bg-transparent border cursor-pointer border-gray-700 rounded-br-[30%] p-6 text-left hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-xl text-white ">
                  <Image src={perk.icon} alt={perk.description} width={10} height={10} className="w-[20px]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/business-signup"
            className="bg-[#029CF6]/50 hover:bg-blue-700 border border-[#029CF6] shadow shadow-[#029CF6]  text-white px-4 py-4 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors"
          >
            Business Early Access - Sign Up Now
          </Link>
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
                  className="bg-gray-800/50 border-gray-600  text-white placeholder-gray-400 focus:border-blue-500 w-100"
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
              className="bg-[#029CF6]/50 hover:bg-blue-700 border border-[#029CF6] text-white px-6 mr-50  py-6 rounded-[4px]  text-sm font-medium transition-colors"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-16 px-4"
      >
        <div className="container mx-auto text-center">
          <div className="  rounded-3xl   overflow-hidden  max-w-[1110px] h-[435px] mx-auto" style={
            {
              background: "url(/images/baner.jpeg) no-repeat center center",
              backgroundSize: "cover",

            }
          }>

            <div className=" h-[435px]  flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="bg-[#093b58] hover:bg-[093b58]/50 border border-[#093b58] shadow shadow-[#093b58] text-white px-12 py-4 rounded-[4px] rounded-br-[18px] text-md  font-medium transition-colors"
                >
                  Business Early Access – Sign Up Now            </Link>
              </div>
              <p className="text-white/90 text-lg my-6">
                Whether you're looking to discover places in real-time or promote<br/> your space, join us to be the first to
                see Bizvis.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join the Future of Live Access</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <Link
                  href="/"
                  className="bg-cyan-400 hover:bg-cyan-500 text-black border border-cyan-500  px-12 py-4 rounded-[4px] rounded-br-[18px] text-md  font-medium transition-colors"
                >
                  Explore Opportunities
                </Link>
                <Link
                  href="#"
                  onClick={() => setShowPartnership(true)}

                  className="bg-yellow-500 hover:bg-yellow-600 border border-yellow-500  text-black px-12 py-4 rounded-[4px] rounded-br-[18px] text-md  font-medium transition-colors"
                  >
                  Investment Opportunities            </Link>
                 
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
