'use client'

import { useLanguage } from './language-provider'

interface ApplicationStatusHubProps {
  currentStage: number
  totalStages: number
  stageName: string
  appliedDate: string
  company: string
  jobTitle: string
  recruiterSignals?: {
    reviewTime?: string
    profileViews?: number
    ghostingProbability?: string
  }
}

export function ApplicationStatusHub({
  currentStage,
  totalStages,
  stageName,
  appliedDate,
  company,
  jobTitle,
  recruiterSignals,
}: ApplicationStatusHubProps) {
  const { t } = useLanguage()

  const getSignalColor = (signal: string) => {
    if (signal === 'low' || signal === 'fast') return '#10B981'
    if (signal === 'medium' || signal === 'moderate') return '#F59E0B'
    return '#EF4444'
  }

  const metrics = [
    {
      label: 'Application Status',
      value: stageName,
      type: 'status',
    },
    {
      label: 'Applied',
      value: appliedDate,
      type: 'date',
    },
    {
      label: 'Stage Progress',
      value: `${currentStage} of ${totalStages}`,
      type: 'progress',
    },
  ]

  return (
    <div style={{ marginBottom: 32 }}>
      {/* Application Status Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          marginBottom: 24,
        }}
      >
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#BFDBFE'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <p style={{ fontSize: 12, color: '#64748B', margin: 0, fontWeight: 500 }}>
              {metric.label}
            </p>
            <p style={{ fontSize: 16, color: '#0F172A', margin: 0, fontWeight: 600 }}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Key Information Section */}
      <div
        style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: 8,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 12px 0', fontWeight: 600 }}>
          ABOUT THIS APPLICATION
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#475569' }}>Position</span>
            <span style={{ fontSize: 14, color: '#0F172A', fontWeight: 500 }}>{jobTitle}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#475569' }}>Company</span>
            <span style={{ fontSize: 14, color: '#0F172A', fontWeight: 500 }}>{company}</span>
          </div>
        </div>
      </div>

      {/* Recruiter Signals (if available) */}
      {recruiterSignals && (
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            padding: 20,
          }}
        >
          <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 12px 0', fontWeight: 600 }}>
            RECRUITER SIGNALS
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recruiterSignals.reviewTime && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#475569' }}>Typical Review Time</span>
                <div
                  style={{
                    fontSize: 13,
                    color: getSignalColor(recruiterSignals.reviewTime),
                    fontWeight: 500,
                    background: getSignalColor(recruiterSignals.reviewTime) + '15',
                    padding: '4px 8px',
                    borderRadius: 4,
                  }}
                >
                  {recruiterSignals.reviewTime}
                </div>
              </div>
            )}
            {recruiterSignals.profileViews !== undefined && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#475569' }}>Profile Views</span>
                <span style={{ fontSize: 14, color: '#0F172A', fontWeight: 500 }}>
                  {recruiterSignals.profileViews} view{recruiterSignals.profileViews !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            {recruiterSignals.ghostingProbability && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#475569' }}>Response Probability</span>
                <div
                  style={{
                    fontSize: 13,
                    color: getSignalColor(recruiterSignals.ghostingProbability),
                    fontWeight: 500,
                    background: getSignalColor(recruiterSignals.ghostingProbability) + '15',
                    padding: '4px 8px',
                    borderRadius: 4,
                    textTransform: 'capitalize',
                  }}
                >
                  {recruiterSignals.ghostingProbability}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
