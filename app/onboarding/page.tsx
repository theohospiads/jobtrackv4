'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { useLanguage } from '@/components/language-provider'

type ProfileType = 'student' | 'employed' | 'job-seeker' | 'career-change' | null

type Question = {
  id: string
  questionKey: string
  subtitleKey: string
  type: 'choice' | 'input' | 'location'
  options?: { labelKey: string; value: string; hintKey?: string }[]
  placeholderKey?: string
  recommended?: string
}

export default function OnboardingPage() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const { t } = useLanguage()
  const [profileType, setProfileType] = useState<ProfileType>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setFadeIn(true)
  }, [])

  const PROFILE_SELECTION: Question = {
    id: 'profile_type',
    questionKey: 'onboarding.whatDescribes',
    subtitleKey: 'onboarding.customizeSearch',
    type: 'choice',
    options: [
      { labelKey: 'onboarding.student', value: 'student', hintKey: 'onboarding.studentHint' },
      { labelKey: 'onboarding.employed', value: 'employed', hintKey: 'onboarding.employedHint' },
      { labelKey: 'onboarding.jobSeeker', value: 'job-seeker', hintKey: 'onboarding.jobSeekerHint' },
      { labelKey: 'onboarding.careerChange', value: 'career-change', hintKey: 'onboarding.careerChangeHint' },
    ],
  }

  const ADAPTIVE_QUESTIONS: Record<string, Question[]> = {
    student: [
      {
        id: 'field_of_study',
        questionKey: 'onboarding.fieldOfStudy',
        subtitleKey: 'onboarding.fieldOfStudySub',
        type: 'input',
        placeholderKey: 'onboarding.fieldPlaceholder',
      },
      {
        id: 'graduation',
        questionKey: 'onboarding.graduation',
        subtitleKey: 'onboarding.graduationSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.thisYear', value: 'this-year' },
          { labelKey: 'onboarding.nextYear', value: 'next-year' },
          { labelKey: 'onboarding.later', value: 'later' },
        ],
        recommended: 'this-year',
      },
      {
        id: 'target_role',
        questionKey: 'onboarding.targetRole',
        subtitleKey: 'onboarding.targetRoleSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.internship', value: 'internship' },
          { labelKey: 'onboarding.entryLevel', value: 'entry-level' },
          { labelKey: 'onboarding.bothOptions', value: 'both' },
        ],
        recommended: 'both',
      },
      {
        id: 'work_location',
        questionKey: 'onboarding.workLocation',
        subtitleKey: 'onboarding.workLocationSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.remoteOnly', value: 'remote' },
          { labelKey: 'onboarding.onSite', value: 'on-site' },
          { labelKey: 'onboarding.hybridFlexible', value: 'hybrid' },
        ],
        recommended: 'remote',
      },
      {
        id: 'contract_type',
        questionKey: 'onboarding.contractType',
        subtitleKey: 'onboarding.contractTypeSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.contractInternship', value: 'internship', hintKey: 'onboarding.contractInternshipHint' },
          { labelKey: 'onboarding.contractCDD', value: 'cdd', hintKey: 'onboarding.contractCDDHint' },
          { labelKey: 'onboarding.contractCDI', value: 'cdi', hintKey: 'onboarding.contractCDIHint' },
          { labelKey: 'onboarding.contractAny', value: 'any', hintKey: 'onboarding.contractAnyHint' },
        ],
      },
      {
        id: 'job_location',
        questionKey: 'onboarding.jobLocation',
        subtitleKey: 'onboarding.jobLocationSub',
        type: 'location',
      },
    ],
    employed: [
      {
        id: 'current_role',
        questionKey: 'onboarding.currentRole',
        subtitleKey: 'onboarding.currentRoleSub',
        type: 'input',
        placeholderKey: 'onboarding.currentRolePlaceholder',
      },
      {
        id: 'experience',
        questionKey: 'onboarding.experience',
        subtitleKey: 'onboarding.experienceSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.exp0_2', value: '0-2' },
          { labelKey: 'onboarding.exp2_5', value: '2-5' },
          { labelKey: 'onboarding.exp5_10', value: '5-10' },
          { labelKey: 'onboarding.exp10plus', value: '10+' },
        ],
      },
      {
        id: 'looking_for',
        questionKey: 'onboarding.lookingFor',
        subtitleKey: 'onboarding.lookingForSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.similarRole', value: 'similar' },
          { labelKey: 'onboarding.growthOpp', value: 'growth' },
          { labelKey: 'onboarding.careerPivot', value: 'change' },
        ],
        recommended: 'growth',
      },
      {
        id: 'work_location',
        questionKey: 'onboarding.workLocationPref',
        subtitleKey: 'onboarding.workLocationPrefSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.remoteOnly', value: 'remote' },
          { labelKey: 'onboarding.onSite', value: 'on-site' },
          { labelKey: 'onboarding.flexible', value: 'flexible' },
        ],
        recommended: 'remote',
      },
      {
        id: 'salary_expectations',
        questionKey: 'onboarding.salary',
        subtitleKey: 'onboarding.salarySub',
        type: 'choice',
        options: [
          { labelKey: '$80k - $120k', value: '80-120' },
          { labelKey: '$120k - $180k', value: '120-180' },
          { labelKey: '$180k - $250k', value: '180-250' },
          { labelKey: '$250k+', value: '250+' },
        ],
      },
      {
        id: 'contract_type',
        questionKey: 'onboarding.contractType',
        subtitleKey: 'onboarding.contractTypeSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.contractCDI', value: 'cdi', hintKey: 'onboarding.contractCDIHint' },
          { labelKey: 'onboarding.contractCDD', value: 'cdd', hintKey: 'onboarding.contractCDDHint' },
          { labelKey: 'onboarding.contractFreelance', value: 'freelance', hintKey: 'onboarding.contractFreelanceHint' },
          { labelKey: 'onboarding.contractAny', value: 'any', hintKey: 'onboarding.contractAnyHint' },
        ],
      },
      {
        id: 'job_location',
        questionKey: 'onboarding.jobLocation',
        subtitleKey: 'onboarding.jobLocationSub',
        type: 'location',
      },
    ],
    'job-seeker': [
      {
        id: 'target_role',
        questionKey: 'onboarding.targetRoleSeeker',
        subtitleKey: 'onboarding.targetRoleSeekerSub',
        type: 'input',
        placeholderKey: 'onboarding.targetRoleSeekerPlaceholder',
      },
      {
        id: 'years_experience',
        questionKey: 'onboarding.yearsExperience',
        subtitleKey: 'onboarding.yearsExperienceSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.exp0_2', value: '0-2' },
          { labelKey: 'onboarding.exp2_5', value: '2-5' },
          { labelKey: 'onboarding.exp5_10', value: '5-10' },
          { labelKey: 'onboarding.exp10plus', value: '10+' },
        ],
      },
      {
        id: 'urgency',
        questionKey: 'onboarding.urgency',
        subtitleKey: 'onboarding.urgencySub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.urgent', value: 'urgent' },
          { labelKey: 'onboarding.soon', value: 'soon' },
          { labelKey: 'onboarding.notUrgent', value: 'flexible' },
        ],
        recommended: 'soon',
      },
      {
        id: 'work_location',
        questionKey: 'onboarding.whereWork',
        subtitleKey: 'onboarding.whereWorkSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.remoteOnly', value: 'remote' },
          { labelKey: 'onboarding.onSite', value: 'on-site' },
          { labelKey: 'onboarding.flexible', value: 'flexible' },
        ],
        recommended: 'remote',
      },
      {
        id: 'contract_type',
        questionKey: 'onboarding.contractType',
        subtitleKey: 'onboarding.contractTypeSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.contractCDI', value: 'cdi', hintKey: 'onboarding.contractCDIHint' },
          { labelKey: 'onboarding.contractCDD', value: 'cdd', hintKey: 'onboarding.contractCDDHint' },
          { labelKey: 'onboarding.contractFreelance', value: 'freelance', hintKey: 'onboarding.contractFreelanceHint' },
          { labelKey: 'onboarding.contractAny', value: 'any', hintKey: 'onboarding.contractAnyHint' },
        ],
      },
      {
        id: 'job_location',
        questionKey: 'onboarding.jobLocation',
        subtitleKey: 'onboarding.jobLocationSub',
        type: 'location',
      },
    ],
    'career-change': [
      {
        id: 'previous_role',
        questionKey: 'onboarding.previousRole',
        subtitleKey: 'onboarding.previousRoleSub',
        type: 'input',
        placeholderKey: 'onboarding.previousRolePlaceholder',
      },
      {
        id: 'target_role',
        questionKey: 'onboarding.newTargetRole',
        subtitleKey: 'onboarding.newTargetRoleSub',
        type: 'input',
        placeholderKey: 'onboarding.newTargetRolePlaceholder',
      },
      {
        id: 'relevant_experience',
        questionKey: 'onboarding.relevantExp',
        subtitleKey: 'onboarding.relevantExpSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.noExperience', value: 'none' },
          { labelKey: 'onboarding.someExperience', value: 'some' },
          { labelKey: 'onboarding.significantExperience', value: 'significant' },
        ],
      },
      {
        id: 'work_location',
        questionKey: 'onboarding.workLocationPref',
        subtitleKey: 'onboarding.workLocationPrefSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.remoteOnly', value: 'remote' },
          { labelKey: 'onboarding.onSite', value: 'on-site' },
          { labelKey: 'onboarding.flexible', value: 'flexible' },
        ],
        recommended: 'remote',
      },
      {
        id: 'contract_type',
        questionKey: 'onboarding.contractType',
        subtitleKey: 'onboarding.contractTypeSub',
        type: 'choice',
        options: [
          { labelKey: 'onboarding.contractCDI', value: 'cdi', hintKey: 'onboarding.contractCDIHint' },
          { labelKey: 'onboarding.contractCDD', value: 'cdd', hintKey: 'onboarding.contractCDDHint' },
          { labelKey: 'onboarding.contractFreelance', value: 'freelance', hintKey: 'onboarding.contractFreelanceHint' },
          { labelKey: 'onboarding.contractAny', value: 'any', hintKey: 'onboarding.contractAnyHint' },
        ],
      },
      {
        id: 'job_location',
        questionKey: 'onboarding.jobLocation',
        subtitleKey: 'onboarding.jobLocationSub',
        type: 'location',
      },
    ],
  }

  // Get questions for current profile type
  const adaptiveQuestions = profileType ? ADAPTIVE_QUESTIONS[profileType] : []
  const isProfileSelectionStep = profileType === null
  const question = isProfileSelectionStep ? PROFILE_SELECTION : adaptiveQuestions[currentStep]

  // Calculate total steps correctly
  const getExpectedSteps = () => {
    if (profileType === null) return 5
    return adaptiveQuestions.length
  }
  
  const totalSteps = 1 + getExpectedSteps()
  const displayStep = profileType === null ? 1 : 1 + currentStep + 1
  const progress = (displayStep / totalSteps) * 100

  const stepText = t("onboarding.step")
    .replace("{current}", String(displayStep))
    .replace("{total}", String(totalSteps))

  const handleProfileSelect = (value: string) => {
    setFadeIn(false)
    setTimeout(() => {
      setProfileType(value as ProfileType)
      setCurrentStep(0)
      setFadeIn(true)
    }, 200)
  }

  const handleChoice = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
    handleNext()
  }

  const handleInputChange = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  const handleNext = () => {
    if (currentStep < adaptiveQuestions.length - 1) {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setFadeIn(true)
      }, 200)
    } else {
      handleComplete()
    }
  }

  const handleComplete = async () => {
    setIsSubmitting(true)
    const finalAnswers = { ...answers, profile_type: profileType as string }
    updateProfile(finalAnswers)
    setTimeout(() => {
      router.push('/connect-accounts')
    }, 500)
  }

  const canProceed = question.type === 'choice' || question.type === 'location' || (answers[question.id]?.trim().length ?? 0) > 0

  // Helper to resolve label - if key exists in translations use t(), otherwise show raw
  const resolveLabel = (key: string) => {
    const translated = t(key)
    return translated !== key ? translated : key
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          opacity: fadeIn ? 1 : 0.5,
          transition: 'opacity 200ms ease',
        }}
      >
        {/* Progress Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              width: '100%',
              height: '4px',
              background: '#E5E7EB',
              borderRadius: '100px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #2563EB 0%, #1E40AF 100%)',
                transition: 'width 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                borderRadius: '100px',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#64748B',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {stepText}
            </p>
          </div>
        </div>

        {/* Question Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#0F172A',
              margin: 0,
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
            }}
          >
            {t(question.questionKey)}
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: 0,
              lineHeight: '1.6',
              fontWeight: '400',
            }}
          >
            {t(question.subtitleKey)}
          </p>
        </div>

        {/* Input / Choices */}
        {question.type === 'input' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="text"
              value={answers[question.id] || ''}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={question.placeholderKey ? t(question.placeholderKey) : ''}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && canProceed) {
                  handleNext()
                }
              }}
              autoFocus
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '2px solid #E5E7EB',
                background: '#FFFFFF',
                fontSize: '15px',
                color: '#0F172A',
                fontFamily: 'inherit',
                transition: 'all 200ms ease',
                outline: 'none',
                boxShadow: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#2563EB'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <button
              onClick={handleNext}
              disabled={!canProceed || isSubmitting}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                background: canProceed ? '#2563EB' : '#E5E7EB',
                color: canProceed ? 'white' : '#94A3B8',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                cursor: canProceed && !isSubmitting ? 'pointer' : 'not-allowed',
                transition: 'all 200ms ease',
                letterSpacing: '-0.2px',
                boxShadow: canProceed && !isSubmitting ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (canProceed && !isSubmitting) {
                  e.currentTarget.style.background = '#1E40AF'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }
              }}
              onMouseLeave={(e) => {
                if (canProceed && !isSubmitting) {
                  e.currentTarget.style.background = '#2563EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                }
              }}
            >
              {currentStep === adaptiveQuestions.length - 1
                ? isSubmitting
                  ? t('onboarding.settingUp')
                  : t('onboarding.completeSetup')
                : t('onboarding.continue')}
            </button>
          </div>
        ) : question.type === 'location' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* City/Location Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F172A' }}>
                {t('onboarding.jobLocationPlaceholder')}
              </label>
              <input
                type="text"
                value={answers[`${question.id}_city`] || ''}
                onChange={(e) => setAnswers({ ...answers, [`${question.id}_city`]: e.target.value })}
                placeholder={t('onboarding.jobLocationPlaceholder')}
                autoFocus
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '2px solid #E5E7EB',
                  background: '#FFFFFF',
                  fontSize: '14px',
                  color: '#0F172A',
                  fontFamily: 'inherit',
                  transition: 'all 200ms ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#2563EB'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Distance Slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F172A' }}>
                  {t('onboarding.jobLocationRadius')}
                </label>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#2563EB' }}>
                  {t('onboarding.jobLocationRadiusKm').replace('{km}', (answers[`${question.id}_radius`] || '50').toString())}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                value={answers[`${question.id}_radius`] || '50'}
                onChange={(e) => setAnswers({ ...answers, [`${question.id}_radius`]: e.target.value })}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: '#E5E7EB',
                  outline: 'none',
                  cursor: 'pointer',
                  accentColor: '#2563EB',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94A3B8' }}>
                <span>1 km</span>
                <span>200 km</span>
              </div>
            </div>

            {/* Remote Toggle */}
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                background: '#FAFBFC',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F1F5F9'
                e.currentTarget.style.borderColor = '#CBD5E1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FAFBFC'
                e.currentTarget.style.borderColor = '#E5E7EB'
              }}
            >
              <input
                type="checkbox"
                checked={answers[`${question.id}_remote`] === 'true'}
                onChange={(e) =>
                  setAnswers({ ...answers, [`${question.id}_remote`]: e.target.checked ? 'true' : 'false' })
                }
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: '#2563EB',
                }}
              />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#0F172A' }}>
                {t('onboarding.jobLocationRemoteOK')}
              </span>
            </label>

            {/* Continue Button */}
            <button
              onClick={handleNext}
              disabled={!answers[`${question.id}_city`]?.trim() || isSubmitting}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                background: answers[`${question.id}_city`]?.trim() ? '#2563EB' : '#E5E7EB',
                color: answers[`${question.id}_city`]?.trim() ? 'white' : '#94A3B8',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                cursor: answers[`${question.id}_city`]?.trim() && !isSubmitting ? 'pointer' : 'not-allowed',
                transition: 'all 200ms ease',
                letterSpacing: '-0.2px',
                boxShadow: answers[`${question.id}_city`]?.trim() && !isSubmitting ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (answers[`${question.id}_city`]?.trim() && !isSubmitting) {
                  e.currentTarget.style.background = '#1E40AF'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }
              }}
              onMouseLeave={(e) => {
                if (answers[`${question.id}_city`]?.trim() && !isSubmitting) {
                  e.currentTarget.style.background = '#2563EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                }
              }}
            >
              {currentStep === adaptiveQuestions.length - 1
                ? isSubmitting
                  ? t('onboarding.settingUp')
                  : t('onboarding.completeSetup')
                : t('onboarding.continue')}
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {question.options?.map((option, idx) => {
              const isSelected = answers[question.id] === option.value
              const isOdd = idx % 2 === 1
              const altBg = isOdd ? '#EFF6FF' : '#FAFBFC'
              const defaultBg = isSelected ? '#DBEAFE' : altBg
              const defaultBorder = isSelected ? '#2563EB' : '#E5E7EB'

              return (
                <button
                  key={option.value}
                  suppressHydrationWarning
                  onClick={() =>
                    isProfileSelectionStep
                      ? handleProfileSelect(option.value)
                      : handleChoice(option.value)
                  }
                  style={{
                    padding: '18px 22px',
                    borderRadius: '16px',
                    border: `1px solid ${defaultBorder}`,
                    background: mounted ? defaultBg : '#FFFFFF',
                    color: isSelected ? '#1E40AF' : '#0F172A',
                    fontSize: '15px',
                    fontWeight: isSelected ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                    textAlign: 'left' as const,
                    letterSpacing: '-0.2px',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    gap: '5px',
                    boxShadow: isSelected
                      ? '0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)'
                      : '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
                    opacity: mounted ? (fadeIn ? 1 : 0.5) : 1,
                    transform: mounted ? (fadeIn ? 'translateY(0px)' : 'translateY(10px)') : 'translateY(0px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = isSelected ? '#2563EB' : '#CBD5E1'
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = defaultBorder
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'translateY(0px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <span>{resolveLabel(option.labelKey)}</span>
                  {option.hintKey && (
                    <span
                      style={{
                        fontSize: '13px',
                        color: isSelected ? '#3B82F6' : '#64748B',
                        fontWeight: '400',
                        lineHeight: '1.5',
                      }}
                    >
                      {t(option.hintKey)}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid #E5E7EB',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              color: '#94A3B8',
              margin: 0,
              fontWeight: '500',
            }}
          >
            {t('onboarding.takes60s')}
          </p>
          <span style={{ color: '#E5E7EB' }}>{'•'}</span>
          <p
            style={{
              fontSize: '12px',
              color: '#94A3B8',
              margin: 0,
              fontWeight: '500',
            }}
          >
            {t('onboarding.noPayment')}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
