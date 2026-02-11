'use client'

import { useLanguage } from '@/components/language-provider'
import { useState } from 'react'

interface InterviewIntelligenceProps {
  currentStage: number
  stageName: string
  jobTitle: string
  companyName: string
  jobDescription?: string
  interviewCount?: number
}

export function InterviewIntelligenceHub({
  currentStage,
  stageName,
  jobTitle,
  companyName,
  jobDescription = '',
  interviewCount = 1,
}: InterviewIntelligenceProps) {
  const { t } = useLanguage()
  const [expandedSection, setExpandedSection] = useState<string | null>('overview')

  const isInterviewStage = stageName?.toLowerCase().includes('interview') || stageName?.toLowerCase().includes('screening')

  if (!isInterviewStage) return null

  const sections = [
    {
      id: 'overview',
      title: 'Interview Overview',
      icon: '📋',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 4px 0', fontWeight: 500 }}>Interview Round</p>
              <p style={{ fontSize: 15, color: '#0F172A', margin: 0, fontWeight: 600 }}>{interviewCount}</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 4px 0', fontWeight: 500 }}>Expected Duration</p>
              <p style={{ fontSize: 15, color: '#0F172A', margin: 0, fontWeight: 600 }}>45-60 mins</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 4px 0', fontWeight: 500 }}>Format</p>
              <p style={{ fontSize: 15, color: '#0F172A', margin: 0, fontWeight: 600 }}>Video Call</p>
            </div>
          </div>
          <div style={{ background: '#F0F9FF', padding: 12, borderRadius: 8, borderLeft: '3px solid #0284C7' }}>
            <p style={{ fontSize: 13, color: '#0C4A6E', margin: 0, lineHeight: 1.5 }}>
              This interview will likely focus on your experience with {jobTitle} and how you align with {companyName}'s values.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'preparation',
      title: 'Pre-Interview Checklist',
      icon: '✅',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Research company mission, values, and recent news',
            'Review the job description and map your relevant experience',
            'Prepare 3-4 concrete examples using the STAR method',
            'Have 3-5 thoughtful questions about the role and team',
            'Test your audio, video, and internet connection',
            'Prepare your workspace and ensure professional background',
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <input
                type="checkbox"
                style={{
                  marginTop: 3,
                  width: 18,
                  height: 18,
                  cursor: 'pointer',
                  accentColor: '#2563EB',
                }}
              />
              <label style={{ fontSize: 13, color: '#475569', cursor: 'pointer', flex: 1 }}>{item}</label>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'questions',
      title: 'Expected Questions',
      icon: '❓',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { q: 'Tell me about yourself', hint: 'Tailor to the role, highlight relevant experience' },
            { q: 'Why are you interested in this role?', hint: 'Connect your skills to their needs' },
            { q: 'Describe a challenge you overcame', hint: 'Use STAR: Situation, Task, Action, Result' },
            { q: 'How do you handle conflict?', hint: 'Show maturity and collaboration skills' },
            { q: 'Where do you see yourself in 5 years?', hint: 'Align with growth at their company' },
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: '2px solid #E5E7EB', paddingLeft: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', margin: '0 0 4px 0' }}>{item.q}</p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>💡 {item.hint}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'yourquestions',
      title: 'Questions to Ask Them',
      icon: '🎯',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'What does a typical day look like in this role?',
            'How do you measure success for this position?',
            'What are the biggest challenges the team is currently facing?',
            'How does the team collaborate and communicate?',
            'What opportunities are there for growth and learning?',
            'What is the team culture like?',
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: '#2563EB', fontWeight: 600, fontSize: 14, marginTop: 1 }}>•</span>
              <p style={{ fontSize: 13, color: '#475569', margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'during',
      title: 'During the Interview',
      icon: '🎬',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#FEF3C7', padding: 12, borderRadius: 8, borderLeft: '3px solid #F59E0B' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#92400E', margin: '0 0 6px 0' }}>Pro Tips:</p>
            <ul style={{ fontSize: 12, color: '#78350F', margin: 0, paddingLeft: 16, lineHeight: 1.6 }}>
              <li>Smile and maintain eye contact (even on video)</li>
              <li>Listen carefully before answering</li>
              <li>Speak clearly and avoid filler words ("um", "uh")</li>
              <li>Take notes to reference later</li>
              <li>Show enthusiasm for the role and company</li>
              <li>Be yourself - authenticity matters</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'after',
      title: 'Post-Interview Actions',
      icon: '📧',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#F0FDF4', padding: 12, borderRadius: 8, borderLeft: '3px solid #16A34A' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#15803D', margin: '0 0 8px 0' }}>Within 24 hours:</p>
            <ol style={{ fontSize: 12, color: '#166534', margin: 0, paddingLeft: 16, lineHeight: 1.6 }}>
              <li>Send a thank you email to each interviewer</li>
              <li>Reference specific points from your conversation</li>
              <li>Reiterate your interest in the role</li>
              <li>Keep it brief (3-4 sentences)</li>
            </ol>
          </div>
          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 12 }}>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Expected timeline to hear back: 3-5 business days</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div
      style={{
        marginBottom: 32,
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: '0 0 4px 0' }}>Interview Intelligence Hub</p>
        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Everything you need to ace this interview</p>
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              style={{
                width: '100%',
                padding: 14,
                background: expandedSection === section.id ? '#F0F9FF' : '#F8FAFC',
                border: `1px solid ${expandedSection === section.id ? '#BFDBFE' : '#E5E7EB'}`,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F0F9FF'
                e.currentTarget.style.borderColor = '#BFDBFE'
              }}
              onMouseLeave={(e) => {
                if (expandedSection !== section.id) {
                  e.currentTarget.style.background = '#F8FAFC'
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 18 }}>{section.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{section.title}</span>
              </div>
              <span
                style={{
                  fontSize: 14,
                  color: '#64748B',
                  transform: expandedSection === section.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                }}
              >
                ▼
              </span>
            </button>

            {/* Content */}
            {expandedSection === section.id && (
              <div style={{ padding: '16px 14px', background: '#FAFBFC', borderRadius: '0 0 8px 8px', borderLeft: '1px solid #BFDBFE', borderRight: '1px solid #BFDBFE', borderBottom: '1px solid #BFDBFE' }}>
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
