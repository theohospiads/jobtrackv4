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
  const [prepProgress, setPrepProgress] = useState(40)
  const [showReviewLogic, setShowReviewLogic] = useState(false)
  const [completedOddsBoost, setCompletedOddsBoost] = useState(false)

  if (currentStage !== 0) return null

  // State calculation
  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const profileStrength = 82
  const percentileRank = 30
  const baseInterviewProbability = 34
  const boostedProbability = 39
  const confidenceScore = 74
  const sampleSize = 1200

  // Dynamic messaging based on day in cycle
  const getAdaptiveMessage = () => {
    if (daysSinceSubmission <= 2) {
      return 'You are early in review cycle. No action needed yet.'
    }
    if (daysSinceSubmission === 3) {
      return 'Recruiter decisions often happen soon. Prepare lightly.'
    }
    if (daysSinceSubmission >= 5 && daysSinceSubmission < 8) {
      return 'Review window is closing. Follow-up becomes optimal in 2 days.'
    }
    if (daysSinceSubmission >= 10) {
      return 'Response delay detected. Follow-up recommended now.'
    }
    return 'You are in normal review cycle.'
  }

  // Follow-up state
  const getFollowUpState = () => {
    if (daysSinceSubmission < 5) return 'early'
    if (daysSinceSubmission >= 5 && daysSinceSubmission < 8) return 'optimal'
    return 'overdue'
  }

  const followUpState = getFollowUpState()

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* UPGRADE 1: Hero Block - Outcome-Oriented */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 4px 20px rgba(37, 99, 235, 0.1)',
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 8px 0',
            }}
          >
            You are On Track
          </h2>
          <p
            style={{
              fontSize: 15,
              color: '#475569',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Day {daysSinceSubmission} of typical {typicalReviewDays}-day review cycle
          </p>
        </div>

        <p
          style={{
            fontSize: 14,
            color: '#64748B',
            margin: '0 0 20px 0',
            lineHeight: 1.6,
          }}
        >
          {getAdaptiveMessage()}
        </p>

        {/* UPGRADE 2: Collapsed Meta Indicators (3 only) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 20,
            paddingTop: 20,
            borderTop: '1px solid #E2E8F0',
          }}
        >
          <div>
            <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0', textTransform: 'uppercase' }}>
              Profile Strength
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#2563EB', margin: 0 }}>
              {profileStrength}%
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
              Top {percentileRank}%
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0', textTransform: 'uppercase' }}>
              Timing Status
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#10B981', margin: 0 }}>
              Within Expected Window
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
              Low response risk
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0', textTransform: 'uppercase' }}>
              Interview Likelihood
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: 0 }}>
              {baseInterviewProbability}%
            </p>
            <p style={{ fontSize: 12, color: '#2563EB', margin: '4px 0 0 0' }}>
              Can increase to {boostedProbability}%
            </p>
          </div>
        </div>
      </div>

      {/* UPGRADE 6: Application Confidence Score (Emotional Layer) */}
      <div
        style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: 12,
          padding: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 4px 0' }}>
            Application Confidence
          </p>
          <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
            Based on fit, timing, competition, and improvements completed
          </p>
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#2563EB',
            minWidth: '80px',
            textAlign: 'center',
          }}
        >
          {confidenceScore}
          <span style={{ fontSize: 16, color: '#94A3B8' }}>/100</span>
        </div>
      </div>

      {/* UPGRADE 3: Action Engine - Raise Interview Odds */}
      <div
        style={{
          background: '#FFFBEB',
          border: '2px solid #F59E0B',
          borderRadius: 12,
          padding: 20,
        }}
      >
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: '#B45309',
            margin: '0 0 12px 0',
          }}
        >
          Improve Interview Odds by +5% (5 min task)
        </h3>
        <p style={{ fontSize: 13, color: '#92400E', margin: '0 0 12px 0' }}>
          Add 1 quantified impact bullet to your internship section. Estimated new odds: {boostedProbability}%
        </p>
        <button
          style={{
            background: '#F59E0B',
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 500,
            padding: '10px 18px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onClick={() => setCompletedOddsBoost(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#D97706'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F59E0B'
          }}
        >
          {completedOddsBoost ? 'Completed - Model Recalculated' : 'Start Quick Improvement'}
        </button>
      </div>

      {/* UPGRADE 4: Screening Prep - Structured Flow */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 4px 0',
          }}
        >
          Structured 12-Min Recruiter Simulation
        </h3>
        <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 16px 0' }}>
          Prepare now so you are ready if they call tomorrow.
        </p>

        {/* Progress Tracker */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Progress</p>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: 0 }}>
              You are {prepProgress}% ready for screening
            </p>
          </div>
          <div
            style={{
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
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { step: 'Step 1', title: 'Core Motivation', time: '3 min', completed: true },
            { step: 'Step 2', title: 'Data Impact Story', time: '5 min', completed: false },
            { step: 'Step 3', title: 'Tools Confidence', time: '4 min', completed: false },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: 12,
                padding: 12,
                background: item.completed ? '#F0FDF4' : '#F8FAFC',
                border: `1px solid ${item.completed ? '#DCFCE7' : '#E2E8F0'}`,
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: item.completed ? '#10B981' : '#E5E7EB',
                  color: item.completed ? '#FFFFFF' : '#94A3B8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {item.completed ? '✓' : idx + 1}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 500, margin: '0 0 2px 0' }}>
                  {item.step}
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  {item.title}
                </p>
              </div>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0, flexShrink: 0 }}>
                {item.time}
              </p>
            </div>
          ))}
        </div>

        <button
          style={{
            width: '100%',
            marginTop: 16,
            background: '#2563EB',
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 500,
            padding: '12px 16px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E40AF'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2563EB'
          }}
        >
          Begin Structured Screening Prep
        </button>
      </div>

      {/* UPGRADE 5: Follow-Up Strategy - Adaptive */}
      <div
        style={{
          background:
            followUpState === 'early'
              ? '#F0F9FF'
              : followUpState === 'optimal'
                ? '#F0FDF4'
                : '#FEF2F2',
          border: `2px solid ${
            followUpState === 'early'
              ? '#BFDBFE'
              : followUpState === 'optimal'
                ? '#86EFAC'
                : '#FECACA'
          }`,
          borderRadius: 12,
          padding: 20,
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color:
                followUpState === 'early'
                  ? '#0369A1'
                  : followUpState === 'optimal'
                    ? '#166534'
                    : '#991B1B',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Follow-Up Strategy
          </p>
        </div>

        <h4
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 8px 0',
          }}
        >
          {followUpState === 'early'
            ? 'Too Early to Follow-Up'
            : followUpState === 'optimal'
              ? 'Optimal Window — Send Now'
              : 'Overdue — Send Immediately'}
        </h4>

        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 12px 0' }}>
          {followUpState === 'early' && 'Review window typically spans 7 days. Wait 2 more days for best results.'}
          {followUpState === 'optimal' &&
            'Optimal send time: 9:15-11:00 AM (Based on company response patterns)'}
          {followUpState === 'overdue' && 'Day 10 passed. Recruiter attention wanes after 2 weeks. Send now.'}
        </p>

        <button
          disabled={followUpState === 'early'}
          style={{
            background:
              followUpState === 'early' ? '#E5E7EB' : followUpState === 'optimal' ? '#10B981' : '#DC2626',
            color: followUpState === 'early' ? '#94A3B8' : '#FFFFFF',
            fontSize: 13,
            fontWeight: 500,
            padding: '10px 18px',
            borderRadius: 8,
            border: 'none',
            cursor: followUpState === 'early' ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (followUpState !== 'early') {
              e.currentTarget.style.opacity = '0.9'
            }
          }}
          onMouseLeave={(e) => {
            if (followUpState !== 'early') {
              e.currentTarget.style.opacity = '1'
            }
          }}
        >
          {followUpState === 'early'
            ? 'Available in 2 Days'
            : followUpState === 'optimal'
              ? 'Send Follow-Up Now'
              : 'Send Follow-Up Immediately'}
        </button>
      </div>

      {/* UPGRADE 7: What Happens Next */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 16px 0',
          }}
        >
          What to Expect Next
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#10B981', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
              If Selected
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
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#2563EB', fontWeight: 600 }}>1.</span>
                <span>Recruiter screening (15-20 min)</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#2563EB', fontWeight: 600 }}>2.</span>
                <span>Technical case (if applicable)</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#2563EB', fontWeight: 600 }}>3.</span>
                <span>Hiring manager interview</span>
              </li>
            </ul>
          </div>

          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
              If Not Selected
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
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                Rejection email typically within 10-14 days
              </li>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                Feedback sometimes available on request
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* UPGRADE 8 + 10: Submission Details with AI Badge */}
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
            Official Submission Record
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
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>
                  CV Version
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: '0 0 16px 0' }}>
                  v2.3 (Jan 25)
                </p>

                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>
                  Cover Letter
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: '0 0 16px 0' }}>
                  Custom (Jan 27)
                </p>

                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>
                  Salary Range
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#2563EB', margin: 0 }}>
                  {salaryRange}
                </p>
              </div>

              <div>
                <a
                  href="#"
                  style={{
                    fontSize: 13,
                    color: '#2563EB',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: 12,
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
                    display: 'block',
                    marginBottom: 12,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = 'underline'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  View Job Description
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Review Logic and Model Details */}
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
            Review Logic and Model Details
          </h3>
          <span
            style={{
              fontSize: 14,
              color: '#94A3B8',
              transition: 'transform 0.2s',
              transform: showReviewLogic ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>

        {showReviewLogic && (
          <div style={{ padding: '20px', borderTop: '1px solid #E5E7EB', background: '#F8FAFC' }}>
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: '0 0 10px 0' }}>
                This guidance is personalized based on:
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
                <li style={{ fontSize: 12, color: '#64748B', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#2563EB' }}>●</span>
                  <span>{sampleSize}+ similar applications analyzed</span>
                </li>
                <li style={{ fontSize: 12, color: '#64748B', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#2563EB' }}>●</span>
                  <span>Your profile strength and alignment metrics</span>
                </li>
                <li style={{ fontSize: 12, color: '#64748B', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#2563EB' }}>●</span>
                  <span>Company-specific response patterns and timing</span>
                </li>
              </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 8,
                  padding: 12,
                }}
              >
                <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0' }}>
                  Confidence Interval
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                  34-44%
                </p>
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 8,
                  padding: 12,
                }}
              >
                <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0' }}>
                  Model Version
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                  v3.2 (Jan 2026)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
