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

const cardStyle = {
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
  const [expandedDecisionModel, setExpandedDecisionModel] = useState(false)
  const [expandedGovernance, setExpandedGovernance] = useState(false)
  const [actionsCompleted, setActionsCompleted] = useState<number[]>([])

  if (currentStage !== 0) return null

  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const baseInterviewProbability = 42
  const projectedProbability = 58
  const applicationConfidence = 74
  const percentileRank = 68

  const completedCount = actionsCompleted.length
  const totalActions = 3

  const toggleAction = (idx: number) => {
    setActionsCompleted(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* VIEW TOGGLE */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: 8, padding: 2, gap: 2 }}>
          <button
            type="button"
            onClick={() => setStrategicView(false)}
            style={{
              fontSize: 12,
              fontWeight: 500,
              padding: '5px 12px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              background: !strategicView ? '#FFFFFF' : 'transparent',
              color: !strategicView ? '#0F172A' : '#94A3B8',
              boxShadow: !strategicView ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            Basic
          </button>
          <button
            type="button"
            onClick={() => setStrategicView(true)}
            style={{
              fontSize: 12,
              fontWeight: 500,
              padding: '5px 12px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              background: strategicView ? '#FFFFFF' : 'transparent',
              color: strategicView ? '#0F172A' : '#94A3B8',
              boxShadow: strategicView ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            Strategic
          </button>
        </div>
      </div>

      {/* APPLICATION OVERVIEW - Stat cards row matching Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {/* Status Card */}
        <div style={{ ...cardStyle, padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px 0' }}>
            Status
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, color: '#10B981', margin: 0 }}>Active</p>
          <p style={{ fontSize: 12, color: '#94A3B8', margin: '4px 0 0 0' }}>
            Day {daysSinceSubmission} of {typicalReviewDays}
          </p>
        </div>

        {/* Interview Likelihood Card */}
        <div style={{ ...cardStyle, padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px 0' }}>
            Interview Likelihood
          </p>
          <p style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', margin: 0 }}>{baseInterviewProbability}%</p>
          <p style={{ fontSize: 12, color: '#2563EB', fontWeight: 500, margin: '4px 0 0 0' }}>
            Based on 1,200+ patterns
          </p>
        </div>

        {/* Confidence Card */}
        <div style={{ ...cardStyle, padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px 0' }}>
            Your Position
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', margin: 0 }}>Top {100 - percentileRank}%</p>
          <p style={{ fontSize: 12, color: '#94A3B8', margin: '4px 0 0 0' }}>
            Confidence: {applicationConfidence} (High)
          </p>
        </div>
      </div>

      {/* Highest leverage action strip */}
      <div style={{ ...cardStyle, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, borderLeft: '3px solid #10B981' }}>
        <p style={{ fontSize: 13, color: '#0F172A', margin: 0 }}>
          <span style={{ fontWeight: 600, color: '#10B981' }}>Highest leverage action:</span>{' '}
          Activate referral before Day 5
        </p>
      </div>

      {/* YOUR NEXT BEST ACTIONS */}
      <div style={{ ...cardStyle, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Your Next Best Actions
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: '#64748B' }}>
              {completedCount} / {totalActions}
            </span>
            <div style={{ width: 48, height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(completedCount / totalActions) * 100}%`, background: '#10B981', transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 16px 0' }}>
          Move from {baseInterviewProbability}% to {projectedProbability}% interview likelihood if completed
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { label: 'Activate referral', impact: '+12%', severity: 'high', desc: 'Highest impact - use network connection before Day 5' },
            { label: 'Add quantified achievement to CV', impact: '+5%', severity: 'high', desc: 'High impact - quantify one project result with numbers' },
            { label: 'Complete screening prep module', impact: '+3%', severity: 'medium', desc: 'Medium impact - finish one more interview prep section' },
          ].map((action, idx) => {
            const done = actionsCompleted.includes(idx)
            return (
              <li key={idx} style={{
                fontSize: 13,
                color: '#0F172A',
                padding: '14px 0',
                borderTop: idx > 0 ? '1px solid #F1F5F9' : 'none',
                opacity: done ? 0.5 : 1,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontWeight: 600, color: '#64748B', fontSize: 12 }}>{idx + 1}.</span>
                      <span style={{ fontWeight: 500, textDecoration: done ? 'line-through' : 'none' }}>{action.label}</span>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: action.severity === 'high' ? '#DC2626' : '#D97706',
                        background: action.severity === 'high' ? '#FEF2F2' : '#FFFBEB',
                        padding: '1px 6px',
                        borderRadius: 10,
                      }}>
                        {action.impact}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>{action.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleAction(idx)}
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: done ? '#94A3B8' : '#0F172A',
                      background: done ? '#F8FAFC' : '#F1F5F9',
                      border: '1px solid #E5E7EB',
                      padding: '5px 12px',
                      borderRadius: 8,
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    {done ? 'Undo' : 'Complete'}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* POTENTIAL OUTCOME */}
      <div style={{ ...cardStyle, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Potential Outcome
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          {/* Current */}
          <div style={{ padding: 16, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 500, textTransform: 'uppercase' }}>Current</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#2563EB', margin: 0 }}>{baseInterviewProbability}%</p>
            <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden', marginTop: 12 }}>
              <div style={{ height: '100%', width: `${baseInterviewProbability}%`, background: '#2563EB', borderRadius: 2 }} />
            </div>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '8px 0 0 0' }}>Moderate range</p>
          </div>

          {/* Projected */}
          <div style={{ padding: 16, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 500, textTransform: 'uppercase' }}>If Completed</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#10B981', margin: 0 }}>{projectedProbability}%</p>
            <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden', marginTop: 12 }}>
              <div style={{ height: '100%', width: `${projectedProbability}%`, background: '#10B981', borderRadius: 2 }} />
            </div>
            <p style={{ fontSize: 11, color: '#10B981', margin: '8px 0 0 0' }}>Strong range</p>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
          +{projectedProbability - baseInterviewProbability}% projected improvement. Would move you into strong interview range.
        </p>
      </div>

      {/* TIMELINE INSIGHT */}
      <div style={{ ...cardStyle, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Timeline Insight
        </p>

        {/* Visual Timeline */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, position: 'relative' }}>
            {[
              { day: '0', label: '', past: true },
              { day: '1', label: '', past: true },
              { day: '2', label: '', past: true },
              { day: '3', label: 'You are here', current: true },
              { day: '4', label: '', peak: true },
              { day: '5', label: 'Unlock', peak: true },
              { day: '6', label: '', peak: true },
              { day: '7', label: 'Decision', future: true },
            ].map((item, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <div
                  style={{
                    width: item.current ? 14 : 8,
                    height: item.current ? 14 : 8,
                    borderRadius: '50%',
                    background: item.current ? '#2563EB' : item.past ? '#CBD5E1' : item.peak ? '#FBBF24' : '#E5E7EB',
                    border: item.current ? '3px solid #BFDBFE' : 'none',
                    boxShadow: item.current ? '0 0 0 4px rgba(37, 99, 235, 0.15)' : 'none',
                    zIndex: 1,
                  }}
                />
                {idx < 7 && (
                  <div style={{
                    position: 'absolute',
                    top: item.current ? 5 : 3,
                    left: '50%',
                    width: '100%',
                    height: 2,
                    background: item.past || item.current ? '#CBD5E1' : '#F1F5F9',
                  }} />
                )}
                <p style={{ fontSize: 10, fontWeight: 500, color: item.current ? '#2563EB' : '#94A3B8', margin: '6px 0 0 0' }}>
                  {item.day}
                </p>
                {item.label && (
                  <p style={{
                    fontSize: 9,
                    color: item.current ? '#2563EB' : '#94A3B8',
                    margin: '2px 0 0 0',
                    textAlign: 'center',
                    fontWeight: item.current ? 600 : 400,
                    whiteSpace: 'nowrap',
                  }}>
                    {item.label}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Peak cluster indicator - subtle */}
          <div style={{ marginTop: 8, marginLeft: '42%', width: '33%' }}>
            <div style={{ height: 2, background: '#FDE68A', borderRadius: 1 }} />
            <p style={{ fontSize: 9, color: '#94A3B8', margin: '3px 0 0 0', textAlign: 'center', fontWeight: 500 }}>
              Peak decision window
            </p>
          </div>
        </div>

        {/* Follow-up Status - soft info card */}
        <div style={{ display: 'flex', gap: 16, padding: 14, background: '#F8FAFC', borderRadius: 10, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: '0 0 2px 0' }}>Follow-up locked</p>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Unlocks Day 5. Recruiter decisions peak Days 4-6.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#2563EB', margin: 0 }}>2 days</p>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>remaining</p>
          </div>
        </div>
      </div>

      {/* STRATEGIC VIEW: Decision Model + Journey */}
      {strategicView && (
        <>
          {/* RECRUITER DECISION MODEL - Collapsible */}
          <div style={{ ...cardStyle, overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setExpandedDecisionModel(!expandedDecisionModel)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '16px 24px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                What Recruiters Look For
              </p>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{ transition: 'transform 0.2s', transform: expandedDecisionModel ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {expandedDecisionModel && (
              <div style={{ padding: '0 24px 24px 24px' }}>
                {/* Positive Signals */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#10B981', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Positive Signals
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#10B981', background: '#F0FDF4', padding: '1px 6px', borderRadius: 10 }}>+15%</span>
                      <span>Strong foundational skills match vs. role requirements</span>
                    </li>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#10B981', background: '#F0FDF4', padding: '1px 6px', borderRadius: 10 }}>+5%</span>
                      <span>Referral network activation available (if used)</span>
                    </li>
                  </ul>
                </div>

                {/* Friction Points */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Friction Points
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#DC2626', background: '#FEF2F2', padding: '1px 6px', borderRadius: 10 }}>-8%</span>
                      <span>Limited quantified outcomes in CV</span>
                    </li>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#D97706', background: '#FFFBEB', padding: '1px 6px', borderRadius: 10 }}>Moderate</span>
                      <span>Experience depth in this specific role type</span>
                    </li>
                  </ul>
                </div>

                {/* Screening Priorities */}
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Screening Priorities
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { label: 'Mission alignment', desc: 'Why this company matters to you', severity: 'High' },
                      { label: 'Quantified impact stories', desc: 'Measurable project outcomes', severity: 'High' },
                      { label: 'Tool proficiency', desc: 'Data analysis tools and frameworks', severity: 'Medium' },
                    ].map((item, idx) => (
                      <li key={idx} style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: idx < 2 ? 8 : 0, borderBottom: idx < 2 ? '1px solid #F1F5F9' : 'none' }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span style={{ fontWeight: 500, color: '#94A3B8', fontSize: 12 }}>{idx + 1}.</span>
                          <div>
                            <span style={{ fontWeight: 500 }}>{item.label}</span>
                            <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>{item.desc}</p>
                          </div>
                        </div>
                        <span style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: item.severity === 'High' ? '#DC2626' : '#D97706',
                          background: item.severity === 'High' ? '#FEF2F2' : '#FFFBEB',
                          padding: '1px 6px',
                          borderRadius: 10,
                        }}>
                          {item.severity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* APPLICATION JOURNEY */}
          <div style={{ ...cardStyle, padding: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Application Journey
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { day: 'Day 0', label: 'Application submitted', sub: 'Jan 28, 2026 at 2:14 PM', status: 'past' },
                { day: 'Day 1', label: 'Screening queue entered', sub: 'Detected in recruiter intake', status: 'past' },
                { day: 'Day 3', label: 'Under recruiter review', sub: 'You are here - active decision window', status: 'current' },
                { day: 'Day 4-6', label: 'Decision clustering window', sub: 'Historical peak - recruiter decisions concentrate here', status: 'next' },
                { day: 'Day 5', label: 'Follow-up window unlock', sub: 'Optimal follow-up timing', status: 'future' },
                { day: 'Day 7', label: 'Decision threshold', sub: 'Decision probability plateaus', status: 'future' },
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: 16,
                    fontSize: 13,
                    padding: '10px 12px',
                    borderLeft: item.status === 'current' ? '2px solid #2563EB' : '2px solid transparent',
                    background: item.status === 'current' ? '#F8FAFC' : 'transparent',
                    borderRadius: item.status === 'current' ? 6 : 0,
                    marginBottom: 2,
                    opacity: item.status === 'past' ? 0.5 : 1,
                  }}
                >
                  <div style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: item.status === 'current' ? '#2563EB' : item.status === 'next' ? '#D97706' : item.status === 'past' ? '#94A3B8' : '#CBD5E1',
                    minWidth: '60px',
                  }}>
                    {item.day}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: item.status === 'current' ? 600 : 400, color: item.status === 'future' ? '#94A3B8' : '#0F172A' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 11, color: item.status === 'current' ? '#2563EB' : '#94A3B8', margin: '2px 0 0 0' }}>
                      {item.sub}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* MODEL TRANSPARENCY - Collapsible, matching Profile accordion */}
      <div style={{ ...cardStyle, overflow: 'hidden', background: '#F8FAFC' }}>
        <button
          type="button"
          onClick={() => setExpandedGovernance(!expandedGovernance)}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            padding: '12px 20px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: '#94A3B8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Model Transparency
          </p>
          <svg
            width="14" height="14" viewBox="0 0 16 16" fill="none"
            style={{ transition: 'transform 0.2s', transform: expandedGovernance ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {expandedGovernance && (
          <div style={{ padding: '0 20px 16px 20px' }}>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 12px 0' }}>
              Probabilistic model based on anonymized hiring data. Confidence intervals from 1,200+ comparable cases.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>No recruiter tracking</p>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>No employer scraping</p>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>GDPR compliant</p>
            </div>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div style={{ textAlign: 'center', padding: '4px 0' }}>
        <p style={{ fontSize: 10, color: '#CBD5E1', margin: 0 }}>
          Last refresh: 11:32 AM | Confidence: High
        </p>
      </div>
    </div>
  )
}
