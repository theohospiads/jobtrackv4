'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/language-provider'

type Question = {
  id: string
  questionKey: string
  subtitleKey: string
  options: { labelKey: string; value: string }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'company_size',
    questionKey: 'questionnaire.q1.question',
    subtitleKey: 'questionnaire.q1.subtitle',
    options: [
      { labelKey: 'questionnaire.q1.opt1', value: 'startup' },
      { labelKey: 'questionnaire.q1.opt2', value: 'mid' },
      { labelKey: 'questionnaire.q1.opt3', value: 'large' },
      { labelKey: 'questionnaire.q1.opt4', value: 'any' },
    ],
  },
  {
    id: 'priority',
    questionKey: 'questionnaire.q2.question',
    subtitleKey: 'questionnaire.q2.subtitle',
    options: [
      { labelKey: 'questionnaire.q2.opt1', value: 'salary' },
      { labelKey: 'questionnaire.q2.opt2', value: 'balance' },
      { labelKey: 'questionnaire.q2.opt3', value: 'growth' },
      { labelKey: 'questionnaire.q2.opt4', value: 'mission' },
      { labelKey: 'questionnaire.q2.opt5', value: 'team' },
    ],
  },
  {
    id: 'timeline',
    questionKey: 'questionnaire.q3.question',
    subtitleKey: 'questionnaire.q3.subtitle',
    options: [
      { labelKey: 'questionnaire.q3.opt1', value: 'asap' },
      { labelKey: 'questionnaire.q3.opt2', value: '1-3months' },
      { labelKey: 'questionnaire.q3.opt3', value: '3-6months' },
      { labelKey: 'questionnaire.q3.opt4', value: 'exploring' },
    ],
  },
  {
    id: 'management',
    questionKey: 'questionnaire.q4.question',
    subtitleKey: 'questionnaire.q4.subtitle',
    options: [
      { labelKey: 'questionnaire.q4.opt1', value: 'ic' },
      { labelKey: 'questionnaire.q4.opt2', value: 'manager' },
      { labelKey: 'questionnaire.q4.opt3', value: 'either' },
    ],
  },
  {
    id: 'industry',
    questionKey: 'questionnaire.q5.question',
    subtitleKey: 'questionnaire.q5.subtitle',
    options: [
      { labelKey: 'questionnaire.q5.opt1', value: 'tech' },
      { labelKey: 'questionnaire.q5.opt2', value: 'finance' },
      { labelKey: 'questionnaire.q5.opt3', value: 'healthcare' },
      { labelKey: 'questionnaire.q5.opt4', value: 'energy' },
      { labelKey: 'questionnaire.q5.opt5', value: 'retail' },
      { labelKey: 'questionnaire.q5.opt6', value: 'public' },
    ],
  },
  {
    id: 'communication',
    questionKey: 'questionnaire.q6.question',
    subtitleKey: 'questionnaire.q6.subtitle',
    options: [
      { labelKey: 'questionnaire.q6.opt1', value: 'written' },
      { labelKey: 'questionnaire.q6.opt2', value: 'meetings' },
      { labelKey: 'questionnaire.q6.opt3', value: 'mixed' },
    ],
  },
  {
    id: 'work_pace',
    questionKey: 'questionnaire.q7.question',
    subtitleKey: 'questionnaire.q7.subtitle',
    options: [
      { labelKey: 'questionnaire.q7.opt1', value: 'fast' },
      { labelKey: 'questionnaire.q7.opt2', value: 'steady' },
      { labelKey: 'questionnaire.q7.opt3', value: 'adaptable' },
    ],
  },
  {
    id: 'learning',
    questionKey: 'questionnaire.q8.question',
    subtitleKey: 'questionnaire.q8.subtitle',
    options: [
      { labelKey: 'questionnaire.q8.opt1', value: 'very_important' },
      { labelKey: 'questionnaire.q8.opt2', value: 'nice_to_have' },
      { labelKey: 'questionnaire.q8.opt3', value: 'master_existing' },
    ],
  },
  {
    id: 'team_size',
    questionKey: 'questionnaire.q9.question',
    subtitleKey: 'questionnaire.q9.subtitle',
    options: [
      { labelKey: 'questionnaire.q9.opt1', value: 'small' },
      { labelKey: 'questionnaire.q9.opt2', value: 'medium' },
      { labelKey: 'questionnaire.q9.opt3', value: 'large' },
      { labelKey: 'questionnaire.q9.opt4', value: 'any' },
    ],
  },
  {
    id: 'travel',
    questionKey: 'questionnaire.q10.question',
    subtitleKey: 'questionnaire.q10.subtitle',
    options: [
      { labelKey: 'questionnaire.q10.opt1', value: 'none' },
      { labelKey: 'questionnaire.q10.opt2', value: 'occasional' },
      { labelKey: 'questionnaire.q10.opt3', value: 'frequent' },
    ],
  },
  {
    id: 'benefits',
    questionKey: 'questionnaire.q11.question',
    subtitleKey: 'questionnaire.q11.subtitle',
    options: [
      { labelKey: 'questionnaire.q11.opt1', value: 'health' },
      { labelKey: 'questionnaire.q11.opt2', value: 'vacation' },
      { labelKey: 'questionnaire.q11.opt3', value: 'training' },
      { labelKey: 'questionnaire.q11.opt4', value: 'flexible_hours' },
      { labelKey: 'questionnaire.q11.opt5', value: 'equity' },
    ],
  },
  {
    id: 'schedule',
    questionKey: 'questionnaire.q12.question',
    subtitleKey: 'questionnaire.q12.subtitle',
    options: [
      { labelKey: 'questionnaire.q12.opt1', value: '9to5' },
      { labelKey: 'questionnaire.q12.opt2', value: 'flexible' },
      { labelKey: 'questionnaire.q12.opt3', value: 'part_time' },
    ],
  },
  {
    id: 'relocation',
    questionKey: 'questionnaire.q13.question',
    subtitleKey: 'questionnaire.q13.subtitle',
    options: [
      { labelKey: 'questionnaire.q13.opt1', value: 'yes' },
      { labelKey: 'questionnaire.q13.opt2', value: 'maybe' },
      { labelKey: 'questionnaire.q13.opt3', value: 'no' },
    ],
  },
  {
    id: 'deal_breaker',
    questionKey: 'questionnaire.q14.question',
    subtitleKey: 'questionnaire.q14.subtitle',
    options: [
      { labelKey: 'questionnaire.q14.opt1', value: 'low_salary' },
      { labelKey: 'questionnaire.q14.opt2', value: 'no_remote' },
      { labelKey: 'questionnaire.q14.opt3', value: 'bad_culture' },
      { labelKey: 'questionnaire.q14.opt4', value: 'no_growth' },
    ],
  },
  {
    id: 'decision_style',
    questionKey: 'questionnaire.q15.question',
    subtitleKey: 'questionnaire.q15.subtitle',
    options: [
      { labelKey: 'questionnaire.q15.opt1', value: 'data' },
      { labelKey: 'questionnaire.q15.opt2', value: 'intuition' },
      { labelKey: 'questionnaire.q15.opt3', value: 'consensus' },
    ],
  },
  {
    id: 'title_importance',
    questionKey: 'questionnaire.q16.question',
    subtitleKey: 'questionnaire.q16.subtitle',
    options: [
      { labelKey: 'questionnaire.q16.opt1', value: 'very_important' },
      { labelKey: 'questionnaire.q16.opt2', value: 'nice_to_have' },
      { labelKey: 'questionnaire.q16.opt3', value: 'dont_care' },
    ],
  },
]

export default function QuestionnairePage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [fadeIn, setFadeIn] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const question = QUESTIONS[currentStep]
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100
  const stepText = `${t('questionnaire.step')} ${currentStep + 1} ${t('questionnaire.of')} ${QUESTIONS.length}`

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
    if (currentStep < QUESTIONS.length - 1) {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setFadeIn(true)
      }, 200)
    } else {
      // Last question -> complete
      setIsSaving(true)
      setTimeout(() => {
        setIsSaving(false)
        setIsComplete(true)
      }, 800)
    }
  }

  if (isComplete) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          padding: '24px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '480px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Success checkmark */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#ECFDF5',
              border: '2px solid #86EFAC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#0F172A',
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            {t('questionnaire.done.title')}
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: 0,
              lineHeight: '1.6',
              maxWidth: '380px',
            }}
          >
            {t('questionnaire.done.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button
              onClick={() => router.push('/profile')}
              style={{
                padding: '12px 20px',
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                background: '#FFFFFF',
                color: '#0F172A',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F8FAFC'
                e.currentTarget.style.borderColor = '#CBD5E1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF'
                e.currentTarget.style.borderColor = '#E5E7EB'
              }}
            >
              {t('questionnaire.done.backProfile')}
            </button>
            <button
              onClick={() => router.push('/opportunities')}
              style={{
                padding: '12px 20px',
                borderRadius: '10px',
                border: 'none',
                background: '#2563EB',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1E40AF'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2563EB'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {t('questionnaire.done.seeOpportunities')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          opacity: fadeIn ? 1 : 0.5,
          transition: 'opacity 200ms ease',
        }}
      >
        {/* Progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              width: '100%',
              height: '4px',
              background: '#E5E7EB',
              borderRadius: '100px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #2563EB 0%, #1E40AF 100%)',
                transition: 'width 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                borderRadius: '100px',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#64748B',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {stepText}
            </p>
            <button
              onClick={() => router.push('/profile')}
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: '#94A3B8',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#64748B' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8' }}
            >
              {'Skip'}
            </button>
          </div>
        </div>

        {/* Question */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#0F172A',
              margin: 0,
              lineHeight: '1.25',
              letterSpacing: '-0.5px',
            }}
          >
            {t(question.questionKey)}
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: 0,
              lineHeight: '1.6',
              fontWeight: '400',
            }}
          >
            {t(question.subtitleKey)}
          </p>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {question.options.map((opt) => {
            const isSelected = answers[question.id] === opt.value
            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                disabled={isSaving}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: `2px solid ${isSelected ? '#2563EB' : '#E5E7EB'}`,
                  background: isSelected ? '#EFF6FF' : '#FFFFFF',
                  color: '#0F172A',
                  fontSize: '15px',
                  fontWeight: '500',
                  cursor: isSaving ? 'wait' : 'pointer',
                  transition: 'all 200ms ease',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected && !isSaving) {
                    e.currentTarget.style.borderColor = '#BFDBFE'
                    e.currentTarget.style.background = '#FAFBFF'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected && !isSaving) {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                {/* Radio indicator */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    border: `2px solid ${isSelected ? '#2563EB' : '#CBD5E1'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 200ms ease',
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: '#2563EB',
                      }}
                    />
                  )}
                </div>
                <span>{t(opt.labelKey)}</span>
              </button>
            )
          })}
        </div>

        {/* Saving indicator */}
        {isSaving && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: 16,
                height: 16,
                border: '2px solid #E5E7EB',
                borderTop: '2px solid #2563EB',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }}
            />
            <span style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>
              {t('questionnaire.saving')}
            </span>
            <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
          </div>
        )}
      </div>
    </div>
  )
}
