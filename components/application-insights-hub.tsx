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
  const percentileRank = 68
  const applicationMomentum = 'Stable'

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Stage Command Center */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #BFDBFE',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.12)',
        }}
      >
        {/* Momentum Signal */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#0F172A',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Momentum:
          </span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: '#10B981',
              background: '#F0FDF4',
              padding: '4px 10px',
              borderRadius: 6,
            }}
          >
            {applicationMomentum}
          </span>
        </div>

        {/* Dynamic Stage Label */}
        <div style={{ marginBottom: 28 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 4px 0',
            }}
          >
            Application Submitted - Monitoring Phase
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#64748B',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Day {daysSinceSubmission} of typical {typicalReviewDays}-day review window
          </p>
        </div>

        {/* Situation Snapshot and Intelligent Forecast */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 32 }}>
          {/* Left: Situation Snapshot */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#94A3B8',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Situation Snapshot
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Status</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  Application received
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Likely state</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  In screening queue
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Submitted</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  {submittedDate}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Intelligent Forecast */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#94A3B8',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Intelligent Forecast
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>
                  Typical review time
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  5-7 days from submission
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>
                  Interview probability
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#2563EB', margin: 0 }}>
                  {interviewProbability}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>
                  Competition level
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  Moderate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Micro-Progress Context */}
        <div
          style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: 12,
            padding: 14,
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 13, color: '#475569', fontWeight: 500, margin: 0 }}>
            You are {daysSinceSubmission} days into the average {typicalReviewDays}-day review cycle.
          </p>
        </div>

        {/* Today's Recommended Move */}
        <div
          style={{
            background: '#F0F9FF',
            border: '2px solid #BFDBFE',
            borderRadius: 12,
            padding: 18,
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#0369A1',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Today's Recommended Move
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: '#1E40AF',
              margin: '0 0 8px 0',
            }}
          >
            Light preparation (10-15 minutes)
          </p>
          <p style={{ fontSize: 13, color: '#0369A1', margin: 0 }}>
            Why: Interview probability is {interviewProbability.toLowerCase()}. Follow-up window opens in {daysUntilFollowUp} days.
          </p>
        </div>

        {/* If No Response Plan */}
        <div
          style={{
            background: '#FFFBEB',
            border: '1px solid #FEE3B1',
            borderRadius: 12,
            padding: 16,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#92400E',
              margin: '0 0 10px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            If No Response by Day {typicalReviewDays}
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <li style={{ fontSize: 13, color: '#92400E' }}>
              <span style={{ fontWeight: 500 }}>→</span> Send concise follow-up message
            </li>
            <li style={{ fontSize: 13, color: '#92400E' }}>
              <span style={{ fontWeight: 500 }}>→</span> Consider referral activation
            </li>
            <li style={{ fontSize: 13, color: '#92400E' }}>
              <span style={{ fontWeight: 500 }}>→</span> Review alignment gaps in application
            </li>
          </ul>
        </div>
      </div>

      {/* Application Fit Analysis */}
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
            margin: '0 0 24px 0',
          }}
        >
          Application Fit Analysis
        </h3>

        {/* Overall Alignment */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <p style={{ fontSize: 13, color: '#64748B', fontWeight: 500, margin: 0 }}>Overall Alignment</p>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#2563EB', margin: 0 }}>{alignmentScore}%</p>
          </div>
          {/* Horizontal confidence bar */}
          <div
            style={{
              height: 8,
              background: '#E5E7EB',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${alignmentScore}%`,
                background: '#2563EB',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          {/* Benchmarking Percentile */}
          <p style={{ fontSize: 12, color: '#0369A1', fontWeight: 500, margin: '8px 0 0 0' }}>
            You rank above {percentileRank}% of applicants with similar backgrounds.
          </p>
        </div>

        {/* Strengths and Gaps Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          {/* Strengths */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
              Your Strengths
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#10B981', fontWeight: 600, flexShrink: 0 }}>✓</span>
                <span>Strong technical skills alignment</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#10B981', fontWeight: 600, flexShrink: 0 }}>✓</span>
                <span>Relevant industry experience</span>
              </li>
            </ul>
          </div>

          {/* Gaps */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
              Experience Gaps
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#F59E0B', fontWeight: 600, flexShrink: 0 }}>−</span>
                <span>Limited direct internship experience</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#F59E0B', fontWeight: 600, flexShrink: 0 }}>−</span>
                <span>Fewer quantified impact examples</span>
              </li>
            </ul>
          </div>
        </div>

        {/* One Actionable Fix */}
        <div
          style={{
            background: '#FFFBEB',
            border: '2px solid #F59E0B',
            borderRadius: 10,
            padding: 16,
          }}
        >
          <p style={{ fontSize: 12, color: '#92400E', fontWeight: 600, margin: '0 0 6px 0', textTransform: 'uppercase' }}>
            One Smart Fix
          </p>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#B45309', margin: '0 0 6px 0' }}>
            Add 1 quantified internship impact
          </p>
          <p style={{ fontSize: 12, color: '#92400E', margin: 0 }}>
            This addresses your weakest signal and increases fit estimate by ~5%
          </p>
        </div>
      </div>

      {/* Screening Prep */}
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
            margin: '0 0 6px 0',
          }}
        >
          Screening Prep
        </h3>
        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 20px 0' }}>
          Est. prep time: 12 minutes
        </p>

        {/* Interview Questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Why are you interested in this company?',
            'Describe a time you made a data-driven decision.',
            'What tools or technologies do you work with most?',
          ].map((question, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                padding: 16,
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
                    fontSize: 16,
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
                    Generate sample answer
                  </button>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '8px 0 0 0' }}>
                    AI will generate a sample answer based on your profile.
                  </p>
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
            padding: 20,
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
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>
            Submission Details
          </h3>
          <span
            style={{
              fontSize: 14,
              color: '#94A3B8',
              transition: 'transform 0.2s',
              transform: showSubmissionDetails ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>

        {showSubmissionDetails && (
          <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>CV version</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>v2.3 (Jan 25)</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>Cover letter</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>Custom (Jan 27)</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>Salary range</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#2563EB', margin: 0 }}>{salaryRange}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href="#"
                  style={{
                    fontSize: 13,
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
                  Download CV →
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: 13,
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
                  View job description →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Follow-up Window */}
      <div
        style={{
          background: followUpWindowOpen ? '#F0FDF4' : '#F0F9FF',
          border: `1px solid ${followUpWindowOpen ? '#BFEF45' : '#BFDBFE'}`,
          borderRadius: 12,
          padding: 18,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: followUpWindowOpen ? '#166534' : '#0369A1', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
            Follow-up Window
          </p>
          <p style={{ fontSize: 14, fontWeight: 500, color: followUpWindowOpen ? '#15803D' : '#1E40AF', margin: 0 }}>
            {followUpWindowOpen ? 'Ready to send' : `Opens in ${daysUntilFollowUp} days`}
          </p>
        </div>
        <button
          style={{
            padding: '10px 18px',
            background: followUpWindowOpen ? '#2563EB' : '#E5E7EB',
            color: followUpWindowOpen ? '#FFFFFF' : '#94A3B8',
            fontSize: 13,
            fontWeight: 500,
            border: 'none',
            borderRadius: 8,
            cursor: followUpWindowOpen ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
          }}
          disabled={!followUpWindowOpen}
          onMouseEnter={(e) => {
            if (followUpWindowOpen) {
              e.currentTarget.style.background = '#1E40AF'
            }
          }}
          onMouseLeave={(e) => {
            if (followUpWindowOpen) {
              e.currentTarget.style.background = '#2563EB'
            }
          }}
        >
          {followUpWindowOpen ? 'Send Follow-up' : 'Not Yet Available'}
        </button>
      </div>
    </div>
  )
}
