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
      
      {/* LAYER 1: SITUATION DASHBOARD - Unified Intelligence Console */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: 14,
          padding: 24,
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)',
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', margin: 0, letterSpacing: '0.5px' }}>
            System Status
          </p>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: '4px 0 0 0' }}>
            Active - Day {daysSinceSubmission} of {typicalReviewDays}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
          {/* Left: Current State */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Interview Likelihood</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#2563EB', margin: 0 }}>{baseInterviewProbability}%</p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Application Confidence</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#10B981', margin: 0 }}>{applicationConfidence}/100</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Your Rank</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: 0 }}>Top {100 - percentileRank}%</p>
            </div>
          </div>

          {/* Right: Model Confidence */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Model Confidence</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#10B981', margin: 0 }}>High</p>
            </div>
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Sample Size</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: 0 }}>1,200+</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0', fontWeight: 500 }}>Case Studies</p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Comparable hires</p>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 13, color: '#0F172A', fontWeight: 500, margin: 0 }}>
          Most likely outcome: Screening triggered by Day 7.
        </p>
        <p style={{ fontSize: 12, color: '#64748B', margin: '6px 0 0 0' }}>
          Recruiter activity patterns show peak review decisions between Days 4-6.
        </p>
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
            Outcome Probability Model
          </p>
          
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>Interview Likelihood</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#2563EB', margin: 0 }}>{baseInterviewProbability}%</p>
            </div>
            <div style={{ height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${baseInterviewProbability}%`, background: '#2563EB' }} />
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>Application Confidence</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#10B981', margin: 0 }}>{applicationConfidence}/100</p>
            </div>
            <div style={{ height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${applicationConfidence}%`, background: '#10B981' }} />
            </div>
          </div>

          <div style={{ padding: 12, background: '#F0F9FF', borderRadius: 8 }}>
            <p style={{ fontSize: 12, color: '#0369A1', margin: 0 }}>
              You rank above {percentileRank}% of comparable applicants
            </p>
          </div>
        </div>

        {/* Your Leverage Zone */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
            Your Leverage Zone
          </p>

          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#10B981', margin: '0 0 12px 0' }}>
              YOU CONTROL
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ color: referralActivated ? '#10B981' : '#D1D5DB', fontWeight: 700 }}>
                  {referralActivated ? 'O' : 'O'}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 500 }}>Referral activated</p>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>
                    {referralActivated ? '1/1 connection engaged' : '0/1 - activate a referral'}
                  </p>
                </div>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ color: prepProgress >= 3 ? '#10B981' : '#F59E0B', fontWeight: 700 }}>
                  {prepProgress >= 3 ? 'O' : 'O'}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 500 }}>Screening prep completed</p>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>
                    {prepProgress}/3 modules
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#94A3B8', margin: '0 0 12px 0' }}>
              SYSTEM GOVERNS
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ fontSize: 13, color: '#64748B', display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ fontWeight: 700 }}>-</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0 }}>Recruiter review timing</p>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>Peak activity Days 4-6</p>
                </div>
              </li>
              <li style={{ fontSize: 13, color: followUpLocked ? '#F59E0B' : '#10B981', display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ fontWeight: 700 }}>
                  {followUpLocked ? 'O' : 'O'}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0 }}>Follow-up window</p>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: '2px 0 0 0' }}>
                    {followUpLocked ? 'Locked until Day 5' : 'Available'}
                  </p>
                </div>
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
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>Mission alignment</p>
                <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>Why Acme Corp matters to you</p>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', background: '#FEE2E2', padding: '2px 8px', borderRadius: 4 }}>
                High
              </span>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>Quantified impact stories</p>
                <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>Projects with measurable outcomes</p>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', background: '#FEE2E2', padding: '2px 8px', borderRadius: 4 }}>
                High
              </span>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>Tool proficiency</p>
                <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0 0' }}>Data analysis tools and frameworks</p>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B', background: '#FEF3C7', padding: '2px 8px', borderRadius: 4 }}>
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
            Follow-up Governance
          </p>
          <div style={{ padding: 12, background: '#F0F9FF', borderRadius: 8, marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#0369A1', margin: 0 }}>
              Follow-up locked until optimal timing (Day 5).
            </p>
          </div>
          <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
            Peak recruiter decisions occur Days 4-6. Waiting prevents noise and maximizes response probability.
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
              If all actions completed
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
          </div>
        )}
      </div>

      {/* Methodology Block - Government Credibility (Refinement #5) */}
      <div style={{ padding: 16, background: '#F8FAFC', borderRadius: 12, border: '1px solid #E5E7EB' }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#475569', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
          System Methodology
        </p>
        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
          Probabilistic modeling based on anonymized multi-company hiring data. No recruiter monitoring. GDPR compliant. Confidence intervals based on 1,200+ comparable cases.
        </p>
      </div>

      {/* System Metadata Footer */}
      <div style={{ padding: 12, background: '#F8FAFC', borderRadius: 8, textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>
          Last model refresh: 11:32 AM | Data confidence: High | System ID: v11-institutional
        </p>
      </div>
    </div>
  )
}
