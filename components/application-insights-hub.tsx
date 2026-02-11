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
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Only show on Application Submitted stage
  if (currentStage !== 0) return null

  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const applicationConfidence = 74
  const interviewProbability = 'Moderate'
  const systemLastUpdated = 'Live'

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* SYSTEM STATE HEADER */}
      <div
        style={{
          background: '#F0F9FF',
          border: '1px solid #BFDBFE',
          borderRadius: 8,
          padding: 14,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p style={{ fontSize: 12, color: '#0369A1', fontWeight: 600, margin: '0 0 2px 0' }}>
            APPLICATION STATE
          </p>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#1E40AF', margin: 0 }}>
            ACTIVE — Under Recruiter Review
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: 11, color: '#0369A1', fontWeight: 500, margin: '0 0 2px 0' }}>
            System Confidence
          </p>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', margin: 0 }}>
            {systemLastUpdated}
          </p>
        </div>
      </div>

      {/* MERGED INTELLIGENCE BLOCK */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h2
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#0F172A',
            margin: '0 0 24px 0',
          }}
        >
          Application Status Intelligence
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 28 }}>
          {/* Metric 1: Interview Likelihood */}
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase' }}>
              Interview Likelihood
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#2563EB', margin: '0 0 4px 0' }}>
              {interviewProbability}
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
              Based on profile alignment
            </p>
          </div>

          {/* Metric 2: Application Confidence */}
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase' }}>
              Application Confidence
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#10B981', margin: 0 }}>
                {applicationConfidence}
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                / 100
              </p>
            </div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
              Overall fit estimate
            </p>
          </div>

          {/* Metric 3: Timeline */}
          <div>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase' }}>
              Review Timeline
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#F59E0B', margin: '0 0 4px 0' }}>
              Day {daysSinceSubmission} of {typicalReviewDays}
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
              Standard review window
            </p>
          </div>
        </div>

        {/* Decision Pathways */}
        <div
          style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: 10,
            padding: 18,
          }}
        >
          <p style={{ fontSize: 12, fontWeight: 600, color: '#475569', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
            Most Likely Outcomes
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#10B981', margin: '0 0 6px 0' }}>
                Screening Pass (62%)
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                Advance to interview round by day 7
              </p>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#F59E0B', margin: '0 0 6px 0' }}>
                Hold / Reject (38%)
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                Placed in hold pool or declined
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* YOUR LEVERAGE ZONE */}
      <div
        style={{
          background: '#FFFBEB',
          border: '1px solid #FEE3B1',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#92400E',
            margin: '0 0 18px 0',
          }}
        >
          Your Leverage Zone
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* What You Control */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#92400E', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
              You Control
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontSize: 13, color: '#92400E', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>✓</span>
                <span>Structured interview prep</span>
              </li>
              <li style={{ fontSize: 13, color: '#92400E', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>✓</span>
                <span>Strategic follow-up message</span>
              </li>
              <li style={{ fontSize: 13, color: '#92400E', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>✓</span>
                <span>Referral activation</span>
              </li>
            </ul>
          </div>

          {/* What the System Governs */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#92400E', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
              System Governs
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontSize: 13, color: '#92400E', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>→</span>
                <span>Follow-up availability (Day 5+)</span>
              </li>
              <li style={{ fontSize: 13, color: '#92400E', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>→</span>
                <span>Recruiter screening timeline</span>
              </li>
              <li style={{ fontSize: 13, color: '#92400E', display: 'flex', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>→</span>
                <span>Interview probability model</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOLLOW-UP GOVERNANCE STATE */}
      <div
        style={{
          background: '#F0F9FF',
          border: '2px solid #BFDBFE',
          borderRadius: 12,
          padding: 20,
        }}
      >
        <p style={{ fontSize: 12, fontWeight: 600, color: '#0369A1', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
          Follow-Up Governance
        </p>
        <p style={{ fontSize: 14, fontWeight: 500, color: '#1E40AF', margin: '0 0 8px 0' }}>
          Opens in 2 days (Day 5)
        </p>
        <p style={{ fontSize: 13, color: '#0369A1', margin: 0 }}>
          Follow-up window is restricted until optimal timing. Sending too early reduces effectiveness. System will unlock when conditions are ideal.
        </p>
      </div>

      {/* RISK FACTORS VISIBILITY */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 16px 0',
          }}
        >
          Downside Transparency
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              padding: 12,
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: 8,
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 500, color: '#991B1B', margin: 0 }}>
              Limited internship experience may increase hold probability by 15%
            </p>
          </div>
          <div
            style={{
              padding: 12,
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: 8,
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 500, color: '#991B1B', margin: 0 }}>
              Early-career profile competing against mid-level candidates
            </p>
          </div>
        </div>
      </div>

      {/* CONTEXTUAL PREP STRATEGY */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0F172A',
            margin: '0 0 12px 0',
          }}
        >
          Role-Specific Prep Strategy
        </h3>
        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 16px 0' }}>
          Based on 1,200+ similar applications, recruiters focus on:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { q: 'Why this company?', focus: 'Culture fit + long-term vision' },
            { q: 'Describe a data-driven decision', focus: 'Quantifiable business impact' },
            { q: 'What tools have you used?', focus: 'Production experience depth' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                padding: 12,
                cursor: 'pointer',
                background: expandedSection === `prep-${idx}` ? '#F0F9FF' : '#FFFFFF',
              }}
              onClick={() =>
                setExpandedSection(
                  expandedSection === `prep-${idx}` ? null : `prep-${idx}`
                )
              }
            >
              <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                {item.q}
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
                Recruiters focus: {item.focus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SUBMISSION DETAILS - COLLAPSED */}
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
          onClick={() =>
            setExpandedSection(
              expandedSection === 'submission' ? null : 'submission'
            )
          }
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
            Submission Details
          </h3>
          <span
            style={{
              fontSize: 14,
              color: '#94A3B8',
              transition: 'transform 0.2s',
              transform:
                expandedSection === 'submission' ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>

        {expandedSection === 'submission' && (
          <div
            style={{
              padding: '18px',
              borderTop: '1px solid #E5E7EB',
              background: '#F8FAFC',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>
                  CV Version
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  v2.3 (Jan 25)
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>
                  Salary Range
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#2563EB', margin: 0 }}>
                  {salaryRange}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* OUTCOME SIMULATION TOGGLE */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 20,
        }}
      >
        <button
          type="button"
          onClick={() =>
            setExpandedSection(
              expandedSection === 'simulation' ? null : 'simulation'
            )
          }
          style={{
            width: '100%',
            padding: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: expandedSection === 'simulation' ? 16 : 0,
          }}
        >
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>
            Simulate Outcome Impact
          </h3>
          <span
            style={{
              fontSize: 14,
              color: '#2563EB',
              transition: 'transform 0.2s',
              transform:
                expandedSection === 'simulation' ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>

        {expandedSection === 'simulation' && (
          <div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 12px 0' }}>
              How will these improvements affect interview probability?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#F0FDF4', borderRadius: 6 }}>
                <span style={{ fontSize: 13, color: '#166534', fontWeight: 500 }}>
                  Add quantified achievement
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#10B981' }}>
                  +5%
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#F0FDF4', borderRadius: 6 }}>
                <span style={{ fontSize: 13, color: '#166534', fontWeight: 500 }}>
                  Activate referral
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#10B981' }}>
                  +12%
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#F0FDF4', borderRadius: 6 }}>
                <span style={{ fontSize: 13, color: '#166534', fontWeight: 500 }}>
                  Strategic follow-up
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#10B981' }}>
                  +8%
                </span>
              </div>
            </div>
            <p style={{ fontSize: 11, color: '#64748B', margin: '12px 0 0 0', fontStyle: 'italic' }}>
              Simulations are probabilistic estimates based on historical data
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
