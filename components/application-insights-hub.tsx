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

export function ApplicationInsightsHub({
  currentStage,
  jobTitle,
  companyName,
  submittedDate,
  salaryRange,
}: ApplicationInsightsHubProps) {
  const { t } = useLanguage()
  const [strategicView, setStrategicView] = useState(true)
  const [simulationActive, setSimulationActive] = useState(false)
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
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* VIEW TOGGLE */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: 8, padding: 2, gap: 2 }}>
          <button
            type="button"
            onClick={() => setStrategicView(false)}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              background: !strategicView ? '#FFFFFF' : 'transparent',
              color: !strategicView ? '#0F172A' : '#94A3B8',
              boxShadow: !strategicView ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            Basic
          </button>
          <button
            type="button"
            onClick={() => setStrategicView(true)}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              background: strategicView ? '#FFFFFF' : 'transparent',
              color: strategicView ? '#0F172A' : '#94A3B8',
              boxShadow: strategicView ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            Strategic
          </button>
        </div>
      </div>

      {/* MISSION CONTROL CARD */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)',
        }}
      >
        <div style={{ padding: 24, display: 'flex', gap: 32 }}>
          {/* Left: Status */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>
              Mission Control
            </p>
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Status</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#10B981', margin: 0 }}>Active</p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Review Window</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>Day {daysSinceSubmission} of {typicalReviewDays}</p>
                <p style={{ fontSize: 10, color: '#64748B', margin: '2px 0 0 0' }}>Recruiter attention peaks Days 4-6</p>
              </div>
            </div>
          </div>

          {/* Right: Metrics - Interview Likelihood is the emotional anchor */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ textAlign: 'center', paddingRight: 24, borderRight: '1px solid #E5E7EB' }}>
              <p style={{ fontSize: 12, color: '#2563EB', margin: '0 0 4px 0', fontWeight: 600 }}>Interview Likelihood</p>
              <p style={{ fontSize: 32, fontWeight: 800, color: '#2563EB', margin: 0, lineHeight: 1 }}>{baseInterviewProbability}%</p>
              <p style={{ fontSize: 10, color: '#64748B', margin: '6px 0 0 0' }}>Based on 1,200+ patterns</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                Confidence: <span style={{ fontWeight: 600, color: '#10B981' }}>{applicationConfidence} (High)</span>
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                Outperforming <span style={{ fontWeight: 600, color: '#0F172A' }}>{percentileRank}%</span> of similar applicants
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Highest Leverage Action */}
        <div style={{ padding: '12px 24px', background: '#F0FDF4', borderTop: '1px solid #BBFFC7' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#166534', margin: 0 }}>
            Highest leverage action: Activate referral before Day 5
          </p>
        </div>
      </div>

      {/* YOUR CONTROL group label */}
      <p style={{ fontSize: 10, fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '1px', margin: '4px 0 -12px 0' }}>
        Your Control
      </p>

      {/* ACTION COMMAND CENTER */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #10B981',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0, textTransform: 'uppercase' }}>
            Action Plan - Ranked by Expected Impact
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#10B981' }}>
              {completedCount} / {totalActions} completed
            </span>
            <div style={{ width: 60, height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(completedCount / totalActions) * 100}%`, background: '#10B981', transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#10B981', fontWeight: 600, margin: '0 0 16px 0' }}>
          Move from {baseInterviewProbability}% to {projectedProbability}% interview likelihood if completed
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: 'Activate referral', impact: '+12%', severity: 'high', desc: 'Highest impact - use network connection before Day 5' },
            { label: 'Add quantified achievement to CV', impact: '+5%', severity: 'high', desc: 'High impact - quantify one project result with numbers' },
            { label: 'Complete screening prep module', impact: '+3%', severity: 'medium', desc: 'Medium impact - finish one more interview prep section' },
          ].map((action, idx) => {
            const done = actionsCompleted.includes(idx)
            return (
              <li key={idx} style={{ fontSize: 13, color: '#0F172A', paddingBottom: idx < 2 ? 12 : 0, borderBottom: idx < 2 ? '1px solid #E5E7EB' : 'none', opacity: done ? 0.5 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, color: '#2563EB' }}>{idx + 1}.</span>
                      <span style={{ fontWeight: 600, textDecoration: done ? 'line-through' : 'none' }}>{action.label}</span>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: action.severity === 'high' ? '#EF4444' : '#F59E0B',
                        background: action.severity === 'high' ? '#FEE2E2' : '#FEF3C7',
                        padding: '2px 8px',
                        borderRadius: 4,
                      }}>
                        {action.impact}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>{action.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleAction(idx)}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: done ? '#94A3B8' : '#10B981',
                      background: done ? '#F1F5F9' : '#F0FDF4',
                      border: `1px solid ${done ? '#E5E7EB' : '#BBFFC7'}`,
                      padding: '6px 12px',
                      borderRadius: 6,
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

      {/* OUTCOME PROJECTION PANEL */}
      <div
        style={{
          background: '#FFFBEB',
          border: '2px solid #F59E0B',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: '#92400E', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          Outcome Projection
        </p>

        <div style={{ display: 'flex', gap: 24, alignItems: 'stretch', marginBottom: 16 }}>
          {/* Current */}
          <div style={{ flex: 1, padding: 16, background: '#FFFFFF', borderRadius: 8, border: '1px solid #E5E7EB', textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 600, textTransform: 'uppercase' }}>Current</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#2563EB', margin: 0 }}>{baseInterviewProbability}%</p>
            <div style={{ height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden', marginTop: 12 }}>
              <div style={{ height: '100%', width: `${baseInterviewProbability}%`, background: '#2563EB', borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 11, color: '#64748B', margin: '8px 0 0 0' }}>Moderate range</p>
          </div>

          {/* Arrow */}
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 20, color: '#F59E0B', fontWeight: 700 }}>
            {'>'}
          </div>

          {/* Projected */}
          <div style={{ flex: 1, padding: 16, background: '#F0FDF4', borderRadius: 8, border: '1px solid #BBFFC7', textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#059669', margin: '0 0 8px 0', fontWeight: 600, textTransform: 'uppercase' }}>If Actions Completed</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#10B981', margin: 0 }}>{projectedProbability}%</p>
            <div style={{ height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden', marginTop: 12 }}>
              <div style={{ height: '100%', width: `${projectedProbability}%`, background: '#10B981', borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 11, color: '#059669', margin: '8px 0 0 0' }}>Strong range</p>
          </div>
        </div>

        <div style={{ padding: 12, background: '#FFFFFF', borderRadius: 8, border: '1px solid #FBBF24', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#92400E', margin: 0 }}>
            +{projectedProbability - baseInterviewProbability}% projected improvement. Would move you into strong interview range.
          </p>
          <p style={{ fontSize: 11, color: '#B45309', margin: 0 }}>
            Current position: you outperform {percentileRank}% of similar applicants.
          </p>
        </div>
      </div>

      {/* SITUATION group label */}
      <p style={{ fontSize: 10, fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', margin: '4px 0 -12px 0' }}>
        Situation
      </p>

      {/* STRATEGIC TIMING ENGINE */}
      <div style={{ background: '#FFFFFF', borderRadius: 12, border: '1px solid #E5E7EB', padding: 24 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          Strategic Timing Engine
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
                    width: item.current ? 16 : 10,
                    height: item.current ? 16 : 10,
                    borderRadius: '50%',
                    background: item.current ? '#2563EB' : item.past ? '#10B981' : item.peak ? '#F59E0B' : '#E5E7EB',
                    border: item.current ? '3px solid #93B4F8' : 'none',
                    boxShadow: item.current ? '0 0 0 4px rgba(37, 99, 235, 0.2), 0 0 8px rgba(37, 99, 235, 0.3)' : 'none',
                    zIndex: 1,
                  }}
                />
                {idx < 7 && (
                  <div style={{
                    position: 'absolute',
                    top: item.current ? 6 : 4,
                    left: '50%',
                    width: '100%',
                    height: 2,
                    background: item.past || item.current ? '#10B981' : '#E5E7EB',
                  }} />
                )}
                <p style={{ fontSize: 10, fontWeight: 600, color: item.current ? '#2563EB' : '#94A3B8', margin: '6px 0 0 0' }}>
                  {item.day}
                </p>
                {item.label && (
                  <p style={{
                    fontSize: 9,
                    color: item.current ? '#2563EB' : item.peak ? '#F59E0B' : '#94A3B8',
                    margin: '2px 0 0 0',
                    textAlign: 'center',
                    fontWeight: item.current ? 700 : 400,
                    whiteSpace: 'nowrap',
                  }}>
                    {item.label}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Peak cluster indicator */}
          <div style={{ marginTop: 12, marginLeft: '42%', width: '33%' }}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #FDE68A, #F59E0B, #FDE68A)', borderRadius: 2 }} />
            <p style={{ fontSize: 10, color: '#B45309', margin: '4px 0 0 0', textAlign: 'center', fontWeight: 600 }}>
              Peak decision cluster
            </p>
          </div>
        </div>

        {/* Follow-up Status */}
        <div style={{ display: 'flex', gap: 16, padding: 16, background: '#F0F9FF', borderRadius: 8, border: '1px solid #BFDBFE' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#0369A1', margin: '0 0 4px 0' }}>Follow-up: Locked</p>
            <p style={{ fontSize: 11, color: '#0369A1', margin: 0 }}>Unlocks Day 5. Peak recruiter decisions = Days 4-6.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#2563EB', margin: 0 }}>2 days</p>
            <p style={{ fontSize: 11, color: '#64748B', margin: '2px 0 0 0' }}>until unlock</p>
          </div>
        </div>
      </div>

      {/* STRATEGIC VIEW: Recruiter Decision Model + Decision Flow */}
      {strategicView && (
        <>
          {/* RECRUITER DECISION MODEL - Merged Section */}
          <div style={{ background: '#FFFFFF', borderRadius: 12, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setExpandedDecisionModel(!expandedDecisionModel)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: 20,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0, textTransform: 'uppercase' }}>
                Recruiter Decision Model - What Matters Most
              </p>
              <span style={{ fontSize: 14, color: '#94A3B8', transition: 'transform 0.2s', transform: expandedDecisionModel ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                v
              </span>
            </button>

            {expandedDecisionModel && (
              <div style={{ padding: '0 20px 20px 20px' }}>
                {/* A. Top Positive Signals */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#10B981', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    A. Top Positive Signals
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, color: '#10B981', flexShrink: 0 }}>+15%</span>
                      <span>Strong foundational skills match vs. role requirements</span>
                    </li>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, color: '#10B981', flexShrink: 0 }}>+5%</span>
                      <span>Referral network activation available (if used)</span>
                    </li>
                  </ul>
                </div>

                {/* B. Friction Points */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#EF4444', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    B. Friction Points
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, color: '#EF4444', flexShrink: 0 }}>-8%</span>
                      <span>Limited quantified outcomes in CV</span>
                    </li>
                    <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, fontWeight: 500, background: '#FEF3C7', color: '#92400E', padding: '2px 8px', borderRadius: 4, flexShrink: 0 }}>Moderate</span>
                      <span>Experience depth in this specific role type</span>
                    </li>
                  </ul>
                </div>

                {/* C. Recruiter Screening Priorities */}
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    C. Recruiter Screening Priorities
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { label: 'Mission alignment', desc: 'Why this company matters to you', severity: 'High' },
                      { label: 'Quantified impact stories', desc: 'Measurable project outcomes', severity: 'High' },
                      { label: 'Tool proficiency', desc: 'Data analysis tools and frameworks', severity: 'Medium' },
                    ].map((item, idx) => (
                      <li key={idx} style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: idx < 2 ? 8 : 0, borderBottom: idx < 2 ? '1px solid #F1F5F9' : 'none' }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span style={{ fontWeight: 700, color: '#2563EB', fontSize: 12 }}>{idx + 1}.</span>
                          <div>
                            <span style={{ fontWeight: 500 }}>{item.label}</span>
                            <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>{item.desc}</p>
                          </div>
                        </div>
                        <span style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: item.severity === 'High' ? '#EF4444' : '#F59E0B',
                          background: item.severity === 'High' ? '#FEE2E2' : '#FEF3C7',
                          padding: '2px 8px',
                          borderRadius: 4,
                          flexShrink: 0,
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

          {/* DECISION FLOW MODEL - Smart Timeline */}
          <div style={{ background: '#FFFFFF', borderRadius: 12, border: '1px solid #E5E7EB', padding: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#475569', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Decision Flow Model
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { day: 'Day 0', label: 'Application submitted', sub: 'Jan 28, 2026 at 2:14 PM', status: 'past' },
                { day: 'Day 1', label: 'Screening queue entered', sub: 'Detected in recruiter intake', status: 'past' },
                { day: 'Day 3', label: 'Under recruiter review', sub: 'YOU ARE HERE - active decision window', status: 'current' },
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
                    padding: '10px 0',
                    borderLeft: item.status === 'current' ? '3px solid #2563EB' : item.status === 'next' ? '3px solid #F59E0B' : '3px solid transparent',
                    paddingLeft: 12,
                    background: item.status === 'current' ? '#EFF6FF' : item.status === 'next' ? '#FFFBEB' : 'transparent',
                    borderRadius: item.status === 'current' || item.status === 'next' ? 6 : 0,
                    marginBottom: 2,
                    opacity: item.status === 'past' ? 0.6 : 1,
                  }}
                >
                  <div style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: item.status === 'current' ? '#2563EB' : item.status === 'next' ? '#F59E0B' : item.status === 'past' ? '#94A3B8' : '#CBD5E1',
                    minWidth: '60px',
                  }}>
                    {item.day}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: item.status === 'current' || item.status === 'next' ? 600 : 500, color: item.status === 'future' ? '#94A3B8' : '#0F172A' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 11, color: item.status === 'current' ? '#2563EB' : item.status === 'next' ? '#B45309' : '#94A3B8', margin: '2px 0 0 0', fontWeight: item.status === 'current' ? 600 : 400 }}>
                      {item.sub}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* MODEL TRANSPARENCY & COMPLIANCE - Collapsible Footer */}
      <div style={{ background: '#F8FAFC', borderRadius: 10, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
        <button
          type="button"
          onClick={() => setExpandedGovernance(!expandedGovernance)}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            padding: '12px 16px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', margin: 0, textTransform: 'uppercase' }}>
            Model Transparency & Compliance
          </p>
          <span style={{ fontSize: 12, color: '#94A3B8', transition: 'transform 0.2s', transform: expandedGovernance ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            v
          </span>
        </button>

        {expandedGovernance && (
          <div style={{ padding: '0 16px 16px 16px' }}>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 12px 0' }}>
              Validated probabilistic hiring outcome model based on anonymized multi-company hiring data. Confidence intervals based on 1,200+ comparable cases.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <div style={{ fontSize: 11, color: '#64748B' }}>
                <p style={{ margin: '0 0 2px 0', fontWeight: 600 }}>No recruiter tracking</p>
                <p style={{ margin: 0, fontSize: 10 }}>System is read-only</p>
              </div>
              <div style={{ fontSize: 11, color: '#64748B' }}>
                <p style={{ margin: '0 0 2px 0', fontWeight: 600 }}>No employer data scraping</p>
                <p style={{ margin: 0, fontSize: 10 }}>Fully anonymized modeling</p>
              </div>
              <div style={{ fontSize: 11, color: '#64748B' }}>
                <p style={{ margin: '0 0 2px 0', fontWeight: 600 }}>GDPR compliant</p>
                <p style={{ margin: 0, fontSize: 10 }}>Data privacy enforced</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* System Metadata Footer */}
      <div style={{ padding: 10, textAlign: 'center' }}>
        <p style={{ fontSize: 10, color: '#CBD5E1', margin: 0 }}>
          Last model refresh: 11:32 AM | Data confidence: High | System ID: v14-strategic
        </p>
      </div>
    </div>
  )
}
