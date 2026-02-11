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
  const [showReviewLogic, setShowReviewLogic] = useState(false)

  if (currentStage !== 0) return null

  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const profileStrength = 82
  const percentileRank = 30
  const baseInterviewProbability = 34
  const boostedProbability = 39
  const confidenceScore = 74
  const sampleSize = 1200
  const systemUpdateTime = 'Today, 11:32 AM'

  const getFollowUpState = () => {
    if (daysSinceSubmission < 5) return 'restricted'
    if (daysSinceSubmission >= 5 && daysSinceSubmission < 8) return 'optimal'
    return 'overdue'
  }

  const followUpState = getFollowUpState()

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Institutional Signal - System Meta Line */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid #E5E7EB' }}>
        <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500, margin: 0 }}>
          Last system update: {systemUpdateTime}
        </p>
        <p style={{ fontSize: 11, color: '#0369A1', fontWeight: 500, margin: 0 }}>
          Data confidence: High ({sampleSize}+ cases)
        </p>
      </div>

      {/* V9 UPGRADE 1: Consolidated Application Status Intelligence Block */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 4px 20px rgba(37, 99, 235, 0.1)',
        }}
      >
        <p style={{ fontSize: 12, fontWeight: 600, color: '#2563EB', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Application Status Intelligence
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 24 }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>On Track</p>
            <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>Confidence: {confidenceScore}/100</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Profile Strength</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>{profileStrength}% (Top {percentileRank}%)</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Interview Likelihood</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', margin: 0 }}>{baseInterviewProbability}% (↑ to {boostedProbability}% with 1 improvement)</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 2px 0' }}>Timing Status</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>Day {daysSinceSubmission} of {typicalReviewDays}-day window</p>
            </div>
          </div>
        </div>
      </div>

      {/* V9 UPGRADE 2: Decision Pathways - Scenario-Driven Clarity */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, color: '#0F172A', margin: '0 0 24px 0' }}>
          Decision Pathways
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Path A - Screening Triggered */}
          <div
            style={{
              background: '#F0F9FF',
              border: '1px solid #BFDBFE',
              borderRadius: 12,
              padding: 20,
            }}
          >
            <p style={{ fontSize: 13, fontWeight: 600, color: '#0369A1', margin: '0 0 12px 0' }}>
              Path A: Screening Triggered
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
              <div>
                <p style={{ fontSize: 11, color: '#0369A1', fontWeight: 600, margin: '0 0 2px 0' }}>Probability</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>34%</p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#0369A1', fontWeight: 600, margin: '0 0 2px 0' }}>Expected in</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>2–4 days</p>
              </div>
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#0369A1', margin: '0 0 8px 0' }}>Next Steps:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li style={{ fontSize: 12, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600, flexShrink: 0 }}>•</span>
                <span>15–20 min recruiter call</span>
              </li>
              <li style={{ fontSize: 12, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600, flexShrink: 0 }}>•</span>
                <span>Role motivation discussion</span>
              </li>
              <li style={{ fontSize: 12, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600, flexShrink: 0 }}>•</span>
                <span>Experience deep dive</span>
              </li>
            </ul>
          </div>

          {/* Path B - No Selection */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              padding: 20,
            }}
          >
            <p style={{ fontSize: 13, fontWeight: 600, color: '#475569', margin: '0 0 12px 0' }}>
              Path B: No Selection
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
              <div>
                <p style={{ fontSize: 11, color: '#475569', fontWeight: 600, margin: '0 0 2px 0' }}>Probability</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>66%</p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#475569', fontWeight: 600, margin: '0 0 2px 0' }}>Typical timeline</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>10–14 days</p>
              </div>
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#475569', margin: '0 0 8px 0' }}>Recommended Action:</p>
            <p style={{ fontSize: 12, color: '#0F172A', margin: 0 }}>
              Archive and submit optional feedback request to understand gaps for future applications.
            </p>
          </div>
        </div>
      </div>

      {/* V9 UPGRADE 4: Follow-Up Governance State */}
      <div
        style={{
          background: followUpState === 'restricted' ? '#FEF2F2' : followUpState === 'optimal' ? '#F0FDF4' : '#FFFBEB',
          border: `1px solid ${followUpState === 'restricted' ? '#FECACA' : followUpState === 'optimal' ? '#86EFAC' : '#FEE3B1'}`,
          borderRadius: 12,
          padding: 20,
        }}
      >
        <p style={{ fontSize: 12, fontWeight: 600, color: followUpState === 'restricted' ? '#991B1B' : followUpState === 'optimal' ? '#166534' : '#92400E', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Follow-Up Governance State
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div>
            <p style={{ fontSize: 12, color: followUpState === 'restricted' ? '#7F1D1D' : followUpState === 'optimal' ? '#15803D' : '#92400E', fontWeight: 500, margin: '0 0 4px 0' }}>
              Status: {followUpState === 'restricted' ? 'Restricted' : followUpState === 'optimal' ? 'Optimal' : 'Overdue'}
            </p>
            <p style={{ fontSize: 13, color: followUpState === 'restricted' ? '#991B1B' : followUpState === 'optimal' ? '#166534' : '#92400E', fontWeight: 600, margin: '0 0 8px 0' }}>
              {followUpState === 'restricted' ? 'Reason: Within recruiter review window' : followUpState === 'optimal' ? 'Reason: Review window closing soon' : 'Reason: Response timeline exceeded'}
            </p>
            <p style={{ fontSize: 12, color: followUpState === 'restricted' ? '#7F1D1D' : followUpState === 'optimal' ? '#15803D' : '#92400E', margin: 0 }}>
              Unlock date: Feb 14 (2 days)
            </p>
          </div>
          <button
            style={{
              padding: '10px 16px',
              background: followUpState === 'restricted' ? '#E5E7EB' : '#2563EB',
              color: followUpState === 'restricted' ? '#94A3B8' : '#FFFFFF',
              fontSize: 13,
              fontWeight: 500,
              border: 'none',
              borderRadius: 8,
              cursor: followUpState === 'restricted' ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
            disabled={followUpState === 'restricted'}
            onMouseEnter={(e) => {
              if (followUpState !== 'restricted') {
                e.currentTarget.style.background = '#1E40AF'
              }
            }}
            onMouseLeave={(e) => {
              if (followUpState !== 'restricted') {
                e.currentTarget.style.background = '#2563EB'
              }
            }}
          >
            {followUpState === 'restricted' ? 'Not Yet Available' : 'Send Follow-Up'}
          </button>
        </div>
      </div>

      {/* V9 UPGRADE 5: Data-Backed Directive Messaging */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0' }}>
          Recruiter Activity Pattern
        </h3>
        <p style={{ fontSize: 13, color: '#0F172A', lineHeight: 1.6, margin: 0 }}>
          Recruiter review activity peaks between days 4–6 in the review cycle. Completing your structured prep now increases readiness without over-investing time. Based on {sampleSize}+ comparable applications, candidates who complete prep during this window increase interview likelihood by 5–8%.
        </p>
      </div>

      {/* V9 UPGRADE 3: Government-Grade Explainability */}
      <div
        style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
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
          <h4 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
            Review Logic and Model Basis
          </h4>
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
          <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid #E2E8F0', background: '#F8FAFC' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <p style={{ fontSize: 11, color: '#64748B', fontWeight: 600, margin: '0 0 4px 0' }}>Data Source</p>
                <p style={{ fontSize: 12, color: '#0F172A', margin: 0 }}>Based on {sampleSize}+ historical company applications in Product / Data roles</p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#64748B', fontWeight: 600, margin: '0 0 4px 0' }}>Your Profile Match</p>
                <p style={{ fontSize: 12, color: '#0F172A', margin: 0 }}>Ranks at 70th percentile for this role cluster</p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#64748B', fontWeight: 600, margin: '0 0 4px 0' }}>Response Timing Pattern</p>
                <p style={{ fontSize: 12, color: '#0F172A', margin: 0 }}>Average response time for this employer is 7.2 days</p>
              </div>
              <div
                style={{
                  background: '#FFFBEB',
                  border: '1px solid #FEE3B1',
                  borderRadius: 8,
                  padding: 12,
                  marginTop: 8,
                }}
              >
                <p style={{ fontSize: 11, color: '#92400E', fontWeight: 600, margin: '0 0 4px 0', textTransform: 'uppercase' }}>
                  Model Governance
                </p>
                <p style={{ fontSize: 12, color: '#92400E', margin: 0 }}>
                  This guidance does not guarantee outcomes. It provides probabilistic estimates based on anonymized historical data and may not reflect current hiring conditions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Submission Details - Collapsed */}
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
          <h4 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
            Official Submission Record
          </h4>
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
          <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid #E5E7EB', background: '#F8FAFC' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 4px 0' }}>Submitted</p>
                  <p style={{ fontSize: 12, color: '#0F172A', margin: 0 }}>{submittedDate}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, margin: '0 0 4px 0' }}>Salary Range</p>
                  <p style={{ fontSize: 12, color: '#2563EB', fontWeight: 600, margin: 0 }}>{salaryRange}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
                    fontWeight: 500,
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
    </div>
  )
}
