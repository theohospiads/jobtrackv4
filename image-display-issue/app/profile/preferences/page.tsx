'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"

export default function CareerPreferencesPage() {
  const router = useRouter()

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1
              className="text-[32px] font-semibold leading-[1.2]"
              style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
            >
              Career & Preferences
            </h1>
            <p className="text-sm mt-2" style={{ color: "#64748B" }}>
              The system's mental model of you
            </p>
          </div>
          <button
            onClick={() => router.back()}
            style={{
              background: "#FFFFFF",
              color: "#64748B",
              border: "1px solid #E5E7EB",
              padding: "11px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F1F5F9"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF"
            }}
          >
            ← Back
          </button>
        </header>

        <div className="flex flex-col gap-8">
          {/* Career DNA */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 className="text-base font-semibold" style={{ color: "#0F172A" }}>
                Career DNA
              </h2>
              <button
                style={{
                  background: "#F3F4F6",
                  color: "#2563EB",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E5E7EB"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F3F4F6"
                }}
              >
                Edit DNA
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {/* Career Stage */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Career Stage
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Early Career
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0 0" }}>
                  0-3 years in field
                </p>
              </div>

              {/* Core Strengths */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Core Strengths
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Analytics & SQL
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0 0" }}>
                  Data-driven mindset
                </p>
              </div>

              {/* Primary Role */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Primary Role
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Product Analyst
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0 0" }}>
                  Best fit for you
                </p>
              </div>
            </div>
          </section>

          {/* Personalization Rules */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 className="text-base font-semibold" style={{ color: "#0F172A" }}>
                Personalization Rules
              </h2>
              <button
                style={{
                  background: "#F3F4F6",
                  color: "#2563EB",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E5E7EB"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F3F4F6"
                }}
              >
                Edit Rules
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {/* Contract Type */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Contract Type
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Full-time
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects job visibility
                </p>
              </div>

              {/* Work Style */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Work Style
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Remote / Hybrid
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects location filtering
                </p>
              </div>

              {/* Locations */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Locations
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  Paris, London, Remote EU
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects matching
                </p>
              </div>

              {/* Salary Flexibility */}
              <div
                style={{
                  padding: "16px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.3px" }}>
                  Salary Flexibility
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                  ±15% range
                </p>
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                  Affects seniority range
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
