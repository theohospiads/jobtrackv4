'use client';

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroInsightCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="w-full rounded-2xl"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)'
      }}
    >
      {/* Collapsed Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span 
            className="text-xs font-semibold uppercase"
            style={{ 
              color: '#2563EB',
              letterSpacing: '0.08em'
            }}
          >
            TOP PRIORITY
          </span>
          <h2 
            className="text-lg font-semibold leading-[1.35]"
            style={{ color: '#0F172A' }}
          >
            Your job search is stalling
          </h2>
        </div>
        <ChevronDown 
          className="transition-transform duration-200"
          style={{ 
            color: '#64748B',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
          size={20}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t px-5 pb-5" style={{ borderColor: '#E5E7EB' }}>
          {/* Section: Why this matters */}
          <div className="mt-4">
            <h3
              className="mb-1 text-sm font-semibold"
              style={{ color: '#475569' }}
            >
              Why this matters
            </h3>
            <p 
              className="max-w-[640px] text-sm leading-relaxed"
              style={{ color: '#475569' }}
            >
              You haven't followed up on 3 applications older than 7 days.
              <br />
              This is currently the biggest blocker to getting interviews.
            </p>
          </div>

          {/* Section: What to do */}
          <div className="mt-4">
            <h3
              className="mb-1 text-sm font-semibold"
              style={{ color: '#475569' }}
            >
              What to do
            </h3>
            <p 
              className="text-sm"
              style={{ color: '#334155' }}
            >
              Send 3 follow-ups (≈ 5 minutes)
            </p>
          </div>

          {/* Primary CTA */}
          <button
            className="mt-5 h-11 w-fit cursor-pointer rounded-[10px] px-5 text-sm font-semibold transition-all duration-[120ms] ease-in-out"
            style={{
              background: '#2563EB',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1D4ED8'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2563EB'}
          >
            Send follow-ups now
          </button>
        </div>
      )}
    </div>
  )
}
