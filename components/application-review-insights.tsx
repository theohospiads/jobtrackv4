'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from './language-provider'

interface ApplicationReviewInsightsProps {
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

export function ApplicationReviewInsights({
  currentStage,
  jobTitle,
  companyName,
}: ApplicationReviewInsightsProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [showModel, setShowModel] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (currentStage !== 1) return null
  if (!mounted) return null

  const daysIn = 3
  const followUpDaysRemaining = 2
  const followUpReady = false

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* SECTION 1 -- ANALYSE EN COURS -- 3 compact cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {/* Card 1: Statut actuel */}
        <div style={{ ...card, padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
            {t('s2.currentStatus')}
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#2563EB', margin: '0 0 4px 0' }}>
            {t('s2.underReview')}
          </p>
          <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 8px 0' }}>
            {t('s2.day').replace('{n}', String(daysIn))}
          </p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: 0 }}>
            {t('s2.avgDecisionTime')}
          </p>
        </div>

        {/* Card 2: Position estimee */}
        <div style={{ ...card, padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
            {t('s2.estimatedPosition')}
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>
            {t('s2.wideShortlist')}
          </p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: '8px 0 0 0' }}>
            {t('s2.basedOnProfiles')}
          </p>
        </div>

        {/* Card 3: Intensite concurrentielle */}
        <div style={{ ...card, padding: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
            {t('s2.competitiveIntensity')}
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#D97706', margin: '0 0 4px 0' }}>
            {t('s2.moderate')}
          </p>
          <p style={{ fontSize: 11, color: '#94A3B8', margin: '8px 0 0 0' }}>
            {t('s2.estApplications')}
          </p>
        </div>
      </div>

      {/* SECTION 2 -- INSIGHT STRIP */}
      <div style={{ padding: '12px 16px', background: '#F8FAFC', borderRadius: 10, borderLeft: '3px solid #2563EB' }}>
        <p style={{ fontSize: 13, color: '#475569', margin: 0, fontWeight: 500 }}>
          {t('s2.insightStrip')}
        </p>
      </div>

      {/* SECTION 3 -- CE QUE LE RECRUTEUR EVALUE */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 24px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('s2.whatRecruiterEvaluates')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* Favorable signals */}
          <div style={{ padding: 20, background: '#FAFDFB', borderRadius: 12, border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                {t('s2.favorableSignals')}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { textKey: 's2.relevantExperience', levelKey: 's2.strong', levelColor: '#10B981', levelBg: '#F0FDF4' },
                { textKey: 's2.keysSkillsDetected', levelKey: 's2.correct', levelColor: '#2563EB', levelBg: '#EFF6FF' },
                { textKey: 's2.coherentEducation', levelKey: 's2.neutral', levelColor: '#64748B', levelBg: '#F8FAFC' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 13, color: '#374151' }}>{t(s.textKey)}</span>
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: s.levelColor, background: s.levelBg,
                    padding: '2px 8px', borderRadius: 6,
                  }}>
                    {t(s.levelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sensitive points */}
          <div style={{ padding: 20, background: '#FFFBFB', borderRadius: 12, border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
              <p style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                {t('s2.sensitivePoints')}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { textKey: 's2.noInternalReferral', impactKey: 's2.moderate', impactColor: '#D97706', impactBg: '#FFFBEB' },
                { textKey: 's2.limitedMeasurableImpact', impactKey: 's2.moderate', impactColor: '#D97706', impactBg: '#FFFBEB' },
                { textKey: 's2.moderateSectorExperience', impactKey: 's2.low', impactColor: '#64748B', impactBg: '#F8FAFC' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#CBD5E1', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: '#374151' }}>{t(s.textKey)}</span>
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: s.impactColor, background: s.impactBg,
                    padding: '2px 8px', borderRadius: 6, whiteSpace: 'nowrap',
                  }}>
                    {t('s2.potentialImpact')}: {t(s.impactKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 -- POSITION DANS LE TRI */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 24px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('s2.positionInProcess')}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {/* Funnel bars */}
          {[
            { label: t('s2.allCandidates'), pct: '100%', width: '100%', bg: '#F1F5F9', color: '#64748B', active: false },
            { label: t('s2.shortlist') + ' (~35%)', pct: '35%', width: '55%', bg: '#EFF6FF', color: '#2563EB', active: true },
            { label: t('s2.interview') + ' (~10%)', pct: '10%', width: '25%', bg: '#F8FAFC', color: '#94A3B8', active: false },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: row.width, minWidth: 80,
                padding: '10px 14px',
                background: row.bg,
                borderRadius: 8,
                border: row.active ? '1px solid #BFDBFE' : '1px solid transparent',
                transition: 'all 0.3s',
              }}>
                <p style={{ fontSize: 12, fontWeight: row.active ? 600 : 400, color: row.color, margin: 0 }}>
                  {row.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '10px 14px', background: '#F8FAFC', borderRadius: 8, borderLeft: '2px solid #2563EB' }}>
          <p style={{ fontSize: 12, color: '#475569', margin: 0, fontWeight: 500 }}>
            {t('s2.positionEstimate')}
          </p>
        </div>
      </div>

      {/* SECTION 5 -- TIMING DE DECISION */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('s2.decisionTiming')}
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            {/* Track */}
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#E5E7EB', transform: 'translateY(-50%)' }} />
            {/* Critical window band */}
            <div style={{ position: 'absolute', top: '50%', left: `${(4 / 7) * 100}%`, width: `${(2 / 7) * 100}%`, height: 20, background: 'rgba(251, 191, 36, 0.1)', transform: 'translateY(-50%)', borderRadius: 6 }} />

            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: i === daysIn ? 14 : 6,
                  height: i === daysIn ? 14 : 6,
                  borderRadius: '50%',
                  background: i === daysIn ? '#2563EB' : i < daysIn ? '#94A3B8' : (i >= 4 && i <= 6) ? '#F59E0B' : '#D1D5DB',
                  border: i === daysIn ? '3px solid rgba(37, 99, 235, 0.2)' : 'none',
                  boxShadow: i === daysIn ? '0 0 0 4px rgba(37, 99, 235, 0.08)' : 'none',
                  opacity: i < daysIn ? 0.4 : 1,
                }} />
              </div>
            ))}
          </div>

          {/* Labels */}
          <div style={{ display: 'flex', marginTop: 10 }}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <p style={{
                  fontSize: 10, margin: 0,
                  color: i === daysIn ? '#2563EB' : '#CBD5E1',
                  fontWeight: i === daysIn ? 600 : 400,
                }}>{i}</p>
              </div>
            ))}
          </div>

          {/* Annotations */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, padding: '0 4px' }}>
            <p style={{ fontSize: 10, color: '#2563EB', fontWeight: 500, margin: 0 }}>
              {t('s2.today')}: {t('s2.day').replace('{n}', String(daysIn))}
            </p>
            <p style={{ fontSize: 10, color: '#D97706', margin: 0 }}>
              {t('s2.criticalWindow')} (4-6)
            </p>
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
          {t('s2.probableDecision')}
        </p>
      </div>

      {/* SECTION 6 -- LECTURE DU SILENCE */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('s2.whatSilenceMeans')}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            t('s2.silence1'),
            t('s2.silence2'),
            t('s2.silence3'),
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#CBD5E1', flexShrink: 0, marginTop: 6 }} />
              <p style={{ fontSize: 13, color: '#374151', margin: 0, lineHeight: '1.5' }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7 -- SCENARIOS PROBABLES */}
      <div style={{ ...card, padding: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {t('s2.probableScenarios')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { titleKey: 's2.interviewLikely', descKey: 's2.interviewLikelyDesc', levelKey: 's2.moderate', levelColor: '#D97706', levelBg: '#FFFBEB', borderColor: '#FDE68A' },
            { titleKey: 's2.deferredDecision', descKey: 's2.deferredDecisionDesc', levelKey: 's2.low', levelColor: '#64748B', levelBg: '#F8FAFC', borderColor: '#E5E7EB' },
            { titleKey: 's2.silentRejection', descKey: 's2.silentRejectionDesc', levelKey: 's2.low', levelColor: '#64748B', levelBg: '#F8FAFC', borderColor: '#E5E7EB' },
          ].map((sc, i) => (
            <div key={i} style={{
              padding: 16, background: '#FFFFFF', borderRadius: 12,
              border: `1px solid ${sc.borderColor}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                  {t(sc.titleKey)}
                </p>
              </div>
              <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 12px 0' }}>
                {t(sc.descKey)}
              </p>
              <span style={{
                fontSize: 10, fontWeight: 600, color: sc.levelColor, background: sc.levelBg,
                padding: '2px 8px', borderRadius: 6,
              }}>
                {t(sc.levelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8 -- MODULE DE RELANCE */}
      <div style={{
        ...card,
        padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: followUpReady ? '#2563EB' : '#FFFFFF',
        cursor: followUpReady ? 'pointer' : 'default',
      }}>
        {followUpReady ? (
          <>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
              {t('s2.prepareFollowUp')}
            </p>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: '#F8FAFC', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 7V5C12 2.79 10.21 1 8 1S4 2.79 4 5V7M3 7H13C13.55 7 14 7.45 14 8V14C14 14.55 13.55 15 13 15H3C2.45 15 2 14.55 2 14V8C2 7.45 2.45 7 3 7Z" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                  {t('s2.optimalFollowUpIn').replace('{days}', String(followUpDaysRemaining))}
                </p>
                <p style={{ fontSize: 12, color: '#94A3B8', margin: '2px 0 0 0' }}>
                  {t('s2.recommendedMoment')}
                </p>
              </div>
            </div>
            <div style={{
              background: '#F1F5F9', borderRadius: 8,
              padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#64748B' }}>{followUpDaysRemaining}</span>
              <span style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500 }}>jours</span>
            </div>
          </>
        )}
      </div>

      {/* SECTION 9 -- TRANSPARENCE DU MODELE */}
      <div style={{ padding: '0 4px' }}>
        <button
          type="button"
          onClick={() => setShowModel(!showModel)}
          style={{
            background: 'none', border: 'none', padding: 0,
            cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: '#CBD5E1', margin: 0 }}>
            {t('s2.modelTransparency')}
          </p>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
            style={{ transition: 'transform 0.2s', transform: showModel ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="M4 6L8 10L12 6" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {showModel && (
          <div style={{ marginTop: 12 }}>
            <p style={{ fontSize: 12, color: '#94A3B8', margin: '0 0 4px 0' }}>
              {t('s2.modelDesc')}
            </p>
            <p style={{ fontSize: 11, color: '#CBD5E1', margin: 0 }}>
              {t('s2.lastUpdate')}
            </p>
          </div>
        )}
      </div>

    </div>
  )
}
