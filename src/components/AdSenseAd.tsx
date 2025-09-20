'use client'

import { useEffect } from 'react'

interface AdSenseAdProps {
  slot: string
  style?: React.CSSProperties
  format?: string
  fullWidthResponsive?: boolean
  layoutKey?: string
  className?: string
}

export default function AdSenseAd({
  slot,
  style = { display: 'block' },
  format = 'auto',
  fullWidthResponsive = true,
  layoutKey,
  className = '',
}: AdSenseAdProps) {
  useEffect(() => {
    try {
      // Check if adsbygoogle is available
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
        } catch (pushError) {
          console.error('AdSense push error:', pushError)
        }
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      <div className="ad-label">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-7293035481176888" // Your AdSense ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive.toString()}
        {...(layoutKey && { 'data-ad-layout-key': layoutKey })}
      />
    </div>
  )
}

// High-CPC Ad Component for premium placements
export function PremiumAd({ className = '' }: { className?: string }) {
  return (
    <AdSenseAd
      slot="1111111111" // Premium slot for high-CPC ads
      style={{ display: 'block', textAlign: 'center' }}
      format="rectangle"
      fullWidthResponsive={false}
      className={className}
    />
  )
}

// Mobile-optimized Ad Component
export function MobileAd({ className = '' }: { className?: string }) {
  return (
    <div className={`adsense-mobile ${className}`}>
      <AdSenseAd
        slot="2222222222" // Mobile-specific slot
        style={{ display: 'block' }}
        format="rectangle"
        fullWidthResponsive={true}
      />
    </div>
  )
}

// Desktop-optimized Ad Component
export function DesktopAd({ className = '' }: { className?: string }) {
  return (
    <div className={`adsense-desktop ${className}`}>
      <AdSenseAd
        slot="3333333333" // Desktop-specific slot
        style={{ display: 'inline-block', width: '728px', height: '90px' }}
        format="auto"
        fullWidthResponsive={false}
      />
    </div>
  )
}

// In-Article Ad Component (performs well)
export function InArticleAd({ className = '' }: { className?: string }) {
  return (
    <AdSenseAd
      slot="4444444444" // In-article slot
      style={{ display: 'block', textAlign: 'center' }}
      format="fluid"
      layoutKey="-6t+ed+2i-1n-4w"
      className={className}
    />
  )
}

// Sidebar Ad Component
export function SidebarAd({ className = '' }: { className?: string }) {
  return (
    <AdSenseAd
      slot="5555555555" // Sidebar slot
      style={{ display: 'inline-block', width: '300px', height: '600px' }}
      format="auto"
      fullWidthResponsive={false}
      className={className}
    />
  )
}
