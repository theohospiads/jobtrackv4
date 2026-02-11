'use client'

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

  // Only show on Application Submitted stage
  if (currentStage !== 0) return null

  const hasActionRequired = false // Determine based on job state
  const daysUntilFollowUp = 3

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* 🔥 1️⃣ PRIMARY ACTION BLOCK — "Your focus right now" (ABOVE EVERYTHING) */}
      <div
        style={{
          background: hasActionRequired ? '#FEF2F2' : '#F0F9FF',
          border: `2px solid ${hasActionRequired ? '#FCA5A5' : '#BFDBFE'}`,
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.12)',
        }}
      >
        <h2
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: hasActionRequired ? '#991B1B' : '#1E40AF',
            margin: '0 0 12px 0',
          }}
        >
          Your focus right now
        </h2>

        <p
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: hasActionRequired ? '#7F1D1D' : '#1E3A8A',
            margin: '0 0 8px 0',
            lineHeight: 1.5,
          }}
        >
          {hasActionRequired
            ? `Send a concise follow-up in ${daysUntilFollowUp} days to resurface your application.`
            : 'There is no action required today. We recommend preparing lightly while the application is under review. If action is required, we will notify you.'}
        </p>

        <p
          style={{
            fontSize: 13,
            color: hasActionRequired ? '#A16061' : '#0369A1',
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          This is your priority at this stage of your application.
        </p>
      </div>

      {/* 2️⃣ What's Happening Now */}
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
            margin: '0 0 20px 0',
          }}
        >
          What's happening right now
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 16 }}>
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>Status</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                Application received
              </p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>Likely state</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                In screening queue
              </p>
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>Submitted</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                {submittedDate}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Typical review time
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                5–7 days
              </p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Estimated response probability
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#10B981', margin: 0 }}>
                High
              </p>
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Competition level
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                Moderate
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: 12,
            color: '#94A3B8',
            fontStyle: 'italic',
            margin: '16px 0 0 0',
            paddingTop: 16,
            borderTop: '1px solid #F1F5F9',
          }}
        >
          These insights are based on similar roles and company patterns.
        </p>
      </div>

      {/* 🔥 3️⃣ Application Strength — ENHANCED with signals */}
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
            margin: '0 0 20px 0',
          }}
        >
          Application Strength Assessment
        </h3>

        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', marginBottom: 24 }}>
          {/* Circular Score */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 100,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'conic-gradient(#2563EB 0deg, #2563EB 302.4deg, #E5E7EB 302.4deg, #E5E7EB 360deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                color: '#2563EB',
                marginBottom: 8,
              }}
            >
              84%
            </div>
            <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
              Strong Alignment
            </p>
          </div>

          {/* Breakdown List */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>Skills match</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>Strong</p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Experience depth
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                Moderate
              </p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Industry relevance
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                Strong
              </p>
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>Risk signals</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#F59E0B', margin: 0 }}>
                Minor (limited internship experience)
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 ENHANCED: Strongest and Weakest Signals */}
        <div
          style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          <div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 6px 0', fontWeight: 600 }}>
              Your strongest signal
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#10B981', margin: 0 }}>
              Skills alignment
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
              Your skillset closely matches job requirements
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 6px 0', fontWeight: 600 }}>
              Your weakest signal
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#F59E0B', margin: 0 }}>
              Experience depth
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
              Limited experience in similar roles
            </p>
          </div>
        </div>

        {/* 🔥 ENHANCED: Prescriptive Improvement */}
        <div
          style={{
            background: '#FFFBEB',
            border: '1px solid #FEE3B1',
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <p style={{ fontSize: 12, color: '#92400E', fontWeight: 600, margin: '0 0 6px 0' }}>
            Recommended improvement
          </p>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#B45309', margin: 0 }}>
            Add 1 quantified internship impact
          </p>
          <p style={{ fontSize: 12, color: '#92400E', margin: '4px 0 0 0' }}>
            This directly addresses your experience gap
          </p>
        </div>

        <a
          href="#"
          style={{
            fontSize: 13,
            color: '#2563EB',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 500,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = 'underline'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = 'none'
          }}
        >
          See all improvement suggestions →
        </a>
      </div>

      {/* 🔥 4️⃣ Smart Preparation Preview — CONTEXTUAL */}
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
          Preparing for screening
        </h3>

        <p style={{ fontSize: 14, color: '#64748B', margin: '0 0 12px 0' }}>
          Based on this role, recruiters typically ask:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
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
                gap: 12,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ color: '#2563EB', fontWeight: 600, flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            background: '#F0F9FF',
            border: '1px solid #BFDBFE',
            borderRadius: 8,
            padding: 12,
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 500, color: '#0369A1', margin: 0 }}>
            Estimated prep time: 12 minutes
          </p>
        </div>
      </div>

      {/* 5️⃣ Official Application Snapshot Card */}
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
            margin: '0 0 20px 0',
          }}
        >
          Application Record
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                CV version submitted
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                v2.3 (Jan 25)
              </p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Cover letter version
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                Custom (Jan 27)
              </p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Job description snapshot
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                Captured (Jan 28)
              </p>
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 4px 0' }}>
                Salary range at submission
              </p>
              <p style={{ fontSize: 15, fontWeight: 500, color: '#2563EB', margin: 0, fontWeight: 700 }}>
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
                  fontSize: 14,
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
                <span style={{ fontSize: 12 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 6️⃣ Strategic Follow-up Timing — UPGRADED */}
      <div
        style={{
          background: '#F0F9FF',
          border: '2px solid #BFDBFE',
          borderRadius: 12,
          padding: 20,
        }}
      >
        <h4
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#0369A1',
            margin: '0 0 8px 0',
          }}
        >
          Follow-up window
        </h4>
        <p style={{ fontSize: 15, fontWeight: 500, color: '#1E40AF', margin: '0 0 4px 0' }}>
          Opens in {daysUntilFollowUp} days
        </p>
        <p style={{ fontSize: 13, color: '#0369A1', margin: 0 }}>
          Optimal timing: Day 5–7 after submission
        </p>
      </div>
    </div>
  )
}
