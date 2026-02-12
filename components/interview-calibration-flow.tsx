'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'
import { CalibrationResponse } from './interview-calibration-engine'

interface InterviewCalibrationFlowProps {
  jobTitle: string
  companyName: string
  onComplete: (responses: CalibrationResponse[], strengths: any[]) => void
}

const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 12,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
} as const

const questions = [
  'interview.calibration.q1',
  'interview.calibration.q2',
  'interview.calibration.q3',
  'interview.calibration.q4',
  'interview.calibration.q5',
]

export function InterviewCalibrationFlow({
  jobTitle,
  companyName,
  onComplete,
}: InterviewCalibrationFlowProps) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(''))
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAnswerChange = (text: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = text
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate scoring (in real app, this would be an API call)
    await new Promise(resolve => setTimeout(resolve, 1500))

    const responses: CalibrationResponse[] = questions.map((qKey, i) => ({
      question: qKey,
      userAnswer: answers[i],
      scores: {
        ownershipClarity: Math.floor(Math.random() * 30) + 60,
        measurableImpact: Math.floor(Math.random() * 30) + 55,
        structure: Math.floor(Math.random() * 30) + 58,
        relevance: Math.floor(Math.random() * 30) + 62,
      },
      feedback: t('interview.calibration.feedbackPlaceholder'),
    }))

    const strengths = [
      { dimension: 'Analytical Thinking', level: 'Strong', risk: 'low' },
      { dimension: 'Impact Communication', level: 'Moderate', risk: 'medium' },
      { dimension: 'Leadership Examples', level: 'Needs Work', risk: 'high' },
    ]

    setIsSubmitting(false)
    onComplete(responses, strengths)
  }

  const characterCount = answers[currentStep]?.length || 0
  const maxCharacters = 800
  const isAnswerValid = characterCount >= 100

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
            {t('interview.calibration.title')}
          </h1>
          <button
            onClick={() => window.history.back()}
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

        {/* PROGRESS BAR */}
        <div style={{ display: 'flex', gap: 8 }}>
          {Array.from({ length: questions.length }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 4,
                background: i <= currentStep ? '#2563EB' : '#E5E7EB',
                borderRadius: 2,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: 11, color: '#64748B', margin: '8px 0 0 0' }}>
          {t('interview.calibration.progress')} {currentStep + 1} {t('interview.calibration.of')} {questions.length}
        </p>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ ...card, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#0F172A', margin: '0 0 24px 0' }}>
              {t(questions[currentStep])}
            </h2>

            <textarea
              value={answers[currentStep]}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder={t('interview.calibration.answerPlaceholder')}
              style={{
                width: '100%',
                minHeight: 200,
                padding: 14,
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                fontSize: 13,
                fontFamily: 'inherit',
                resize: 'none',
                marginBottom: 12,
                color: '#0F172A',
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  color: characterCount < 100 ? '#EF4444' : '#64748B',
                  margin: 0,
                }}
              >
                {characterCount} / {maxCharacters} {t('interview.calibration.characters')}
              </p>
              {characterCount < 100 && (
                <p style={{ fontSize: 11, color: '#EF4444', margin: 0 }}>
                  {t('interview.calibration.minimumRequired')} {100 - characterCount}
                </p>
              )}
            </div>
          </div>

          {/* MICRO-FEEDBACK */}
          {isAnswerValid && (
            <div
              style={{
                ...card,
                padding: 16,
                background: '#F0FDF4',
                border: '1px solid #DCFCE7',
                marginBottom: 24,
              }}
            >
              <p style={{ fontSize: 12, color: '#166534', margin: 0, fontWeight: 500 }}>
                {t('interview.calibration.feedbackGood')}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div style={{ padding: 24, borderTop: '1px solid #E5E7EB', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', gap: 12, justifyContent: 'space-between' }}>
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            style={{
              padding: '10px 20px',
              background: currentStep === 0 ? '#F1F5F9' : '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 500,
              cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
              color: currentStep === 0 ? '#CBD5E1' : '#0F172A',
              transition: 'all 0.2s ease',
            }}
          >
            {t('interview.calibration.previous')}
          </button>

          {currentStep < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!isAnswerValid}
              style={{
                padding: '10px 20px',
                background: isAnswerValid ? '#2563EB' : '#E5E7EB',
                color: isAnswerValid ? '#FFFFFF' : '#94A3B8',
                border: 'none',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                cursor: isAnswerValid ? 'pointer' : 'not-allowed',
              }}
            >
              {t('interview.calibration.next')}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isAnswerValid || isSubmitting}
              style={{
                padding: '10px 24px',
                background: isAnswerValid && !isSubmitting ? '#10B981' : '#E5E7EB',
                color: isAnswerValid && !isSubmitting ? '#FFFFFF' : '#94A3B8',
                border: 'none',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                cursor: isAnswerValid && !isSubmitting ? 'pointer' : 'not-allowed',
              }}
            >
              {isSubmitting ? t('interview.calibration.analyzing') : t('interview.calibration.complete')}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
