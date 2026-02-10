'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'

interface InterviewStage {
  id: number
  status: 'completed' | 'current' | 'upcoming'
  notes: string
  interviewer?: string
  date?: string
}

interface InterviewTrackerProps {
  stages: InterviewStage[]
  onStageUpdate: (stages: InterviewStage[]) => void
}

export function InterviewStagesTracker({ stages, onStageUpdate }: InterviewTrackerProps) {
  const { t } = useLanguage()
  const [expandedStage, setExpandedStage] = useState<number | null>(null)
  const [editingStage, setEditingStage] = useState<number | null>(null)
  const maxStages = 5 // Maximum interview rounds allowed

  const handleAddNote = (stageId: number, note: string, interviewer: string, date: string) => {
    const updatedStages = stages.map((stage) =>
      stage.id === stageId ? { ...stage, notes: note, interviewer, date } : stage
    )
    onStageUpdate(updatedStages)
    setEditingStage(null)
  }

  const handleCompleteStage = (stageId: number) => {
    const stageIndex = stages.findIndex((s) => s.id === stageId)
    if (stageIndex === -1) return

    const updatedStages = stages.map((stage, idx) => {
      if (stage.id === stageId) return { ...stage, status: 'completed' }
      if (idx === stageIndex + 1) return { ...stage, status: 'current' }
      return stage
    })
    onStageUpdate(updatedStages)
    setExpandedStage(stageId + 1)
  }

  const handleAddStage = () => {
    if (stages.length >= maxStages) return
    const nextId = Math.max(...stages.map((s) => s.id), 0) + 1
    const updatedStages = [
      ...stages,
      { id: nextId, status: 'upcoming' as const, notes: '' },
    ]
    onStageUpdate(updatedStages)
  }

  const handleRemoveStage = (stageId: number) => {
    if (stages.length <= 1) return // Don't allow removing if only one stage left
    const updatedStages = stages.filter((stage) => stage.id !== stageId)
    onStageUpdate(updatedStages)
  }

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', margin: 0 }}>
          {t('actionDetail.interviewStages') || 'Interview Rounds'}
        </p>
        {stages.length < maxStages && (
          <button
            onClick={handleAddStage}
            style={{
              padding: '6px 12px',
              background: '#E0E7FF',
              color: '#2563EB',
              border: '1px solid #C7D2FE',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C7D2FE'
              e.currentTarget.style.borderColor = '#A5B4FC'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#E0E7FF'
              e.currentTarget.style.borderColor = '#C7D2FE'
            }}
          >
            <span style={{ fontSize: 14 }}>+</span> {t('actionDetail.addRound') || 'Add Round'}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {stages.map((stage) => (
          <div
            key={stage.id}
            style={{
              background: '#FFFFFF',
              border: stage.status === 'current' ? '2px solid #2563EB' : '1px solid #E5E7EB',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow:
                stage.status === 'current'
                  ? '0 4px 12px rgba(37, 99, 235, 0.15)'
                  : '0 2px 8px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Header */}
            <button
              onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
              style={{
                width: '100%',
                padding: '16px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = stage.status === 'current' ? 'rgba(37, 99, 235, 0.02)' : '#F9FAFB'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                {/* Status Indicator */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 600,
                    background:
                      stage.status === 'completed'
                        ? '#2563EB'
                        : stage.status === 'current'
                          ? '#2563EB'
                          : '#E5E7EB',
                    color:
                      stage.status === 'completed'
                        ? '#FFFFFF'
                        : stage.status === 'current'
                          ? '#FFFFFF'
                          : '#94A3B8',
                    flexShrink: 0,
                  }}
                >
                  {stage.status === 'completed' ? '✓' : stage.id}
                </div>

                {/* Stage Info */}
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', margin: 0 }}>
                    {t('actionDetail.interview')} {stage.id}
                  </p>
                  {stage.interviewer && (
                    <p style={{ fontSize: 12, color: '#64748B', margin: '4px 0 0 0' }}>
                      {t('actionDetail.with') || 'With'}: {stage.interviewer}
                    </p>
                  )}
                  {stage.notes && (
                    <p style={{ fontSize: 12, color: '#2563EB', margin: '4px 0 0 0', fontWeight: 500 }}>
                      {stage.notes.substring(0, 50)}{stage.notes.length > 50 ? '...' : ''}
                    </p>
                  )}
                </div>
              </div>

              {/* Expand Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  transform: expandedStage === stage.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: '#64748B',
                }}
              >
                <path d="M7 8L10 11L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Expanded Content */}
            {expandedStage === stage.id && (
              <div style={{ padding: '16px', borderTop: '1px solid #E5E7EB', background: '#F9FAFB' }}>
                {editingStage === stage.id ? (
                  <NoteEditor
                    stageId={stage.id}
                    initialNote={stage.notes}
                    initialInterviewer={stage.interviewer}
                    initialDate={stage.date}
                    onSave={(note, interviewer, date) => {
                      handleAddNote(stage.id, note, interviewer, date)
                    }}
                    onCancel={() => setEditingStage(null)}
                  />
                ) : (
                  <NoteDisplay
                    stageId={stage.id}
                    note={stage.notes}
                    interviewer={stage.interviewer}
                    date={stage.date}
                    status={stage.status}
                    onEdit={() => setEditingStage(stage.id)}
                    onComplete={() => handleCompleteStage(stage.id)}
                    onRemove={() => handleRemoveStage(stage.id)}
                    canRemove={stages.length > 1}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

interface NoteDisplayProps {
  stageId: number
  note: string
  interviewer?: string
  date?: string
  status: 'completed' | 'current' | 'upcoming'
  onEdit: () => void
  onComplete: () => void
  onRemove: () => void
  canRemove: boolean
}

function NoteDisplay({ stageId, note, interviewer, date, status, onEdit, onComplete, onRemove, canRemove }: NoteDisplayProps) {
  const { t } = useLanguage()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {note ? (
        <div
          style={{
            background: '#FFFFFF',
            borderLeft: '3px solid #2563EB',
            padding: '12px',
            borderRadius: 6,
            fontSize: 13,
            lineHeight: 1.6,
            color: '#0F172A',
            whiteSpace: 'pre-wrap',
          }}
        >
          {note}
        </div>
      ) : (
        <p style={{ fontSize: 13, color: '#94A3B8', fontStyle: 'italic', margin: 0 }}>
          {t('actionDetail.noNotesYet') || 'No notes yet. Add details about this interview to prepare better.'}
        </p>
      )}

      {(interviewer || date) && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            padding: '12px',
            background: '#F0F9FF',
            borderRadius: 6,
            fontSize: 12,
          }}
        >
          {interviewer && (
            <p style={{ margin: 0, color: '#0F172A' }}>
              <span style={{ fontWeight: 600 }}>Interviewer:</span> {interviewer}
            </p>
          )}
          {date && (
            <p style={{ margin: 0, color: '#0F172A' }}>
              <span style={{ fontWeight: 600 }}>Date:</span> {date}
            </p>
          )}
        </div>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={onEdit}
          style={{
            flex: 1,
            padding: '10px 14px',
            background: '#E0E7FF',
            color: '#2563EB',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C7D2FE'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#E0E7FF'
          }}
        >
          {note ? 'Edit Notes' : 'Add Notes'}
        </button>

        {status === 'current' && (
          <button
            onClick={onComplete}
            style={{
              flex: 1,
              padding: '10px 14px',
              background: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1E40AF'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2563EB'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            ✓ Mark Complete
          </button>
        )}

        {canRemove && (
          <button
            onClick={onRemove}
            title="Remove this interview round"
            style={{
              width: '40px',
              height: '40px',
              padding: '10px',
              background: '#FEE2E2',
              color: '#DC2626',
              border: '1px solid #FECACA',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FECACA'
              e.currentTarget.style.borderColor = '#F87171'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FEE2E2'
              e.currentTarget.style.borderColor = '#FECACA'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 4V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V4M1 4H15M6.5 7V13M9.5 7V13M3 4H13L12.5 1.5C12.4906 1.42481 12.4522 1.35774 12.3932 1.31224C12.3342 1.26675 12.2589 1.24442 12.1825 1.25H3.8175C3.74113 1.24442 3.66585 1.26675 3.60684 1.31224C3.54783 1.35774 3.50941 1.42481 3.5 1.5L3 4Z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

interface NoteEditorProps {
  stageId: number
  initialNote: string
  initialInterviewer?: string
  initialDate?: string
  onSave: (note: string, interviewer: string, date: string) => void
  onCancel: () => void
}

function NoteEditor({ stageId, initialNote, initialInterviewer, initialDate, onSave, onCancel }: NoteEditorProps) {
  const [note, setNote] = useState(initialNote)
  const [interviewer, setInterviewer] = useState(initialInterviewer || '')
  const [date, setDate] = useState(initialDate || '')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 6 }}>
          Interviewer Name
        </label>
        <input
          type="text"
          value={interviewer}
          onChange={(e) => setInterviewer(e.target.value)}
          placeholder="e.g., John Smith"
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #E5E7EB',
            borderRadius: 6,
            fontSize: 13,
            fontFamily: 'inherit',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 6 }}>
          Interview Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #E5E7EB',
            borderRadius: 6,
            fontSize: 13,
            fontFamily: 'inherit',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: '#0F172A', display: 'block', marginBottom: 6 }}>
          Interview Notes
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add key points to remember:
• Company values & culture
• Key skills they're looking for
• Technical questions to prepare
• Questions to ask them
• Follow-up items"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #E5E7EB',
            borderRadius: 6,
            fontSize: 13,
            fontFamily: 'inherit',
            minHeight: '140px',
            boxSizing: 'border-box',
            resize: 'vertical',
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => onSave(note, interviewer, date)}
          style={{
            flex: 1,
            padding: '10px 14px',
            background: '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E40AF'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2563EB'
          }}
        >
          Save Notes
        </button>
        <button
          onClick={onCancel}
          style={{
            flex: 1,
            padding: '10px 14px',
            background: '#F1F5F9',
            color: '#0F172A',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E2E8F0'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F1F5F9'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
