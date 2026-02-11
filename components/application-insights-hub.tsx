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
  const [prepProgress, setPrepProgress] = useState(0)
  const [showReviewLogic, setShowReviewLogic] = useState(false)

  // Only show on Application Submitted stage
  if (currentStage !== 0) return null

  // State variables
  const daysUntilFollowUp = 3
  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const alignmentScore = 82
  const percentileRank = 30
  const interviewProbabilityBefore = 34
  const interviewProbabilityAfter = 39
  const applicationMomentum = 'Stable'
  const dataSourceSampleSize = 1200

  // Dynamic momentum state
  const getMomentumState = () => {
    if (applicationMomentum === 'Stable') {
      return {
        color: '#10B981',
        bg: '#F0FDF4',
        message: 'You are in the 40% fastest response zone based on company patterns',
      }
    }
    if (applicationMomentum === 'Slowing') {
      return {
        color: '#F59E0B',
        bg: '#FFFBEB',
        message: 'Approaching optimal follow-up timing',
      }
    }
    return {
      color: '#EF4444',
      bg: '#FEF2F2',
      message: 'Consider follow-up action',
    }
  }

  const momentum = getMomentumState()
  const followUpReadyDate = new Date()
  followUpReadyDate.setDate(followUpReadyDate.getDate() + daysUntilFollowUp)
  const followUpDateString = followUpReadyDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  const screeningSteps = [
    {
      title: 'Core motivation',
      description: 'Why this role, why this company',
      duration: '3 min',
    },
    {
      title: 'Data story',
      description: 'Quantified impact and decision-making example',
      duration: '5 min',
    },
    {
      title: 'Tools confidence',
      description: 'Recent technology experience and learning approach',
      duration: '4 min',
    },
  ]

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* 1. Recruiter Review Window - Elevated with Data-Backed State */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #BFDBFE',
          borderRadius: 12,
          padding: 32,
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)',
        }}
      >
        <div style={{ marginBottom: 28 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 8px 0',
            }}
          >
            Recruiter Review Window
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#64748B',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Day {daysSinceSubmission} of {typicalReviewDays} in the typical review cycle
          </p>
        </div>

        {/* Percentile Timing + Risk Meter */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Your Position
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#2563EB', margin: '0 0 4px 0' }}>
              Top {percentileRank}%
            </p>
            <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
              Compared to similar applicant profiles
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Response Risk
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <p style={{ fontSize: 16, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                Low
              </p>
            </div>
            <p style={{ fontSize: 13, color: '#64748B', margin: '4px 0 0 0' }}>
              Based on {dataSourceSampleSize}+ similar applications
            </p>
          </div>
        </div>

        {/* Data-backed momentum messaging */}
        <div
          style={{
            background: momentum.bg,
            border: `1px solid ${momentum.color}20`,
            borderRadius: 10,
            padding: 16,
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 500, color: momentum.color, margin: 0 }}>
            {momentum.message}
          </p>
        </div>

        {/* Primary Action - Dominant CTA */}
        <button
          style={{
            width: '100%',
            padding: '16px 24px',
            background: '#2563EB',
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 500,
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E40AF'
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.35)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2563EB'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.25)'
          }}
        >
          Begin structured screening prep
        </button>
      </div>

      {/* 2. Application Fit - Probability-Focused */}
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
          {/* Overall Alignment */}
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 10px 0', textTransform: 'uppercase' }}>
              Overall Alignment
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <p style={{ fontSize: 32, fontWeight: 700, color: '#2563EB', margin: 0 }}>
                {alignmentScore}%
              </p>
              <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                Strong match
              </p>
            </div>
          </div>

          {/* Interview Probability Shift */}
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 10px 0', textTransform: 'uppercase' }}>
              Interview Probability
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <p style={{ fontSize: 14, fontWeight: 500, color: '#64748B', margin: 0 }}>
                Current: {interviewProbabilityBefore}%
              </p>
              <span style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>
                +{interviewProbabilityAfter - interviewProbabilityBefore}%
              </span>
            </div>
          </div>
        </div>

        {/* One Smart Fix with Probability Translation */}
        <div
          style={{
            background: '#FFFBEB',
            border: '2px solid #F59E0B',
            borderRadius: 10,
            padding: 18,
          }}
        >
          <p style={{ fontSize: 12, color: '#92400E', fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            Raise Interview Odds
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#B45309', margin: '0 0 8px 0' }}>
            {interviewProbabilityBefore}% to {interviewProbabilityAfter}%
          </p>
          <p style={{ fontSize: 13, color: '#92400E', margin: 0 }}>
            Add 1 quantified internship impact (5 min)
          </p>
        </div>
      </div>

      {/* 3. Screening Prep - Structured Workflow */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#0F172A',
              margin: '0 0 8px 0',
            }}
          >
            Screening Prep (12 min)
          </h3>
          {/* Progress Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                flex: 1,
                height: 6,
                background: '#E5E7EB',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${prepProgress}%`,
                  background: '#2563EB',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#2563EB', margin: 0, whiteSpace: 'nowrap' }}>
              {prepProgress}%
            </p>
          </div>
        </div>

        {/* Step-by-Step Workflow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {screeningSteps.map((step, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                padding: 14,
                background: expandedQuestion === idx ? '#F0F9FF' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: '#E5E7EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#64748B',
                      }}
                    >
                      {idx + 1}
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                      {step.title}
                    </p>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', margin: 0, marginLeft: 34 }}>
                    {step.description}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: '#94A3B8' }}>
                    {step.duration}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: '#2563EB',
                      transition: 'transform 0.2s',
                      transform: expandedQuestion === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Follow-up Strategy - Single Smart Module */}
      <div
        style={{
          background: '#F0F9FF',
          border: '1px solid #BFDBFE',
          borderRadius: 12,
          padding: 22,
        }}
      >
        <p style={{ fontSize: 12, color: '#0369A1', fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
          Follow-up Strategy
        </p>
        <p style={{ fontSize: 15, fontWeight: 600, color: '#1E40AF', margin: '0 0 12px 0' }}>
          Opens {followUpDateString} ({daysUntilFollowUp} days)
        </p>
        <p style={{ fontSize: 13, color: '#0369A1', margin: 0 }}>
          Recommended send time: Morning. A concise follow-up resurfaces your application at optimal timing.
        </p>
      </div>

      {/* 5. Official Submission Record - Collapsed */}
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
            padding: 18,
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
            Official submission record
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
          <div style={{ padding: '0 18px 18px 18px', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#2563EB', margin: 0 }}>
                    {salaryRange}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                  Download CV
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
                  View job description
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6. Review Logic & Model Basis - Expandable Trust Element */}
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
          onClick={() => setShowReviewLogic(!showReviewLogic)}
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
          <p style={{ fontSize: 13, fontWeight: 500, color: '#64748B', margin: 0 }}>
            Review logic and model basis
          </p>
          <span
            style={{
              fontSize: 12,
              color: '#94A3B8',
              transition: 'transform 0.2s',
              transform: showReviewLogic ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>

        {showReviewLogic && (
          <div style={{ padding: '16px', borderTop: '1px solid #E5E7EB', background: '#F8FAFC' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 4px 0' }}>
                  Typical review time source
                </p>
                <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                  Historical data from {dataSourceSampleSize}+ similar applications
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 4px 0' }}>
                  Confidence interval
                </p>
                <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                  95% (standard deviation: 1.2 days)
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 4px 0' }}>
                  Last updated
                </p>
                <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                  Yesterday at 3:42 PM
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 4px 0' }}>
                  Data sample size
                </p>
                <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                  {dataSourceSampleSize} applications in this company and role cluster
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
