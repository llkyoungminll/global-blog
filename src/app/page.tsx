import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import AdSenseAd from '@/components/AdSenseAd'
import Newsletter from '@/components/Newsletter'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 12) // Get latest 12 posts for better content showcase

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Global Insights
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/categories" className="nav-link">Categories</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Expert Insights for 
              <span className="text-primary-600"> Global Success</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover proven strategies, actionable tips, and expert insights to accelerate your success in business, technology, finance, and personal development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-primary">
                Explore Articles
              </Link>
              <Link href="/newsletter" className="btn-secondary">
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ad */}
      <div className="container-custom py-8">
        <AdSenseAd 
          slot="1234567890"
          style={{ display: 'block' }}
          format="auto"
          fullWidthResponsive={true}
          className="max-w-4xl mx-auto"
        />
      </div>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead with our latest expert analysis, proven strategies, and actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article key={post.slug} className="card group">
                  {post.image && (
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.category}</span>
                      <span>•</span>
                      <time>{post.date}</time>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              // Placeholder for when no posts exist yet
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Content Coming Soon!
                </h3>
                <p className="text-gray-600 mb-8">
                  We&apos;re preparing amazing content for you. Check back soon!
                </p>
                <Link href="/blog" className="btn-primary">
                  View All Posts
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* In-Content Ad */}
      <div className="container-custom py-8">
        <AdSenseAd 
          slot="0987654321"
          style={{ display: 'block', textAlign: 'center' }}
          format="fluid"
          layoutKey="-6t+ed+2i-1n-4w"
          className="max-w-2xl mx-auto"
        />
      </div>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-gray-600">
              Find expert insights in your area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Business Strategy', count: '25+', icon: '💼' },
              { name: 'Technology', count: '30+', icon: '💻' },
              { name: 'Finance & Investment', count: '20+', icon: '💰' },
              { name: 'Personal Development', count: '35+', icon: '🚀' },
              { name: 'Marketing', count: '28+', icon: '📈' },
              { name: 'Productivity', count: '22+', icon: '⚡' },
              { name: 'Leadership', count: '18+', icon: '👑' },
              { name: 'Innovation', count: '15+', icon: '💡' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="card text-center group hover:border-primary-300"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} articles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Global Insights</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted source for expert insights, proven strategies, and actionable tips to accelerate your success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Global Insights Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
