import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata = {
  title: "Categories - Global Insights | Browse by Topic",
  description: "Browse our expert insights by category. Find articles on business strategy, technology, finance, insurance, legal advice, and personal development.",
  keywords: ["business categories", "technology articles", "finance guides", "insurance advice", "legal insights", "professional development"],
};

export default async function CategoriesPage() {
  const posts = getAllPosts();
  
  // Group posts by category
  const postsByCategory = posts.reduce((acc: { [key: string]: any[] }, post) => {
    const category = post.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {});

  const categoryInfo = {
    "Legal Services": { icon: "⚖️", description: "Expert legal advice and guidance" },
    "Insurance & Protection": { icon: "🛡️", description: "Comprehensive insurance guides" },
    "Finance & Investment": { icon: "💰", description: "Financial strategies and investment tips" },
    "Technology & Software": { icon: "💻", description: "Business technology and software reviews" },
    "Digital Marketing": { icon: "📈", description: "Marketing strategies and AdSense tips" },
    "Health & Insurance": { icon: "🏥", description: "Healthcare and insurance planning" }
  };

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
              <Link href="/categories" className="text-blue-600 font-medium">Categories</Link>
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
              Browse by Category
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Find expert insights and proven strategies organized by topic area.
            </p>
          </div>
        </section>

        {/* AdSense Ad */}
        <div className="container mx-auto px-4 py-8">
          <AdSenseAd slot="7806397374" format="auto" responsive="true" />
        </div>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(postsByCategory).map(([category, categoryPosts]) => {
              const info = categoryInfo[category as keyof typeof categoryInfo] || { icon: "📄", description: "Expert insights and analysis" };
              
              return (
                <div key={category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{info.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{category}</h2>
                    <p className="text-gray-600 mb-4">{info.description}</p>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {categoryPosts.length} articles
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 mb-3">Recent Articles:</h3>
                    {categoryPosts.slice(0, 3).map((post) => (
                      <div key={post.slug} className="border-l-4 border-blue-500 pl-4">
                        <Link href={`/blog/${post.slug}`} className="block hover:text-blue-600 transition-colors">
                          <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      href={`/categories/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View All {categoryPosts.length} Articles
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
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
