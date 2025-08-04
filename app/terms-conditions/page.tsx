import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function TermsConditionsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", active: true },
  ]

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-blue-400 text-lg">May 1-2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              These Terms and Conditions (the "Terms") govern your access to and use of the early access website
              operated by Bizvis Inc., a Delaware corporation ("Bizvis," "we," "us," or "our"), located at{" "}
              <a href="https://www.bizvis.io" className="text-blue-400 hover:underline">
                www.bizvis.io
              </a>{" "}
              (the "Site"). By accessing or using the Site, or by submitting your information through any sign-up,
              business inquiry, investor form, or partnership contact form, you agree to be bound by these Terms and our
              [Privacy Policy].
            </p>

            <p className="text-gray-300 mb-8">
              If you do not agree to these Terms, you may not access or use the Site.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">1. Purpose of the Site</h2>
                <p className="text-gray-300 mb-4">
                  The Site is designed to collect early interest from individuals and businesses in the Bizvis platform,
                  which is under development. The Site provides a preliminary overview of the product concept and allows
                  potential customers, business participants, investors, and partners to express interest in future
                  engagement.
                </p>
                <p className="text-gray-300">
                  <strong>Submission of your information does not create a binding business relationship,</strong> nor
                  does it grant any right of access to the final product, service-level commitments, or partnership
                  agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">2. Eligibility</h2>
                <p className="text-gray-300 mb-2">By using the Site, you represent that you are:</p>
                <ul className="text-gray-300 space-y-1 ml-6">
                  <li>At least 18 years of age;</li>
                  <li>
                    Providing information that is truthful, accurate, and submitted on your own behalf or with proper
                    authority on behalf of an entity.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">3. Account Creation and Communication</h2>
                <p className="text-gray-300 mb-4">
                  While no full user account is created at this stage, you may be added to a communication list to
                  receive:
                </p>
                <ul className="text-gray-300 space-y-1 ml-6">
                  <li>Early access invitations;</li>
                  <li>Platform updates;</li>
                  <li>Investor or partnership materials (if applicable).</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  You may unsubscribe at any time via the instructions in our emails or by contacting us at{" "}
                  <a href="mailto:privacy@bizvis.io" className="text-blue-400 hover:underline">
                    privacy@bizvis.io
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">4. Ownership and Intellectual Property</h2>
                <p className="text-gray-300">
                  All content, branding, trademarks, and concepts presented on the Site are the sole property of Bizvis
                  Inc. or its licensors. You may not copy, reproduce, modify, or distribute any part of the Site or its
                  content without prior written consent from Bizvis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">5. Restrictions on Use</h2>
                <p className="text-gray-300 mb-2">You agree not to:</p>
                <ul className="text-gray-300 space-y-1 ml-6">
                  <li>Interfere with or disrupt the operation of the Site;</li>
                  <li>Attempt to gain unauthorized access to any system or data;</li>
                  <li>Use the Site to submit unlawful or harmful content;</li>
                  <li>Impersonate any other individual or entity in your submissions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">6. Disclaimer of Warranties</h2>
                <p className="text-gray-300 mb-4">
                  The Site and all related information are provided on an "as is" and "as available" basis. Bizvis makes
                  no representations or warranties of any kind, express or implied, including but not limited to the
                  implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p className="text-gray-300">
                  Bizvis does not guarantee that the platform described will be launched, or that any submitted
                  expression of interest will result in future access, investment opportunities, or partnerships.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300">
                  To the maximum extent permitted by applicable law, Bizvis shall not be liable for any indirect,
                  incidental, consequential, or punitive damages arising out of your use of, or inability to use, the
                  Site or any communications received as a result of your submission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">8. Third-Party Tools and Links</h2>
                <p className="text-gray-300">
                  The Site may incorporate third-party tools (e.g., Google Analytics) or links to third-party websites.
                  Bizvis is not responsible for the content, availability, or privacy practices of third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">9. Governing Law and Jurisdiction</h2>
                <p className="text-gray-300">
                  These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of
                  laws principles. Any dispute arising under these Terms shall be brought exclusively in the courts of
                  competent jurisdiction located in Delaware, unless otherwise required by applicable consumer
                  protection law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-300">
                  Bizvis reserves the right to modify these Terms at any time. Updates will be posted on this page with
                  the revised "Effective Date." Continued use of the Site after such changes constitutes acceptance of
                  the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">11. Contact Information</h2>
                <p className="text-gray-300 mb-4">For questions about these Terms, contact:</p>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Bizvis Inc. Attn:</strong>
                  </p>
                  <p>Legal Department</p>
                  <p>8 The Green, STE R</p>
                  <p>Dover, Delaware 19901</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:legal@bizvis.io" className="text-blue-400 hover:underline">
                      legal@bizvis.io
                    </a>
                  </p>
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
