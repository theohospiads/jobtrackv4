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
  const [expandedRisks, setExpandedRisks] = useState(false)
  const [simulationActive, setSimulationActive] = useState(false)
  const [referralActivated, setReferralActivated] = useState(false)
  const [prepProgress, setPrepProgress] = useState(2)

  if (currentStage !== 0) return null

  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const baseInterviewProbability = 42
  const projectedProbability = 47
  const applicationConfidence = 74
  const percentileRank = 68
  const followUpLocked = true

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      
      {/* LAYER 1: SYSTEM STATUS - Three Clear Semantic Layers */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: 14,
          padding: 24,
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)',
        }}
      >
        {/* Operational Layer */}
        <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>
            System Status - Operational
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Status</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#10B981', margin: 0 }}>Active</p>
              <p style={{ fontSize: 11, color: '#64748B', margin: '4px 0 0 0' }}>Under Recruiter Review</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Review Window</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>Day {daysSinceSubmission} of {typicalReviewDays}</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Follow-up Access</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: followUpLocked ? '#EF4444' : '#10B981', margin: 0 }}>
                {followUpLocked ? 'Locked' : 'Available'}
              </p>
              <p style={{ fontSize: 11, color: '#64748B', margin: '4px 0 0 0' }}>
                {followUpLocked ? 'Unlock on Day 5' : 'Ready to send'}
              </p>
            </div>
          </div>
        </div>

        {/* Predictive Metrics Layer */}
        <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>
            Performance Metrics - Predictive
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Interview Likelihood</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#2563EB', margin: 0 }}>{baseInterviewProbability}%</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Application Confidence</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#10B981', margin: 0 }}>{applicationConfidence}/100</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Percentile Rank</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: 0 }}>Top {100 - percentileRank}%</p>
            </div>
          </div>
        </div>

        {/* Model Validation Layer */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>
            Model Validation - Governance
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Model Confidence</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#10B981', margin: 0 }}>High statistical confidence</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Sample Size</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>1,200+</p>
              <p style={{ fontSize: 11, color: '#64748B', margin: '4px 0 0 0' }}>comparable cases</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Methodology</p>
              <p style={{ fontSize: 12, color: '#0F172A', margin: 0 }}>Validated probabilistic hiring outcome model</p>
            </div>
          </div>
        </div>

        {/* System Recommendation - Improvement #2 */}
        <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #E5E7EB' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>
            System Recommendation
          </p>
          <div style={{ padding: 16, background: '#F0FDF4', borderRadius: 8, border: '1px solid #BBFFC7' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#166534', margin: 0 }}>
              Wait. Prepare quantified impact stories. Activate referral if available.
            </p>
            <p style={{ fontSize: 12, color: '#15803D', margin: '8px 0 0 0' }}>
              Optimal positioning before Day 5 follow-up window unlock.
            </p>
          </div>
        </div>
      </div>

      {/* LAYER 2: DECISION DYNAMICS - Core Intelligence Blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        
        {/* Outcome Probability Model */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
            Outcome Drivers
          </p>
          
          <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 16px 0' }}>
            Why your application probability is 42% at this stage:
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ fontWeight: 600, color: '#10B981' }}>+15% Driver:</span>
              <p style={{ margin: '4px 0 0 0', color: '#64748B' }}>Strong foundational skills match vs. role</p>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ fontWeight: 600, color: '#F59E0B' }}>-8% Inhibitor:</span>
              <p style={{ margin: '4px 0 0 0', color: '#64748B' }}>Limited quantified outcomes in CV</p>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A' }}>
              <span style={{ fontWeight: 600, color: '#10B981' }}>+5% Uplift:</span>
              <p style={{ margin: '4px 0 0 0', color: '#64748B' }}>Referral network activation available (if used)</p>
            </li>
          </ul>
        </div>
        </div>
      </div>

      {/* Risk Factors Identified - with severity tags */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <button
          type="button"
          onClick={() => setExpandedRisks(!expandedRisks)}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0, textTransform: 'uppercase' }}>
            Risk Factors Identified
          </p>
          <span style={{ fontSize: 14, color: '#94A3B8', transition: 'transform 0.2s', transform: expandedRisks ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            v
          </span>
        </button>

        {expandedRisks && (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #E5E7EB' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, color: '#F59E0B' }}>Experience Depth</span>
                  <span style={{ fontSize: 11, fontWeight: 500, background: '#FEF3C7', color: '#92400E', padding: '2px 8px', borderRadius: 4 }}>
                    Moderate Impact
                  </span>
                </div>
                <p style={{ margin: 0, color: '#64748B' }}>Limited direct experience in this role type. Mitigated by strong foundational skills.</p>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, color: '#EF4444' }}>Quantified Impact</span>
                  <span style={{ fontSize: 11, fontWeight: 500, background: '#FEE2E2', color: '#7F1D1D', padding: '2px 8px', borderRadius: 4 }}>
                    High Impact
                  </span>
                </div>
                <p style={{ margin: 0, color: '#64748B' }}>Few measurable outcomes in CV. Can improve by adding 1-2 specific metrics.</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* LAYER 3: USER ACTION - Preparation and Governance */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        
        {/* Contextual Prep Strategy */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
            Screening Focus Areas
          </p>
          <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 12px 0' }}>
            Ranked by recruiter emphasis
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flex: 1 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2563EB', lineHeight: '1.4', flexShrink: 0 }}>1.</span>
                <div>
                  <p style={{ margin: 0, fontWeight: 500 }}>Mission alignment</p>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>Why Acme Corp matters to you</p>
                </div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', background: '#FEE2E2', padding: '2px 8px', borderRadius: 4, flexShrink: 0 }}>
                High
              </span>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flex: 1 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2563EB', lineHeight: '1.4', flexShrink: 0 }}>2.</span>
                <div>
                  <p style={{ margin: 0, fontWeight: 500 }}>Quantified impact stories</p>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>Projects with measurable outcomes</p>
                </div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', background: '#FEE2E2', padding: '2px 8px', borderRadius: 4, flexShrink: 0 }}>
                High
              </span>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flex: 1 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2563EB', lineHeight: '1.4', flexShrink: 0 }}>3.</span>
                <div>
                  <p style={{ margin: 0, fontWeight: 500 }}>Tool proficiency</p>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>Data analysis tools and frameworks</p>
                </div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B', background: '#FEF3C7', padding: '2px 8px', borderRadius: 4, flexShrink: 0 }}>
                Medium
              </span>
            </li>
          </ul>
        </div>

        {/* Follow-up Governance State */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
            Follow-Up Timing Optimization
          </p>
          <div style={{ padding: 16, background: '#F0F9FF', borderRadius: 8, marginBottom: 16, border: '1px solid #BFDBFE' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ fontSize: 18, color: followUpLocked ? '#EF4444' : '#10B981', lineHeight: '1' }}>
                {followUpLocked ? 'L' : 'O'}
              </span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#0369A1', margin: 0 }}>
                  Current State: {followUpLocked ? 'Locked' : 'Available'}
                </p>
                <p style={{ fontSize: 11, color: '#0369A1', margin: '4px 0 0 0' }}>
                  {followUpLocked ? 'Optimizing for peak recruiter decision window' : 'Ready to send follow-up'}
                </p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #BFDBFE', paddingTop: 12, marginBottom: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#0369A1', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                Unlocks
              </p>
              <p style={{ fontSize: 12, color: '#0369A1', margin: 0, fontWeight: 500 }}>
                Day 5 post-submission
              </p>
            </div>
            <div style={{ borderTop: '1px solid #BFDBFE', paddingTop: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#0369A1', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                Why
              </p>
              <p style={{ fontSize: 12, color: '#0369A1', margin: 0 }}>
                Peak recruiter decision window = Days 4-6. Risk if sent early: response probability decreases.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#475569', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
            Rationale
          </p>
          <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
            Peak recruiter decision window occurs Days 4-6. Sending before Day 5 introduces noise. Waiting maximizes response probability and demonstrates strategic timing awareness.
          </p>
        </div>
      </div>

      {/* Follow-up Window Status */}
      <div
        style={{
          background: '#F0F9FF',
          border: '1px solid #BFDBFE',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: '#0369A1', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          Follow-up Window Status
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 8px 0' }}>Window opens in</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#2563EB', margin: 0 }}>3 days</p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '8px 0 0 0' }}>Optimal timing: Day 5-7 post-submission</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 8px 0' }}>Last follow-up sent</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: 0 }}>Never</p>
          </div>
        </div>
      </div>

      {/* Priority Action Panel - Convert Insight to Execution */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #10B981',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1)',
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          Priority Actions - Ranked by Impact
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: '#2563EB' }}>1.</span>
                  <span style={{ fontWeight: 600 }}>Activate referral</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', background: '#FEE2E2', padding: '2px 8px', borderRadius: 4 }}>
                    +12%
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Highest impact - use network connection before Day 5</p>
              </div>
              <button style={{ fontSize: 12, fontWeight: 600, color: '#10B981', background: '#F0FDF4', border: '1px solid #BBFFC7', padding: '6px 12px', borderRadius: 6, cursor: 'pointer' }}>
                Complete
              </button>
            </div>
          </li>
          <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: '#2563EB' }}>2.</span>
                  <span style={{ fontWeight: 600 }}>Add quantified achievement to CV</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', background: '#FEE2E2', padding: '2px 8px', borderRadius: 4 }}>
                    +5%
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>High impact - quantify one project result with numbers/percentage</p>
              </div>
              <button style={{ fontSize: 12, fontWeight: 600, color: '#10B981', background: '#F0FDF4', border: '1px solid #BBFFC7', padding: '6px 12px', borderRadius: 6, cursor: 'pointer' }}>
                Complete
              </button>
            </div>
          </li>
          <li style={{ fontSize: 13, color: '#0F172A' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: '#2563EB' }}>3.</span>
                  <span style={{ fontWeight: 600 }}>Complete screening prep module</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B', background: '#FEF3C7', padding: '2px 8px', borderRadius: 4 }}>
                    +3%
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Medium impact - finish one more interview prep section</p>
              </div>
              <button style={{ fontSize: 12, fontWeight: 600, color: '#10B981', background: '#F0FDF4', border: '1px solid #BBFFC7', padding: '6px 12px', borderRadius: 6, cursor: 'pointer' }}>
                Complete
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Outcome Simulation */}
      <div
        style={{
          background: '#FFFBEB',
          border: '2px solid #F59E0B',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <button
          type="button"
          onClick={() => setSimulationActive(!simulationActive)}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 0,
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#92400E', margin: 0, textTransform: 'uppercase' }}>
              Outcome Simulation
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#B45309', margin: '4px 0 0 0' }}>
              If all recommended actions are completed before Day 5
            </p>
          </div>
          <span style={{ fontSize: 14, color: '#92400E', transition: 'transform 0.2s', transform: simulationActive ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            v
          </span>
        </button>

        {simulationActive && (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '2px solid #F59E0B' }}>
            <p style={{ fontSize: 12, color: '#92400E', margin: '0 0 14px 0', fontWeight: 500 }}>
              Completing recommended actions increases outcomes by:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span>Interview probability</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>+5% (42% to 47%)</span>
                </div>
                <div style={{ height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '5%', background: '#10B981' }} />
                </div>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span>Application confidence</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>+7 points (74 to 81)</span>
                </div>
                <div style={{ height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '7%', background: '#10B981' }} />
                </div>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span>Your percentile rank</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>+8% better (Top 32% to 24%)</span>
                </div>
                <div style={{ height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '8%', background: '#10B981' }} />
                </div>
              </li>
            </ul>
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #FBBF24', paddingLeft: 12, borderLeft: '3px solid #10B981' }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#10B981', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                Summary
              </p>
              <p style={{ fontSize: 12, color: '#92400E', margin: 0 }}>
                Projected interview probability moves from Moderate range (42%) to Strong range (47%). Statistically meaningful improvement.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Decision Flow Model - Predictive Timeline */}
      <div style={{ padding: 20, background: '#FFFFFF', borderRadius: 12, border: '1px solid #E5E7EB' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#475569', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Decision Flow Model
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <li style={{ display: 'flex', gap: 16, fontSize: 13, color: '#0F172A' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#2563EB', minWidth: '60px' }}>Day 0</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500 }}>Application submitted</p>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>Jan 28, 2026 at 2:14 PM</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: 16, fontSize: 13, color: '#0F172A' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#2563EB', minWidth: '60px' }}>Day 1</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500 }}>Screening queue entered</p>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>System detected in recruiter intake</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: 16, fontSize: 13, color: '#0F172A' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#2563EB', minWidth: '60px' }}>Day 3</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500 }}>Under recruiter review</p>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>Current stage - active decision window</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: 16, fontSize: 13, color: '#10B981' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#10B981', minWidth: '60px' }}>Day 4-6</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500 }}>Decision clustering window</p>
              <p style={{ fontSize: 11, color: '#059669', margin: '2px 0 0 0' }}>Historical peak - recruiter decision probability peaks</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: 16, fontSize: 13, color: '#94A3B8' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#BFDBFE', minWidth: '60px' }}>Day 5</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500 }}>Follow-up window unlock</p>
              <p style={{ fontSize: 11, color: '#D1D5DB', margin: '2px 0 0 0' }}>Expected - optimal follow-up timing</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: 16, fontSize: 13, color: '#94A3B8' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#BFDBFE', minWidth: '60px' }}>Day 7</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500 }}>Decision threshold spike</p>
              <p style={{ fontSize: 11, color: '#D1D5DB', margin: '2px 0 0 0' }}>Expected - recruiter decision probability plateaus</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Methodology Block - Government Credibility with Micro-Trust */}
      <div style={{ padding: 16, background: '#F8FAFC', borderRadius: 12, border: '1px solid #E5E7EB' }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#475569', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
          System Methodology & Governance
        </p>
        <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 12px 0' }}>
          Validated probabilistic hiring outcome model based on anonymized multi-company hiring data. Confidence intervals based on 1,200+ comparable cases.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: 600 }}>No recruiter tracking</p>
            <p style={{ margin: 0, fontSize: 10 }}>System is read-only</p>
          </div>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: 600 }}>No employer data scraping</p>
            <p style={{ margin: 0, fontSize: 10 }}>Fully anonymized modeling</p>
          </div>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: 600 }}>GDPR compliant</p>
            <p style={{ margin: 0, fontSize: 10 }}>Data privacy enforced</p>
          </div>
        </div>
      </div>

      {/* System Metadata Footer */}
      <div style={{ padding: 12, background: '#F8FAFC', borderRadius: 8, textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>
          Last model refresh: 11:32 AM | Data confidence: High | System ID: v13-strategic-intelligence
        </p>
      </div>
    </div>
  )
}
