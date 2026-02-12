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

export function ProactivePreparation({ currentStage = 1 }: { currentStage?: number }) {
  const { t } = useLanguage()
  const [calibrationState, setCalibrationState] = useState<'required' | 'calibrating' | 'complete'>('required')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<CalibrationResponse[]>([])
  const [currentText, setCurrentText] = useState('')

  // Only show during Proactive Preparation stage (stage 1)
  if (currentStage !== 1) return null

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
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#475569', margin: 0, textTransform: 'uppercase', letterSpacing: '0.75px' }}>
            Step 1 — Role Evaluation Model
          </p>
        </div>

        {/* PRIMARY MODULE - CALIBRATION CTA */}
        <div
          style={{
            ...card,
            padding: 40,
            marginBottom: 24,
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 6,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', margin: '0 0 12px 0' }}>
            Role Evaluation Model — This Position
          </h2>
          <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 24px 0', lineHeight: 1.6 }}>
            This module simulates how this role is likely to assess candidates based on structured hiring signals and comparable role data.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              marginBottom: 24,
              paddingBottom: 24,
              borderBottom: '1px solid #E5E7EB',
            }}
          >
            <div style={{ fontSize: 12, color: '#64748B' }}>
              <span style={{ fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 4, fontSize: 11 }}>
                OBJECTIVE
              </span>
              Model evaluation criteria for this role
            </div>
            <div style={{ fontSize: 12, color: '#64748B' }}>
              <span style={{ fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 4, fontSize: 11 }}>
                METHOD
              </span>
              Structured signal simulation (5 variables)
            </div>
            <div style={{ fontSize: 12, color: '#64748B' }}>
              <span style={{ fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 4, fontSize: 11 }}>
                OUTPUT
              </span>
              Risk profile + answer frameworks + roadmap
            </div>
          </div>

          {/* HIRING SIGNALS PREVIEW */}
          <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#94A3B8', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Hiring Signals Preview
            </p>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                { label: 'Ownership Depth', percent: 31 },
                { label: 'Impact Quantification', percent: 24 },
                { label: 'Stakeholder Influence', percent: 18 },
                { label: 'Communication Clarity', percent: 17 },
                { label: 'Domain Relevance', percent: 10 },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 500, color: '#64748B' }}>{item.label}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: '#94A3B8' }}>{item.percent}%</span>
                  </div>
                  <div style={{ width: '100%', height: 4, background: '#E5E7EB', borderRadius: 2 }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${item.percent}%`,
                        background: '#CBD5E1',
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleStartCalibration}
            style={{
              padding: '14px 32px',
              background: '#1E40AF',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(30, 64, 175, 0.25)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.background = '#1E3A8A';
              (e.target as HTMLButtonElement).style.boxShadow = '0 2px 6px rgba(30, 64, 175, 0.35)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.background = '#1E40AF';
              (e.target as HTMLButtonElement).style.boxShadow = '0 1px 3px rgba(30, 64, 175, 0.25)';
            }}
          >
            Begin Evaluation
          </button>
        </div>

        {/* PREVIEW CARDS - LOCKED */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Preparation Modules
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {[
            {
              title: 'Interview Risk Assessment',
              description: 'Projected outcome, signal weighting, and risk analysis.',
            },
            {
              title: 'Role-Calibrated Answer Frameworks',
              description: 'Answer models ranked by relevance and hiring weight.',
            },
            {
              title: 'Competency Mastery Lab',
              description: 'Targeted practice with real hiring criteria.',
            },
            {
              title: 'Executive Interview Briefing',
              description: 'Strategy summary, signal map, and execution plan.',
            },
          ].map((cardItem, i) => (
            <div
              key={i}
              style={{
                ...card,
                padding: 16,
                opacity: 0.55,
                pointerEvents: 'none',
                borderRadius: 4,
              }}
            >
              <h3 style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: '0 0 6px 0' }}>
                🔒 {cardItem.title}
              </h3>
              <p style={{ fontSize: 11, color: '#64748B', margin: 0 }}>
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

  // STATE 3: EVALUATION OUTPUT
  if (calibrationState === 'complete') {
    return (
      <div style={{ marginBottom: 32 }}>
        {/* EVALUATION OUTPUT HEADER */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#475569', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.75px' }}>
            Evaluation Output
          </p>
        </div>

        {/* A. PROJECTED INTERVIEW OUTCOME */}
        <div style={{ ...card, padding: 24, marginBottom: 20, borderRadius: 4 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Projected Interview Outcome
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            <div>
              <p style={{ fontSize: 10, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 600 }}>Current Position</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: 0 }}>42% <span style={{ fontSize: 12, color: '#64748B', fontWeight: 500 }}>Moderate</span></p>
            </div>
            <div>
              <p style={{ fontSize: 10, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 600 }}>Projected Position (If Execution Plan Complete)</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: 0 }}>58% <span style={{ fontSize: 12, color: '#10B981', fontWeight: 500 }}>Strong</span></p>
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #E5E7EB' }}>
            <p style={{ fontSize: 12, color: '#475569', margin: '0 0 8px 0' }}>
              <span style={{ fontWeight: 600 }}>Delta Potential:</span> +16% if execution plan completed
            </p>
            <p style={{ fontSize: 12, color: '#475569', margin: 0 }}>
              <span style={{ fontWeight: 600 }}>Peer Benchmark:</span> 68th percentile vs similar applicants
            </p>
          </div>
        </div>

        {/* B. HIRING SIGNAL WEIGHTING */}
        <div style={{ ...card, padding: 24, marginBottom: 20, borderRadius: 4 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Hiring Signal Distribution (This Role)
          </h3>
          <div style={{ display: 'grid', gap: 16 }}>
            {[
              { label: 'Ownership Depth', percent: 31 },
              { label: 'Impact Quantification', percent: 24 },
              { label: 'Stakeholder Influence', percent: 18 },
              { label: 'Communication Clarity', percent: 17 },
              { label: 'Domain Relevance', percent: 10 },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 500, color: '#0F172A' }}>{item.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#475569' }}>{item.percent}%</span>
                </div>
                <div style={{ width: '100%', height: 6, background: '#E5E7EB', borderRadius: 2 }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${item.percent}%`,
                      background: '#64748B',
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C. RISK ASSESSMENT PANEL */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 20 }}>
          <div style={{ ...card, padding: 20, borderRadius: 4 }}>
            <h3 style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Positive Signals
            </h3>
            <ul style={{ fontSize: 11, color: '#475569', margin: 0, paddingLeft: 16, lineHeight: 1.6 }}>
              <li>Strong foundational match</li>
              <li>Referral vector available</li>
            </ul>
          </div>
          <div style={{ ...card, padding: 20, borderRadius: 4, background: '#FEF8F0' }}>
            <h3 style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Signal Deficiencies
            </h3>
            <ul style={{ fontSize: 11, color: '#7C3A0F', margin: 0, paddingLeft: 16, lineHeight: 1.6 }}>
              <li>Limited quantified outcomes</li>
              <li>Experience depth gap in role type</li>
            </ul>
          </div>
        </div>

        {/* EXECUTION PLAN SECTION */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#475569', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.75px' }}>
            Execution Plan — Signal Optimization
          </p>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { action: 'Activate referral outreach', impact: '+12%', rationale: 'Improves recruiter shortlist probability' },
              { action: 'Document 3 quantified outcomes', impact: '+8%', rationale: 'Addresses signal deficiency directly' },
              { action: 'Practice cross-functional stories', impact: '+6%', rationale: 'Strengthens influence signal clarity' },
            ].map((item, i) => (
              <div key={i} style={{ ...card, padding: 16, borderRadius: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
                  <h4 style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: 0 }}>{item.action}</h4>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#10B981' }}>Signal Impact: {item.impact}</span>
                </div>
                <p style={{ fontSize: 11, color: '#64748B', margin: 0 }}>Rationale: {item.rationale}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROLE-CALIBRATED ANSWER FRAMEWORKS */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#475569', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.75px' }}>
            Role-Calibrated Answer Frameworks
          </p>
          <div style={{ display: 'grid', gap: 12 }}>
            {mockOptimizedAnswers.map((answer, i) => (
              <div key={i} style={{ ...card, padding: 16, borderRadius: 4 }}>
                <h3 style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', marginBottom: 8, margin: 0 }}>
                  {answer.question}
                </h3>
                <p style={{ fontSize: 10, color: '#94A3B8', margin: '8px 0', fontWeight: 600 }}>
                  Signal Alignment: {answer.whyAsked}
                </p>
                <div style={{ background: '#F8FAFC', padding: 10, borderRadius: 3, marginBottom: 8 }}>
                  <p style={{ fontSize: 10, color: '#475569', margin: 0, fontWeight: 500 }}>
                    {answer.structure}
                  </p>
                </div>
                <p style={{ fontSize: 10, color: '#64748B', margin: 0 }}>
                  {answer.strengths.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXECUTIVE INTERVIEW BRIEFING */}
        <div style={{ ...card, padding: 20, borderRadius: 4 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Executive Interview Briefing
          </h3>
          <div style={{ display: 'grid', gap: 12, fontSize: 11 }}>
            <div>
              <p style={{ color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0' }}>30-Second Narrative</p>
              <p style={{ color: '#475569', margin: 0 }}>
                {'"I drive measurable outcomes through structured problem-solving and clear cross-functional communication of impact."'}
              </p>
            </div>
            <div>
              <p style={{ color: '#94A3B8', fontWeight: 600, margin: '0 0 6px 0' }}>Unique Signals</p>
              <p style={{ color: '#475569', margin: 0 }}>
                Quantified impact claims, cross-functional influence capability, structured problem-solving framework
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
