'use client'

import { useLanguage } from './language-provider'
import { useState } from 'react'

interface CalibrationResponse {
  question: number
  text: string
  dimensions: {
    ownership: 'weak' | 'moderate' | 'strong'
    impact: 'weak' | 'moderate' | 'strong'
    reasoning: 'weak' | 'moderate' | 'strong'
    communication: 'weak' | 'moderate' | 'strong'
  }
}

interface OptimizedAnswer {
  question: string
  whyAsked: string
  structure: string
  strengths: string[]
  editable: string
}

export function ProactivePreparation() {
  const { t } = useLanguage()
  const [calibrationState, setCalibrationState] = useState<'required' | 'calibrating' | 'complete'>('required')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<CalibrationResponse[]>([])
  const [currentText, setCurrentText] = useState('')

  const calibrationQuestions = [
    { id: 1, text: t('interview.calibration.q1') },
    { id: 2, text: t('interview.calibration.q2') },
    { id: 3, text: t('interview.calibration.q3') },
    { id: 4, text: t('interview.calibration.q4') },
    { id: 5, text: t('interview.calibration.q5') },
  ]

  const mockOptimizedAnswers: OptimizedAnswer[] = [
    {
      question: 'Tell me about a time you drove significant business impact.',
      whyAsked: 'Tests quantification, ownership, and result communication.',
      structure: 'Situation → Your ownership → Measured impact → Business outcome',
      strengths: ['Specificity of metrics', 'Clear ownership claim', 'Business context'],
      editable: 'Your personalized answer will appear here after calibration.',
    },
    {
      question: 'Describe how you solve ambiguous problems with incomplete information.',
      whyAsked: 'Evaluates analytical approach and decision-making framework.',
      structure: 'Problem space → Analysis approach → Decision logic → Outcome learning',
      strengths: ['Structured thinking', 'Comfort with ambiguity', 'Bias checking'],
      editable: 'Your personalized answer will appear here after calibration.',
    },
    {
      question: 'Share an example where you influenced without direct authority.',
      whyAsked: 'Assesses influence capability and cross-functional collaboration.',
      structure: 'Context → Stakeholder resistance → Your approach → Resolution',
      strengths: ['Empathy for others', 'Creative negotiation', 'Persistence'],
      editable: 'Your personalized answer will appear here after calibration.',
    },
    {
      question: 'How do you measure success in your current role?',
      whyAsked: 'Reveals values alignment and metric-driven mindset.',
      structure: 'Primary metric → Why it matters → How you track → Accountability',
      strengths: ['Clear priorities', 'Quantifiable goals', 'Accountability ownership'],
      editable: 'Your personalized answer will appear here after calibration.',
    },
    {
      question: 'Tell me about a significant failure and what you learned.',
      whyAsked: 'Tests resilience, self-awareness, and learning agility.',
      structure: 'Failure context → Your responsibility → Specific learnings → Applied change',
      strengths: ['Self-accountability', 'Learning velocity', 'Humility'],
      editable: 'Your personalized answer will appear here after calibration.',
    },
  ]

  const handleStartCalibration = () => {
    setCalibrationState('calibrating')
  }

  const handleSubmitQuestion = () => {
    if (currentText.length < 100) return

    const mockDimensions = {
      ownership: currentText.includes('I') ? 'strong' : 'moderate',
      impact: currentText.includes('impact') || currentText.includes('result') ? 'strong' : 'moderate',
      reasoning: currentText.includes('because') || currentText.includes('why') ? 'strong' : 'moderate',
      communication: currentText.length > 150 ? 'strong' : 'moderate',
    }

    const newResponse: CalibrationResponse = {
      question: currentQuestion,
      text: currentText,
      dimensions: mockDimensions,
    }

    setResponses([...responses, newResponse])
    setCurrentText('')

    if (currentQuestion < calibrationQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCalibrationState('complete')
    }
  }

  const card = {
    border: '1px solid #E5E7EB',
    borderRadius: 12,
    background: '#FFFFFF',
  }

  // STATE 1: CALIBRATION REQUIRED
  if (calibrationState === 'required') {
    return (
      <div style={{ marginBottom: 32 }}>
        {/* PROCESS FRAMING LABEL */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Step 1 — Interview Calibration
          </p>
        </div>

        {/* PRIMARY MODULE - CALIBRATION CTA */}
        <div
          style={{
            ...card,
            padding: 48,
            marginBottom: 24,
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 100%)',
            border: '1px solid #DBEAFE',
            borderRadius: 8,
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', margin: '0 0 16px 0' }}>
            Build Your Interview Advantage for This Role
          </h2>
          <p style={{ fontSize: 15, color: '#475569', margin: '0 0 32px 0', lineHeight: 1.7 }}>
            Complete a short calibration to model how this role is likely to evaluate you. We analyze ownership depth, impact clarity, and response structure against hiring patterns.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
              marginBottom: 32,
              paddingBottom: 32,
              borderBottom: '1px solid rgba(219, 234, 254, 0.5)',
            }}
          >
            <div style={{ fontSize: 12, color: '#64748B' }}>
              <span style={{ fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 6 }}>
                5 {t('interview.calibration.questions')}
              </span>
              ~8 {t('interview.calibration.minutes')}
            </div>
            <div style={{ fontSize: 12, color: '#64748B' }}>
              <span style={{ fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 6 }}>
                {t('interview.calibration.instantResults')}
              </span>
              {t('interview.calibration.personalizedPlan')}
            </div>
            <div style={{ fontSize: 12, color: '#64748B' }}>
              <span style={{ fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 6 }}>
                {t('interview.calibration.encrypted')}
              </span>
              {t('interview.calibration.privateOnly')}
            </div>
          </div>

          <p style={{ fontSize: 11, color: '#64748B', margin: '0 0 24px 0', fontStyle: 'italic' }}>
            Based on hiring patterns from comparable roles and structured interview frameworks.
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={handleStartCalibration}
              style={{
                padding: '14px 32px',
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)',
              }}
            >
              {t('interview.calibration.startButton')}
            </button>
            <button
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#2563EB',
                border: '1px solid #2563EB',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {t('interview.calibration.learnMore')}
            </button>
            <span style={{ fontSize: 11, color: '#94A3B8', marginLeft: 'auto' }}>
              Estimated completion: 8 minutes | Unlocks full preparation system
            </span>
          </div>
        </div>

        {/* PREVIEW CARDS - LOCKED */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            {
              title: 'Interview Risk Assessment',
              description: 'Your top strengths and critical risks in this interview.',
            },
            {
              title: 'Role-Calibrated Answer Frameworks',
              description: '5 calibrated answers ranked by relevance to this role.',
            },
            {
              title: 'Competency Mastery Lab',
              description: 'Master key competencies through focused practice sessions.',
            },
            {
              title: 'Executive Interview Briefing',
              description: '30-second narrative, unique signals, and risk mitigation.',
            },
          ].map((cardItem, i) => (
            <div
              key={i}
              style={{
                ...card,
                padding: 20,
                opacity: 0.65,
                pointerEvents: 'none',
                borderRadius: 8,
              }}
            >
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 8px 0' }}>
                🔒 {cardItem.title}
              </h3>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                {cardItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // STATE 2: CALIBRATION IN PROGRESS
  if (calibrationState === 'calibrating') {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#FFFFFF',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          padding: 32,
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', margin: 0 }}>
              {t('interview.calibration.title')}
            </h1>
            <button
              onClick={() => setCalibrationState('required')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              ✕
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>
              {t('interview.calibration.progress')} {currentQuestion + 1} {t('interview.calibration.of')}{' '}
              {calibrationQuestions.length}
            </span>
          </div>
          <div style={{ width: '100%', height: 4, background: '#E5E7EB', borderRadius: 2 }}>
            <div
              style={{
                height: '100%',
                width: `${((currentQuestion + 1) / calibrationQuestions.length) * 100}%`,
                background: '#2563EB',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* QUESTION */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: 16, fontWeight: 500, color: '#0F172A', marginBottom: 20 }}>
            {calibrationQuestions[currentQuestion]?.text}
          </p>

          <textarea
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder={t('interview.calibration.answerPlaceholder')}
            style={{
              flex: 1,
              padding: 16,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              fontSize: 14,
              fontFamily: 'inherit',
              resize: 'none',
              marginBottom: 16,
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontSize: 12, color: currentText.length < 100 ? '#EF4444' : '#10B981' }}>
              {currentText.length} {t('interview.calibration.characters')} ({t('interview.calibration.minimumRequired')}{' '}
              100)
            </span>
            {currentText.length >= 100 && (
              <span style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>
                ✓ {t('interview.calibration.feedbackGood')}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => {
                if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
              }}
              disabled={currentQuestion === 0}
              style={{
                padding: '12px 20px',
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                opacity: currentQuestion === 0 ? 0.5 : 1,
              }}
            >
              {t('interview.calibration.previous')}
            </button>
            <button
              onClick={handleSubmitQuestion}
              disabled={currentText.length < 100}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: currentText.length < 100 ? '#E5E7EB' : '#2563EB',
                color: currentText.length < 100 ? '#94A3B8' : '#FFFFFF',
                border: 'none',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
                cursor: currentText.length < 100 ? 'not-allowed' : 'pointer',
              }}
            >
              {currentQuestion === calibrationQuestions.length - 1
                ? t('interview.calibration.complete')
                : t('interview.calibration.next')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // STATE 3: PREPARATION ENGINE UNLOCKED
  if (calibrationState === 'complete') {
    return (
      <div style={{ marginBottom: 32 }}>
        {/* CALIBRATION STATUS BAR */}
        <div style={{ ...card, padding: 16, marginBottom: 24, background: '#F0FDF4' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#166534' }}>
                ✓ {t('interview.dashboard.calibrationComplete')}
              </span>
              <p style={{ fontSize: 11, color: '#4B7C0F', margin: '4px 0 0 0' }}>
                {t('interview.dashboard.calibrationDate')}
              </p>
            </div>
            <button
              onClick={() => setCalibrationState('required')}
              style={{
                padding: '6px 12px',
                background: '#FFFFFF',
                border: '1px solid #86EFAC',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 500,
                cursor: 'pointer',
                color: '#166534',
              }}
            >
              {t('interview.dashboard.recalibrate')}
            </button>
          </div>
        </div>

        {/* OPTIMIZED ANSWER PACK - PRIMARY SECTION */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>
            {t('interview.dashboard.optimizedAnswers')}
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {mockOptimizedAnswers.map((answer, i) => (
              <div key={i} style={{ ...card, padding: 20 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', marginBottom: 8 }}>
                  {answer.question}
                </h3>
                <p style={{ fontSize: 11, color: '#64748B', margin: '0 0 12px 0' }}>
                  {t('interview.dashboard.whyAsked')}: {answer.whyAsked}
                </p>

                <div style={{ background: '#F8FAFC', padding: 12, borderRadius: 6, marginBottom: 12 }}>
                  <p style={{ fontSize: 11, color: '#475569', margin: 0, fontWeight: 500 }}>
                    {t('interview.dashboard.structure')}: {answer.structure}
                  </p>
                </div>

                <p style={{ fontSize: 11, color: '#64748B', marginBottom: 12 }}>
                  {t('interview.dashboard.strengths')}: {answer.strengths.join(', ')}
                </p>

                <div
                  style={{
                    background: '#F1F5F9',
                    padding: 12,
                    borderRadius: 6,
                    borderLeft: '3px solid #2563EB',
                  }}
                >
                  <p style={{ fontSize: 11, color: '#475569', margin: 0 }}>
                    {answer.editable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRAINING LAB ENTRY */}
        <div style={{ ...card, padding: 24, marginBottom: 24, background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 12 }}>
            {t('interview.dashboard.trainingLab')}
          </h2>
          <p style={{ fontSize: 13, color: '#475569', margin: '0 0 16px 0' }}>
            {t('interview.dashboard.trainingDescription')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                {t('interview.dashboard.masterySnapshot')}: 64% / 75%
              </p>
              <div style={{ marginTop: 8, width: 200, height: 4, background: '#E5E7EB', borderRadius: 2 }}>
                <div
                  style={{
                    height: '100%',
                    width: '64%',
                    background: '#2563EB',
                  }}
                />
              </div>
            </div>
            <button
              style={{
                padding: '10px 20px',
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {t('interview.dashboard.startSession')}
            </button>
          </div>
        </div>

        {/* STRATEGY DOSSIER FOOTER */}
        <div style={{ ...card, padding: 20 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', marginBottom: 12 }}>
            {t('interview.dashboard.dossier')}
          </h3>
          <div style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
            <div>
              <p style={{ fontSize: 11, color: '#64748B', fontWeight: 600, margin: '0 0 4px 0' }}>
                {t('interview.dashboard.keyNarrative')}
              </p>
              <p style={{ fontSize: 12, color: '#475569', margin: 0 }}>
                {'"I drive measurable outcomes through structured problem-solving and clear communication of impact."'}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: '#64748B', fontWeight: 600, margin: '0 0 4px 0' }}>
                {t('interview.dashboard.uniqueSignals')}
              </p>
              <p style={{ fontSize: 12, color: '#475569', margin: 0 }}>
                Quantified impact claims, cross-functional influence, structured problem-solving
              </p>
            </div>
          </div>
          <button
            style={{
              width: '100%',
              padding: '10px 12px',
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              color: '#0F172A',
            }}
          >
            {t('interview.dashboard.exportPDF')}
          </button>
        </div>
      </div>
    )
  }

  return null
}
