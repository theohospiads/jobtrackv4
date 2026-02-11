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
  borderRadius: 10,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
} as const

const sectionTitle = {
  fontSize: 11,
  fontWeight: 600 as const,
  color: '#64748B',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 12px 0',
}

export function ApplicationInsightsHub({
  currentStage,
  jobTitle,
  companyName,
  submittedDate,
  salaryRange,
}: ApplicationInsightsHubProps) {
  const { t } = useLanguage()
  const [strategicView, setStrategicView] = useState(true)
  const [showDecisionModel, setShowDecisionModel] = useState(false)
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
    <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* VIEW TOGGLE */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: 6, padding: 2, gap: 1 }}>
          {['Basic', 'Strategic'].map(label => {
            const active = label === 'Strategic' ? strategicView : !strategicView
            return (
              <button
                key={label}
                type="button"
                onClick={() => setStrategicView(label === 'Strategic')}
                style={{
                  fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: 5,
                  border: 'none', cursor: 'pointer',
                  background: active ? '#FFFFFF' : 'transparent',
                  color: active ? '#0F172A' : '#94A3B8',
                  boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* METRIC CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        <div style={{ ...card, padding: 16 }}>
          <p style={{ ...sectionTitle, margin: '0 0 8px 0' }}>Status</p>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#10B981', margin: '0 0 2px 0' }}>Active</p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>Day {daysIn} of {reviewDays}</p>
        </div>

        <div style={{ ...card, padding: 16 }}>
          <p style={{ ...sectionTitle, margin: '0 0 8px 0' }}>Interview Likelihood</p>
          <p style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', margin: '0 0 2px 0', lineHeight: 1 }}>{current}%</p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>1,200+ comparable patterns</p>
        </div>

        <div style={{ ...card, padding: 16 }}>
          <p style={{ ...sectionTitle, margin: '0 0 8px 0' }}>Position</p>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: '0 0 2px 0' }}>Top {100 - percentile}%</p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>Confidence: {confidence}</p>
        </div>
      </div>

      {/* Nudge */}
      <p style={{ fontSize: 12, color: '#475569', margin: 0, padding: '0 2px' }}>
        <span style={{ fontWeight: 600, color: '#10B981' }}>Highest leverage:</span>{' '}
        Activate a referral before Day 5 for the biggest impact on your interview odds.
      </p>

      {/* STRATEGIC MOVES */}
      <div style={{ ...card, padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <p style={{ ...sectionTitle, margin: 0 }}>Strategic Moves</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 500, color: '#64748B' }}>{completed}/{total}</span>
            <div style={{ width: 40, height: 3, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(completed / total) * 100}%`, background: '#10B981', transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>

        <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 10px 0' }}>
          {current}% &rarr; {projected}% if completed
        </p>

        {[
          { label: 'Activate referral', impact: '+12%', desc: 'Use network connection before Day 5' },
          { label: 'Add quantified achievement', impact: '+5%', desc: 'Quantify one project result' },
          { label: 'Complete screening prep', impact: '+3%', desc: 'Finish one interview prep section' },
        ].map((a, i) => {
          const isDone = done.includes(i)
          return (
            <div
              key={i}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '8px 10px',
                marginTop: i > 0 ? 4 : 0,
                background: isDone ? '#FAFBFC' : '#F8FAFC',
                borderRadius: 6,
                borderLeft: `2px solid ${isDone ? '#D1D5DB' : '#2563EB'}`,
                opacity: isDone ? 0.45 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: isDone ? '#94A3B8' : '#0F172A', textDecoration: isDone ? 'line-through' : 'none' }}>{a.label}</span>
                  <span style={{ fontSize: 10, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '1px 5px', borderRadius: 8 }}>{a.impact}</span>
                </div>
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '1px 0 0 0' }}>{a.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(i)}
                style={{
                  fontSize: 11, fontWeight: 500,
                  color: isDone ? '#94A3B8' : '#64748B',
                  background: 'transparent',
                  border: '1px solid #E5E7EB',
                  padding: '3px 8px', borderRadius: 5, cursor: 'pointer', flexShrink: 0, marginLeft: 8,
                }}
              >
                {isDone ? 'Undo' : 'Done'}
              </button>
            </div>
          )
        })}
      </div>

      {/* PROJECTED OUTCOME */}
      <div style={{ ...card, padding: 16 }}>
        <p style={{ ...sectionTitle, margin: '0 0 14px 0' }}>Projected Outcome</p>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
          <div>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 2px 0' }}>Now</p>
            <p style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1 }}>{current}%</p>
          </div>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" style={{ flexShrink: 0, marginBottom: 2 }}>
            <path d="M2 6H18M18 6L14 2M18 6L14 10" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <p style={{ fontSize: 11, color: '#10B981', margin: '0 0 2px 0' }}>Projected</p>
            <p style={{ fontSize: 24, fontWeight: 700, color: '#10B981', margin: 0, lineHeight: 1 }}>{projected}%</p>
          </div>
          <span style={{ fontSize: 11, fontWeight: 500, color: '#10B981', marginLeft: 4 }}>+{projected - current}%</span>
        </div>

        <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>
          You outperform {percentile}% of similar applicants at this stage.
        </p>
      </div>

      {/* TIMELINE */}
      <div style={{ ...card, padding: 16 }}>
        <p style={{ ...sectionTitle, margin: '0 0 14px 0' }}>Timeline</p>

        <div style={{ marginBottom: 14 }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: 16 }}>
            {/* Track */}
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1.5, background: '#E5E7EB', transform: 'translateY(-50%)' }} />
            {/* Peak band */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '37.5%', height: 10, background: 'rgba(251, 191, 36, 0.06)', transform: 'translateY(-50%)', borderRadius: 5 }} />
            {/* Dots */}
            {[
              { past: true }, { past: true }, { past: true },
              { current: true },
              { peak: true }, { peak: true }, { peak: true },
              { future: true },
            ].map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: d.current ? 10 : 5,
                    height: d.current ? 10 : 5,
                    borderRadius: '50%',
                    background: d.current ? '#2563EB' : d.past ? '#94A3B8' : d.peak ? '#F59E0B' : '#D1D5DB',
                    boxShadow: d.current ? '0 0 0 3px rgba(37, 99, 235, 0.12)' : 'none',
                    opacity: d.past ? 0.35 : 1,
                  }}
                />
              </div>
            ))}
          </div>
          {/* Labels */}
          <div style={{ display: 'flex', marginTop: 6 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map(d => (
              <div key={d} style={{ flex: 1, textAlign: 'center' }}>
                <p style={{ fontSize: 9, margin: 0, color: d === 3 ? '#2563EB' : '#CBD5E1', fontWeight: d === 3 ? 600 : 400 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <p style={{ fontSize: 10, color: '#2563EB', fontWeight: 500, margin: 0 }}>Day 3</p>
            <p style={{ fontSize: 10, color: '#94A3B8', margin: 0 }}>Peak decisions Days 4-6</p>
          </div>
        </div>

        {/* Follow-up */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: '#F8FAFC', borderRadius: 8 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, color: '#0F172A', margin: 0 }}>Follow-up locked</p>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '1px 0 0 0' }}>Unlocks Day 5</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#2563EB', margin: 0 }}>2d</p>
          </div>
        </div>
      </div>

      {/* STRATEGIC VIEW EXTRAS */}
      {strategicView && (
        <>
          {/* What Recruiters Look For */}
          <div style={{ ...card, overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setShowDecisionModel(!showDecisionModel)}
              style={{
                width: '100%', background: 'none', border: 'none', padding: '12px 16px',
                cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <p style={{ ...sectionTitle, margin: 0 }}>What Recruiters Look For</p>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                style={{ transition: 'transform 0.2s', transform: showDecisionModel ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {showDecisionModel && (
              <div style={{ padding: '0 16px 16px 16px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Positive */}
                <div style={{ paddingBottom: 14 }}>
                  <p style={{ fontSize: 10, fontWeight: 600, color: '#10B981', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Working in your favor
                  </p>
                  {[
                    { tag: '+15%', text: 'Strong foundational skills match vs. role requirements' },
                    { tag: '+5%', text: 'Referral network activation available (if used)' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontSize: 10, fontWeight: 500, color: '#10B981', background: '#F0FDF4', padding: '1px 5px', borderRadius: 8 }}>{s.tag}</span>
                      <span style={{ fontSize: 12, color: '#0F172A' }}>{s.text}</span>
                    </div>
                  ))}
                </div>

                {/* Friction */}
                <div style={{ paddingTop: 14, paddingBottom: 14, borderTop: '1px solid #F1F5F9' }}>
                  <p style={{ fontSize: 10, fontWeight: 600, color: '#EF4444', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Areas to strengthen
                  </p>
                  {[
                    { tag: '-8%', text: 'Limited quantified outcomes in CV' },
                    { tag: 'Gap', text: 'Experience depth in this specific role type' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontSize: 10, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '1px 5px', borderRadius: 8 }}>{s.tag}</span>
                      <span style={{ fontSize: 12, color: '#0F172A' }}>{s.text}</span>
                    </div>
                  ))}
                </div>

                {/* Screening Priorities */}
                <div style={{ paddingTop: 14, borderTop: '1px solid #F1F5F9' }}>
                  <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Screening Priorities
                  </p>
                  {[
                    { label: 'Mission alignment', desc: 'Why this company matters to you', weight: 'High' },
                    { label: 'Quantified impact stories', desc: 'Measurable project outcomes', weight: 'High' },
                    { label: 'Tool proficiency', desc: 'Data analysis tools and frameworks', weight: 'Med' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i > 0 ? '1px solid #F8FAFC' : 'none' }}>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 500, color: '#0F172A', margin: 0 }}>{s.label}</p>
                        <p style={{ fontSize: 10, color: '#94A3B8', margin: '1px 0 0 0' }}>{s.desc}</p>
                      </div>
                      <span style={{
                        fontSize: 10, fontWeight: 500,
                        color: s.weight === 'High' ? '#DC2626' : '#D97706',
                        background: s.weight === 'High' ? '#FEF2F2' : '#FFFBEB',
                        padding: '1px 5px', borderRadius: 8,
                      }}>{s.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Application Journey */}
          <div style={{ ...card, padding: 16 }}>
            <p style={{ ...sectionTitle, margin: '0 0 12px 0' }}>Application Journey</p>
            {[
              { day: 'Day 0', label: 'Application submitted', sub: 'Jan 28, 2026', status: 'past' as const },
              { day: 'Day 1', label: 'Screening queue entered', sub: 'Recruiter intake', status: 'past' as const },
              { day: 'Day 3', label: 'Under recruiter review', sub: 'You are here', status: 'current' as const },
              { day: 'Day 4-6', label: 'Peak decision window', sub: 'Historical cluster', status: 'next' as const },
              { day: 'Day 5', label: 'Follow-up unlocks', sub: 'Optimal timing', status: 'future' as const },
              { day: 'Day 7', label: 'Decision threshold', sub: 'Probability plateaus', status: 'future' as const },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 12, padding: '6px 8px', marginBottom: 1,
                  background: item.status === 'current' ? '#F8FAFC' : 'transparent',
                  borderLeft: item.status === 'current' ? '2px solid #2563EB' : '2px solid transparent',
                  borderRadius: item.status === 'current' ? 4 : 0,
                  opacity: item.status === 'past' ? 0.35 : 1,
                }}
              >
                <span style={{
                  fontSize: 11, fontWeight: 500, minWidth: 50,
                  color: item.status === 'current' ? '#2563EB' : item.status === 'next' ? '#D97706' : '#CBD5E1',
                }}>{item.day}</span>
                <div>
                  <p style={{
                    fontSize: 12, margin: 0,
                    fontWeight: item.status === 'current' ? 600 : 400,
                    color: item.status === 'future' ? '#94A3B8' : '#0F172A',
                  }}>{item.label}</p>
                  <p style={{ fontSize: 10, color: item.status === 'current' ? '#2563EB' : '#94A3B8', margin: '1px 0 0 0' }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* MODEL TRANSPARENCY */}
      <div style={{ padding: '0 2px' }}>
        <button
          type="button"
          onClick={() => setShowGovernance(!showGovernance)}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', gap: 4, alignItems: 'center' }}
        >
          <p style={{ fontSize: 10, fontWeight: 500, color: '#CBD5E1', margin: 0 }}>How this works</p>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none"
            style={{ transition: 'transform 0.2s', transform: showGovernance ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="M4 6L8 10L12 6" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {showGovernance && (
          <div style={{ marginTop: 8 }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 6px 0' }}>
              Probabilistic model based on anonymized hiring data. 1,200+ comparable cases.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['No recruiter tracking', 'No employer scraping', 'GDPR compliant'].map((l, i) => (
                <span key={i} style={{ fontSize: 10, color: '#CBD5E1' }}>{l}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <p style={{ fontSize: 9, color: '#D1D5DB', margin: 0, textAlign: 'center' }}>
        Last refresh: 11:32 AM
      </p>
    </div>
  )
}
