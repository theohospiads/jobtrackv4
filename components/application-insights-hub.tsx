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

  if (currentStage !== 0) return null

  const daysSinceSubmission = 3
  const typicalReviewDays = 7
  const baseInterviewProbability = 42
  const projectedProbability = 47
  const applicationConfidence = 74
  const percentileRank = 68

  return (
    <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      
      {/* LAYER 1: SYSTEM STATE - Status Header */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #2563EB',
          borderRadius: 14,
          padding: 20,
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', margin: 0 }}>
              System Status
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: '4px 0 0 0' }}>
              ACTIVE - Under Recruiter Review
            </p>
            <p style={{ fontSize: 13, color: '#64748B', margin: '6px 0 0 0' }}>
              Day {daysSinceSubmission} of {typicalReviewDays}-day review window
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: 0 }}>Model Confidence</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#10B981', margin: '4px 0 0 0' }}>High</p>
            <p style={{ fontSize: 11, color: '#64748B', margin: '4px 0 0 0' }}>1,200+ comparable cases</p>
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
            <p style={{ fontSize: 12, fontWeight: 600, color: '#10B981', margin: '0 0 8px 0' }}>
              YOU CONTROL
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#10B981', fontWeight: 600 }}>+</span>
                <span>Referral activation</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', gap: 8 }}>
                <span style={{ color: '#10B981', fontWeight: 600 }}>+</span>
                <span>Prep quality for screening</span>
              </li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#94A3B8', margin: '0 0 8px 0' }}>
              SYSTEM GOVERNS
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontSize: 13, color: '#64748B', display: 'flex', gap: 8 }}>
                <span style={{ color: '#94A3B8' }}>-</span>
                <span>Recruiter review timing</span>
              </li>
              <li style={{ fontSize: 13, color: '#64748B', display: 'flex', gap: 8 }}>
                <span style={{ color: '#94A3B8' }}>-</span>
                <span>Follow-up window access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Risk Factors Identified */}
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
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <span style={{ fontWeight: 600, color: '#F59E0B' }}>Experience Depth</span>
                <p style={{ margin: '4px 0 0 0', color: '#64748B' }}>Limited direct experience in this role type. Mitigated by: strong foundational skills.</p>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A' }}>
                <span style={{ fontWeight: 600, color: '#F59E0B' }}>Quantified Impact</span>
                <p style={{ margin: '4px 0 0 0', color: '#64748B' }}>Few measurable outcomes in CV. Can improve by adding 1-2 specific metrics.</p>
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
            Prep Strategy
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ fontWeight: 500 }}>Why this company?</span>
              <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>Recruiters emphasize mission alignment</p>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A', paddingBottom: 12, borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ fontWeight: 500 }}>Key competency?</span>
              <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>Data analysis in product decisions</p>
            </li>
            <li style={{ fontSize: 13, color: '#0F172A' }}>
              <span style={{ fontWeight: 500 }}>Success story</span>
              <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>Project with measurable business impact</p>
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
              Follow-up algorithmically restricted until optimal response timing threshold is reached.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 8px 0' }}>Window opens in</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#2563EB', margin: 0 }}>3 days</p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '8px 0 0 0' }}>Optimal timing: Day 5-7 post-submission</p>
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
            <p style={{ fontSize: 12, color: '#92400E', margin: '0 0 16px 0' }}>
              Based on historical patterns, completing all recommended actions would:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between' }}>
                <span>Interview probability</span>
                <span style={{ fontWeight: 700 }}>{baseInterviewProbability}% → {projectedProbability}%</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between' }}>
                <span>Application confidence</span>
                <span style={{ fontWeight: 700 }}>{applicationConfidence} → 81</span>
              </li>
              <li style={{ fontSize: 13, color: '#0F172A', display: 'flex', justifyContent: 'space-between' }}>
                <span>Percentile rank</span>
                <span style={{ fontWeight: 700 }}>{percentileRank}% → 76%</span>
              </li>
            </ul>
          </div>
        )}
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
