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
  borderRadius: 16,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
} as const

export function ProactivePreparation({
  currentStage,
  jobTitle,
  companyName,
}: ProactivePreparationProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [expandedPriority, setExpandedPriority] = useState<number | null>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  // Only show for stages 1-3 (Proactive Prep, Interview, Decision Pending)
  if (currentStage < 1 || currentStage > 3) return null

  const currentReadiness = 64
  const targetReadiness = 82
  const improvementDelta = targetReadiness - currentReadiness
  const candidatePercentile = 61
  const completedPriorities = 2
  const totalPriorities = 5

  const priorities = [
    {
      titleKey: 'prep.quantifyLeadership',
      impactKey: '+6%',
      descKey: 'prep.limitedMeasurableOutcomes',
      actionKey: 'prep.improve',
    },
    {
      titleKey: 'prep.strengthenConflict',
      impactKey: '+4%',
      descKey: 'prep.highProbabilityBehavioral',
      actionKey: 'prep.practice',
    },
    {
      titleKey: 'prep.refineProductMetrics',
      impactKey: '+3%',
      descKey: 'prep.roleSpecificAnalytical',
      actionKey: 'prep.review',
    },
    {
      titleKey: 'prep.demonstrateImpact',
      impactKey: '+2%',
      descKey: 'prep.communicateValue',
      actionKey: 'prep.develop',
    },
    {
      titleKey: 'prep.crossFunctionalStories',
      impactKey: '+1%',
      descKey: 'prep.expandCollaboration',
      actionKey: 'prep.expand',
    },
  ]

  const riskProfile = [
    { label: '+15%', descKey: 'prep.strongAnalyticalMatch', type: 'positive' },
    { label: '+6%', descKey: 'prep.relevantExperience', type: 'positive' },
    { label: '+4%', descKey: 'prep.clearCommunication', type: 'positive' },
    { label: '-8%', descKey: 'prep.limitedQuantified', type: 'negative' },
    { label: 'Gap', descKey: 'prep.leadershipOwnership', type: 'negative' },
    { label: '-5%', descKey: 'prep.crossFunctionalGap', type: 'negative' },
  ]

  const highProbabilityQuestions = [
    {
      question: 'prep.influenceWithoutAuthority',
      likelihood: '74%',
      readiness: '52%',
      risk: 'High',
    },
    {
      question: 'prep.handleFailure',
      likelihood: '68%',
      readiness: '58%',
      risk: 'Medium',
    },
    {
      question: 'prep.analyticalApproach',
      likelihood: '71%',
      readiness: '65%',
      risk: 'Medium',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* SECTION HEADER */}
      <div style={{ paddingBottom: 8 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('prep.sectionTitle')}
        </p>
        <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
          {t('prep.sectionSubtitle')}
        </p>
      </div>

      {/* 1. PREPARATION READINESS */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('prep.preparationReadiness')}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ flex: 1, padding: 20, background: '#F8FAFC', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '0 0 8px 0', fontWeight: 500 }}>
              {t('prep.currentReadiness')}
            </p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1 }}>
              {currentReadiness}%
            </p>
            <p style={{ fontSize: 11, color: '#94A3B8', margin: '8px 0 0 0' }}>
              {t('prep.moderate')}
            </p>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div style={{ flex: 1, padding: 20, background: '#F0FDF4', borderRadius: 12, textAlign: 'center', border: '1px solid #DCFCE7' }}>
            <p style={{ fontSize: 11, color: '#10B981', margin: '0 0 8px 0', fontWeight: 500 }}>
              {t('prep.targetReadiness')}
            </p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#10B981', margin: 0, lineHeight: 1 }}>
              {targetReadiness}%
            </p>
            <p style={{ fontSize: 11, color: '#10B981', margin: '8px 0 0 0' }}>
              {t('prep.strong')}
            </p>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 12px 0' }}>
          {t('prep.readinessSummary')
            .replace('{delta}', String(improvementDelta))
            .replace('{percentile}', String(candidatePercentile))}
        </p>

        <a href="#" style={{ fontSize: 11, color: '#2563EB', textDecoration: 'none', cursor: 'pointer' }}>
          {t('prep.viewScoringCriteria')} →
        </a>
      </div>

      {/* 2. YOUR PREPARATION PRIORITIES */}
      <div style={{ ...card, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {t('prep.yourPriorities')}
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: '#64748B' }}>
              {completedPriorities}/{totalPriorities}
            </span>
            <div style={{ width: 48, height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(completedPriorities / totalPriorities) * 100}%`, background: '#10B981', transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>

        {priorities.map((priority, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: '14px 12px',
              marginTop: i > 0 ? 8 : 0,
              background: '#F8FAFC',
              borderRadius: 10,
              borderLeft: '3px solid #2563EB',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onClick={() => setExpandedPriority(expandedPriority === i ? null : i)}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
                {t(priority.titleKey)} <span style={{ color: '#10B981', fontWeight: 600 }}>{priority.impactKey}</span>
              </p>
              <p style={{ fontSize: 11, color: '#94A3B8', margin: '6px 0 0 0' }}>
                {t(priority.descKey)}
              </p>
              {expandedPriority === i && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #E5E7EB' }}>
                  <textarea
                    placeholder={t('prep.enterYourApproach')}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: 12,
                      border: '1px solid #E5E7EB',
                      borderRadius: 8,
                      fontFamily: 'inherit',
                      minHeight: 80,
                      resize: 'none',
                    }}
                  />
                </div>
              )}
            </div>
            <button
              style={{
                marginLeft: 12,
                padding: '6px 12px',
                fontSize: 11,
                fontWeight: 500,
                color: '#2563EB',
                background: '#EFF6FF',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {t(priority.actionKey)}
            </button>
          </div>
        ))}
      </div>

      {/* 3. INTERVIEW RISK PROFILE */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('prep.interviewRiskProfile')}
        </p>
        <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 20px 0' }}>
          {t('prep.riskProfileSubtitle')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Positive */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#10B981', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
              {t('prep.workingInYourFavor')}
            </p>
            {riskProfile
              .filter(r => r.type === 'positive')
              .map((item, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#10B981' }}>
                    {item.label}
                  </span>
                  <p style={{ fontSize: 12, color: '#0F172A', margin: '4px 0 0 0' }}>
                    {t(item.descKey)}
                  </p>
                </div>
              ))}
          </div>

          {/* Negative */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#EF4444', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
              {t('prep.areasToStrengthen')}
            </p>
            {riskProfile
              .filter(r => r.type === 'negative')
              .map((item, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#EF4444' }}>
                    {item.label}
                  </span>
                  <p style={{ fontSize: 12, color: '#0F172A', margin: '4px 0 0 0' }}>
                    {t(item.descKey)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* 4. HIGH-PROBABILITY QUESTIONS */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('prep.highProbabilityQuestions')}
        </p>

        {highProbabilityQuestions.map((q, i) => (
          <div
            key={i}
            style={{
              padding: '14px 12px',
              marginTop: i > 0 ? 8 : 0,
              background: '#F8FAFC',
              borderRadius: 10,
              borderLeft: '3px solid #2563EB',
            }}
          >
            <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: '0 0 8px 0' }}>
              {t(q.question)}
            </p>
            <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#64748B' }}>
              <span>{t('prep.likelihood')}: <span style={{ fontWeight: 600, color: '#0F172A' }}>{q.likelihood}</span></span>
              <span>{t('prep.readiness')}: <span style={{ fontWeight: 600, color: '#0F172A' }}>{q.readiness}</span></span>
              <span>{t('prep.risk')}: <span style={{ fontWeight: 600, color: q.risk === 'High' ? '#EF4444' : '#D97706' }}>{q.risk}</span></span>
            </div>
            <button
              style={{
                marginTop: 10,
                padding: '6px 12px',
                fontSize: 11,
                fontWeight: 500,
                color: '#2563EB',
                background: '#EFF6FF',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
              }}
            >
              {t('prep.practice')}
            </button>
          </div>
        ))}
      </div>

      {/* 5. NEXT STAGE READINESS LOCK */}
      <div style={{ ...card, padding: 20, display: 'flex', alignItems: 'center', gap: 16, background: '#F8FAFC', border: '1px solid #E5E7EB' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.6 }}>
          <path d="M12 1C6.48 1 2 5.48 2 11v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V11c0-5.52-4.48-10-10-10zm0 2c4.41 0 8 3.59 8 8v2H4v-2c0-4.41 3.59-8 8-8zm0 13c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2z" stroke="#64748B" strokeWidth="1" fill="#94A3B8"/>
        </svg>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: '#0F172A', margin: 0 }}>
            {t('prep.interviewSimulationLocks')}
          </p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: '4px 0 0 0' }}>
            {t('prep.reachReadinessToUnlock')}
          </p>
        </div>
        <button
          style={{
            padding: '8px 14px',
            fontSize: 11,
            fontWeight: 500,
            color: '#2563EB',
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: 6,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {t('prep.continuePrep')}
        </button>
      </div>

      {/* GOVERNMENT-GRADE FOOTER */}
      <div style={{ paddingTop: 8, borderTop: '1px solid #E5E7EB' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
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
              textDecoration: 'none',
            }}
          >
            {t('prep.exportPreparationLog')} →
          </button>
        </div>
      </div>
    </div>
  )
}
