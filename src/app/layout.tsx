import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Global Insights Blog - Expert Tips & Strategies',
    template: '%s | Global Insights Blog'
  },
  description: 'Discover expert insights, proven strategies, and actionable tips for success in business, technology, finance, and personal development.',
  keywords: [
    'business tips',
    'technology insights', 
    'financial advice',
    'personal development',
    'productivity',
    'entrepreneurship',
    'investment strategies',
    'career growth'
  ],
  authors: [{ name: 'Global Insights Team' }],
  creator: 'Global Insights Blog',
  publisher: 'Global Insights Blog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // TODO: Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Global Insights Blog - Expert Tips & Strategies',
    description: 'Discover expert insights, proven strategies, and actionable tips for success in business, technology, finance, and personal development.',
    siteName: 'Global Insights Blog',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Insights Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Insights Blog - Expert Tips & Strategies',
    description: 'Discover expert insights, proven strategies, and actionable tips for success.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google AdSense - Replace with your AdSense ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics - Replace with your GA4 ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Global Insights Blog",
              "description": "Expert insights and strategies for business, technology, and personal development",
              "url": "https://your-domain.com",
              "author": {
                "@type": "Organization",
                "name": "Global Insights Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Global Insights Blog",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://your-domain.com/images/logo.png"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
