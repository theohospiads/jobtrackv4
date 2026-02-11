'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'

interface ApplicationInsightsHubProps {
  currentStage: number
  jobTitle: string
  companyName: string
  submittedDate: string
  salaryRange: string
}

export function ApplicationInsightsHub({
  currentStage,
  jobTitle,
  companyName,
  submittedDate,
  salaryRange,
}: ApplicationInsightsHubProps) {
  const { t } = useLanguage()
  const [showSubmissionDetails, setShowSubmissionDetails] = useState(false)
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  // Only show on Application Submitted stage
  if (currentStage !== 0) return null

  const daysUntilFollowUp = 3
  const followUpWindowOpen = false
  const interviewProbability = 'Moderate'
  const alignmentScore = 82
  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const percentileRank = 30
  const applicationMomentum = 'Stable'

  // Dynamic momentum state
  const getMomentumState = () => {
    if (applicationMomentum === 'Stable') {
      return { color: '#10B981', bg: '#F0FDF4', message: 'Within normal review timing' }
    }
    if (applicationMomentum === 'Slowing') {
      return { color: '#F59E0B', bg: '#FFFBEB', message: 'Approaching follow-up window' }
    }
    return { color: '#EF4444', bg: '#FEF2F2', message: 'Follow-up recommended' }
  }

  const momentum = getMomentumState()

  // Dynamic primary action based on state
  const isPrimaryActionPrep = !followUpWindowOpen
  const primaryActionLabel = isPrimaryActionPrep ? 'Start 10-min prep' : 'Send follow-up'

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Stage Command Center - Refined for clarity and narrative */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 32,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Narrative Header with Actionable Momentum */}
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 12px 0',
            }}
          >
            You're in the recruiter review window
          </h2>
          <p
            style={{
              fontSize: 15,
              color: '#475569',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Day {daysSinceSubmission} of {typicalReviewDays} — no action needed yet
          </p>
        </div>

        {/* Visual Time Progress */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {Array.from({ length: typicalReviewDays }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: i < daysSinceSubmission ? '#2563EB' : '#E5E7EB',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Actionable Momentum Signal */}
        <div
          style={{
            background: momentum.bg,
            border: `1px solid ${momentum.color}33`,
            borderRadius: 10,
            padding: 14,
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 500, color: momentum.color, margin: 0 }}>
            {momentum.message}
          </p>
        </div>

        {/* Situation & Forecast - Simplified */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }}>
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#94A3B8',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Current Status
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Application</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  Received
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Queue Status</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  Screening review
                </p>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#94A3B8',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Timeline
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Typical review</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  5-7 days
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Interview odds</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#2563EB', margin: 0 }}>
                  {interviewProbability}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action - Singular Focus */}
        <button
          style={{
            width: '100%',
            background: '#2563EB',
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 500,
            padding: '14px 20px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E40AF'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2563EB'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {primaryActionLabel}
        </button>
      </div>

      {/* Application Fit Analysis - Simplified */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 20px 0',
          }}
        >
          Your Application Fit
        </h3>

        {/* Simplified Overall Fit */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <p style={{ fontSize: 13, color: '#64748B', fontWeight: 500, margin: 0 }}>
              Overall alignment
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#2563EB', margin: 0 }}>
              {alignmentScore}%
            </p>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${alignmentScore}%`,
                background: '#2563EB',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <p style={{ fontSize: 12, color: '#2563EB', fontWeight: 500, margin: '10px 0 0 0' }}>
            Top {percentileRank}% among similar applicants
          </p>
        </div>

        {/* Strengths & Gaps - Collapsible */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
              What's strong
            </p>
            <p style={{ fontSize: 13, color: '#10B981', margin: 0 }}>
              Technical skills alignment
            </p>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
              Next opportunity
            </p>
            <p style={{ fontSize: 13, color: '#F59E0B', margin: 0 }}>
              Add quantified internship impact
            </p>
          </div>
        </div>

        {/* Smart Fix Card */}
        <div
          style={{
            background: '#FFFBEB',
            border: '1px solid #FEE3B1',
            borderRadius: 10,
            padding: 16,
          }}
        >
          <p style={{ fontSize: 12, fontWeight: 600, color: '#92400E', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
            One smart fix
          </p>
          <p style={{ fontSize: 13, fontWeight: 500, color: '#B45309', margin: 0 }}>
            Improve now (5 min)
          </p>
        </div>
      </div>

      {/* Screening Prep - Compact */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 8px 0',
          }}
        >
          Screening prep
        </h3>
        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 20px 0' }}>
          10-minute practice focused on likely questions
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Why are you interested in this company?',
            'Describe a data-driven decision you made.',
            'What tools do you use most?',
          ].map((question, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                padding: 14,
                background: expandedQuestion === idx ? '#F0F9FF' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0, flex: 1 }}>
                  {question}
                </p>
                <span
                  style={{
                    fontSize: 14,
                    color: '#2563EB',
                    flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: expandedQuestion === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </div>

              {expandedQuestion === idx && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #BFDBFE' }}>
                  <button
                    style={{
                      background: '#2563EB',
                      color: '#FFFFFF',
                      fontSize: 12,
                      fontWeight: 500,
                      padding: '6px 12px',
                      borderRadius: 6,
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1E40AF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#2563EB'
                    }}
                  >
                    Run mock answer
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submission Details - Collapsed by Default */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <button
          type="button"
          onClick={() => setShowSubmissionDetails(!showSubmissionDetails)}
          style={{
            width: '100%',
            padding: 16,
            background: '#FFFFFF',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F8FAFC'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FFFFFF'
          }}
        >
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
            Submission record
          </h3>
          <span
            style={{
              fontSize: 12,
              color: '#94A3B8',
              transition: 'transform 0.2s',
              transform: showSubmissionDetails ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>

        {showSubmissionDetails && (
          <div style={{ padding: '0 16px 16px 16px', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
                    CV
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                    v2.3 (Jan 25)
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
                    Cover letter
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                    Custom (Jan 27)
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
                    Salary range
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#2563EB', margin: 0 }}>
                    {salaryRange}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    color: '#2563EB',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = 'underline'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  Download CV
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    color: '#2563EB',
                    textDecoration: 'none',
                    fontWeight: 5,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = 'underline'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  View job description
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
