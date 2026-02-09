'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"

export default function ProfilePage() {
  const router = useRouter()
  const { user, profile } = useAuth()
  const { t } = useLanguage()

  // Derive display values from onboarding data
  const profileType = profile?.profile_type || ""
  const currentRole = profile?.current_role || profile?.target_role || "Not set"
  const workLocation = profile?.work_location === "remote" ? "Remote" : profile?.work_location === "on-site" ? "On-site" : profile?.work_location === "hybrid" || profile?.work_location === "flexible" ? "Flexible" : "Not set"
  const experience = profile?.experience || profile?.years_experience || ""
  const fieldOfStudy = profile?.field_of_study || ""
  const lookingFor = profile?.looking_for === "similar" ? "Similar role, better company" : profile?.looking_for === "growth" ? "Growth opportunity" : profile?.looking_for === "change" ? "Career pivot" : ""
  const salaryRange = profile?.salary_expectations ? `$${profile.salary_expectations}k` : ""
  const graduation = profile?.graduation === "this-year" ? "This year" : profile?.graduation === "next-year" ? "Next year" : profile?.graduation === "later" ? "1+ year away" : ""
  const targetRoleType = profile?.target_role === "internship" ? "Internship" : profile?.target_role === "entry-level" ? "Entry-level" : profile?.target_role === "both" ? "Internship & Entry-level" : ""

  // Build dynamic assets based on profile data
  const assets = []
  if (currentRole && currentRole !== "Not set") {
    assets.push({ label: currentRole, detail: experience ? `${experience} ${t("profile.yearsExperience")}` : t("profile.primaryExpertise"), strength: t("profile.topSkill") })
  }
  if (workLocation !== "Not set") {
    assets.push({ label: `${workLocation} ${t("profile.workPreference")}`, detail: profileType === "student" ? t("profile.flexibleForInternships") : t("profile.provenRemote"), strength: t("profile.differentiator") })
  }
  if (fieldOfStudy) {
    assets.push({ label: fieldOfStudy, detail: t("profile.academicBackground"), strength: t("profile.foundation") })
  }
  if (lookingFor) {
    assets.push({ label: lookingFor, detail: t("profile.careerDirection"), strength: t("profile.focus") })
  }
  if (assets.length === 0) {
    assets.push(
      { label: t("profile.productAnalytics"), detail: t("profile.productAnalyticsDetail"), strength: t("profile.topSkill") },
      { label: t("profile.crossFunctional"), detail: t("profile.crossFunctionalDetail"), strength: t("profile.highDemand") },
      { label: t("profile.remoteFirst"), detail: t("profile.remoteFirstDetail"), strength: t("profile.differentiator") },
    )
  }

  // Primary career target
  const primaryTarget = profile?.current_role || profile?.target_role || "Product Analyst"
  const primarySubtitle = profileType === "student" ? (targetRoleType || t("profile.bestMatch")) : t("profile.bestMatch")

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
            {t("profile.title")}
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {/* 1. Your Best Assets */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                {t("profile.yourBestAssets")}
              </h2>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#94A3B8", margin: 0 }}>
                {t("profile.standOut")}
              </p>
            </div>

            {/* Top strengths */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {assets.map((asset) => (
                <div
                  key={asset.label}
                  style={{
                    padding: "14px",
                    background: "#F8FAFC",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", margin: "0 0 3px 0" }}>
                      {asset.label}
                    </p>
                    <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                      {asset.detail}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#2563EB",
                      background: "#EFF6FF",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {asset.strength}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. View profile information */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: "1.5", flex: 1 }}>
              {t("profile.viewDetailsDesc")}
            </p>
            <button
              onClick={() => router.push('/profile/preferences')}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "11px 18px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "-0.2px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              {t("profile.viewDetails")}
            </button>
          </section>

          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <h2 className="text-base font-semibold" style={{ color: "#0F172A", marginBottom: "20px" }}>
              {t("profile.careerTargets")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Primary Focus */}
              <div
                style={{
                  padding: "20px",
                  background: "#F0F9FF",
                  borderRadius: "12px",
                  border: "2px solid #2563EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span
                      style={{
                        background: "#2563EB",
                        color: "#FFFFFF",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {t("profile.primary")}
                    </span>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    {primaryTarget}
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    {primarySubtitle}
                  </p>
                </div>
                <button
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1E40AF"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2563EB"
                  }}
                >
                  {t("profile.searchJobs")}
                </button>
              </div>

              {/* Secondary Option */}
              <div
                style={{
                  padding: "20px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    {t("profile.biAnalyst")}
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    {t("profile.growingDemand")}
                  </p>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                  }}
                >
                  {t("profile.includeInSearch")}
                </button>
              </div>

              {/* Stretch Option */}
              <div
                style={{
                  padding: "20px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    {t("profile.dataAnalyst")}
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 6px 0" }}>
                    {t("profile.skillGap")}
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#2563EB",
                      border: "none",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "underline",
                      marginTop: "4px",
                    }}
                  >
                    {t("profile.learnSkill")}
                  </button>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                  }}
                >
                  {t("profile.addToSearch")}
                </button>
              </div>
            </div>
          </section>



          {/* 6. CV Generator */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
              <div>
                <h2 className="text-base font-semibold" style={{ color: "#0F172A", margin: "0 0 4px 0" }}>
                  {t("profile.cvGenerator")}
                </h2>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                  {t("profile.cvSubtitle")}
                </p>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 16px 0" }}>
              {t("profile.cvDesc")}
            </p>
            <button
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              {t("profile.downloadCv")}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11L4 7M8 11L12 7M8 11V2M2 13H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
