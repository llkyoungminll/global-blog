import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  image?: string
  author: string
  readingTime: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    // Check if content directory exists
    if (!fs.existsSync(contentDirectory)) {
      console.log('Content directory does not exist yet. Creating sample posts...')
      return getSamplePosts()
    }

    const files = fs.readdirSync(contentDirectory)
    const posts = files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => {
        const slug = file.replace(/\.mdx?$/, '')
        return getPostBySlug(slug)
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return getSamplePosts()
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      const mdxPath = path.join(contentDirectory, `${slug}.mdx`)
      if (!fs.existsSync(mdxPath)) {
        return null
      }
    }

    const fileContents = fs.readFileSync(
      fs.existsSync(filePath) ? filePath : path.join(contentDirectory, `${slug}.mdx`),
      'utf8'
    )
    const { data, content } = matter(fileContents)
    const readTime = readingTime(content)

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      content,
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image,
      author: data.author || 'Global Insights Team',
      readingTime: readTime.text,
      seo: {
        title: data.seoTitle || data.title || 'Untitled',
        description: data.seoDescription || data.excerpt || content.slice(0, 160),
        keywords: data.seoKeywords || data.tags || [],
      },
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  return categories.sort()
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))
  return tags.sort()
}

// Sample posts for initial setup
function getSamplePosts(): BlogPost[] {
  return [
    {
      slug: 'maximizing-adsense-revenue-2024',
      title: '10 Proven Strategies to Maximize Your AdSense Revenue in 2024',
      excerpt: 'Discover the latest techniques and best practices to boost your Google AdSense earnings with these proven strategies that top publishers use.',
      content: `# 10 Proven Strategies to Maximize Your AdSense Revenue in 2024

Google AdSense remains one of the most popular ways to monetize websites and blogs. However, maximizing your revenue requires more than just placing ads on your site. Here are 10 proven strategies that successful publishers use to boost their AdSense earnings.

## 1. Optimize Ad Placement

Strategic ad placement is crucial for maximizing click-through rates and revenue. The most effective positions include:

- Above the fold content
- Within article content (after 2-3 paragraphs)
- At the end of articles
- In the sidebar (for desktop)

## 2. Use Responsive Ad Units

With mobile traffic accounting for over 60% of web traffic, responsive ads are essential. They automatically adjust to different screen sizes, ensuring optimal display across all devices.

## 3. Implement Auto Ads

Google's Auto Ads use machine learning to automatically place ads in optimal positions. This can increase revenue by 10-15% on average while reducing the manual work required.

## 4. Focus on High-CPC Keywords

Target content around high-paying keywords in niches like:
- Finance and insurance
- Legal services
- Technology and software
- Health and medical
- Business and marketing

## 5. Improve Page Load Speed

Faster-loading pages lead to better user experience and higher ad viewability. Optimize your site speed by:
- Compressing images
- Using a CDN
- Minimizing CSS and JavaScript
- Choosing quality hosting

## 6. Create Quality, Engaging Content

High-quality content keeps visitors on your site longer, increasing ad impressions and potential clicks. Focus on:
- In-depth, valuable articles
- Regular publishing schedule
- SEO optimization
- User engagement

## 7. Analyze and Optimize Performance

Regularly review your AdSense reports to identify:
- Top-performing ad units
- High-revenue pages
- Traffic patterns
- Click-through rates

## 8. Experiment with Ad Formats

Test different ad formats to find what works best for your audience:
- Display ads
- In-feed ads
- In-article ads
- Matched content

## 9. Increase Organic Traffic

More traffic typically means more revenue. Focus on:
- SEO optimization
- Content marketing
- Social media promotion
- Email marketing

## 10. Ensure AdSense Policy Compliance

Stay compliant with AdSense policies to avoid account suspension:
- Avoid click fraud
- Don't place ads on prohibited content
- Follow placement guidelines
- Monitor for invalid traffic

## Conclusion

Maximizing AdSense revenue requires a combination of strategic planning, quality content creation, and continuous optimization. Implement these strategies gradually and monitor their impact on your earnings.

Remember, success with AdSense is a long-term game. Focus on providing value to your audience, and the revenue will follow.`,
      date: '2024-01-15',
      category: 'Digital Marketing',
      tags: ['AdSense', 'Revenue Optimization', 'Digital Marketing', 'SEO'],
      image: '/images/adsense-optimization.jpg',
      author: 'Sarah Johnson',
      readingTime: '8 min read',
      seo: {
        title: '10 Proven AdSense Revenue Strategies for 2024 - Maximize Earnings',
        description: 'Learn 10 proven strategies to maximize your Google AdSense revenue in 2024. Expert tips for ad placement, optimization, and increasing earnings.',
        keywords: ['AdSense revenue', 'Google AdSense', 'ad optimization', 'website monetization', 'passive income'],
      },
    },
    {
      slug: 'building-profitable-blog-from-scratch',
      title: 'How to Build a Profitable Blog from Scratch: Complete 2024 Guide',
      excerpt: 'Learn step-by-step how to create, grow, and monetize a successful blog that generates consistent income. Perfect for beginners and experienced bloggers.',
      content: `# How to Build a Profitable Blog from Scratch: Complete 2024 Guide

Starting a profitable blog has never been more accessible, yet the competition has also never been fiercer. This comprehensive guide will walk you through every step needed to build a blog that not only attracts readers but generates consistent income.

## Why Start a Blog in 2024?

Despite claims that blogging is dead, it remains one of the most effective ways to:
- Build an online presence
- Generate passive income
- Establish authority in your niche
- Create multiple revenue streams

## Step 1: Choose Your Niche

Selecting the right niche is crucial for long-term success. Consider these factors:

### High-Profit Niches
- Personal finance and investing
- Health and wellness
- Technology and software
- Business and entrepreneurship
- Digital marketing

### Niche Selection Criteria
- Personal interest and expertise
- Market demand
- Competition level
- Monetization potential
- Long-term viability

## Step 2: Set Up Your Blog

### Choose a Platform
WordPress.org is the best choice for serious bloggers because:
- Complete control over your site
- Unlimited customization options
- Better SEO capabilities
- Multiple monetization options

### Essential Setup Steps
1. Purchase hosting and domain
2. Install WordPress
3. Choose a professional theme
4. Install essential plugins
5. Set up Google Analytics

## Step 3: Create High-Quality Content

Content is the foundation of any successful blog. Focus on:

### Content Strategy
- Keyword research and SEO optimization
- Solving specific problems for your audience
- Creating comprehensive, in-depth articles
- Maintaining consistent publishing schedule

### Content Types That Perform Well
- How-to guides and tutorials
- List posts (like "10 Best...")
- Case studies and success stories
- Reviews and comparisons
- Industry news and analysis

## Step 4: Build Your Audience

### SEO Optimization
- Target long-tail keywords
- Optimize meta titles and descriptions
- Build quality backlinks
- Improve site speed and user experience

### Social Media Marketing
- Share content on relevant platforms
- Engage with your community
- Join niche-specific groups
- Collaborate with other bloggers

### Email Marketing
- Create lead magnets
- Build an email list from day one
- Send regular newsletters
- Nurture relationships with subscribers

## Step 5: Monetize Your Blog

### Primary Revenue Streams

**1. Google AdSense**
- Easy to implement
- Passive income potential
- Best for high-traffic sites

**2. Affiliate Marketing**
- Promote products you believe in
- Higher earning potential
- Requires trust and authority

**3. Sponsored Content**
- Partner with brands
- Higher rates than ads
- Maintain editorial integrity

**4. Digital Products**
- Online courses
- E-books
- Templates and tools
- Highest profit margins

**5. Services**
- Consulting
- Freelance writing
- Speaking engagements
- Coaching

## Step 6: Scale and Optimize

### Analytics and Optimization
- Track key metrics
- A/B test different strategies
- Optimize for conversions
- Improve user experience

### Team Building
- Hire freelance writers
- Work with virtual assistants
- Partner with other creators
- Outsource technical tasks

## Common Mistakes to Avoid

1. **Choosing too broad a niche**
2. **Inconsistent posting schedule**
3. **Focusing only on traffic, not engagement**
4. **Monetizing too early**
5. **Ignoring SEO best practices**
6. **Not building an email list**
7. **Giving up too soon**

## Timeline and Expectations

### Months 1-3: Foundation
- Set up blog and basic content
- Start SEO optimization
- Begin building email list

### Months 4-6: Growth
- Increase content production
- Build social media presence
- Start networking with other bloggers

### Months 7-12: Monetization
- Apply for ad networks
- Launch affiliate partnerships
- Create first digital products

### Year 2+: Scale
- Diversify revenue streams
- Build team
- Explore new opportunities

## Conclusion

Building a profitable blog requires patience, consistency, and strategic thinking. While success doesn't happen overnight, following this guide will set you on the right path.

Remember: focus on providing value to your readers first, and monetization will naturally follow. The most successful bloggers are those who genuinely help their audience solve problems.

Start today, stay consistent, and be patient. Your future self will thank you for taking action now.`,
      date: '2024-01-10',
      category: 'Blogging',
      tags: ['Blogging', 'Content Marketing', 'Passive Income', 'SEO', 'WordPress'],
      image: '/images/profitable-blog-guide.jpg',
      author: 'Michael Chen',
      readingTime: '12 min read',
      seo: {
        title: 'How to Build a Profitable Blog from Scratch - Complete 2024 Guide',
        description: 'Learn how to create, grow, and monetize a successful blog from scratch. Step-by-step guide with proven strategies for building profitable blogs in 2024.',
        keywords: ['profitable blog', 'how to start a blog', 'blog monetization', 'blogging guide', 'make money blogging'],
      },
    },
  ]
}
