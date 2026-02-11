'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'

interface SalaryNegotiationGuideProps {
  salaryRange: string
  jobTitle: string
}

export function SalaryNegotiationGuide({ salaryRange, jobTitle }: SalaryNegotiationGuideProps) {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  const arguments_list = [
    {
      titleKey: 'salary.arg1.title',
      descKey: 'salary.arg1.desc',
      exampleKey: 'salary.arg1.example',
    },
    {
      titleKey: 'salary.arg2.title',
      descKey: 'salary.arg2.desc',
      exampleKey: 'salary.arg2.example',
    },
    {
      titleKey: 'salary.arg3.title',
      descKey: 'salary.arg3.desc',
      exampleKey: 'salary.arg3.example',
    },
    {
      titleKey: 'salary.arg4.title',
      descKey: 'salary.arg4.desc',
      exampleKey: 'salary.arg4.example',
    },
    {
      titleKey: 'salary.arg5.title',
      descKey: 'salary.arg5.desc',
      exampleKey: 'salary.arg5.example',
    },
  ]

  const mistakes = [
    { key: 'salary.mistake1' },
    { key: 'salary.mistake2' },
    { key: 'salary.mistake3' },
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
      {/* Header - always visible */}
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
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', margin: 0 }}>
              {t('salary.title')}
            </p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>
              {t('salary.subtitle')}
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
          {/* Salary Context */}
          <div
            style={{
              padding: '12px 16px',
              background: '#EFF6FF',
              borderRadius: 8,
              marginBottom: 20,
              border: '1px solid #BFDBFE',
            }}
          >
            <p style={{ fontSize: 13, color: '#1E40AF', margin: 0, fontWeight: 600 }}>
              {t('salary.rangeLabel')}: {salaryRange}
            </p>
            <p style={{ fontSize: 12, color: '#3B82F6', margin: '4px 0 0 0' }}>
              {t('salary.rangeInfo')}
            </p>
          </div>

          {/* High-Impact Arguments */}
          <p style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            {t('salary.argumentsTitle')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {arguments_list.map((arg, index) => (
              <div
                key={index}
                style={{
                  padding: '14px 16px',
                  background: index % 2 === 0 ? '#FAFBFF' : '#FFFFFF',
                  borderRadius: 8,
                  border: '1px solid #E5E7EB',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: '#2563EB',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                      {t(arg.titleKey)}
                    </p>
                    <p style={{ fontSize: 13, color: '#475569', margin: '4px 0 0 0', lineHeight: '1.5' }}>
                      {t(arg.descKey)}
                    </p>
                    <p style={{ fontSize: 12, color: '#2563EB', margin: '6px 0 0 0', fontStyle: 'italic' }}>
                      {t(arg.exampleKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Common Mistakes */}
          <p style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            {t('salary.mistakesTitle')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {mistakes.map((mistake, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  padding: '10px 14px',
                  background: '#FFF7ED',
                  borderRadius: 8,
                  border: '1px solid #FED7AA',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M8 5V8M8 11H8.01M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{ fontSize: 13, color: '#9A3412', margin: 0, lineHeight: '1.5' }}>
                  {t(mistake.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
