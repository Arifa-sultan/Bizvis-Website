"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThankYouModal from "@/components/thank-you-modal"
import { Button } from "@/components/ui/button"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

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
      <section className="relative pt-50 pb-16 px-4 h-screen overflow-hidden">
        <Image
          alt="pic"
          src="/images/herobg.png"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="container mx-auto text-center z-40">
          <div className="max-w-4xl mx-auto mb-12 z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight z-40">
              SEE BEFORE YOU <span className="text-[#4DEF08]">GO</span>...
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                STREAM TO BE CHOSEN!
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
              Bizvis is redefining how businesses and customers connect through live streaming. Our platform enables
              real-time interactions, allowing customers to see before they go and businesses to showcase their
              offerings dynamically.
            </p>

          </div>

          {/* Hero Image */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Bizvis Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is <span className="text-blue-400">Bizvis</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center border border-[#ffff] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[20px] p-3">
              <div className="w-16 h-16 bg-blue-500   rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Before You Go</h3>
              <p className="text-gray-300">See businesses in real-time before making your decision to visit.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Business Streaming</h3>
              <p className="text-gray-300">Showcase your business live to attract more customers.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Connections</h3>
              <p className="text-gray-300">Connect customers with businesses through intelligent matching.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-6">See Before You Go</p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
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

            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-4">
                <div className="bg-gray-900 rounded-xl h-64 md:h-80 flex items-center justify-center">
                  {/* <span className="text-gray-500 text-lg">Business Dashboard Preview</span> */}
                  <Image alt="logo" src={"/images/landing2.png"} height={100} width={55} />
                </div>
              </div>
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

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="bg-gray-900 rounded-xl h-64 md:h-96 flex items-center justify-center">
                <Image alt="logo" src={"/images/landing2.png"} height={100} width={55} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gray-800 rounded-2xl p-4">
                <div className="bg-gray-900 rounded-xl aspect-[9/16] max-w-xs mx-auto flex items-center justify-center">
                  <Image alt="logo" src={"/images/landing 4.png"} height={100} width={55} />
                </div>
              </div>
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
            <span className="text-blue-400">Smarter Decisions,</span>
            <br />
            <span className="text-blue-400">Informed Experience</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Make better choices with real-time insights and live business previews.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-800 rounded-xl aspect-[9/16] flex items-center justify-center">
                <span className="text-gray-500 text-xs">App Screen {i}</span>
              </div>
            ))}
          </div>
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
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Future of Live Access</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Be among the first to experience the revolutionary way businesses and customers connect.
            </p>
            <Button
              onClick={() => handleGetEarlyAccess(1)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full text-lg font-semibold"
            >
              Request Early Access
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} variant={modalVariant} />
    </div>
  )
}
