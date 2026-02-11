'use client'

import { useState } from 'react'
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
  const [strategicView, setStrategicView] = useState(true)
  const [showGovernance, setShowGovernance] = useState(false)
  const [done, setDone] = useState<number[]>([])

  if (currentStage !== 0) return null

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
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* VIEW TOGGLE */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: 8, padding: 2, gap: 2 }}>
          {['Basic', 'Strategic'].map(label => {
            const active = label === 'Strategic' ? strategicView : !strategicView
            return (
              <button
                key={label}
                type="button"
                onClick={() => setStrategicView(label === 'Strategic')}
                style={{
                  fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 6,
                  border: 'none', cursor: 'pointer',
                  background: active ? '#FFFFFF' : 'transparent',
                  color: active ? '#0F172A' : '#94A3B8',
                  boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── LEVEL 1: YOUR STRATEGIC MOVES ── */}
      <div style={{ ...card, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Your Strategic Moves
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
          Move from {current}% to {projected}% if completed
        </p>

        {[
          { label: 'Activate referral', impact: '+12%', desc: 'Use network connection before Day 5' },
          { label: 'Add quantified achievement to CV', impact: '+5%', desc: 'Quantify one project result with numbers' },
          { label: 'Complete screening prep module', impact: '+3%', desc: 'Finish one more interview prep section' },
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
                  <span style={{ fontSize: 13, fontWeight: 600, color: isDone ? '#94A3B8' : '#0F172A', textDecoration: isDone ? 'line-through' : 'none' }}>{a.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '2px 8px', borderRadius: 10 }}>
                    {a.impact}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>{a.desc}</p>
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
                {isDone ? 'Undo' : 'Complete'}
              </button>
            </div>
          )
        })}
      </div>

      {/* ── LEVEL 3: IF YOU EXECUTE ── */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Projected Outcome
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          {/* Current */}
          <div style={{ flex: 1, padding: 20, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 500 }}>Now</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1 }}>{current}%</p>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '8px 0 0 0' }}>Moderate</p>
          </div>

          {/* Arrow */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Projected */}
          <div style={{ flex: 1, padding: 20, background: '#F0FDF4', borderRadius: 12, textAlign: 'center', border: '1px solid #DCFCE7' }}>
            <p style={{ fontSize: 11, color: '#10B981', margin: '0 0 8px 0', fontWeight: 500 }}>Projected</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#10B981', margin: 0, lineHeight: 1 }}>{projected}%</p>
            <p style={{ fontSize: 11, color: '#10B981', margin: '8px 0 0 0' }}>Strong</p>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
          +{projected - current}% improvement if you complete all strategic moves. You outperform {percentile}% of similar applicants.
        </p>
      </div>



      {/* ── STRATEGIC VIEW EXTRAS ── */}
      {strategicView && (
        <>
          {/* What Recruiters Look For - Always visible */}
          <div style={{ ...card, overflow: 'hidden', padding: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                What Recruiters Look For
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Positive */}
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#10B981', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Working in your favor
                  </p>
                  {[
                    { tag: '+15%', text: 'Strong foundational skills match vs. role requirements' },
                    { tag: '+5%', text: 'Referral network activation available (if used)' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#10B981', background: '#F0FDF4', padding: '1px 6px', borderRadius: 10 }}>{s.tag}</span>
                      <span style={{ fontSize: 13, color: '#0F172A' }}>{s.text}</span>
                    </div>
                  ))}
                </div>

                {/* Friction */}
                <div style={{ paddingTop: 20, paddingBottom: 20, borderTop: '1px solid #F1F5F9' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Areas to strengthen
                  </p>
                  {[
                    { tag: '-8%', text: 'Limited quantified outcomes in CV' },
                    { tag: 'Gap', text: 'Experience depth in this specific role type' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '1px 6px', borderRadius: 10 }}>{s.tag}</span>
                      <span style={{ fontSize: 13, color: '#0F172A' }}>{s.text}</span>
                    </div>
                  ))}
                </div>

                {/* Screening Priorities */}
                <div style={{ paddingTop: 20, borderTop: '1px solid #F1F5F9' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Screening Priorities
                  </p>
                  {[
                    { label: 'Mission alignment', desc: 'Why this company matters to you', weight: 'High' },
                    { label: 'Quantified impact stories', desc: 'Measurable project outcomes', weight: 'High' },
                    { label: 'Tool proficiency', desc: 'Data analysis tools and frameworks', weight: 'Medium' },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 0',
                        borderTop: i > 0 ? '1px solid #F1F5F9' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontSize: 12, fontWeight: 500, color: '#94A3B8' }}>{i + 1}.</span>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>{s.label}</p>
                          <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>{s.desc}</p>
                        </div>
                      </div>
                      <span style={{
                        fontSize: 11, fontWeight: 500,
                        color: s.weight === 'High' ? '#DC2626' : '#D97706',
                        background: s.weight === 'High' ? '#FEF2F2' : '#FFFBEB',
                        padding: '1px 6px', borderRadius: 10,
                      }}>
                        {s.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          {/* Application Journey */}
          <div style={{ ...card, padding: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Application Journey
            </p>
            {[
              { day: 'Day 0', label: 'Application submitted', sub: 'Jan 28, 2026 at 2:14 PM', status: 'past' as const },
              { day: 'Day 1', label: 'Screening queue entered', sub: 'Detected in recruiter intake', status: 'past' as const },
              { day: 'Day 3', label: 'Under recruiter review', sub: 'You are here', status: 'current' as const },
              { day: 'Day 4-6', label: 'Most recruiter decisions happen here', sub: 'Historical peak decision window', status: 'next' as const },
              { day: 'Day 5', label: 'Follow-up window opens', sub: 'Optimal follow-up timing', status: 'future' as const },
              { day: 'Day 7', label: 'Decision threshold', sub: 'Decision probability plateaus', status: 'future' as const },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 16, padding: '10px 12px', marginBottom: 2,
                  background: item.status === 'current' ? '#F8FAFC' : 'transparent',
                  borderLeft: item.status === 'current' ? '2px solid #2563EB' : '2px solid transparent',
                  borderRadius: item.status === 'current' ? 6 : 0,
                  opacity: item.status === 'past' ? 0.4 : 1,
                }}
              >
                <span style={{
                  fontSize: 12, fontWeight: 500, minWidth: 60,
                  color: item.status === 'current' ? '#2563EB' : item.status === 'next' ? '#D97706' : '#CBD5E1',
                }}>
                  {item.day}
                </span>
                <div>
                  <p style={{
                    fontSize: 13, margin: 0,
                    fontWeight: item.status === 'current' ? 600 : 400,
                    color: item.status === 'future' ? '#94A3B8' : '#0F172A',
                  }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 11, color: item.status === 'current' ? '#2563EB' : '#94A3B8', margin: '2px 0 0 0' }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── MODEL TRANSPARENCY ── */}
      <div style={{ padding: '0 4px' }}>
        <button
          type="button"
          onClick={() => setShowGovernance(!showGovernance)}
          style={{
            background: 'none', border: 'none', padding: 0,
            cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: '#CBD5E1', margin: 0 }}>
            How this works
          </p>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
            style={{ transition: 'transform 0.2s', transform: showGovernance ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="M4 6L8 10L12 6" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {showGovernance && (
          <div style={{ marginTop: 12 }}>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 8px 0' }}>
              Probabilistic model based on anonymized hiring data. Confidence intervals from 1,200+ comparable cases.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {['No recruiter tracking', 'No employer scraping', 'GDPR compliant'].map((label, i) => (
                <span key={i} style={{ fontSize: 11, color: '#CBD5E1' }}>{label}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Metadata */}
      <p style={{ fontSize: 10, color: '#CBD5E1', margin: 0, textAlign: 'center' }}>
        Last refresh: 11:32 AM | Confidence: High
      </p>
    </div>
  )
}
