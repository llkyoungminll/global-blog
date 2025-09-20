import Link from "next/link";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata = {
  title: "About - Global Insights | Expert Analysis for Business Success",
  description: "Learn about Global Insights - your trusted source for expert business strategies, technology insights, financial advice, and professional development content.",
  keywords: ["about global insights", "business experts", "professional advice", "expert analysis", "business success"],
};

export default function AboutPage() {
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
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Global Insights
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Empowering professionals and businesses with expert analysis and proven strategies for success.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Global Insights, we believe that success comes from having access to the right information at the right time. 
                Our mission is to provide professionals, entrepreneurs, and businesses with expert analysis, proven strategies, 
                and actionable insights that drive real results.
              </p>
              <p className="text-lg text-gray-700">
                We curate and create comprehensive guides across business strategy, technology, finance, insurance, legal matters, 
                and personal development to help you make informed decisions and accelerate your path to success.
              </p>
            </div>

            {/* AdSense Ad */}
            <div className="py-8">
              <AdSenseAd slot="7806397374" format="auto" responsive="true" />
            </div>

            {/* What We Cover */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Cover</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Strategy</h3>
                  <p className="text-gray-600">
                    Comprehensive guides on business financing, credit management, insurance planning, 
                    and strategic decision-making for sustainable growth.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology & Software</h3>
                  <p className="text-gray-600">
                    Expert reviews and comparisons of business software, cybersecurity solutions, 
                    and technology tools that drive productivity and efficiency.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Finance & Investment</h3>
                  <p className="text-gray-600">
                    In-depth analysis of investment opportunities, financial planning strategies, 
                    mortgage guidance, and wealth-building techniques.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl mb-4">⚖️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal & Compliance</h3>
                  <p className="text-gray-600">
                    Essential legal guidance for personal injury, medical malpractice, workers&apos; compensation, 
                    and business legal matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Research-Driven</h3>
                    <p className="text-gray-600">
                      Every article is backed by thorough research, industry data, and expert analysis 
                      to ensure accuracy and relevance.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Insights</h3>
                    <p className="text-gray-600">
                      We focus on providing practical, actionable advice that you can implement 
                      immediately to see real results.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Perspective</h3>
                    <p className="text-gray-600">
                      Our content is created by industry experts and professionals with real-world 
                      experience in their respective fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Global Insights</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                    <p className="text-gray-600">
                      From legal advice to financial planning, technology reviews to insurance guidance - 
                      we cover all aspects of professional and business success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Up-to-Date Information</h3>
                    <p className="text-gray-600">
                      Our content is regularly updated to reflect the latest industry trends, regulations, 
                      and best practices for 2025 and beyond.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Understand</h3>
                    <p className="text-gray-600">
                      Complex topics are broken down into clear, understandable language with practical 
                      examples and step-by-step guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Success?</h2>
              <p className="text-xl mb-6">
                Explore our comprehensive library of expert insights and proven strategies.
              </p>
              <div className="space-x-4">
                <Link href="/blog" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Browse All Articles
                </Link>
                <Link href="/categories" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Explore Categories
                </Link>
              </div>
            </div>
          </div>
        </section>
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
