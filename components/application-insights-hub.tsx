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

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* 1️⃣ Insight Card — "What's Happening Now" */}
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

      {/* 2️⃣ Application Strength Card */}
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

        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
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

            <a
              href="#"
              style={{
                fontSize: 13,
                color: '#2563EB',
                textDecoration: 'none',
                marginTop: 12,
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
              See improvement suggestions →
            </a>
          </div>
        </div>
      </div>

      {/* 3️⃣ Optimization Opportunities Card (Conditional) */}
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
          You can still strengthen this application
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            {
              title: 'Add 1 quantified achievement',
              impact: 'High',
              effort: '5 min',
            },
            {
              title: 'Send a concise follow-up',
              impact: 'Medium',
              effort: '3 min',
            },
            {
              title: 'Activate referral',
              impact: 'High',
              effort: 'Variable',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 16,
                borderBottom: idx < 2 ? '1px solid #F1F5F9' : 'none',
              }}
            >
              <div>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                  {item.title}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', whiteSpace: 'nowrap' }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: item.impact === 'High' ? '#10B981' : '#F59E0B',
                    background: item.impact === 'High' ? '#F0FDF4' : '#FFFBEB',
                    padding: '4px 8px',
                    borderRadius: 4,
                  }}
                >
                  {item.impact} impact
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#64748B',
                    background: '#F8FAFC',
                    padding: '4px 8px',
                    borderRadius: 4,
                  }}
                >
                  {item.effort}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4️⃣ Preparation Preview Card */}
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
          Prepare early
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Likely screening questions',
            'Documents to keep ready',
            'Key experience to rehearse',
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              style={{
                fontSize: 14,
                color: '#2563EB',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1E40AF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#2563EB'
              }}
            >
              {item}
              <span style={{ fontSize: 12 }}>→</span>
            </a>
          ))}
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
              <p style={{ fontSize: 15, fontWeight: 500, color: '#0F172A', margin: 0 }}>
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

      {/* 6️⃣ Strategic Timing Strip */}
      <div
        style={{
          background: '#F0F9FF',
          border: '1px solid #BFDBFE',
          borderRadius: 8,
          padding: '12px 16px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 13, color: '#1E40AF', fontWeight: 500, margin: 0 }}>
          Follow-up timing: Recommended window opens in 3 days
        </p>
      </div>
    </div>
  )
}
