'use client'

import { useLanguage } from './language-provider'
import { InterviewPrepState_Data } from './interview-calibration-engine'

interface InterviewPreparationDashboardProps {
  jobTitle: string
  companyName: string
  applicationStage: number
  prepData: InterviewPrepState_Data
  onStartTraining: () => void
}

const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 12,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
} as const

export function InterviewPreparationDashboard({
  jobTitle,
  companyName,
  applicationStage,
  prepData,
  onStartTraining,
}: InterviewPreparationDashboardProps) {
  const { t } = useLanguage()

  return (
    <div style={{ marginBottom: 32 }}>
      {/* HEADER */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: '0 0 8px 0' }}>
          {t('interview.dashboard.title')}
        </h2>
        <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
          {t('interview.dashboard.subtitle')}
        </p>
      </div>

      {/* INTERVIEW DECISION SNAPSHOT */}
      <div style={{ ...card, padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('interview.dashboard.snapshot')}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
          {prepData.interviewStrengths.map((strength, i) => {
            const riskColor =
              strength.risk === 'high'
                ? { bg: '#FEE2E2', text: '#991B1B' }
                : strength.risk === 'medium'
                  ? { bg: '#FEF3C7', text: '#92400E' }
                  : { bg: '#DCFCE7', text: '#166534' }

            return (
              <div key={i} style={{ ...card, padding: 14 }}>
                <p style={{ fontSize: 11, color: '#64748B', margin: '0 0 8px 0', fontWeight: 600 }}>
                  {strength.dimension}
                </p>
                <p style={{ fontSize: 14, color: '#0F172A', margin: '0 0 8px 0', fontWeight: 700 }}>
                  {strength.level}
                </p>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: 3,
                    background: riskColor.bg,
                    color: riskColor.text,
                    textTransform: 'uppercase',
                  }}
                >
                  {strength.risk}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* OPTIMIZED ANSWERS PACK */}
      <div style={{ ...card, padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t('interview.dashboard.optimizedAnswers')}
          </h3>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#2563EB',
              background: '#EFF6FF',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            Top 5
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[1, 2, 3, 4, 5].map((rank) => (
            <div
              key={rank}
              style={{
                padding: 12,
                background: '#F8FAFC',
                borderRadius: 8,
                border: '1px solid #E5E7EB',
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#2563EB',
                  flexShrink: 0,
                }}
              >
                #{rank}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: '#0F172A', margin: '0 0 4px 0' }}>
                  Question {rank}
                </p>
                <p style={{ fontSize: 11, color: '#64748B', margin: 0 }}>
                  {t('interview.dashboard.answerPreview')}
                </p>
              </div>
              <button
                style={{
                  padding: '6px 12px',
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 500,
                  cursor: 'pointer',
                  color: '#0F172A',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* TRAINING LAB */}
      <div style={{ ...card, padding: 24 }}>
        <h3 style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('interview.dashboard.trainingLab')}
        </h3>
        <p style={{ fontSize: 12, color: '#475569', margin: '0 0 16px 0', lineHeight: 1.5 }}>
          {t('interview.dashboard.trainingDescription')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 16 }}>
          {['Behavioral', 'Technical', 'Product'].map((topic, i) => (
            <div
              key={i}
              style={{
                padding: 12,
                background: '#F8FAFC',
                borderRadius: 8,
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: 11, color: '#64748B', margin: '0 0 6px 0', fontWeight: 600 }}>
                {topic}
              </p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                {Math.floor(Math.random() * 40) + 55}%
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onStartTraining}
          style={{
            width: '100%',
            padding: '12px',
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
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2563EB'
          }}
        >
          {t('interview.dashboard.startSession')}
        </button>
      </div>
    </div>
  )
}
