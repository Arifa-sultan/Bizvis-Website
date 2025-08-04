import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function DisclaimerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Disclaimer", active: true },
  ]

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Disclaimer</h1>
            <p className="text-blue-400 text-lg">May 1-2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              The information provided on this website (the "Site") operated by{" "}
              <span className="text-blue-400 font-semibold">Bizvis Inc.</span> ("Bizvis," "we," "us," or "our") is for{" "}
              <span className="text-blue-400 font-semibold">informational purposes only</span> and is intended to
              collect early interest in a prospective technology platform currently under development.
            </p>

            <p className="text-gray-300 mb-8">
              By accessing or using the Site, you acknowledge and agree to the following:
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">1. No Offer or Contract</h2>
                <p className="text-gray-300">
                  Nothing on this Site constitutes an offer, binding agreement, or commitment to provide services, form
                  partnerships, or accept investment. All expressions of interest submitted through customer sign-up
                  forms, business inquiries, investor forms, or partnership contact mechanisms are{" "}
                  <span className="text-blue-400 font-semibold">non binding</span> and may be used for informational and
                  planning purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">2. Platform Status</h2>
                <p className="text-gray-300">
                  The Bizvis platform is in development. Any references to features, availability, technology, or
                  functionality are{" "}
                  <span className="text-blue-400 font-semibold">preliminary and subject to change</span> without notice.
                  Bizvis makes no representations that any specific feature will be included in the final product or
                  launched at any particular time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">3. Forward-Looking Statements</h2>
                <p className="text-gray-300">
                  Any forward-looking statements presented on the Site — including plans, projections, business
                  opportunities, or investment prospects — are speculative in nature and involve risks and
                  uncertainties. These statements are not guarantees of future performance or outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">4. No Professional Advice</h2>
                <p className="text-gray-300">
                  Nothing on this Site constitutes legal, financial, or investment advice. You should consult with your
                  own legal or financial advisor before acting on any information provided through the Site or in
                  communications with Bizvis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">5. Data Use</h2>
                <p className="text-gray-300">
                  By submitting information through the Site, you consent to our use of that information in accordance
                  with our [Privacy Policy]. However, submission does not create a fiduciary or confidential
                  relationship unless and until a separate agreement is executed between you and Bizvis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">6. No Warranties</h2>
                <p className="text-gray-300">
                  The Site and its contents are provided on an "as-is" and "as-available" basis. Bizvis disclaims all
                  warranties, express or implied, including but not limited to warranties of merchantability, fitness
                  for a particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300">
                  To the fullest extent permitted by law, Bizvis shall not be liable for any direct, indirect,
                  incidental, or consequential damages arising out of or related to your use of, or inability to use,
                  the Site or reliance on any information contained herein.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">Contact:</h2>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <span className="font-semibold">Bizvis Inc. Attn:</span>
                  </p>
                  <p>Legal Department</p>
                  <p>8 The Green, STE R</p>
                  <p>Dover, Delaware 19901</p>
                  <p>Email: legal@bizvis.io</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
