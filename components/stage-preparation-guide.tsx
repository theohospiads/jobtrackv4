'use client'

import { useLanguage } from '@/components/language-provider'
import { useState } from 'react'

interface StagePrepGuideProps {
  currentStageIndex: number
  stageName: string
  stageStatus: 'completed' | 'current' | 'upcoming'
}

export function StagePrepGuide({ currentStageIndex, stageName, stageStatus }: StagePrepGuideProps) {
  const { t } = useLanguage()
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // Only show for current stage
  if (stageStatus !== 'current') return null

  const stageItems: Record<number, Array<{ key: string; label: string; impact?: string }>> = {
    0: [
      { key: 'profile', label: t('stage.tip.profile') || 'Complete Profile' },
      { key: 'trackSubmission', label: t('stage.action.trackSubmission') || 'Track your submission' },
    ],
    1: [
      { key: 'researchCompany', label: t('stage.tip.researchCompany') || 'Research the Company', impact: t('stage.impact.researchCompany') || 'Increases response rate by 25%' },
      { key: 'linkedIn', label: t('stage.tip.linkedIn') || 'Check LinkedIn', impact: t('stage.impact.linkedIn') || 'Personalize your approach by 40%' },
      { key: 'prepareQuestions', label: t('stage.tip.prepareQuestions') || 'Prepare Smart Questions', impact: t('stage.impact.prepareQuestions') || 'Shows engagement & improves success by ~30%' },
    ],
    2: [
      { key: 'practiceInterview', label: t('stage.tip.practiceInterview') || 'Practice Interview Scenarios' },
      { key: 'technicalPrep', label: t('stage.tip.technicalPrep') || 'Technical Preparation' },
      { key: 'firstImpressions', label: t('stage.tip.firstImpressions') || 'First Impressions Matter' },
    ],
    3: [
      { key: 'negotiation', label: t('stage.tip.negotiation') || 'Know Your Worth' },
      { key: 'reference', label: t('stage.tip.reference') || 'Prepare References' },
      { key: 'background', label: t('stage.tip.background') || 'Expect Background Checks' },
    ],
  }

  const items = stageItems[currentStageIndex] || []
  const completedCount = items.filter(item => checkedItems[item.key]).length
  const progressPercentage = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
        {t('actionDetail.preparationTips')}
      </p>

      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Progress Bar */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: '#64748B', fontWeight: 500 }}>{t('actionDetail.progress')}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>{progressPercentage}%</span>
          </div>
          <div style={{ height: 6, background: '#E5E7EB', borderRadius: 3 }}>
            <div
              style={{
                width: `${progressPercentage}%`,
                height: '100%',
                background: '#2563EB',
                borderRadius: 3,
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Checklist Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {items.map((item, index) => (
            <div
              key={item.key}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                padding: '12px 0',
                borderBottom: index < items.length - 1 ? '1px solid #F1F5F9' : 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
                justifyContent: 'space-between',
              }}
              onClick={() => toggleCheck(item.key)}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontSize: 14,
                    color: checkedItems[item.key] ? '#94A3B8' : '#0F172A',
                    fontWeight: 500,
                    textDecoration: checkedItems[item.key] ? 'line-through' : 'none',
                    transition: 'all 0.2s ease',
                    display: 'block',
                    marginBottom: item.impact ? 4 : 0,
                  }}
                >
                  {item.label}
                </span>
                {item.impact && (
                  <span
                    style={{
                      fontSize: 12,
                      color: '#2563EB',
                      fontWeight: 500,
                      display: 'block',
                    }}
                  >
                    {item.impact}
                  </span>
                )}
              </div>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  border: `2px solid ${checkedItems[item.key] ? '#10B981' : '#CBD5E1'}`,
                  background: checkedItems[item.key] ? '#10B981' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  marginTop: 2,
                }}
              >
                {checkedItems[item.key] && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 6L4.5 9.5L11 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
