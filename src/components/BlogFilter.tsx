'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
}

interface BlogFilterProps {
  posts: Post[];
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))]

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
      filterPosts(categoryParam)
    } else {
      setSelectedCategory('all')
      setFilteredPosts(posts)
    }
  }, [searchParams, posts])

  const filterPosts = (category: string) => {
    if (category === 'all') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter(post => post.category === category))
    }
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterPosts(category)
    
    // Update URL without page reload
    const params = new URLSearchParams(searchParams.toString())
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.push(newUrl, { scroll: false })
  }

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category === 'all' ? 'All Articles' : category}
              <span className="ml-2 text-sm">
                ({category === 'all' ? posts.length : posts.filter(p => p.category === category).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Posts Grid */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {selectedCategory === 'all' 
            ? `All Articles (${filteredPosts.length})` 
            : `${selectedCategory} (${filteredPosts.length} articles)`
          }
        </h3>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
            No articles found in this category
          </h3>
          <p className="text-gray-600 mb-6">
            Try selecting a different category or browse all articles.
          </p>
          <button
            onClick={() => handleCategoryChange('all')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </button>
        </div>
      )}
    </div>
  )
}
