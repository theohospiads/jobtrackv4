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

  // Only show on Application Submitted stage
  if (currentStage !== 0) return null

  const daysUntilFollowUp = 3
  const followUpWindowOpen = false
  const interviewProbability = 'Moderate'
  const alignmentScore = 82

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* 1️⃣ STAGE COMMAND CENTER — Unified Decision Block */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #BFDBFE',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.12)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 4px 0',
            }}
          >
            Application Submitted — Monitoring Phase
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#64748B',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Your application is in the recruiter screening queue.
          </p>
        </div>

        {/* Two-Column Layout: Situation Snapshot | Intelligent Forecast */}
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
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Competition</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  Moderate
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
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Typical review</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  5–7 days
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Interview probability</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#10B981', margin: 0 }}>
                  {interviewProbability}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Response chance</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#10B981', margin: 0 }}>
                  High
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Follow-up window opens</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  In {daysUntilFollowUp} days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#E5E7EB', marginBottom: 32 }} />

        {/* Bottom Section: Today's Recommendation + Primary Action */}
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
            Today's Recommendation
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: '#0F172A',
              margin: '0 0 16px 0',
              lineHeight: 1.5,
            }}
          >
            Light preparation recommended. No follow-up action required yet.
          </p>
          <button
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#2563EB',
              background: '#F0F9FF',
              border: '1px solid #BFDBFE',
              borderRadius: 8,
              padding: '10px 16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E0F2FE'
              e.currentTarget.style.borderColor = '#7DD3FC'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F0F9FF'
              e.currentTarget.style.borderColor = '#BFDBFE'
            }}
          >
            Start 10-min screening prep
            <span style={{ fontSize: 12 }}>→</span>
          </button>
        </div>
      </div>

      {/* 2️⃣ APPLICATION FIT ANALYSIS — Streamlined Assessment */}
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

        {/* Horizontal Alignment Bar */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>Overall Alignment</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#2563EB', margin: 0 }}>
              {alignmentScore}%
            </p>
          </div>
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
                background: 'linear-gradient(90deg, #2563EB, #0369A1)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Strengths & Gaps Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }}>
          {/* Strengths */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#10B981',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
              }}
            >
              Your Strengths
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Skills alignment', 'Industry relevance'].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    fontSize: 14,
                    color: '#0F172A',
                  }}
                >
                  <span style={{ color: '#10B981', fontWeight: 600 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gaps */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#F59E0B',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
              }}
            >
              Your Gaps
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Experience depth (moderate)'].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    fontSize: 14,
                    color: '#0F172A',
                  }}
                >
                  <span style={{ color: '#F59E0B', fontWeight: 600 }}>!</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Smart Improvement Suggestion */}
        <div
          style={{
            background: '#FFFBEB',
            border: '2px solid #F59E0B',
            borderRadius: 10,
            padding: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: 12, color: '#92400E', fontWeight: 600, margin: '0 0 4px 0' }}>
              Suggested improvement
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#B45309', margin: 0 }}>
              Add 1 quantified internship impact
            </p>
          </div>
          <a
            href="#"
            style={{
              fontSize: 13,
              color: '#B45309',
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              marginLeft: 16,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            Fix (5 min) →
          </a>
        </div>
      </div>

      {/* 3️⃣ SCREENING PREP — Compact Action Card */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 20,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#0F172A',
              margin: 0,
            }}
          >
            Preparing for screening
          </h3>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: '#94A3B8',
              background: '#F8FAFC',
              padding: '4px 12px',
              borderRadius: 6,
            }}
          >
            Est. 12 min
          </span>
        </div>

        <p
          style={{
            fontSize: 13,
            color: '#64748B',
            margin: '0 0 14px 0',
          }}
        >
          Recruiters typically ask:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {[
            'Why this company?',
            'Describe a data-driven decision you made.',
            'What tools have you used most recently?',
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                fontSize: 14,
                color: '#0F172A',
                display: 'flex',
                gap: 10,
              }}
            >
              <span style={{ color: '#2563EB', fontWeight: 600, flexShrink: 0 }}>
                {idx + 1}.
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#2563EB',
            background: '#F0F9FF',
            border: '1px solid #BFDBFE',
            borderRadius: 8,
            padding: '10px 16px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E0F2FE'
            e.currentTarget.style.borderColor = '#7DD3FC'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F0F9FF'
            e.currentTarget.style.borderColor = '#BFDBFE'
          }}
        >
          Practice answers
          <span style={{ fontSize: 12 }}>→</span>
        </button>
      </div>

      {/* 4️⃣ SUBMISSION DETAILS — Collapsed by Default */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <button
          onClick={() => setShowSubmissionDetails(!showSubmissionDetails)}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 15,
            fontWeight: 600,
            color: '#0F172A',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F8FAFC'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <span>Submission Details</span>
          <span
            style={{
              fontSize: 12,
              color: '#94A3B8',
              transform: showSubmissionDetails ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
            }}
          >
            ↓
          </span>
        </button>

        {showSubmissionDetails && (
          <div
            style={{
              padding: '0 20px 20px 20px',
              borderTop: '1px solid #E5E7EB',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
            }}
          >
            {/* Left Column */}
            <div>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>
                  CV version
                </p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  v2.3 (Jan 25)
                </p>
              </div>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>
                  Cover letter
                </p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  Custom (Jan 27)
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>
                  Salary at submission
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', margin: 0 }}>
                  {salaryRange}
                </p>
              </div>
            </div>

            {/* Right Column - Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Download CV', 'View cover letter', 'View job description'].map((label, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    fontSize: 13,
                    color: '#2563EB',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1E40AF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#2563EB'
                  }}
                >
                  {label}
                  <span style={{ fontSize: 11 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
