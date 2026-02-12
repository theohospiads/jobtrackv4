'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from './language-provider'

interface ApplicationInsightsHubProps {
  currentStage: number
  jobTitle: string
  companyName: string
  submittedDate: string
  salaryRange: string
}

const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 16,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
} as const

export function ApplicationInsightsHub({
  currentStage,
  jobTitle,
  companyName,
  submittedDate,
  salaryRange,
}: ApplicationInsightsHubProps) {
  const { t } = useLanguage()
  const [done, setDone] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (currentStage !== 0) return null
  if (!mounted) return null

  const daysIn = 3
  const reviewDays = 7
  const current = 42
  const projected = 58
  const confidence = 74
  const percentile = 68
  const total = 3
  const completed = done.length

  const toggle = (i: number) =>
    setDone(p => (p.includes(i) ? p.filter(x => x !== i) : [...p, i]))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* PROJECTED OUTCOME */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('insights.projectedOutcome')}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ flex: 1, padding: 20, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 500 }}>{t('insights.now')}</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1 }}>{current}%</p>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '8px 0 0 0' }}>{t('insights.moderate')}</p>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div style={{ flex: 1, padding: 20, background: '#F0FDF4', borderRadius: 12, textAlign: 'center', border: '1px solid #DCFCE7' }}>
            <p style={{ fontSize: 11, color: '#10B981', margin: '0 0 8px 0', fontWeight: 500 }}>{t('insights.projected')}</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#10B981', margin: 0, lineHeight: 1 }}>{projected}%</p>
            <p style={{ fontSize: 11, color: '#10B981', margin: '8px 0 0 0' }}>{t('insights.strong')}</p>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
          {t('insights.improvementSummary')
            .replace('{delta}', String(projected - current))
            .replace('{percentile}', String(percentile))}
        </p>
      </div>

      {/* YOUR STRATEGIC MOVES */}
      <div style={{ ...card, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t('insights.strategicMoves')}
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: '#64748B' }}>
              {completed}/{total}
            </span>
            <div style={{ width: 48, height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(completed / total) * 100}%`, background: '#10B981', transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 16px 0' }}>
          {t('insights.moveFromTo')
            .replace('{current}', String(current))
            .replace('{projected}', String(projected))}
        </p>

        {[
          { labelKey: 'insights.activateReferral', impact: '+12%', descKey: 'insights.activateReferralDesc' },
          { labelKey: 'insights.addQuantified', impact: '+5%', descKey: 'insights.addQuantifiedDesc' },
          { labelKey: 'insights.completeScreening', impact: '+3%', descKey: 'insights.completeScreeningDesc' },
        ].map((a, i) => {
          const isDone = done.includes(i)
          return (
              <div
              key={i}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '14px 12px',
                marginTop: i > 0 ? 8 : 0,
                background: isDone ? '#FAFBFC' : '#F8FAFC',
                borderRadius: 10,
                borderLeft: isDone ? '3px solid #D1D5DB' : '3px solid #2563EB',
                opacity: isDone ? 0.5 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDone ? '#94A3B8' : '#0F172A', textDecoration: isDone ? 'line-through' : 'none' }}>{t(a.labelKey)}</span>
                  <span style={{ fontSize: 11, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '2px 8px', borderRadius: 10 }}>
                    {a.impact}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>{t(a.descKey)}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(i)}
                style={{
                  fontSize: 12, fontWeight: 500,
                  color: isDone ? '#94A3B8' : '#0F172A',
                  background: isDone ? '#F8FAFC' : '#F1F5F9',
                  border: '1px solid #E5E7EB',
                  padding: '5px 12px', borderRadius: 8, cursor: 'pointer', flexShrink: 0,
                }}
              >
                {isDone ? t('insights.undo') : t('insights.complete')}
              </button>
            </div>
          )
        })}
      </div>

          {/* What Recruiters Look For */}
          <div style={{ ...card, padding: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {t('insights.whatRecruitersLookFor')}
              </p>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 24px 0' }}>
                {t('insights.basedOnPatterns')}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Working in your favor */}
                <div style={{ padding: 20, background: '#FAFDFB', borderRadius: 12, border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                      {t('insights.workingInFavor')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { tag: '+15%', textKey: 'insights.skillsMatch' },
                      { tag: '+5%', textKey: 'insights.referralAvailable' },
                    ].map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{
                          fontSize: 11, fontWeight: 600, color: '#10B981', background: '#F0FDF4',
                          padding: '2px 8px', borderRadius: 6, flexShrink: 0, marginTop: 1,
                        }}>{s.tag}</span>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: '1.4' }}>{t(s.textKey)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas to strengthen */}
                <div style={{ padding: 20, background: '#FFFBFB', borderRadius: 12, border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                      {t('insights.areasToStrengthen')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { tag: '-8%', textKey: 'insights.limitedOutcomes' },
                      { tag: 'Gap', textKey: 'insights.experienceGap' },
                    ].map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{
                          fontSize: 11, fontWeight: 600, color: '#DC2626', background: '#FEF2F2',
                          padding: '2px 8px', borderRadius: 6, flexShrink: 0, marginTop: 1,
                        }}>{s.tag}</span>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: '1.4' }}>{t(s.textKey)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>

          {/* Application Journey - New 5-Stage Structure */}
          <div style={{ ...card, padding: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {t('insights.applicationJourney')}
            </p>
            {[
              { 
                stage: 1, 
                labelKey: 'insights.appSubmitted', 
                subKey: 'insights.optimizationStage',
                status: 'current' as const,
                color: '#2563EB'
              },
              { 
                stage: 2, 
                labelKey: 'insights.proactivePrep', 
                subKey: 'insights.prepStage',
                status: 'next' as const,
                color: '#4F46E5'
              },
              { 
                stage: 3, 
                labelKey: 'insights.interview', 
                subKey: 'insights.interviewStage',
                status: 'future' as const,
                color: '#10B981'
              },
              { 
                stage: 4, 
                labelKey: 'insights.decisionPending', 
                subKey: 'insights.decisionStage',
                status: 'future' as const,
                color: '#D97706'
              },
              { 
                stage: 5, 
                labelKey: 'insights.finalResult', 
                subKey: 'insights.resultStage',
                status: 'future' as const,
                color: '#D4AF37'
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 16, padding: '12px 12px', marginBottom: 2,
                  background: item.status === 'current' ? '#F8FAFC' : 'transparent',
                  borderLeft: item.status === 'current' ? '3px solid' + item.color : '3px solid transparent',
                  borderRadius: item.status === 'current' ? 6 : 0,
                  opacity: item.status === 'future' ? 0.6 : 1,
                }}
              >
                <span style={{
                  fontSize: 12, fontWeight: 600, minWidth: 28,
                  color: item.color,
                  background: 'rgba(' + parseInt(item.color.slice(1,3), 16) + ',' + parseInt(item.color.slice(3,5), 16) + ',' + parseInt(item.color.slice(5,7), 16) + ',0.1)',
                  padding: '2px 8px',
                  borderRadius: 4,
                  textAlign: 'center',
                }}>
                  {item.stage}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: 13, margin: 0,
                    fontWeight: item.status === 'current' ? 600 : 400,
                    color: item.status === 'future' ? '#94A3B8' : '#0F172A',
                  }}>
                    {t(item.labelKey)}
                  </p>
                  <p style={{ fontSize: 11, color: item.status === 'current' ? item.color : '#94A3B8', margin: '2px 0 0 0' }}>
                    {t(item.subKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>


    </div>
  )
}
