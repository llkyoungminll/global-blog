import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import AdSenseAd, { InArticleAd, SidebarAd, PremiumAd } from '@/components/AdSenseAd'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.description,
      images: post.image ? [post.image] : [],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Global Insights
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/categories" className="nav-link">Categories</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="prose-custom">
              {/* Breadcrumbs */}
              <nav className="mb-8 text-sm">
                <ol className="flex items-center space-x-2 text-gray-500">
                  <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
                  <li>→</li>
                  <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
                  <li>→</li>
                  <li><Link href={`/categories/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary-600">{post.category}</Link></li>
                  <li>→</li>
                  <li className="text-gray-900">{post.title}</li>
                </ol>
              </nav>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <time>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">By {post.author}</p>
                    </div>
                  </div>
                </div>

                {post.image && (
                  <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}
              </header>

              {/* Premium Ad - Above Content */}
              <div className="my-8">
                <PremiumAd />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
              </div>

              {/* In-Article Ad - Mid Content */}
              <div className="my-12">
                <InArticleAd />
              </div>

              {/* Bottom Ad - Before Footer */}
              <div className="my-12">
                <AdSenseAd 
                  slot="6768957164"
                  style={{ display: 'block', textAlign: 'center' }}
                  format="auto"
                  fullWidthResponsive={true}
                />
              </div>

              {/* Article Footer */}
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Share this article:</span>
                    <div className="flex space-x-2">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://profitableblog.org/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                      >
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://profitableblog.org/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://profitableblog.org/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.slug} className="card group">
                      {relatedPost.image && (
                        <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{relatedPost.excerpt}</p>
                      <div className="text-xs text-gray-500">
                        {relatedPost.readingTime}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Sidebar Ad */}
            <div className="sticky top-8">
              <SidebarAd />
            </div>
          </aside>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image ? `https://profitableblog.org${post.image}` : undefined,
            "author": {
              "@type": "Person",
              "name": post.author,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Global Insights",
              "logo": {
                "@type": "ImageObject",
                "url": "https://profitableblog.org/images/logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://profitableblog.org/blog/${post.slug}`
            }
          })
        }}
      />
    </div>
  )
}
