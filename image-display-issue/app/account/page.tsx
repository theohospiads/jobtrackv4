'use client'

import { TopNav } from "@/components/top-nav"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import { Mail, MapPin, Briefcase, Calendar, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AccountPage() {
  const router = useRouter()
  const { user, profile } = useAuth()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate activity heatmap data (last 12 weeks) - must be before early return
  const heatmapData = useMemo(() => {
    const weeks = 20
    const days = 7
    const data: number[][] = []
    for (let w = 0; w < weeks; w++) {
      const week: number[] = []
      for (let d = 0; d < days; d++) {
        const recency = w / weeks
        const chance = recency * 0.6
        if (Math.random() < chance) {
          week.push(Math.floor(Math.random() * 3) + 1)
        } else {
          week.push(0)
        }
      }
      data.push(week)
    }
    return data
  }, [])

  if (!mounted) return null

  const name = user?.name || "User"
  const email = user?.email || "user@email.com"
  const initials = name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
  const profileType = profile?.profile_type || "Job Seeker"
  const targetRole = profile?.target_role || profile?.current_role || "Not set"
  const location = profile?.location || "Not set"
  const memberSince = "February 2026"

  const getHeatColor = (value: number) => {
    if (value === 0) return "#F1F5F9"
    if (value === 1) return "#BFDBFE"
    if (value === 2) return "#60A5FA"
    return "#2563EB"
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-8 pb-16">

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>

          {/* Left sidebar */}
          <div style={{ width: 280, flexShrink: 0 }}>
            <div
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                {initials}
              </div>

              {/* Name & handle */}
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#0F172A", margin: "0 0 4px 0" }}>
                {name}
              </h1>
              <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px 0" }}>
                {email}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: "#F1F5F9", margin: "0 0 16px 0" }} />

              {/* Quick stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Briefcase size={15} color="#64748B" />
                  <span style={{ fontSize: 13, color: "#475569" }}>{targetRole}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <MapPin size={15} color="#64748B" />
                  <span style={{ fontSize: 13, color: "#475569" }}>{location}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Mail size={15} color="#64748B" />
                  <span style={{ fontSize: 13, color: "#475569" }}>{email}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Calendar size={15} color="#64748B" />
                  <span style={{ fontSize: 13, color: "#475569" }}>{t("account.joined")} {memberSince}</span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#F1F5F9", margin: "20px 0" }} />

              {/* Action buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                  onClick={() => router.push("/profile/preferences")}
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0F172A",
                    cursor: "pointer",
                    transition: "all 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F8FAFC"
                    e.currentTarget.style.borderColor = "#CBD5E1"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                    e.currentTarget.style.borderColor = "#E5E7EB"
                  }}
                >
                  {t("account.editProfile")}
                </button>
                <button
                  onClick={() => router.push("/settings")}
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0F172A",
                    cursor: "pointer",
                    transition: "all 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F8FAFC"
                    e.currentTarget.style.borderColor = "#CBD5E1"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                    e.currentTarget.style.borderColor = "#E5E7EB"
                  }}
                >
                  {t("account.accountSettings")}
                </button>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Activity heatmap */}
            <div
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                marginBottom: 24,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", margin: 0 }}>{t("account.activity")}</h2>
                <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{t("account.last20weeks")}</span>
              </div>

              {/* Heatmap grid */}
              <div style={{ display: "flex", gap: 3, overflowX: "auto" }}>
                {heatmapData.map((week, wi) => (
                  <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {week.map((day, di) => (
                      <div
                        key={di}
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 3,
                          background: getHeatColor(day),
                          transition: "transform 150ms ease",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.3)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)"
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, justifyContent: "flex-end" }}>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>{t("account.less")}</span>
                {[0, 1, 2, 3].map((v) => (
                  <div
                    key={v}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 2,
                      background: getHeatColor(v),
                    }}
                  />
                ))}
                <span style={{ fontSize: 11, color: "#94A3B8" }}>{t("account.more")}</span>
              </div>
            </div>

            {/* Stats overview */}
            <div
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
                marginBottom: 24,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
              }}
            >
              <h2 style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", margin: "0 0 16px 0" }}>{t("account.overview")}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  { label: t("account.applicationsSent"), value: "12" },
                  { label: t("account.interviews"), value: "3" },
                  { label: t("account.responses"), value: "5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: 16,
                      background: "#F8FAFC",
                      borderRadius: 8,
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <p style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 4px 0" }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: 12, fontWeight: 500, color: "#64748B", margin: 0 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected accounts */}
            <div
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", margin: 0 }}>{t("account.connectedAccounts")}</h2>
                <button
                  onClick={() => router.push("/connect-accounts")}
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#2563EB",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: 0,
                  }}
                >
                  {t("account.manage")} <ExternalLink size={13} />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "LinkedIn", status: t("account.connectedStatus"), connected: true },
                  { name: "Gmail", status: t("account.connectedStatus"), connected: true },
                  { name: "Indeed", status: t("account.notConnectedStatus"), connected: false },
                ].map((account) => (
                  <div
                    key={account.name}
                    style={{
                      padding: "12px 14px",
                      background: "#F8FAFC",
                      borderRadius: 8,
                      border: "1px solid #E5E7EB",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>
                      {account.name}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: account.connected ? "#16A34A" : "#94A3B8",
                        background: account.connected ? "#F0FDF4" : "#F8FAFC",
                        padding: "3px 10px",
                        borderRadius: 4,
                      }}
                    >
                      {account.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
