"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"
import React from "react"
import { useLanguage } from "@/components/language-provider"

type FitLevel = "strong" | "good" | "stretch"

interface Opportunity {
  id: string
  roleTitle: string
  company: string
  location: string
  workStyle: string
  fitLevel: FitLevel
  fitStrength: number
  explanation: string
  metaSignals: string[]
  estimatedTime?: string
  estimatedSalary?: string
}

const opportunities: Record<string, Opportunity> = {
  "1": {
    id: "1",
    roleTitle: "Product Analyst Intern",
    company: "Acme Corp",
    location: "Paris",
    workStyle: "Hybrid",
    fitLevel: "strong",
    fitStrength: 92,
    explanation: "Your profile closely matches the role's requirements, and similar candidates received interviews here within 2 weeks.",
    metaSignals: ["3 days ago", "Low applicant volume", "Intern-friendly"],
    estimatedSalary: "$32,000 - $38,000",
    estimatedTime: "2-3 weeks",
  },
  "2": {
    id: "2",
    roleTitle: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workStyle: "Remote",
    fitLevel: "strong",
    fitStrength: 88,
    explanation: "Your analytical skills and Python experience align perfectly with their needs.",
    metaSignals: ["1 week ago", "High growth company", "Visa sponsorship available"],
    estimatedSalary: "$55,000 - $65,000",
    estimatedTime: "3-4 weeks",
  },
}

export default function OpportunityDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLanguage()
  const id = params.id as string
  const job = opportunities[id] || opportunities["1"]

  const strongMatchReasons = [
    "Your profile matches 92% of job requirements",
    "Similar candidates got interviews within 2 weeks",
    "Your experience in analytics aligns with their team",
    "Low competition - only 24 applicants so far",
  ]

  const improvementTips = [
    "Highlight your quantitative projects in the cover letter",
    "Practice explaining your analytical approach in interviews",
    "Research the company's recent product launches",
    "Prepare examples of data-driven decisions you've made",
  ]

  const jobDescription = `Safran is an international high-technology group operating in the fields of aeronautics (propulsion, equipment and interiors), space, and defense. Safran Aircraft Engines designs, manufactures, and markets civil and military aircraft engines with the highest levels of performance, reliability, and environmental compliance.

The Assistant Service Engineer (ASE) will provide leadership, technical direction, and support to the airframer and customers. Main responsibilities include acting as an interface with all levels of customer and company organizations, providing on-site assessments of operations, delivering comprehensive reports on engine issues, and contributing to product and service improvement by identifying operator needs and proposing corrective actions.

Required qualifications include strong knowledge of engine mechanics and operation, technical expertise in engine assembly and maintenance documentation, strong oral and written communication skills, and technical English proficiency. Experience in jet engine manufacturing or aircraft manufacturing is valuable.`

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t("oppDetail.back")}
        </button>

        {/* Top Section: Match Circle + Job Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, gap: 24 }}>
          {/* Match Circle and Percentile */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ position: "relative", width: 100, height: 100 }}>
              <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="8"
                  strokeDasharray={`${(job.fitStrength / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
              </svg>
              {/* Center text */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#2563EB" }}>
                  {job.fitStrength}%
                </span>
              </div>
            </div>
          </div>

          {/* Job Title and Company Info */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 8 }}>
              {/* Left Column - Title & Company */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: 0 }}>
                  {job.roleTitle}
                </h1>
                <p style={{ fontSize: 16, color: "#64748B", margin: 0, fontWeight: 400 }}>
                  {job.company} · {job.location} · {job.workStyle}
                </p>
              </div>
              
              {/* Right Column - Time, Salary, Top Apply Button */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "right", marginTop: 24 }}>
                {/* Time and Salary */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#64748B" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontSize: 14, color: "#64748B", fontWeight: 400 }}>{t("oppDetail.daysAgo")}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#64748B" strokeWidth="2"/>
                      <path d="M9 12H15M12 9V15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontSize: 14, color: "#64748B", fontWeight: 400 }}>$32k–$38k · {t("oppDetail.paidInternship")}</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Reassurance Banner */}
        <div
          style={{
            background: "#DBEAFE",
            border: "1px solid #BFDBFE",
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.2), 0 2px 6px rgba(37, 99, 235, 0.1)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.15), 0 1px 3px rgba(37, 99, 235, 0.08)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2"/>
              <path d="M10 14L12 16L16 10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 14, color: "#1E40AF", fontWeight: 400, margin: 0 }}>
              {t("oppDetail.aheadOfApplicants")}
            </p>
          </div>
          <p style={{ fontSize: 13, color: "#1E40AF", margin: "0 0 0 32px", lineHeight: 1.5 }}>
            {t("oppDetail.aheadReason")}
          </p>
        </div>

        {/* Hiring Transparency Cards Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {/* Ghosting Risk Card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <p style={{ fontSize: 11, color: "#64748B", fontWeight: 400, margin: 0, textTransform: "uppercase" }}>
              {t("oppDetail.lowGhosting")}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <p style={{ fontSize: 18, color: "#0F172A", fontWeight: 400, margin: 0 }}>
                {t("oppDetail.low")}
              </p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16L5 11M10 16L15 11M10 16V5" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Interview Stages Card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <p style={{ fontSize: 11, color: "#64748B", fontWeight: 400, margin: 0, textTransform: "uppercase" }}>
              {t("oppDetail.shortProcess")}
            </p>
            <p style={{ fontSize: 18, color: "#0F172A", fontWeight: 400, margin: 0 }}>
              {t("oppDetail.interviews")}
            </p>
          </div>

          {/* Time to Offer Card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <p style={{ fontSize: 11, color: "#64748B", fontWeight: 400, margin: 0, textTransform: "uppercase" }}>
              {t("oppDetail.fastDecision")}
            </p>
            <p style={{ fontSize: 18, color: "#0F172A", fontWeight: 400, margin: 0 }}>
              {t("oppDetail.weeks")}
            </p>
          </div>
        </div>

        {/* Why It's a Strong Match Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.whyStrongMatch")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: 0 }}>
            {t("oppDetail.matchDesc1")}
          </p>
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: "12px 0 0 0" }}>
            {t("oppDetail.matchDesc2")}
          </p>
        </div>

        {/* Skills Gap Breakdown Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.optionalSkills")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Match Summary */}
          <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, background: "#DBEAFE", borderRadius: "50%", color: "#2563EB", fontSize: 18, fontWeight: 400 }}>
                ✓
              </div>
              <div>
                <p style={{ fontSize: 13, color: "#64748B", fontWeight: 400, margin: "0 0 4px 0" }}>
                  {t("oppDetail.youMatch")}
                </p>
                <p style={{ fontSize: 18, color: "#0F172A", fontWeight: 400, margin: 0 }}>
                  {t("oppDetail.ofRequirements")}
                </p>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0, fontStyle: "italic" }}>
              {t("oppDetail.noNeed")}
            </p>
          </div>

          {/* Missing Skills */}
          <div>
            <p style={{ fontSize: 13, color: "#64748B", fontWeight: 400, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              {t("oppDetail.skillsToDevelop")}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {/* Skill 1 */}
              <div 
                style={{ padding: 12, background: "#F8FAFC", borderRadius: 8, border: "1px solid #E5E7EB", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: 13, fontWeight: 400, color: "#0F172A", margin: "0 0 4px 0" }}>
                  {t("oppDetail.advancedSQL")}
                </p>
                <p style={{ fontSize: 12, color: "#64748B", margin: 0, lineHeight: 1.4 }}>
                  {t("oppDetail.advancedSQLDesc")}
                </p>
              </div>

              {/* Skill 2 */}
              <div 
                style={{ padding: 12, background: "#F8FAFC", borderRadius: 8, border: "1px solid #E5E7EB", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <p style={{ fontSize: 13, fontWeight: 400, color: "#0F172A", margin: "0 0 4px 0" }}>
                  {t("oppDetail.tableauPowerBI")}
                </p>
                <p style={{ fontSize: 12, color: "#64748B", margin: 0, lineHeight: 1.4 }}>
                  {t("oppDetail.tableauPowerBIDesc")}
                </p>
              </div>
            </div>

            {/* Development Tips */}
            <div 
              style={{ marginTop: 16, padding: 12, borderRadius: 8, border: "1px solid #E5E7EB", backgroundColor: "#FFFFFF", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 400, color: "#0F172A", margin: "0 0 8px 0" }}>
                {t("oppDetail.quickWins")}
              </p>
              <ul style={{ fontSize: 12, color: "#0F172A", margin: 0, paddingLeft: 20, lineHeight: 1.6 }}>
                <li>{t("oppDetail.quickWin1")}</li>
                <li>{t("oppDetail.quickWin2")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who This Role Is Designed For */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.whoDesignedFor")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: 0 }}>
            {t("oppDetail.whoDesc1")}
          </p>
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: "8px 0 0 0" }}>
            {t("oppDetail.whoDesc2")}
          </p>
        </div>

        {/* What To Expect From The Role */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.whatToExpect")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: 0 }}>
            {t("oppDetail.expectDesc1")}
          </p>
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: "8px 0 0 0" }}>
            {t("oppDetail.expectDesc2")}
          </p>
        </div>

        {/* About The Company Environment */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.aboutCompany")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: 0 }}>
            {t("oppDetail.companyDesc1")}
          </p>
          <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, margin: "8px 0 0 0" }}>
            {t("oppDetail.companyDesc2")}
          </p>
        </div>

        {/* How to Improve Section - Checklist Format */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.preInterview")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Checklist Item 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#0F172A", fontWeight: 400 }}>
              <input type="checkbox" style={{ width: 20, height: 20, cursor: "pointer" }} />
              <a 
                href="/opportunities/prep/cover-letter" 
                style={{ color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}
              >
                {t("oppDetail.coverLetter")}
              </a>
            </div>

            {/* Checklist Item 2 */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#0F172A", fontWeight: 400 }}>
              <input type="checkbox" style={{ width: 20, height: 20, cursor: "pointer" }} />
              <a 
                href="/opportunities/prep/star-stories" 
                style={{ color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}
              >
                {t("oppDetail.starStories")}
              </a>
            </div>

            {/* Checklist Item 3 */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#0F172A", fontWeight: 400 }}>
              <input type="checkbox" style={{ width: 20, height: 20, cursor: "pointer" }} />
              <a 
                href="/opportunities/prep/smart-questions" 
                style={{ color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}
              >
                {t("oppDetail.smartQuestions")}
              </a>
            </div>

            {/* Checklist Item 4 */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#0F172A", fontWeight: 400 }}>
              <input type="checkbox" style={{ width: 20, height: 20, cursor: "pointer" }} />
              <a 
                href="/opportunities/prep/data-examples" 
                style={{ color: "#2563EB", textDecoration: "underline", cursor: "pointer" }}
              >
                {t("oppDetail.dataExamples")}
              </a>
            </div>
          </div>
        </div>

        {/* Inline Sticky Apply Button */}
        <div style={{ marginBottom: 32, display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              position: "sticky",
              bottom: 20,
              background: "#2563EB",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 400,
              padding: "12px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onClick={() => router.push(`/opportunities/${id}/apply`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1E40AF";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#2563EB";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.3)";
            }}
          >
            {t("oppDetail.applyWellPositioned")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Job Information Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          {t("oppDetail.jobInfo")}
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 100,
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 400,
              color: "#2563EB",
              background: "#FFFFFF",
              border: "1px solid #2563EB",
              borderRadius: 8,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F0F4F8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
            }}
            onClick={() => window.open("https://www.safran.fr", "_blank")}
          >
            {t("oppDetail.openOriginal")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13H13V3H8M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
