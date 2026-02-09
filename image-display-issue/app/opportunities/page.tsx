"use client"

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
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

const fitStyleKeys: Record<FitLevel, string> = {
  strong: "opp.strongFit",
  good: "opp.goodFit",
  stretch: "opp.stretch",
}

// Fit distribution rule (enforced by decision engine):
// - Max 2 "Strong fit"
// - Remaining are "Good fit"
// - Max 1 "Stretch", only if explicitly labeled
interface OpportunityData {
  id: string
  roleTitle: string
  company: string
  location: string
  workStyle: string
  fitLevel: FitLevel
  fitStrength: number
  explanationKey: string
  metaSignalKeys: string[]
  estimatedSalary?: string
}

const opportunitiesData: OpportunityData[] = [
  {
    id: "1",
    roleTitle: "Product Analyst Intern",
    company: "Acme Corp",
    location: "Paris",
    workStyle: "Hybrid",
    fitLevel: "strong",
    fitStrength: 92,
    explanationKey: "opp.data.explanation1",
    metaSignalKeys: ["opp.data.3daysAgo", "opp.data.lowApplicant", "opp.data.internFriendly"],
    estimatedSalary: "$32,000 - $38,000",
  },
  {
    id: "2",
    roleTitle: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workStyle: "Remote",
    fitLevel: "strong",
    fitStrength: 88,
    explanationKey: "opp.data.explanation2",
    metaSignalKeys: ["opp.data.5daysAgo", "opp.data.respondsQuickly"],
    estimatedSalary: "$45,000 - $55,000",
  },
  {
    id: "3",
    roleTitle: "Business Intelligence Associate",
    company: "DataFlow",
    location: "Berlin",
    workStyle: "On-site",
    fitLevel: "good",
    fitStrength: 72,
    explanationKey: "opp.data.explanation3",
    metaSignalKeys: ["opp.data.1weekAgo", "opp.data.growingTeam"],
    estimatedSalary: "$52,000 - $62,000",
  },
  {
    id: "4",
    roleTitle: "Junior Product Manager",
    company: "Innovate Labs",
    location: "Amsterdam",
    workStyle: "Hybrid",
    fitLevel: "good",
    fitStrength: 65,
    explanationKey: "opp.data.explanation4",
    metaSignalKeys: ["opp.data.4daysAgo", "opp.data.startupEnv"],
    estimatedSalary: "$48,000 - $58,000",
  },
  {
    id: "5",
    roleTitle: "Strategy Analyst",
    company: "ConsultCo",
    location: "Paris",
    workStyle: "On-site",
    fitLevel: "stretch",
    fitStrength: 48,
    explanationKey: "opp.data.explanation5",
    metaSignalKeys: ["opp.data.2daysAgo", "opp.data.competitive"],
    estimatedSalary: "$60,000 - $75,000",
  },
]

function FitPill({ level }: { level: FitLevel }) {
  const { t } = useLanguage()
  return (
    <span
      className="rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ background: "transparent", color: "#000000" }}
    >
      {t(fitStyleKeys[level])}
    </span>
  )
}

function OpportunityCard({ opportunity, index }: { opportunity: OpportunityData; index: number }) {
  const router = useRouter()
  const { t } = useLanguage()
  const isAltStyle = index % 2 === 1
  const bgColor = isAltStyle ? "#EFF6FF" : "#FAFBFC"
  
  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-3 rounded-2xl p-6 transition-all duration-300"
      style={{
        background: bgColor,
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
      }}
      onClick={() => router.push(`/opportunities/${opportunity.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#CBD5E1"
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)"
        e.currentTarget.style.transform = "translateY(-4px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E5E7EB"
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      {/* Main Content */}
      <div className="flex items-start justify-between gap-4">
        {/* Left Side: Circular Fit Strength Indicator */}
        <div className="flex items-start justify-center flex-shrink-0">
          <div className="flex items-center justify-center">
            <svg width="85" height="85" viewBox="0 0 100 100" className="transform -rotate-90">
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
                strokeDasharray={`${(opportunity.fitStrength / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 0.3s ease" }}
              />
            </svg>
            {/* Center text */}
            <div className="absolute flex flex-col items-center justify-center w-16 h-16">
              <span
                className="text-sm font-bold"
                style={{ color: "#2563EB" }}
              >
                {opportunity.fitStrength}%
              </span>
              <span
                className="text-xs font-medium mt-0.5 text-center"
                style={{ color: "#64748B" }}
              >
                {t(fitStyleKeys[opportunity.fitLevel])}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Company Info, Role Title, Salary */}
        <div className="flex-1">
          {/* Company Info - Top */}
          <p
            className="text-[13px] font-medium"
            style={{ color: "#64748B" }}
          >
            {opportunity.company} · {opportunity.location} · {opportunity.workStyle} ({t(opportunity.metaSignalKeys[0])})
          </p>
          
          {/* Role Title */}
          <h3
            className="text-base font-semibold mt-1"
            style={{ color: "#0F172A" }}
          >
            {opportunity.roleTitle}
          </h3>

          {/* Estimated Salary - Below Role Title */}
          {opportunity.estimatedSalary && (
            <div className="flex items-center gap-1">
              <p
                className="text-sm font-medium"
                style={{ color: "#64748B" }}
              >
                {opportunity.estimatedSalary}
              </p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2.5"/>
                <path d="M12 7V12M12 16H12.01" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>

        {/* Right Side: View More Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            router.push(`/opportunities/${opportunity.id}`)
          }}
          className="flex items-center gap-2 cursor-pointer text-sm font-medium rounded-lg px-3 py-2 whitespace-nowrap flex-shrink-0"
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
            boxShadow: "0 2px 8px rgba(37, 99, 235, 0.2)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1D4ED8"
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.3)"
            e.currentTarget.style.transform = "translateY(-2px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#2563EB"
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(37, 99, 235, 0.2)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          {t("opp.applyNow")}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

function EmptyState() {
  const { t } = useLanguage()
  return (
    <div
      className="flex w-full flex-col gap-4 rounded-2xl p-5"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h3
        className="text-base font-semibold"
        style={{ color: "#0F172A" }}
      >
        {t("opp.noOpportunitiesTitle")}
      </h3>
      <p
        className="text-sm"
        style={{ color: "#475569" }}
      >
        {t("opp.noOpportunitiesDesc")}
      </p>
      <button
        className="h-9 w-fit cursor-pointer rounded-[10px] px-4 text-[13px] font-semibold transition-all duration-200"
        style={{
          background: "#F1F5F9",
          color: "#0F172A",
          border: "1px solid #CBD5E1",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#E0E8F2"
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#F1F5F9"
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
        }}
      >
        {t("opp.improveChances")}
      </button>
    </div>
  )
}

export default function OpportunitiesPage() {
  const { t } = useLanguage()
  const showEmpty = false // Toggle for empty state demo
  const visibleOpportunities = opportunitiesData.slice(0, 5)

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header */}
        <header className="mb-8">
          <h1
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            {t("opp.title")}
          </h1>
          <p className="text-sm mt-2" style={{ color: "#64748B" }}>
            {t("opp.highConfidenceMatches").replace("{count}", String(visibleOpportunities.length))}
          </p>
        </header>

        {/* Search and Filters */}
        <div className="mb-8 flex gap-3">
          {/* Search Bar */}
          <div
            className="flex-1 flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all duration-200"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.1)"
              e.currentTarget.style.borderColor = "#CBD5E1"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
              e.currentTarget.style.borderColor = "#E5E7EB"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="#94A3B8" strokeWidth="2"/>
              <path d="M21 21L16 16" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder={t("opp.searchPlaceholder")}
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: "#0F172A" }}
            />
          </div>

          {/* Filter Button */}
          <button
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 transition-all duration-200"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              color: "#64748B",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F1F5F9"
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)"
              e.currentTarget.style.borderColor = "#CBD5E1"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF"
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.04)"
              e.currentTarget.style.borderColor = "#E5E7EB"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm font-medium">{t("opp.filters")}</span>
          </button>
        </div>

        {/* Opportunities List */}
        <div className="mb-8 flex flex-col gap-4">
          {showEmpty ? (
            <EmptyState />
          ) : (
            visibleOpportunities.map((opportunity, index) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} index={index} />
            ))
          )}
        </div>

        {/* Load More Button */}
        {!showEmpty && (
          <div className="flex justify-center">
            <button
              className="flex items-center gap-1 cursor-pointer text-sm font-medium rounded-lg px-3 py-2 transition-all duration-200"
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1D4ED8"
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 99, 235, 0.3)"
                e.currentTarget.style.transform = "translateY(-3px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.2)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {t("opp.loadMore")}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
