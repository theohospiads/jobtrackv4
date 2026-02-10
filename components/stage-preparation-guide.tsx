'use client'

import { useLanguage } from '@/components/language-provider'
import { useState } from 'react'

interface StageTip {
  titleKey: string
  descriptionKey: string
  icon: string
}

interface StageGuide {
  stageNameKey: string
  statusKey: string
  guideKey: string
  tips: StageTip[]
  actionItems: {
    textKey: string
    completed: boolean
  }[]
}

interface StagePrepGuideProps {
  currentStageIndex: number
  stageName: string
  stageStatus: 'completed' | 'current' | 'upcoming'
}

const stageGuides: Record<number, StageGuide> = {
  0: {
    stageNameKey: 'stage.applicationSubmitted',
    statusKey: 'stage.submitted',
    guideKey: 'stage.guide.applicationSubmitted',
    tips: [
      {
        titleKey: 'stage.tip.coverLetter',
        descriptionKey: 'stage.tip.coverLetter.desc',
        icon: '📄',
      },
      {
        titleKey: 'stage.tip.cv',
        descriptionKey: 'stage.tip.cv.desc',
        icon: '✏️',
      },
      {
        titleKey: 'stage.tip.profile',
        descriptionKey: 'stage.tip.profile.desc',
        icon: '👤',
      },
    ],
    actionItems: [
      { textKey: 'stage.action.trackSubmission', completed: true },
      { textKey: 'stage.action.saveDeadline', completed: true },
    ],
  },
  1: {
    stageNameKey: 'stage.applicationReview',
    statusKey: 'stage.underReview',
    guideKey: 'stage.guide.applicationReview',
    tips: [
      {
        titleKey: 'stage.tip.researchCompany',
        descriptionKey: 'stage.tip.researchCompany.desc',
        icon: '🔍',
      },
      {
        titleKey: 'stage.tip.linkedIn',
        descriptionKey: 'stage.tip.linkedIn.desc',
        icon: '🔗',
      },
      {
        titleKey: 'stage.tip.prepareQuestions',
        descriptionKey: 'stage.tip.prepareQuestions.desc',
        icon: '❓',
      },
    ],
    actionItems: [
      { textKey: 'stage.action.researchCompany', completed: false },
      { textKey: 'stage.action.prepareStarStories', completed: false },
      { textKey: 'stage.action.prepareQuestions', completed: false },
    ],
  },
  2: {
    stageNameKey: 'stage.interview',
    statusKey: 'stage.interviewing',
    guideKey: 'stage.guide.interview',
    tips: [
      {
        titleKey: 'stage.tip.practiceInterview',
        descriptionKey: 'stage.tip.practiceInterview.desc',
        icon: '🎯',
      },
      {
        titleKey: 'stage.tip.technicalPrep',
        descriptionKey: 'stage.tip.technicalPrep.desc',
        icon: '💻',
      },
      {
        titleKey: 'stage.tip.firstImpressions',
        descriptionKey: 'stage.tip.firstImpressions.desc',
        icon: '✨',
      },
    ],
    actionItems: [
      { textKey: 'stage.action.prepareStories', completed: false },
      { textKey: 'stage.action.mockInterview', completed: false },
      { textKey: 'stage.action.technicalReview', completed: false },
    ],
  },
  3: {
    stageNameKey: 'stage.decision',
    statusKey: 'stage.finalRound',
    guideKey: 'stage.guide.decision',
    tips: [
      {
        titleKey: 'stage.tip.negotiation',
        descriptionKey: 'stage.tip.negotiation.desc',
        icon: '💰',
      },
      {
        titleKey: 'stage.tip.reference',
        descriptionKey: 'stage.tip.reference.desc',
        icon: '✅',
      },
      {
        titleKey: 'stage.tip.background',
        descriptionKey: 'stage.tip.background.desc',
        icon: '🔐',
      },
    ],
    actionItems: [
      { textKey: 'stage.action.prepareNegotiation', completed: false },
      { textKey: 'stage.action.notifyReferences', completed: false },
      { textKey: 'stage.action.backgroundCheck', completed: false },
    ],
  },
}

export function StagePrepGuide({ currentStageIndex, stageName, stageStatus }: StagePrepGuideProps) {
  const { t } = useLanguage()
  const [expandedTip, setExpandedTip] = useState<number | null>(null)
  const [completedActions, setCompletedActions] = useState<Record<number, boolean>>({})

  const guide = stageGuides[currentStageIndex]
  if (!guide) return null

  const handleToggleAction = (index: number) => {
    setCompletedActions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const completedCount = Object.values(completedActions).filter(Boolean).length
  const totalActions = guide.actionItems.length
  const progress = totalActions > 0 ? Math.round((completedCount / totalActions) * 100) : 0

  const isCurrentStage = stageStatus === 'current'
  const isCompletedStage = stageStatus === 'completed'

  return (
    <div style={{ marginBottom: 32 }}>
      {/* Header */}
      <div
        style={{
          background: isCurrentStage
            ? 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)'
            : isCompletedStage
              ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
              : 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
          borderRadius: 16,
          padding: 24,
          marginBottom: 24,
          color: isCurrentStage || isCompletedStage ? '#FFFFFF' : '#0F172A',
          boxShadow:
            isCurrentStage || isCompletedStage
              ? '0 8px 32px rgba(37, 99, 235, 0.15)'
              : '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, margin: '0 0 4px 0', opacity: 0.9 }}>
              {isCurrentStage ? '🔄 Current Stage' : isCompletedStage ? '✓ Completed' : '⏳ Upcoming'}
            </p>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {stageName}
            </h2>
          </div>
          {isCurrentStage && (
            <div
              style={{
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 12,
                padding: '8px 16px',
                fontSize: 13,
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
              }}
            >
              Focus Here
            </div>
          )}
        </div>

        {isCurrentStage && (
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <p style={{ fontSize: 12, fontWeight: 500, margin: 0, opacity: 0.9 }}>Preparation Progress</p>
              <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>
                {completedCount}/{totalActions} completed
              </p>
            </div>
            <div
              style={{
                height: 6,
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.9)',
                  width: `${progress}%`,
                  transition: 'width 0.3s ease',
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
          💡 Key Tips for This Stage
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {guide.tips.map((tip, index) => (
            <div
              key={index}
              onClick={() => setExpandedTip(expandedTip === index ? null : index)}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 16,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: expandedTip === index ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow:
                  expandedTip === index
                    ? '0 8px 24px rgba(37, 99, 235, 0.12)'
                    : '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              onMouseEnter={(e) => {
                if (!isCurrentStage && !isCompletedStage) return
                e.currentTarget.style.borderColor = '#2563EB'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ display: 'flex', gap: 12, flex: 1 }}>
                  <span style={{ fontSize: 20 }}>{tip.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 4px 0' }}>
                      {t(tip.titleKey) || tip.titleKey}
                    </p>
                    {expandedTip === index && (
                      <p style={{ fontSize: 12, color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                        {t(tip.descriptionKey) || tip.descriptionKey}
                      </p>
                    )}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: '#94A3B8',
                    transition: 'transform 0.2s ease',
                    transform: expandedTip === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items Section */}
      {isCurrentStage && (
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 12px 0' }}>
            ✅ Action Items
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {guide.actionItems.map((action, index) => (
              <label
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: 12,
                  background: completedActions[index] ? '#ECFDF5' : '#FFFFFF',
                  border: `1px solid ${completedActions[index] ? '#86EFAC' : '#E5E7EB'}`,
                  borderRadius: 10,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <input
                  type="checkbox"
                  checked={completedActions[index] || false}
                  onChange={() => handleToggleAction(index)}
                  style={{
                    width: 20,
                    height: 20,
                    cursor: 'pointer',
                    accentColor: '#10B981',
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    color: completedActions[index] ? '#059669' : '#0F172A',
                    fontWeight: completedActions[index] ? 500 : 400,
                    textDecoration: completedActions[index] ? 'line-through' : 'none',
                  }}
                >
                  {t(action.textKey) || action.textKey}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
