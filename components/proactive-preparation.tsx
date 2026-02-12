'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from './language-provider'

interface ProactivePreparationProps {
  currentStage: number
  jobTitle: string
  companyName: string
}

const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 12,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
} as const

export function ProactivePreparation({
  currentStage,
  jobTitle,
  companyName,
}: ProactivePreparationProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [expandedCompetency, setExpandedCompetency] = useState<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  // Only show for stages 1-3 (Proactive Prep, Interview, Decision Pending)
  if (currentStage < 1 || currentStage > 3) return null

  const readinessData = [
    { label: 'Overall', value: 64 },
    { label: 'Behavioral', value: 58 },
    { label: 'Technical', value: 71 },
    { label: 'Communication', value: 68 },
    { label: 'Culture', value: 62 },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return { bg: '#FEE2E2', text: '#991B1B' }
      case 'medium': return { bg: '#FEF3C7', text: '#92400E' }
      case 'low': return { bg: '#DCFCE7', text: '#166534' }
      default: return { bg: '#F1F5F9', text: '#64748B' }
    }
  }

  return (
    <div style={{ marginBottom: 32 }}>
      {/* SECTION HEADER */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('prep.sectionTitle')}
        </h2>
        <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
          {t('prep.sectionSubtitle')}
        </p>
      </div>

      {/* 1. READINESS OVERVIEW STRIP */}
      <div style={{ ...card, padding: 20, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t('prep.readinessOverview')}
          </h3>
          <span style={{ fontSize: 11, color: '#64748B' }}>
            {t('prep.nextMilestone')}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          {readinessData.map((item, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#0F172A' }}>{item.value}%</span>
              <div style={{ width: '100%', height: 3, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${item.value}%`, background: '#2563EB' }} />
              </div>
              <span style={{ fontSize: 10, color: '#94A3B8', textAlign: 'center' }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Institutional Framing */}
        <div style={{ paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
          <p style={{ fontSize: 10, color: '#64748B', margin: 0, lineHeight: 1.4 }}>
            {t('prep.benchmarkInfo')}
          </p>
        </div>
      </div>

      {/* 2. TRAINING WORKSPACE - Shows when competency expanded (mock state for now) */}
      {expandedCompetency && (
        <div style={{ ...card, padding: 24, marginBottom: 24, background: '#F8FAFC' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
              Training Workspace
            </h3>
            <button
              onClick={() => setExpandedCompetency(null)}
              style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#64748B', padding: 0 }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 20 }}>
            {/* Left: Context */}
            <div style={{ background: '#FFFFFF', padding: 16, borderRadius: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                {t('prep.whatRecruitersTest')}
              </p>
              <p style={{ fontSize: 12, color: '#475569', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                {t('prep.behavioralTestDescription')}
              </p>

              <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                {t('prep.commonFailurePatterns')}
              </p>
              <ul style={{ fontSize: 12, color: '#475569', margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
                <li>{t('prep.failurePattern1')}</li>
                <li>{t('prep.failurePattern2')}</li>
              </ul>
            </div>

            {/* Right: Training Interface */}
            <div style={{ background: '#FFFFFF', padding: 16, borderRadius: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                {t('prep.questionPrompt')}
              </p>
              <textarea
                placeholder={t('prep.enterYourApproach')}
                style={{
                  width: '100%',
                  minHeight: 100,
                  padding: 10,
                  border: '1px solid #E5E7EB',
                  borderRadius: 6,
                  fontSize: 12,
                  fontFamily: 'inherit',
                  resize: 'none',
                  marginBottom: 10,
                }}
              />
              <button
                style={{
                  width: '100%',
                  padding: 10,
                  background: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {t('prep.scoreAnswer')}
              </button>
            </div>
          </div>

          {/* Score Breakdown */}
          <div style={{ background: '#FFFFFF', padding: 14, borderRadius: 8, marginBottom: 16 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
              {t('prep.scoreBreakdown')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { label: t('prep.structure'), score: '6/10' },
                { label: t('prep.clarity'), score: '7/10' },
                { label: t('prep.impact'), score: '4/10' },
                { label: t('prep.relevance'), score: '8/10' },
              ].map((item, i) => (
                <div key={i}>
                  <p style={{ fontSize: 10, color: '#64748B', margin: '0 0 4px 0' }}>{item.label}</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', margin: 0 }}>{item.score}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: '12px 0 0 0' }}>
              {t('prep.overallScore')}: 62%
            </p>
          </div>

          {/* Improvement Suggestions */}
          <div style={{ background: '#FFFFFF', padding: 14, borderRadius: 8 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              {t('prep.improvementSuggestions')}
            </p>
            <ul style={{ fontSize: 12, color: '#475569', margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
              <li>{t('prep.addMeasurable')}</li>
              <li>{t('prep.reduceNarrative')}</li>
              <li>{t('prep.clarifyStakeholder')}</li>
            </ul>
          </div>
        </div>
      )}

      {/* 3. SIMULATION GATE WITH STRATEGIC PURPOSE */}
      <div style={{ ...card, padding: 16, background: '#F8FAFC', marginBottom: 24 }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
          {t('prep.simulationAccess')}
        </p>
        <p style={{ fontSize: 11, color: '#475569', margin: '0 0 12px 0', lineHeight: 1.4 }}>
          {t('prep.simulationPurpose')}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 8px 0' }}>
              64% / 75%
            </p>
            <div style={{ flex: 1, height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '64%', background: '#2563EB' }} />
            </div>
          </div>
          <button
            disabled
            style={{
              padding: '8px 14px',
              background: '#E2E8F0',
              border: 'none',
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 500,
              cursor: 'not-allowed',
              color: '#94A3B8',
              whiteSpace: 'nowrap',
            }}
          >
            {t('prep.unlockSimulation')}
          </button>
        </div>
      </div>

      {/* GOVERNMENT-GRADE FOOTER */}
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
        <a href="#" style={{ fontSize: 10, color: '#94A3B8', textDecoration: 'none' }}>
          {t('prep.scoringMethodology')} →
        </a>
        <a href="#" style={{ fontSize: 10, color: '#94A3B8', textDecoration: 'none' }}>
          {t('prep.biasMitigationPolicy')} →
        </a>
        <a href="#" style={{ fontSize: 10, color: '#94A3B8', textDecoration: 'none' }}>
          {t('prep.dataPrivacyOverview')} →
        </a>
        <button
          style={{
            fontSize: 10,
            color: '#94A3B8',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          {t('prep.exportPreparationLog')} →
        </button>
      </div>
    </div>
  )
}
