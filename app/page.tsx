"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThankYouModal from "@/components/thank-you-modal"
import { Button } from "@/components/ui/button"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

import Link from "next/link"
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

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [modalVariant, setModalVariant] = useState<1 | 2 | 3>(1)

  const handleGetEarlyAccess = (variant: 1 | 2 | 3) => {
    setModalVariant(variant)
    setShowModal(true)
  }

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
              <h1 className="text-xl md:text-5xl font-bold text-white mb-6 leading-tight">
                SEE BEFORE YOU{" "}
                <span className="text-[#4DEF08] ">GO...</span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                STREAM TO BE{" "}
                <span className="text-[#029CF6] ">CHOSEN</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                <span className="font-bold"> Get Early access to See real-time live views of restaurants, gyms, clubs, and events</span> — so you can make
                smart, informed choices before stepping out.
              </p>

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
            backgroundImage: "url('/images/heroo.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }
        }>
      </section>
      {/* What is Bizvis Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What is <span className="text-3xl md:text-4xl text-[#029CF6] mb-20 font-semibold " >Bizvis</span>
          </h2>
          <p >

          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16 ">
            {perks.map((perk, index) => (
              <div key={index} className="bg-transparent border cursor-pointer border-gray-700 rounded-[10px] p-6 text-left hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-xl text-white ">
                  <Image src={perk.icon} alt={perk.description} width={10} height={10} className="w-[20px]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">For Businesses</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Live Stream Your Business</h3>
                    <p className="text-gray-300">
                      Showcase your products, services, and atmosphere in real-time to attract customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Increase Foot Traffic</h3>
                    <p className="text-gray-300">
                      Let customers see what you offer before they decide to visit your location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Customer Engagement</h3>
                    <p className="text-gray-300">
                      Interact with potential customers through live chat and build relationships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Analytics & Insights</h3>
                    <p className="text-gray-300">
                      Get detailed analytics on viewer engagement and customer preferences.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleGetEarlyAccess(1)}
                className="bg-[#4DEF08]/50 hover:bg-green-700 border border-[#4DEF08] text-white my-4 px-5 py-6 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors"
              >
                Request Early Access - For Businesses
              </Button>
            </div>
            <div className="max-w-[500px] max-w-full">

              <Image alt="logo" src={"/images/landing2.png"} height={100} width={100} className="w-full" />
              </div>
          </div>
        </div>
      </section>

      {/* The Future of Smarter Connections */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Future of <span className="text-blue-400">Smarter</span>
            <br />
            <span className="text-blue-400">Connections</span> is Here
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Experience the next generation of business-customer interactions through live streaming technology.
          </p>

          
        </div>
        <div className="max-w-[700px] w-full mx-auto">

              <Image alt="logo" src={"/images/landing2.png"} height={100} width={100} className="w-full" />
              </div>
      </section>

      {/* For Customers Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[300px] w-full mx-auto">

              <Image alt="logo" src={"/images/landing 4.png"} height={100} width={100} className="w-full" />
              </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">For Customers</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Discover Businesses</h3>
                    <p className="text-gray-300">
                      Find and explore local businesses through live streams before visiting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Interactive Experience</h3>
                    <p className="text-gray-300">Chat with businesses, ask questions, and get real-time responses.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Make Informed Decisions</h3>
                    <p className="text-gray-300">See exactly what to expect before making the trip to any business.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-300">Get suggestions based on your preferences and viewing history.</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleGetEarlyAccess(2)}
                className="bg-[#029CF6]/50 hover:bg-blue-700 border border-[#029CF6] text-white px-4 my-4 py-6 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors">
                Request Early Access - For Customers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Decisions Section */}
       <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Smarter <span className="text-blue-400">Decision</span>
            <br />
            <span className="text-blue-400">informed</span> experience
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Experience the next generation of business-customer interactions through live streaming technology.
          </p>

          
        </div>
        <div className="max-w-[700px] w-full mx-auto">

              <Image alt="logo" src={"/images/mob.png"} height={100} width={100} className="w-full" />
              </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-blue-400">Coming Soon</span> to
                <br />
                App Store and
                <br />
                Play Store
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Bizvis is redefining how businesses and customers connect through live streaming. Get ready to see and
                experience the future of commerce.
              </p>

              <Button
                onClick={() => handleGetEarlyAccess(3)}
                className="bg-[#4DEF08]/50 hover:bg-green-700 border border-[#4DEF08] text-white px-5 py-6 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors"
              >
                Request Early Access - For Businesses
              </Button>

              <div className="flex flex-col sm:flex-row gap-4 my-4">
                <div className="flex items-center space-x-3 bg-black rounded-xl px-6 py-3">
                  <Apple size={24} className="text-white" />
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-white font-semibold">App Store</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-black rounded-xl px-6 py-3">
                  <Play size={24} className="text-white" />
                  <div>
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-white font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 max-w-sm mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16  flex items-center justify-center mx-auto mb-4">
                    <Image alt="logo" src={"/images/logo.png"} height={100} width={55} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bizvis is redefining how businesses and customers connect through live streaming. Our platform
                    enables real-time interactions, allowing customers to see before they go and businesses to showcase
                    their offerings dynamically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">FAQs</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">How does Bizvis work for businesses?</h3>
              <p className="text-gray-300">
                Businesses can create live streams of their locations, products, and services. Customers can view these
                streams in real-time to make informed decisions about visiting.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">What is Bizvis?</h3>
              <p className="text-gray-300">
                Bizvis is a revolutionary platform that connects businesses and customers through live streaming
                technology, allowing customers to "see before they go" and businesses to showcase their offerings in
                real-time.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">When will the app be available?</h3>
              <p className="text-gray-300">
                The Bizvis app is currently in development and will be available soon on both iOS and Android platforms.
                Sign up for early access to be notified when it launches.
              </p>
            </div>
          </div>
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
                Whether you're looking to discover places in real-time or promote<br /> your space, join us to be the first to
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

      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} variant={modalVariant} />
    </div>
  )
}
