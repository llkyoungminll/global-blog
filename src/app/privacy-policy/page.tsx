import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Global Insights",
  description: "Privacy Policy for Global Insights. Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "cookies", "user privacy"],
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> September 20, 2025
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <p>
                  When you subscribe to our newsletter or contact us, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address</li>
                  <li>Name (if provided)</li>
                  <li>Message content (for contact forms)</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the collected information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sending newsletter updates (with your consent)</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Improving our website and content</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">Google Analytics</h3>
                <p>
                  We use Google Analytics to understand how visitors interact with our website. 
                  Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
                </p>

                <h3 className="text-lg font-semibold">Google AdSense</h3>
                <p>
                  We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to our site and other sites on the Internet. 
                  You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Google&apos;s Ads Settings</a>.
                </p>

                <h3 className="text-lg font-semibold">Essential Cookies</h3>
                <p>
                  We use essential cookies that are necessary for the website to function properly. These cannot be disabled.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our website (Google Analytics, AdSense)</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
                  storage is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Unsubscribe from our newsletter at any time</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                  or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If we learn that we have collected personal information from a child 
                  under 13, we will delete that information as quickly as possible.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@globalinsights.com</p>
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
