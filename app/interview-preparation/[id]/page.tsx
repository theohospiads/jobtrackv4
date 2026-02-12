import { InterviewCalibrationEngine } from '@/components/interview-calibration-engine'

interface InterviewPreparationPageProps {
  params: {
    id: string
  }
}

export default function InterviewPreparationPage({ params }: InterviewPreparationPageProps) {
  // In a real app, this would fetch data from the database
  const applicationData = {
    applicationId: params.id,
    jobTitle: 'Senior Product Manager',
    companyName: 'TechCorp',
    currentApplicationStage: 2,
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', padding: '24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <InterviewCalibrationEngine
          applicationId={applicationData.applicationId}
          jobTitle={applicationData.jobTitle}
          companyName={applicationData.companyName}
          currentApplicationStage={applicationData.currentApplicationStage}
        />
      </div>
    </div>
  )
}
