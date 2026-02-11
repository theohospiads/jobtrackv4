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

      {/* ── LEVEL 1: MISSION CONTROL ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <div style={{ ...card, padding: 24 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
            Status
          </p>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#10B981', margin: '0 0 4px 0' }}>Active</p>
          <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Day {daysIn} of {reviewDays}</p>
        </div>

        <div style={{ ...card, padding: 24 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
            Interview Likelihood
          </p>
          <p style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', margin: '0 0 4px 0', lineHeight: 1 }}>{current}%</p>
          <p style={{ fontSize: 12, color: '#2563EB', fontWeight: 500, margin: 0 }}>Based on 1,200+ patterns</p>
        </div>

        <div style={{ ...card, padding: 24 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
            Your Position
          </p>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>Top {100 - percentile}%</p>
          <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Confidence: {confidence} (High)</p>
        </div>
      </div>

      {/* Highest leverage nudge - light strip, no box */}
      <div style={{ padding: '0 4px' }}>
        <p style={{ fontSize: 13, color: '#475569', margin: 0 }}>
          <span style={{ fontWeight: 600, color: '#10B981' }}>Highest leverage:</span>{' '}
          Activate a referral before Day 5 for the biggest impact on your interview odds.
        </p>
      </div>

      {/* ── LEVEL 2: YOUR STRATEGIC MOVES ── */}
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
                padding: '14px 0',
                borderTop: i > 0 ? '1px solid #F1F5F9' : 'none',
                opacity: isDone ? 0.45 : 1,
                transition: 'opacity 0.2s',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#94A3B8' }}>{i + 1}.</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', textDecoration: isDone ? 'line-through' : 'none' }}>{a.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '1px 6px', borderRadius: 10 }}>
                    {a.impact}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: 0, paddingLeft: 22 }}>{a.desc}</p>
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
          If You Execute
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div style={{ padding: 20, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 10px 0', fontWeight: 500, textTransform: 'uppercase' }}>Current</p>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', margin: '0 0 12px 0', lineHeight: 1 }}>{current}%</p>
            <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${current}%`, background: '#94A3B8', borderRadius: 2 }} />
            </div>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '10px 0 0 0' }}>Moderate range</p>
          </div>

          <div style={{ padding: 20, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 10px 0', fontWeight: 500, textTransform: 'uppercase' }}>Projected</p>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#10B981', margin: '0 0 12px 0', lineHeight: 1 }}>{projected}%</p>
            <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${projected}%`, background: '#10B981', borderRadius: 2 }} />
            </div>
            <p style={{ fontSize: 11, color: '#10B981', margin: '10px 0 0 0' }}>Strong range</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#475569', margin: 0 }}>
            +{projected - current}% projected improvement. Would move you into strong interview range.
          </p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>
            You currently outperform {percentile}% of similar applicants.
          </p>
        </div>
      </div>

      {/* ── LEVEL 4: TIMELINE INSIGHT ── */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Timeline
        </p>

        {/* Visual dot timeline */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {/* Background track */}
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#E5E7EB', transform: 'translateY(-50%)' }} />
            {/* Peak window highlight band */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '37.5%', height: 16, background: 'rgba(251, 191, 36, 0.08)', transform: 'translateY(-50%)', borderRadius: 8 }} />
            {/* Dots */}
            {[
              { day: 0, past: true },
              { day: 1, past: true },
              { day: 2, past: true },
              { day: 3, current: true },
              { day: 4, peak: true },
              { day: 5, peak: true },
              { day: 6, peak: true },
              { day: 7, future: true },
            ].map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: d.current ? 14 : 6,
                    height: d.current ? 14 : 6,
                    borderRadius: '50%',
                    background: d.current ? '#2563EB' : d.past ? '#94A3B8' : d.peak ? '#FBBF24' : '#D1D5DB',
                    border: d.current ? '3px solid rgba(37, 99, 235, 0.25)' : 'none',
                    boxShadow: d.current ? '0 0 0 4px rgba(37, 99, 235, 0.1)' : 'none',
                    opacity: d.past ? 0.5 : 1,
                  }}
                />
              </div>
            ))}
          </div>
          {/* Labels row */}
          <div style={{ display: 'flex', marginTop: 8 }}>
            {[
              { label: '0' }, { label: '1' }, { label: '2' },
              { label: '3', highlight: true },
              { label: '4' }, { label: '5' }, { label: '6' }, { label: '7' },
            ].map((d, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <p style={{
                  fontSize: 10, margin: 0,
                  color: d.highlight ? '#2563EB' : '#CBD5E1',
                  fontWeight: d.highlight ? 600 : 400,
                }}>
                  {d.label}
                </p>
              </div>
            ))}
          </div>
          {/* Annotations */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, padding: '0 4px' }}>
            <p style={{ fontSize: 10, color: '#2563EB', fontWeight: 500, margin: 0 }}>You are here</p>
            <p style={{ fontSize: 10, color: '#94A3B8', margin: 0 }}>Most recruiter decisions happen here</p>
          </div>
        </div>

        {/* Follow-up info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: '#F8FAFC', borderRadius: 12 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: '0 0 2px 0' }}>Follow-up locked</p>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Unlocks Day 5. Recruiter decisions peak Days 4-6.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: '#2563EB', margin: 0 }}>2 days</p>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>remaining</p>
          </div>
        </div>
      </div>

      {/* ── STRATEGIC VIEW EXTRAS ── */}
      {strategicView && (
        <>
          {/* What Recruiters Look For - Collapsible */}
          <div style={{ ...card, overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setShowDecisionModel(!showDecisionModel)}
              style={{
                width: '100%', background: 'none', border: 'none', padding: '18px 24px',
                cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                What Recruiters Look For
              </p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{ transition: 'transform 0.2s', transform: showDecisionModel ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {showDecisionModel && (
              <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Positive */}
                <div>
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
                <div>
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
                <div>
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
            )}
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
      <div style={{ ...card, overflow: 'hidden', background: '#FAFBFC' }}>
        <button
          type="button"
          onClick={() => setShowGovernance(!showGovernance)}
          style={{
            width: '100%', background: 'none', border: 'none', padding: '14px 24px',
            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Model Transparency
          </p>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
            style={{ transition: 'transform 0.2s', transform: showGovernance ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {showGovernance && (
          <div style={{ padding: '0 24px 16px 24px' }}>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 12px 0' }}>
              Probabilistic model based on anonymized hiring data. Confidence intervals from 1,200+ comparable cases.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['No recruiter tracking', 'No employer scraping', 'GDPR compliant'].map((t, i) => (
                <p key={i} style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>{t}</p>
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
