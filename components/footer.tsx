import Link from "next/link"
import { Youtube, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0B1426] border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-semibold text-lg">Bizvis</span>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <span className="text-white font-medium">Social Media</span>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6">
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimers
              </Link>
              <Link href="/faqs" className="text-gray-400 hover:text-white transition-colors">
                FAQs
              </Link>
            </div>

            <div className="text-gray-400 text-sm">
              <p>© 2025 Bizvis Inc. | See Before You Go™</p>
              <p>| Stream to Be Chosen™ | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
