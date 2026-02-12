'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'
import { InterviewPrepState_Data } from './interview-calibration-engine'

interface TrainingModeProps {
  jobTitle: string
  companyName: string
  prepData: InterviewPrepState_Data
  onComplete: () => void
  onBack: () => void
}

const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 12,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
} as const

export function TrainingMode({
  jobTitle,
  companyName,
  prepData,
  onComplete,
  onBack,
}: TrainingModeProps) {
  const { t } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [sessionScores, setSessionScores] = useState<{ before: number; after: number }[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sessionComplete, setSessionComplete] = useState(false)

  const trainingQuestions = [
    'interview.training.q1',
    'interview.training.q2',
    'interview.training.q3',
  ]

  const handleSubmitAnswer = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))

    const beforeScore = Math.floor(Math.random() * 30) + 55
    const afterScore = beforeScore + Math.floor(Math.random() * 20) + 5

    setSessionScores([...sessionScores, { before: beforeScore, after: afterScore }])

    if (currentQuestion < trainingQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setUserAnswer('')
    } else {
      setSessionComplete(true)
    }

    setIsSubmitting(false)
  }

  if (sessionComplete) {
    const avgImprovement = sessionScores.reduce((acc, s) => acc + (s.after - s.before), 0) / sessionScores.length

    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#F8FAFC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
          padding: 24,
        }}
      >
        <div style={{ maxWidth: 500, textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>✓</div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: '0 0 12px 0' }}>
            {t('interview.training.sessionComplete')}
          </h1>

          <div style={{ ...card, padding: 24, marginBottom: 24, marginTop: 24 }}>
            <p style={{ fontSize: 11, color: '#64748B', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px 0' }}>
              {t('interview.training.sessionResults')}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              <div>
                <p style={{ fontSize: 11, color: '#64748B', margin: '0 0 6px 0' }}>
                  {t('interview.training.averageStart')}
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#64748B', margin: 0 }}>
                  {Math.round(sessionScores.reduce((acc, s) => acc + s.before, 0) / sessionScores.length)}%
                </p>
              </div>
              <div>
                <p style={{ fontSize: 11, color: '#64748B', margin: '0 0 6px 0' }}>
                  {t('interview.training.averageEnd')}
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#10B981', margin: 0 }}>
                  {Math.round(sessionScores.reduce((acc, s) => acc + s.after, 0) / sessionScores.length)}%
                </p>
              </div>
            </div>

            <p style={{ fontSize: 24, fontWeight: 700, color: '#10B981', margin: '0 0 8px 0' }}>
              +{Math.round(avgImprovement)}%
            </p>
            <p style={{ fontSize: 11, color: '#64748B', margin: 0 }}>
              {t('interview.training.improvementInSession')}
            </p>
          </div>

          <p style={{ fontSize: 12, color: '#475569', margin: '0 0 24px 0', lineHeight: 1.5 }}>
            {t('interview.training.nextSessionRecommendation')}
          </p>

          <button
            onClick={onComplete}
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
            }}
          >
            {t('interview.training.backToDashboard')}
          </button>
        </div>
      </div>
    )
  }

  const isAnswerValid = userAnswer.trim().length >= 50

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
      }}
    >
      {/* HEADER */}
      <div style={{ padding: 24, borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: 0 }}>
            {t('interview.training.title')}
          </h1>
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              color: '#64748B',
              padding: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* PROGRESS */}
        <div style={{ display: 'flex', gap: 8 }}>
          {Array.from({ length: trainingQuestions.length }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 4,
                background: i <= currentQuestion ? '#2563EB' : '#E5E7EB',
                borderRadius: 2,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: 11, color: '#64748B', margin: '8px 0 0 0' }}>
          {t('interview.training.progress')} {currentQuestion + 1} / {trainingQuestions.length}
        </p>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ ...card, padding: 24 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#0F172A', margin: '0 0 20px 0' }}>
              {t(trainingQuestions[currentQuestion])}
            </h2>

            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={t('interview.training.answerPlaceholder')}
              style={{
                width: '100%',
                minHeight: 180,
                padding: 14,
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                fontSize: 13,
                fontFamily: 'inherit',
                resize: 'none',
                marginBottom: 16,
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 12,
                borderTop: '1px solid #E5E7EB',
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  color: userAnswer.length < 50 ? '#EF4444' : '#64748B',
                  margin: 0,
                }}
              >
                {userAnswer.length} {t('interview.training.characters')}
              </p>
              {userAnswer.length < 50 && (
                <p style={{ fontSize: 11, color: '#EF4444', margin: 0 }}>
                  {t('interview.training.minimumRequired')} {50 - userAnswer.length}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div style={{ padding: 24, borderTop: '1px solid #E5E7EB', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button
            onClick={handleSubmitAnswer}
            disabled={!isAnswerValid || isSubmitting}
            style={{
              padding: '10px 24px',
              background: isAnswerValid && !isSubmitting ? '#2563EB' : '#E5E7EB',
              color: isAnswerValid && !isSubmitting ? '#FFFFFF' : '#94A3B8',
              border: 'none',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              cursor: isAnswerValid && !isSubmitting ? 'pointer' : 'not-allowed',
            }}
          >
            {isSubmitting ? t('interview.training.scoring') : t('interview.training.submit')}
          </button>
        </div>
      </div>
    </div>
  )
}
