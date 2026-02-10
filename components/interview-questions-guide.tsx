'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'

export function InterviewQuestionsGuide() {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  const questions = [
    { questionKey: 'interview.q1.question', tipKey: 'interview.q1.tip' },
    { questionKey: 'interview.q2.question', tipKey: 'interview.q2.tip' },
    { questionKey: 'interview.q3.question', tipKey: 'interview.q3.tip' },
    { questionKey: 'interview.q4.question', tipKey: 'interview.q4.tip' },
    { questionKey: 'interview.q5.question', tipKey: 'interview.q5.tip' },
    { questionKey: 'interview.q6.question', tipKey: 'interview.q6.tip' },
    { questionKey: 'interview.q7.question', tipKey: 'interview.q7.tip' },
  ]

  const dangers = [
    { key: 'interview.danger1' },
    { key: 'interview.danger2' },
    { key: 'interview.danger3' },
  ]

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        marginBottom: 24,
      }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: '#EFF6FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8.228 9C8.77 7.834 10.261 7 12 7C14.21 7 16 8.343 16 10C16 11.4 14.728 12.578 13.005 12.912C12.437 13.022 12 13.475 12 14.053V14.5M12 17.5H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', margin: 0 }}>
              {t('interview.title')}
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>
              {t('interview.subtitle')}
            </p>
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transition: 'transform 0.3s ease',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div style={{ padding: '0 24px 24px 24px' }}>
          {/* Questions Title */}
          <p style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            {t('interview.questionsTitle')}
          </p>

          {/* Questions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
            {questions.map((q, index) => (
              <div
                key={index}
                style={{
                  borderRadius: 8,
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  background: index % 2 === 0 ? '#FAFBFF' : '#FFFFFF',
                }}
              >
                <button
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: expandedQuestion === index ? '#2563EB' : '#E5E7EB',
                        color: expandedQuestion === index ? '#FFFFFF' : '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                      {t(q.questionKey)}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                      transition: 'transform 0.2s ease',
                      transform: expandedQuestion === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                    }}
                  >
                    <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {expandedQuestion === index && (
                  <div
                    style={{
                      padding: '0 16px 14px 48px',
                    }}
                  >
                    <div
                      style={{
                        padding: '10px 14px',
                        background: '#EFF6FF',
                        borderRadius: 6,
                        border: '1px solid #BFDBFE',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                          <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.2208 7.20983 13.1599 9 14.1973V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V14.1973C16.7902 13.1599 18 11.2208 18 9C18 5.68629 15.3137 3 12 3Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p style={{ fontSize: 13, color: '#1E40AF', margin: 0, lineHeight: '1.5' }}>
                          {t(q.tipKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Danger Answers */}
          <p style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            {t('interview.dangerTitle')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {dangers.map((danger, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  padding: '10px 14px',
                  background: '#FEF2F2',
                  borderRadius: 8,
                  border: '1px solid #FECACA',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M4.5 4.5L11.5 11.5M4.5 11.5L11.5 4.5" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p style={{ fontSize: 13, color: '#991B1B', margin: 0, lineHeight: '1.5' }}>
                  {t(danger.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
