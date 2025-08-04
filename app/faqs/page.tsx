import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function FAQsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "FAQs", active: true },
  ]

  const faqs = [
    {
      question: "What is Bizvis?",
      answer:
        "Bizvis is a revolutionary platform that connects businesses and customers through live streaming technology, allowing customers to 'see before they go' and businesses to showcase their offerings in real-time.",
    },
    {
      question: "How does Bizvis work for businesses?",
      answer:
        "Businesses can create live streams of their locations, products, and services. Customers can view these streams in real-time to make informed decisions about visiting.",
    },
    {
      question: "When will the app be available?",
      answer:
        "The Bizvis app is currently in development and will be available soon on both iOS and Android platforms. Sign up for early access to be notified when it launches.",
    },
    {
      question: "Is Bizvis free to use?",
      answer:
        "We're still finalizing our pricing structure. Sign up for early access to get updates on pricing and availability.",
    },
    {
      question: "How can I get early access?",
      answer:
        "You can request early access by filling out the form on our homepage or contact page. We'll notify you as soon as the platform becomes available.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-300 text-lg">Find answers to common questions about Bizvis and our platform.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
