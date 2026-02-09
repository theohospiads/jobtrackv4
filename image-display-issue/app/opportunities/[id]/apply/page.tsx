"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLanguage()
  const id = params.id as string

  const [applicationMessage, setApplicationMessage] = useState(
    "I'm excited to apply for this role. My background in product analytics and data-driven decision making aligns well with your needs. I've led multiple projects that improved user retention by 20%+ and have strong experience with SQL, Python, and data visualization tools."
  )
  const [selectedCV, setSelectedCV] = useState("GeneratedCV_2024.pdf")
  const [applicationState, setApplicationState] = useState<"ready" | "submitted" | "saved">("ready")

  const handleApply = () => {
    setApplicationState("submitted")
  }

  const handleSave = () => {
    setApplicationState("saved")
  }

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 16px" }}>
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
          {t("apply.back")}
        </button>

        {applicationState === "submitted" ? (
          // Success State
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 32,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto 16px" }}>
              <circle cx="24" cy="24" r="24" fill="#DCFCE7" />
              <path d="M20 24L22 26L28 20" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              {t("apply.submittedTitle")}
            </h2>
            <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 24px 0" }}>
              {t("apply.submittedDesc")}
            </p>
            <button
              onClick={() => router.push(`/actions/${id}`)}
              style={{
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.3)"
              }}
            >
              {t("apply.viewDetails")}
            </button>
          </div>
        ) : applicationState === "saved" ? (
          // Saved State
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 32,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto 16px" }}>
              <rect width="48" height="48" fill="#FEF3C7" rx="24" />
              <path d="M24 16V28M24 28L20 24M24 28L28 24" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              {t("apply.draftSaved")}
            </h2>
            <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 24px 0" }}>
              {t("apply.draftDesc")}
            </p>
            <button
              onClick={() => setApplicationState("ready")}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 400,
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
              }}
            >
              {t("apply.resumeApp")}
            </button>
          </div>
        ) : (
          <>
            {/* Job Recap */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: 24,
                marginBottom: 24,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", margin: "0 0 16px 0" }}>
                Product Analyst Intern
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", fontWeight: 600 }}>{t("apply.company")}</p>
                  <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>Acme Corp</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", fontWeight: 600 }}>{t("apply.location")}</p>
                  <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>Paris, France</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", fontWeight: 600 }}>{t("apply.salary")}</p>
                  <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>$65,000 - $75,000</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", fontWeight: 600 }}>{t("apply.match")}</p>
                  <p style={{ fontSize: 14, color: "#2563EB", margin: 0, fontWeight: 600 }}>92% match</p>
                </div>
              </div>
            </div>

            {/* Generated Application Message */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: 24,
                marginBottom: 24,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", margin: "0 0 12px 0", textTransform: "uppercase" }}>
                {t("apply.yourMessage")}
              </p>
              <textarea
                value={applicationMessage}
                onChange={(e) => setApplicationMessage(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: 12,
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  fontSize: 14,
                  color: "#0F172A",
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
              <p style={{ fontSize: 12, color: "#64748B", margin: "8px 0 0 0" }}>
                {t("apply.messageTip")}
              </p>
            </div>

            {/* Selected CV */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: 24,
                marginBottom: 24,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", margin: "0 0 12px 0", textTransform: "uppercase" }}>
                {t("apply.cvSubmitted")}
              </p>
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  padding: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: 0 }}>
                    {selectedCV}
                  </p>
                  <p style={{ fontSize: 12, color: "#64748B", margin: "4px 0 0 0" }}>
                    {t("apply.cvGenerated")}
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14L4 10M4 10L2 12M4 10H16C17.1046 10H18V2C18 0.895431 17.1046 0 16 0H2C0.895431 0 0 0.895431 0 2V12" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              <button
                onClick={handleSave}
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  color: "#2563EB",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F8FAFC"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFFFFF"
                }}
              >
                {t("apply.saveForLater")}
              </button>
              <button
                onClick={handleApply}
                style={{
                  flex: 1,
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
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1E40AF"
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB"
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.3)"
                }}
              >
                {t("apply.applyAndSend")}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
