import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Global Insights",
  description: "Terms of Service for Global Insights. Learn about the terms and conditions for using our website and services.",
  keywords: ["terms of service", "terms and conditions", "website terms", "user agreement", "legal terms"],
};

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> September 20, 2025
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using Global Insights (&quot;the Website&quot;), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Permission is granted to temporarily download one copy of the materials on Global Insights for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                  by Global Insights at any time.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The materials on Global Insights are provided on an &apos;as is&apos; basis. Global Insights makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, Global Insights does not warrant or make any representations concerning the accuracy, likely results, 
                  or reliability of the use of the materials on its website or otherwise relating to such materials or on any 
                  sites linked to this site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p className="text-gray-700">
                In no event shall Global Insights or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on Global Insights, even if Global Insights or a Global Insights authorized representative 
                has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not 
                allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-700">
                The materials appearing on Global Insights could include technical, typographical, or photographic errors. 
                Global Insights does not warrant that any of the materials on its website are accurate, complete, or current. 
                Global Insights may make changes to the materials contained on its website at any time without notice. 
                However, Global Insights does not make any commitment to update the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
              <p className="text-gray-700">
                Global Insights has not reviewed all of the sites linked to our website and is not responsible for the 
                contents of any such linked site. The inclusion of any link does not imply endorsement by Global Insights 
                of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
              <p className="text-gray-700">
                Global Insights may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of the United States 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Professional Advice Disclaimer</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The information provided on Global Insights is for educational and informational purposes only and should not be 
                  construed as professional advice. This includes but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Legal Advice:</strong> Content about legal matters is for informational purposes only and does not constitute legal advice</li>
                  <li><strong>Financial Advice:</strong> Investment and financial information is educational and not personalized financial advice</li>
                  <li><strong>Medical Advice:</strong> Health-related content is not a substitute for professional medical advice</li>
                  <li><strong>Insurance Advice:</strong> Insurance information is general guidance and not personalized insurance advice</li>
                </ul>
                <p>
                  Always consult with qualified professionals before making important decisions regarding legal, financial, 
                  medical, or insurance matters.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
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
