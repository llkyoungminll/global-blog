import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata = {
  title: "Blog - Global Insights | Expert Analysis and Business Strategies",
  description: "Explore our comprehensive collection of expert insights, proven strategies, and actionable tips for business success, technology trends, finance, and personal development.",
  keywords: ["business blog", "expert insights", "business strategies", "technology trends", "finance tips", "professional development"],
};

export default async function BlogPage() {
  const posts = getAllPosts();

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
              <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
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
              Expert Insights & Analysis
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover proven strategies, actionable tips, and expert insights to accelerate your success in business, technology, finance, and personal development.
            </p>
          </div>
        </section>

        {/* AdSense Ad */}
        <div className="container mx-auto px-4 py-8">
          <AdSenseAd slot="7806397374" format="auto" responsive="true" />
        </div>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-lg text-gray-600">
              Browse our complete collection of expert insights and proven strategies.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {post.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No posts found
              </h3>
              <p className="text-gray-600">
                Check back soon for new content!
              </p>
            </div>
          )}
        </section>

        {/* AdSense Ad */}
        <div className="container mx-auto px-4 py-8">
          <AdSenseAd slot="7806397374" format="auto" responsive="true" />
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
