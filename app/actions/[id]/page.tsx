"use client"

import { useParams, useRouter } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { TopNav } from "@/components/top-nav"
import { InterviewTracker } from "@/components/interview-tracker"
import { StagePrepGuide } from "@/components/stage-preparation-guide"

interface ActionJobData {
  id: string
  titleKey: string
  companyKey: string
  locationKey: string
  workTypeKey: string
  appliedDateKey: string
  currentStage: number
  totalStages: number
  salary?: string
  stages: {
    nameKey: string
    status: "completed" | "current" | "upcoming"
    date?: string
  }[]
  interviewStages: {
    id: number
    status: "completed" | "current" | "upcoming"
    notes: string
    interviewer?: string
    date?: string
  }[]
  tasks: {
    textKey: string
    completed: boolean
    duration: "15" | "30-45"
    impactKey: string
  }[]
  nextAction?: {
    titleKey: string
    icon: string
    recommendation: boolean
  }
  recruiterSignals?: {
    reviewTimeKey: string
    profileViewKey: string
    ghostingProbabilityKey: string
  }
}

const actionJobsData: Record<string, ActionJobData> = {
  "1": {
    id: "1",
    titleKey: "opp.data.role.productAnalystIntern",
    companyKey: "opp.data.company.acmeCorp",
    locationKey: "opp.data.location.paris",
    workTypeKey: "opp.data.workStyle.hybrid",
    appliedDateKey: "opp.data.3daysAgo",
    currentStage: 1,
    totalStages: 4,
    salary: "$65,000 - $75,000",
    stages: [
      { nameKey: "actionDetail.data.applicationSubmitted", status: "completed", date: "Jan 28, 2026" },
      { nameKey: "actionDetail.data.applicationReview", status: "current" },
      { nameKey: "actionDetail.data.interview", status: "upcoming" },
      { nameKey: "actionDetail.data.decision", status: "upcoming" }
    ],
    interviewStages: [
      { id: 1, status: "upcoming", notes: "" },
      { id: 2, status: "upcoming", notes: "" },
    ],
    tasks: [
      { textKey: "actionDetail.data.sendFollowUp", completed: false, duration: "15", impactKey: "actionDetail.data.sendFollowUpImpact" },
      { textKey: "actionDetail.data.prepareQuestions", completed: false, duration: "30-45", impactKey: "actionDetail.data.prepareQuestionsImpact" },
      { textKey: "actionDetail.data.researchCompany", completed: true, duration: "30-45", impactKey: "actionDetail.data.researchCompanyImpact" },
      { textKey: "actionDetail.data.tailorCV", completed: false, duration: "30-45", impactKey: "actionDetail.data.tailorCVImpact" },
      { textKey: "actionDetail.data.prepareTellMe", completed: false, duration: "15", impactKey: "actionDetail.data.prepareTellMeImpact" }
    ],
    nextAction: {
      titleKey: "actionDetail.data.sendFollowUp2days",
      icon: "\u2709\uFE0F",
      recommendation: true
    },
    recruiterSignals: {
      reviewTimeKey: "actionDetail.data.reviewTime1",
      profileViewKey: "actionDetail.data.profileView1",
      ghostingProbabilityKey: "actionDetail.data.low"
    }
  },
  "2": {
    id: "2",
    titleKey: "opp.data.role.dataAnalyst",
    companyKey: "opp.data.company.techStart",
    locationKey: "opp.data.location.london",
    workTypeKey: "opp.data.workStyle.remote",
    appliedDateKey: "opp.data.5daysAgo",
    currentStage: 2,
    totalStages: 4,
    salary: "$72,000 - $88,000",
    stages: [
      { nameKey: "actionDetail.data.applicationSubmitted", status: "completed", date: "Jan 26, 2026" },
      { nameKey: "actionDetail.data.applicationReview", status: "completed", date: "Jan 28, 2026" },
      { nameKey: "actionDetail.data.technicalAssessment", status: "current" },
      { nameKey: "actionDetail.data.finalInterview", status: "upcoming" }
    ],
    interviewStages: [
      { id: 1, status: "completed", notes: "Discussed project architecture. Asked about scalability and performance optimization. Strong technical foundation required.", interviewer: "Sarah Chen", date: "2026-01-30" },
      { id: 2, status: "current", notes: "" },
    ],
    tasks: [
      { textKey: "actionDetail.data.completeCoding", completed: false, duration: "30-45", impactKey: "actionDetail.data.completeCodingImpact" },
      { textKey: "actionDetail.data.scheduleTechnical", completed: false, duration: "15", impactKey: "actionDetail.data.scheduleTechnicalImpact" }
    ],
    nextAction: {
      titleKey: "actionDetail.data.completeCodingChallenge",
      icon: "\uD83D\uDCBB",
      recommendation: true
    },
    recruiterSignals: {
      reviewTimeKey: "actionDetail.data.reviewTime2",
      profileViewKey: "actionDetail.data.profileView2",
      ghostingProbabilityKey: "actionDetail.data.veryLow"
    }
  },
  "3": {
    id: "3",
    titleKey: "opp.data.role.businessAnalyst",
    companyKey: "opp.data.company.dataFlow",
    locationKey: "opp.data.location.newYork",
    workTypeKey: "opp.data.workStyle.onSite",
    appliedDateKey: "opp.data.2daysAgo",
    currentStage: 1,
    totalStages: 3,
    salary: "$78,000 - $95,000",
    stages: [
      { nameKey: "actionDetail.data.applicationSubmitted", status: "completed", date: "Jan 29, 2026" },
      { nameKey: "actionDetail.data.screeningCall", status: "current" },
      { nameKey: "actionDetail.data.finalRound", status: "upcoming" }
    ],
    interviewStages: [
      { id: 1, status: "current", notes: "" },
    ],
    tasks: [
      { textKey: "actionDetail.data.reviewJobReq", completed: false, duration: "15", impactKey: "actionDetail.data.reviewJobReqImpact" },
      { textKey: "actionDetail.data.submitPortfolio", completed: false, duration: "30-45", impactKey: "actionDetail.data.submitPortfolioImpact" }
    ],
    nextAction: {
      titleKey: "actionDetail.data.submitPortfolioLink",
      icon: "\uD83D\uDCC2",
      recommendation: true
    },
    recruiterSignals: {
      reviewTimeKey: "actionDetail.data.reviewTime3",
      profileViewKey: "actionDetail.data.profileView3",
      ghostingProbabilityKey: "actionDetail.data.low"
    }
  }
}

// Alternative jobs for the Plan B cards
const alternativeJobs = [
  {
    titleKey: "opp.data.role.juniorDataAnalyst",
    companyKey: "opp.data.company.dataFlow",
    salary: "$65-75k",
  },
  {
    titleKey: "opp.data.role.analyticsAssociate",
    companyKey: "opp.data.company.techStart",
    salary: "$70-80k",
  },
  {
    titleKey: "opp.data.role.biIntern",
    companyKey: "opp.data.company.insightCorp",
    salary: "$55-65k",
  },
]

export default function ActionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLanguage()
  const id = params.id as string
  const job = actionJobsData[id] || actionJobsData["1"]

  // Early check - if no job, return loading before any hooks
  if (!job) {
    return (
      <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
        <TopNav />
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 16px", textAlign: "center", paddingTop: 100 }}>
          <p style={{ color: "#64748B", fontSize: 16 }}>{t("common.loading") || "Loading..."}</p>
        </main>
      </div>
    )
  }

  // All hooks must be called unconditionally after the early return check
  const [completedTasks, setCompletedTasks] = useState<Record<number, boolean>>(
    job.tasks.reduce((acc, _, i) => ({ ...acc, [i]: false }), {})
  )
  const [interviewStages, setInterviewStages] = useState(job.interviewStages)
  const [totalInterviewRounds, setTotalInterviewRounds] = useState(job.interviewStages.length)
  const [showHealthInfo, setShowHealthInfo] = useState(false)
  const [currentStage, setCurrentStage] = useState(job.currentStage)

  const progressPercentage = (currentStage / job.totalStages) * 100
  const completedTaskCount = Object.values(completedTasks).filter(Boolean).length
  const taskCompletionPercent = (completedTaskCount / job.tasks.length) * 100

  // Application Health Score logic
  const getHealthScore = () => {
    const stageBonus = (currentStage / job.totalStages) * 50
    const taskBonus = taskCompletionPercent * 0.3
    const score = stageBonus + taskBonus
    if (score > 75) return { score: "Strong", color: "#2563EB" }
    if (score > 50) return { score: "Good", color: "#2563EB" }
    if (score > 25) return { score: "Fair", color: "#2563EB" }
    return { score: "Needs Work", color: "#2563EB" }
  }

  const health = getHealthScore()

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 16px" }}>
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
            padding: "8px 12px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2563EB",
            fontSize: 14,
            fontWeight: 400,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.7"
            e.currentTarget.style.transform = "translateX(-4px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1"
            e.currentTarget.style.transform = "translateX(0)"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t("actionDetail.backToApps")}
        </button>

        {/* PRIMARY CARD - Above the fold */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 28,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Job Title */}
            <h1 style={{ fontSize: 32, fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
              {t(job.titleKey)}
            </h1>

            {/* Company Info */}
            <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 24px 0", fontWeight: 500 }}>
              {t(job.companyKey)} · {t(job.locationKey)} · {t(job.workTypeKey)}
            </p>

            {/* Current Stage */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {t("actionDetail.currentStage")}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", margin: 0 }}>
                  {job.stages[currentStage] ? t(job.stages[currentStage].nameKey) : ""}
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  {/* Previous Stage Button */}
                  <button
                    onClick={() => {
                      const prevStage = Math.max(currentStage - 1, 0)
                      setCurrentStage(prevStage)
                    }}
                    style={{
                      padding: "8px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                      color: currentStage <= 0 ? "#C4B5FD" : "#2563EB",
                      background: "#FFFFFF",
                      border: `1px solid ${currentStage <= 0 ? "#E5E7EB" : "#BFDBFE"}`,
                      borderRadius: 6,
                      cursor: currentStage <= 0 ? "not-allowed" : "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (currentStage > 0) {
                        e.currentTarget.style.background = "#EFF6FF"
                        e.currentTarget.style.borderColor = "#93C5FD"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentStage > 0) {
                        e.currentTarget.style.background = "#FFFFFF"
                        e.currentTarget.style.borderColor = "#BFDBFE"
                      }
                    }}
                    disabled={currentStage <= 0}
                    title={currentStage <= 0 ? "Already at first stage" : "Move to previous stage"}
                  >
                    {t("actionDetail.previousStage") || "Previous stage"}
                  </button>
                  {/* Next Stage Button */}
                  <button
                    onClick={() => {
                      const nextStage = Math.min(currentStage + 1, job.totalStages - 1)
                      setCurrentStage(nextStage)
                    }}
                    style={{
                      padding: "8px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                      color: currentStage >= job.totalStages - 1 ? "#C4B5FD" : "#2563EB",
                      background: "#FFFFFF",
                      border: `1px solid ${currentStage >= job.totalStages - 1 ? "#E5E7EB" : "#BFDBFE"}`,
                      borderRadius: 6,
                      cursor: currentStage >= job.totalStages - 1 ? "not-allowed" : "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (currentStage < job.totalStages - 1) {
                        e.currentTarget.style.background = "#EFF6FF"
                        e.currentTarget.style.borderColor = "#93C5FD"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentStage < job.totalStages - 1) {
                        e.currentTarget.style.background = "#FFFFFF"
                        e.currentTarget.style.borderColor = "#BFDBFE"
                      }
                    }}
                    disabled={currentStage >= job.totalStages - 1}
                    title={currentStage >= job.totalStages - 1 ? "Already at final stage" : "Move to next stage"}
                  >
                    {t("actionDetail.nextStage") || "Next stage"}
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>{t("actionDetail.appProgress")}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{Math.round(progressPercentage)}%</span>
              </div>
              <div style={{ height: 8, background: "#E5E7EB", borderRadius: 4 }}>
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    height: "100%",
                    background: "#2563EB",
                    borderRadius: 4,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            {/* Reassurance Message */}
            <p style={{ fontSize: 14, color: "#0F172A", margin: 0, fontWeight: 500, lineHeight: "1.5" }}>
              {t("actionDetail.reassurance")}
            </p>
          </div>
        </div>

        {/* "What Usually Happens" - Single line */}
        {job.recruiterSignals && (
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 13, color: "#64748B", margin: 0, fontWeight: 500, lineHeight: "1.5" }}>
              <span style={{ fontWeight: 700, color: "#0F172A" }}>{t("actionDetail.whatToExpect")}</span> {t("actionDetail.typicalReview")} {t(job.recruiterSignals.reviewTimeKey)} • {t("actionDetail.ghostingRisk")}: {t(job.recruiterSignals.ghostingProbabilityKey)}
            </p>
          </div>
        )}

        {/* Interview Tracker - Only shown when at interview stage or beyond */}
        {currentStage >= 2 && job.stages.some((s: { nameKey: string; status: string }) => s.nameKey.includes("interview") || s.nameKey.includes("screening")) && (
          <div style={{ marginBottom: 32 }}>
            <InterviewStagesTracker stages={interviewStages} onStageUpdate={setInterviewStages} />
          </div>
        )}

        {/* Timeline Section */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
            {t("actionDetail.timeline")}
          </p>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Timeline Visualization */}
            {(() => {
              return (
                <div>
                  {/* Timeline Container */}
                  <div style={{ position: "relative", width: "100%" }}>
                    {/* Connecting line background */}
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: "#E5E7EB",
                        borderRadius: 2,
                        zIndex: 0,
                      }}
                    />
                    {/* Blue progress line - uses currentStage */}
                    {currentStage >= 0 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 16,
                          left: 0,
                          height: 3,
                          background: "#2563EB",
                          borderRadius: 2,
                          zIndex: 1,
                          width: `${((currentStage + 0.7) / (job.stages.length - 1)) * 100}%`,
                          transition: "width 0.5s ease",
                        }}
                      />
                    )}

                    {/* Stages Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${job.stages.length}, 1fr)`,
                        gap: 0,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      {job.stages.map(
                        (stage: { status: string; nameKey: string; date?: string }, index: number) => {
                          const isInterviewStage = stage.nameKey.toLowerCase().includes("interview") || 
                                                   stage.nameKey.toLowerCase().includes("screening")
                          const displayInterviewStages = isInterviewStage && interviewStages.length > 0
                          
                          return (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 12,
                              }}
                            >
                              {/* Main Circle */}
                              <div
                                style={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  background:
                                    stage.status === "completed" ? "#2563EB" : "#FFFFFF",
                                  border:
                                    stage.status === "completed"
                                      ? "2px solid #2563EB"
                                      : stage.status === "current"
                                        ? "2px solid #2563EB"
                                        : "2px solid #E5E7EB",
                                  color:
                                    stage.status === "completed"
                                      ? "#FFFFFF"
                                      : stage.status === "current"
                                        ? "#2563EB"
                                        : "#94A3B8",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  position: "relative",
                                  cursor: displayInterviewStages ? "pointer" : "default",
                                }}
                              >
                                {index + 1}
                                
                                {/* Interview badge indicator */}
                                {displayInterviewStages && (
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: -4,
                                      right: -4,
                                      width: 16,
                                      height: 16,
                                      borderRadius: "50%",
                                      background: "#2563EB",
                                      border: "2px solid #FFFFFF",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontSize: 10,
                                      color: "#FFFFFF",
                                      fontWeight: 700,
                                    }}
                                    title={`${interviewStages.length} interview rounds`}
                                  >
                                    {interviewStages.length}
                                  </div>
                                )}
                              </div>

                              {/* Label */}
                              <div style={{ textAlign: "center" }}>
                                <p
                                  style={{
                                    fontSize: 12,
                                    color:
                                      stage.status === "upcoming" ? "#94A3B8" : "#0F172A",
                                    margin: 0,
                                    fontWeight: stage.status === "current" ? 600 : 400,
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {stage.status === "completed" ? t("actionDetail.your") : ""}
                                  {t(stage.nameKey)}
                                </p>
                                {stage.date && (
                                  <p
                                    style={{
                                      fontSize: 11,
                                      color: "#64748B",
                                      margin: "4px 0 0 0",
                                    }}
                                  >
                                    {stage.date}
                                  </p>
                                )}
                                {stage.status === "current" && (
                                  <p
                                    style={{
                                      fontSize: 11,
                                      color: "#2563EB",
                                      margin: "4px 0 0 0",
                                      fontWeight: 500,
                                    }}
                                    >
                                  {t("actionDetail.inProgress")}
                                </p>
                              )}
                            </div>
                          </div>
                        )
                      }
                      )}
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>

        {/* Stage Preparation Guide - NEW */}
        <StagePrepGuide
          currentStageIndex={currentStage}
          stageName={t(job.stages[currentStage]?.nameKey) || 'Current Stage'}
          stageStatus={job.stages[currentStage]?.status || 'current'}
        />

        {/* Bottom Section - Salary and Action Button */}
        <div style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 24, gap: 24 }}>
          {/* Salary Container */}
          <div
            style={{
              background: "#FFFFFF",
              color: "#2563EB",
              fontSize: 15,
              fontWeight: 400,
              padding: "12px 24px",
              borderRadius: 8,
              border: "1.5px solid #2563EB",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              cursor: "default",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            {t("actionDetail.estimatedSalary")} {job.salary}
          </div>

          {/* Send a Follow-up Button */}
          <button
            type="button"
            onClick={() => {
              router.push(`/actions/${id}/send-follow-up`)
            }}
            style={{
              background: "#2563EB",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 400,
              padding: "12px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25), 0 1px 3px rgba(0, 0, 0, 0.08)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1E40AF"
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(37, 99, 235, 0.35), 0 4px 8px rgba(0, 0, 0, 0.1)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#2563EB"
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.25), 0 1px 3px rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            {t("actionDetail.sendFollowUp")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
