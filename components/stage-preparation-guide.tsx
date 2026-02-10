'use client'

import { useLanguage } from '@/components/language-provider'
import { useState, useMemo } from 'react'

interface StagePrepGuideProps {
  currentStageIndex: number
  stageName: string
  stageStatus: 'completed' | 'current' | 'upcoming'
}

const STAGE_ITEMS_CONFIG: Record<number, Array<{ key: string; labelKey: string; impactKey?: string }>> = {
  0: [
    { key: 'updateProfile', labelKey: 'action.updateProfile', impactKey: 'impact.updateProfile' },
    { key: 'completeAllFields', labelKey: 'action.completeAllFields', impactKey: 'impact.completeAllFields' },
    { key: 'proofreadCover', labelKey: 'action.proofreadCover', impactKey: 'impact.proofreadCover' },
    { key: 'trackSubmission', labelKey: 'action.trackSubmission', impactKey: 'impact.trackSubmission' },
    { key: 'addToCalendar', labelKey: 'action.addToCalendar', impactKey: 'impact.addToCalendar' },
    { key: 'confirmEmail', labelKey: 'action.confirmEmail', impactKey: 'impact.confirmEmail' },
  ],
  1: [
    { key: 'researchCompany', labelKey: 'action.researchCompanyDetails', impactKey: 'impact.researchCompany' },
    { key: 'readRecentNews', labelKey: 'action.readRecentNews', impactKey: 'impact.readRecentNews' },
    { key: 'identifyLinkedInRecruiter', labelKey: 'action.identifyLinkedInRecruiter', impactKey: 'impact.linkedIn' },
    { key: 'studyJobDescription', labelKey: 'action.studyJobDescription', impactKey: 'impact.studyJobDescription' },
    { key: 'prepareSTARStories', labelKey: 'action.prepareSTARStories', impactKey: 'impact.prepareSTAR' },
    { key: 'practiceIntroduction', labelKey: 'action.practiceIntroduction', impactKey: 'impact.practiceIntroduction' },
  ],
  2: [
    { key: 'recordMockInterview', labelKey: 'action.recordMockInterview', impactKey: 'impact.recordMockInterview' },
    { key: 'reviewTechStack', labelKey: 'action.reviewTechStack', impactKey: 'impact.reviewTechStack' },
    { key: 'practiceIntroduction', labelKey: 'action.practiceIntroduction', impactKey: 'impact.practiceIntroduction' },
    { key: 'prepareClothes', labelKey: 'action.prepareClothes', impactKey: 'impact.prepareClothes' },
    { key: 'testAudioVideo', labelKey: 'action.testAudioVideo', impactKey: 'impact.testAudioVideo' },
    { key: 'reviewInterviewerLinkedIn', labelKey: 'action.reviewInterviewerLinkedIn', impactKey: 'impact.reviewInterviewerLinkedIn' },
    { key: 'prepareUniqueQuestions', labelKey: 'action.prepareUniqueQuestions', impactKey: 'impact.prepareUniqueQuestions' },
    { key: 'prepareExamples', labelKey: 'action.prepareExamples', impactKey: 'impact.prepareExamples' },
  ],
  3: [
    { key: 'researchSalaryRange', labelKey: 'action.researchSalaryRange', impactKey: 'impact.researchSalaryRange' },
    { key: 'negotiateInWriting', labelKey: 'action.negotiateInWriting', impactKey: 'impact.negotiateInWriting' },
    { key: 'prepareReferences', labelKey: 'action.prepareReferences', impactKey: 'impact.prepareReferences' },
    { key: 'contactReferences', labelKey: 'action.contactReferences', impactKey: 'impact.contactReferences' },
    { key: 'reviewBackgroundCheck', labelKey: 'action.reviewBackgroundCheck', impactKey: 'impact.reviewBackgroundCheck' },
    { key: 'prepareBenefitsQuestions', labelKey: 'action.prepareBenefitsQuestions', impactKey: 'impact.prepareBenefitsQuestions' },
    { key: 'prepareStartDate', labelKey: 'action.prepareStartDate', impactKey: 'impact.prepareStartDate' },
    { key: 'finalReview', labelKey: 'action.finalReview', impactKey: 'impact.finalReview' },
  ],
}

const STAGE_NAMES = ['stage.applicationSubmitted', 'stage.applicationReview', 'stage.interview', 'stage.decision']

export function StagePrepGuide({ currentStageIndex, stageName, stageStatus }: StagePrepGuideProps) {
  const { t } = useLanguage()
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // Only show for current stage
  if (stageStatus !== 'current') return null

  const itemsConfig = STAGE_ITEMS_CONFIG[currentStageIndex] || []
  
  const items = useMemo(() => 
    itemsConfig.map(item => ({
      ...item,
      label: t(item.labelKey) || 'Item',
      impact: item.impactKey ? t(item.impactKey) : undefined,
    })),
    [currentStageIndex, t]
  )

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
      {/* Stage Journey Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <div>
            <p style={{ fontSize: 12, color: '#64748B', fontWeight: 500, margin: '0 0 4px 0', letterSpacing: 0.5 }}>
              {t('actionDetail.stageCompanion') || 'YOUR JOURNEY'}
            </p>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>
              {t('actionDetail.stage') || 'Stage'} {currentStageIndex + 1}: {t(STAGE_NAMES[currentStageIndex]) || 'Current Stage'}
            </h3>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', background: '#EFF6FF', padding: '6px 12px', borderRadius: 6, whiteSpace: 'nowrap' }}>
            {currentStageIndex + 1} / 4
          </span>
        </div>

        {/* Stage Progress Dots */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: index < currentStageIndex ? '#10B981' : index === currentStageIndex ? '#2563EB' : '#E5E7EB',
                  transition: 'all 0.3s ease',
                }}
              />
              {index < 3 && (
                <div
                  style={{
                    width: 20,
                    height: 2,
                    background: index < currentStageIndex ? '#10B981' : '#E5E7EB',
                    transition: 'all 0.3s ease',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Section Title */}
        <p style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {t('actionDetail.stageTips') || 'STAGE TIPS'}
        </p>

        {/* Progress Bar */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: '#64748B', fontWeight: 500 }}>{t('actionDetail.progress') || 'Progress'}</span>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((item, index) => (
            <div
              key={item.key}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 12,
                padding: '12px 16px',
                background: checkedItems[item.key] 
                  ? '#FFFFFF' 
                  : index % 2 === 0 ? '#FAFBFF' : '#FFFFFF',
                borderRadius: 8,
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => toggleCheck(item.key)}
              onMouseEnter={(e) => {
                if (!checkedItems[item.key]) {
                  e.currentTarget.style.background = '#F8FAFC'
                  e.currentTarget.style.borderColor = '#CBD5E1'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = checkedItems[item.key] 
                  ? '#FFFFFF'
                  : index % 2 === 0 ? '#FAFBFF' : '#FFFFFF'
                e.currentTarget.style.borderColor = '#E5E7EB'
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
