'use client'

import { useLanguage } from './language-provider'

interface InterviewCalibrationLockedProps {
  jobTitle: string
  companyName: string
  onStartCalibration: () => void
}

const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 12,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
} as const

export function InterviewCalibrationLocked({
  jobTitle,
  companyName,
  onStartCalibration,
}: InterviewCalibrationLockedProps) {
  const { t } = useLanguage()

  const previewCards = [
    {
      icon: '🎯',
      titleKey: 'interview.locked.personalizedCard',
      descKey: 'interview.locked.personalizedDesc',
    },
    {
      icon: '🚀',
      titleKey: 'interview.locked.optimizedCard',
      descKey: 'interview.locked.optimizedDesc',
    },
    {
      icon: '📊',
      titleKey: 'interview.locked.analysisCard',
      descKey: 'interview.locked.analysisDesc',
    },
    {
      icon: '⚡',
      titleKey: 'interview.locked.simulationCard',
      descKey: 'interview.locked.simulationDesc',
    },
  ]

  return (
    <div style={{ marginBottom: 32 }}>
      {/* HEADER */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: '0 0 8px 0' }}>
          {t('interview.locked.title')}
        </h2>
        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 24px 0', lineHeight: 1.5 }}>
          {t('interview.locked.subtitle')}
        </p>

        {/* Main CTA Card */}
        <div
          style={{
            ...card,
            padding: 24,
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)',
            border: '2px solid #2563EB',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div
              style={{
                fontSize: 48,
                lineHeight: 1,
                marginTop: 4,
              }}
            >
              🔒
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: '0 0 8px 0' }}>
                {t('interview.locked.ctaTitle')}
              </h3>
              <p style={{ fontSize: 13, color: '#475569', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                {t('interview.locked.ctaDescription')}
              </p>
              <button
                onClick={onStartCalibration}
                style={{
                  padding: '10px 20px',
                  background: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1D4ED8'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2563EB'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {t('interview.locked.startButton')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PREVIEW CARDS GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
        }}
      >
        {previewCards.map((card, i) => (
          <div
            key={i}
            style={{
              ...card,
              padding: 20,
              opacity: 0.65,
              pointerEvents: 'none',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12, lineHeight: 1 }}>
              {card.icon}
            </div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 6px 0' }}>
              {t(card.titleKey)}
            </h4>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0, lineHeight: 1.4 }}>
              {t(card.descKey)}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER INFO */}
      <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #E5E7EB' }}>
        <p style={{ fontSize: 11, color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
          {t('interview.locked.footer')}
        </p>
      </div>
    </div>
  )
}
