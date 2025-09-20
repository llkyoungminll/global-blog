import Link from "next/link";

export const metadata = {
  title: "Disclaimer - Global Insights",
  description: "Disclaimer for Global Insights. Important information about the use of our content and professional advice.",
  keywords: ["disclaimer", "legal disclaimer", "professional advice", "content disclaimer", "liability"],
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Global Insights
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> September 20, 2025
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
              <p className="text-gray-700">
                The information provided on Global Insights is for general informational and educational purposes only. 
                While we strive to provide accurate and up-to-date information, we make no representations or warranties 
                of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
                of the information, products, services, or related graphics contained on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice Disclaimer</h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">⚖️ Legal Disclaimer</h3>
                  <p className="text-gray-700">
                    Content related to legal matters is provided for informational purposes only and does not constitute legal advice. 
                    Laws vary by jurisdiction and individual circumstances. Always consult with a qualified attorney for legal advice 
                    specific to your situation.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">💰 Financial Disclaimer</h3>
                  <p className="text-gray-700">
                    Financial and investment information is provided for educational purposes only and should not be considered 
                    personalized financial advice. Investment decisions should be made based on your individual financial situation 
                    and goals. Consult with a qualified financial advisor before making investment decisions.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">🛡️ Insurance Disclaimer</h3>
                  <p className="text-gray-700">
                    Insurance information and comparisons are for general guidance only. Insurance needs vary by individual 
                    circumstances, location, and other factors. Always consult with licensed insurance professionals to 
                    determine appropriate coverage for your specific needs.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">🏥 Medical Disclaimer</h3>
                  <p className="text-gray-700">
                    Health and medical information is provided for educational purposes only and is not intended to substitute 
                    for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
                    qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Warranty</h2>
              <p className="text-gray-700">
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, 
                Global Insights excludes all representations, warranties, conditions, and terms (whether express or implied) 
                that, but for this disclaimer, might have effect in relation to this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                Global Insights shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
                or other intangible losses resulting from your use of the website or any content therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Content</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites or services that are not owned or controlled by Global Insights. 
                  We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
                  third-party websites or services.
                </p>
                <p>
                  You acknowledge and agree that Global Insights shall not be responsible or liable, directly or indirectly, 
                  for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on 
                  any such content, goods, or services available on or through any such websites or services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advertising and Affiliate Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Global Insights may contain advertisements and affiliate links. We may receive compensation when you click 
                  on or purchase products through these links. This does not affect our editorial independence or the 
                  objectivity of our reviews and recommendations.
                </p>
                <p>
                  All sponsored content, advertisements, and affiliate relationships will be clearly disclosed where applicable.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Disclaimer</h2>
              <p className="text-gray-700">
                Global Insights reserves the right to modify this disclaimer at any time. Changes will be effective immediately 
                upon posting on the website. Your continued use of the website after any changes constitutes acceptance of 
                the new disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@globalinsights.com</p>
                  <p><strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Global Insights</h3>
            <p className="text-gray-400">
              Your trusted source for expert insights, proven strategies, and actionable tips to accelerate your success.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2025 Global Insights Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
