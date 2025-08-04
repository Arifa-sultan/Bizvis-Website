"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/95 backdrop-blur-sm">

      <nav className="hidden lg:flex items-center space-x-6 container mx-auto px-4 md:px-0 py-3">
        {/* Desktop Navigation */}
        <div className="flex  items-center justify-between  w-full">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image alt="logo" src={"/images/logo.png"} height={70} width={55} />
            </Link>
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact us
            </Link>
            <Link href="/contact" className="text- font-bold text-base bg-gradient-to-r from-[#0B9CAE] to-[#7CC25F] bg-clip-text text-transparent">
             BYNC AI
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="/customer-signup"
              className="bg-[#4DEF08]/50 hover:bg-green-700 border border-[#4DEF08] text-white px-4 py-4 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors"
            >
              Customer Early Access - Sign Up Now
            </Link>
             <Link
              href="/business-signup"
              className="bg-[#029CF6]/50 hover:bg-blue-700 border border-[#029CF6] text-white px-4  py-4 rounded-[4px] rounded-br-[18px] text-sm font-medium transition-colors"
            >
              Business Early Access - Sign Up Now
            </Link>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0B1426] border-t border-gray-700 lg:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <Link
              href="/business-signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Business Early Access
            </Link>
            <Link
              href="/customer-signup"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Customer Early Access
            </Link>
          </nav>
        </div>
      )}
    </header >
  )
}
