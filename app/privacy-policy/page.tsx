import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", active: true },
  ]

  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-blue-400 text-lg">February 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              This Privacy Policy (this "Policy") describes how Bizvis Inc., a Delaware corporation ("Bizvis," "we,"
              "us," or "our"), collects, uses, discloses, and retains personal information in connection with its early
              access website located at{" "}
              <a href="https://www.bizvis.io" className="text-blue-400 hover:underline">
                www.bizvis.io
              </a>{" "}
              (the "Site"). This Policy applies to information submitted through the Site by individuals and businesses
              interested in early access to the Bizvis platform, including prospective customers, businesses, investors,
              and partners (collectively, "you" or "your").
            </p>

            <p className="text-gray-300 mb-8">
              This Policy is intended to comply with applicable US data privacy laws, including, where applicable, the
              California Consumer Privacy Act of 2018 as amended by the California Privacy Rights Act of 2020
              (collectively, the "CCPA"), the Virginia Consumer Data Protection Act ("VCDPA"), the Colorado Privacy Act
              ("CPA"), the Connecticut Data Privacy Act ("CTDPA"), and the Utah Consumer Privacy Act ("UCPA").
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We may collect the following categories of personal information when you interact with the Site:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>
                    <strong>Identifiers:</strong> such as your name, email address, and IP address;
                  </li>
                  <li>
                    <strong>Professional or Business Information:</strong> such as your business name, role, contact
                    details, and industry;
                  </li>
                  <li>
                    <strong>Internet or Network Activity:</strong> such as browser type and other technical data through
                    cookies or tracking technologies;
                  </li>
                  <li>
                    <strong>Investor Interest Information:</strong> if voluntarily provided, including your name, email
                    address, and expressed interest in receiving investment-related communications;
                  </li>
                  <li>
                    <strong>Partnership Inquiry Information:</strong> such as your organization name, contact details,
                    and partnership proposal details.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">2. Purposes of Collection and Use</h2>
                <p className="text-gray-300 mb-4">
                  We collect and process personal information for the following purposes:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>To register early interest from potential customers and businesses in the Bizvis platform;</li>
                  <li>
                    To communicate with you regarding early access opportunities, product updates, and launch
                    announcements;
                  </li>
                  <li>To evaluate and manage our pre-launch demand for our services;</li>
                  <li>To manage investor and partnership inquiries;</li>
                  <li>To comply with legal obligations and respond to lawful requests; and</li>
                  <li>To improve the performance and functionality of the Site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">3. Disclosure of Personal Information</h2>
                <p className="text-gray-300 mb-4">
                  Bizvis does not sell personal information. We may disclose personal information to the following
                  categories of third parties, where permitted by applicable law:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>
                    <strong>Service Providers:</strong> including those providing website hosting, customer relationship
                    management (CRM), analytics, or email communication services;
                  </li>
                  <li>
                    <strong>Corporate Affiliates or Successors:</strong> in connection with a merger, acquisition, or
                    other corporate transaction involving Bizvis;
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> if required by law, regulation, or valid legal process.
                  </li>
                </ul>

                <p className="text-gray-300">
                  All disclosures are limited to the minimum necessary to fulfill legitimate business or legal purposes
                  and are subject to appropriate confidentiality obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">4. Your Privacy Rights</h2>
                <p className="text-gray-300 mb-4">
                  Depending on your state of residence, you may have the following rights under applicable data
                  protection laws:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>The right to request access to and a copy of your personal information;</li>
                  <li>The right to request deletion of personal information, subject to certain exceptions;</li>
                  <li>The right to correct inaccurate personal information;</li>
                  <li>The right to request to opt out of sales of data sharing (if applicable); and</li>
                  <li>The right to appeal a denied request (where required by law).</li>
                </ul>

                <p className="text-gray-300 mt-4">
                  You may exercise these rights by contacting us at{" "}
                  <a href="mailto:privacy@bizvis.io" className="text-blue-400 hover:underline">
                    privacy@bizvis.io
                  </a>
                  . We may require verification of your identity before processing your request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">5. Data Retention and Security</h2>
                <p className="text-gray-300">
                  We retain personal information only for as long as necessary to fulfill the purposes described in this
                  Policy or as required by applicable law. Bizvis implements appropriate technical and organizational
                  safeguards to protect personal information against unauthorized access, use, or disclosure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300">
                  The Site may use cookies or similar technologies to collect technical data for analytics and
                  performance purposes. You may manage your cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-300">
                  We reserve the right to update or revise this Policy at any time. Changes will be effective upon
                  posting to the Site. Material changes will be communicated via email or prominent notice on the Site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-4">8. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions or concerns about this Policy or our data practices, please contact:
                </p>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Bizvis Inc.</strong>
                  </p>
                  <p>Attn: Privacy Officer</p>
                  <p>8 The Green, STE R</p>
                  <p>Dover, Delaware 19901</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:privacy@bizvis.io" className="text-blue-400 hover:underline">
                      privacy@bizvis.io
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
