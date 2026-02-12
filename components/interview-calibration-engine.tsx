'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'
import { InterviewCalibrationLocked } from './interview-calibration-locked'
import { InterviewCalibrationFlow } from './interview-calibration-flow'
import { InterviewPreparationDashboard } from './interview-preparation-dashboard'
import { TrainingMode } from './training-mode'

export enum InterviewPrepState {
  CALIBRATION_REQUIRED = 'CALIBRATION_REQUIRED',
  CALIBRATING = 'CALIBRATING',
  PREPARATION_UNLOCKED = 'PREPARATION_UNLOCKED',
  TRAINING_MODE = 'TRAINING_MODE',
  COMPLETED = 'COMPLETED',
}

export interface CalibrationResponse {
  question: string
  userAnswer: string
  scores: {
    ownershipClarity: number
    measurableImpact: number
    structure: number
    relevance: number
  }
  feedback: string
}

export interface InterviewPrepState_Data {
  calibrationComplete: boolean
  lastUpdated: Date
  calibrationResponses: CalibrationResponse[]
  interviewStrengths: { dimension: string; level: string; risk: string }[]
  masteryScores: Record<string, number>
}

interface InterviewCalibrationEngineProps {
  applicationId: string
  jobTitle: string
  companyName: string
  currentApplicationStage: number
}

export function InterviewCalibrationEngine({
  applicationId,
  jobTitle,
  companyName,
  currentApplicationStage,
}: InterviewCalibrationEngineProps) {
  const { t, language } = useLanguage()
  const [state, setState] = useState<InterviewPrepState>(InterviewPrepState.CALIBRATION_REQUIRED)
  const [prepData, setPrepData] = useState<InterviewPrepState_Data>({
    calibrationComplete: false,
    lastUpdated: new Date(),
    calibrationResponses: [],
    interviewStrengths: [],
    masteryScores: {},
  })

  const handleStartCalibration = () => {
    setState(InterviewPrepState.CALIBRATING)
  }

  const handleCalibrationComplete = (responses: CalibrationResponse[], strengths: any[]) => {
    setPrepData(prev => ({
      ...prev,
      calibrationComplete: true,
      lastUpdated: new Date(),
      calibrationResponses: responses,
      interviewStrengths: strengths,
    }))
    setState(InterviewPrepState.PREPARATION_UNLOCKED)
  }

  const handleStartTraining = () => {
    setState(InterviewPrepState.TRAINING_MODE)
  }

  const handleTrainingComplete = () => {
    setState(InterviewPrepState.PREPARATION_UNLOCKED)
  }

  const handleBackToDashboard = () => {
    setState(InterviewPrepState.PREPARATION_UNLOCKED)
  }

  // Render different states
  if (state === InterviewPrepState.CALIBRATION_REQUIRED) {
    return (
      <InterviewCalibrationLocked
        jobTitle={jobTitle}
        companyName={companyName}
        onStartCalibration={handleStartCalibration}
      />
    )
  }

  if (state === InterviewPrepState.CALIBRATING) {
    return (
      <InterviewCalibrationFlow
        jobTitle={jobTitle}
        companyName={companyName}
        onComplete={handleCalibrationComplete}
      />
    )
  }

  if (state === InterviewPrepState.TRAINING_MODE) {
    return (
      <TrainingMode
        jobTitle={jobTitle}
        companyName={companyName}
        prepData={prepData}
        onComplete={handleTrainingComplete}
        onBack={handleBackToDashboard}
      />
    )
  }

  if (state === InterviewPrepState.PREPARATION_UNLOCKED) {
    return (
      <InterviewPreparationDashboard
        jobTitle={jobTitle}
        companyName={companyName}
        applicationStage={currentApplicationStage}
        prepData={prepData}
        onStartTraining={handleStartTraining}
      />
    )
  }

  return null
}
