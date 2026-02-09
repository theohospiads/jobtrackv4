"use client"

import { useEffect, useState, useMemo, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Search, Bell, ChevronDown, Menu, X, User, Settings, Globe, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { useLanguage } from "@/components/language-provider"

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { signOut, user } = useAuth()
  const { t, language, setLanguage } = useLanguage()
  const accountMenuRef = useRef<HTMLDivElement>(null)

  const tabs = useMemo(() => [
    { label: t("nav.dashboard"), href: "/dashboard" },
    { label: t("nav.opportunities"), href: "/opportunities" },
    { label: t("nav.application"), href: "/actions" },
    { label: t("nav.profile"), href: "/profile" },
  ], [t])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close account menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(e.target as Node)) {
        setAccountMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="topnav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 64,
        width: "100%",
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border-default)",
        boxShadow: isScrolled ? "var(--shadow-nav)" : "none",
        transition: "box-shadow 120ms ease",
      }}
    >
      <div
        className="topnav__inner"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 64,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <div
          className="topnav__left"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Brand */}
          <Link
            href="/dashboard"
            className="brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 8px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Logo SVG */}
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={28} height={28} rx={6} fill="var(--primary-600)" />
              <path
                d="M8 14L12 18L20 10"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.2px",
                color: "var(--text-primary)",
              }}
            >
              JobTrack
            </span>
          </Link>

          {/* Tab Strip - Desktop */}
          <nav
            className="tabs"
            aria-label="Primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              height: 40,
            }}
          >
            {mounted && tabs.map((tab) => {
              const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/") || (pathname === "/" && tab.href === "/dashboard")
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="tab"
                  style={{
                    height: 36,
                    padding: "0 12px",
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--primary-600)" : "var(--text-secondary)",
                    background: isActive ? "var(--primary-100)" : "transparent",
                    border: isActive ? "1px solid rgba(26,115,232,0.25)" : "1px solid transparent",
                    transition: "all 120ms ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "var(--bg-muted)"
                      e.currentTarget.style.color = "var(--text-primary)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent"
                      e.currentTarget.style.color = "var(--text-secondary)"
                    }
                  }}
                >
                  {tab.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Right Side */}
        <div
          className="topnav__right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Search Button */}
          <button
            className="iconbtn"
            aria-label="Search"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "transparent",
              border: "1px solid transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Search size={18} color="var(--text-secondary)" />
          </button>

          {/* Notifications Button */}
          <button
            className="iconbtn"
            aria-label="Notifications"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "transparent",
              border: "1px solid transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 120ms ease",
              position: "relative",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Bell size={18} color="var(--text-secondary)" />
            {/* Notification badge */}
            <span
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#EF4444",
              }}
            />
          </button>

          {/* User Menu */}
          <div ref={accountMenuRef} style={{ position: "relative" }}>
            <button
              className="usermenu"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
              style={{
                height: 36,
                padding: "0 10px 0 6px",
                borderRadius: 999,
                background: accountMenuOpen ? "var(--bg-muted)" : "transparent",
                border: "1px solid var(--border-default)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                transition: "background 120ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
              onMouseLeave={(e) => {
                if (!accountMenuOpen) e.currentTarget.style.background = "transparent"
              }}
            >
              {/* Avatar */}
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 999,
                  background: "#2563EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
              </span>
              {/* Name */}
              <span
                className="username"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  maxWidth: 140,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {user?.name || "Account"}
              </span>
              {/* Caret */}
              <ChevronDown
                size={14}
                color="var(--text-muted)"
                style={{
                  transition: "transform 200ms ease",
                  transform: accountMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Account Dropdown */}
            {accountMenuOpen && (
              <div
                className="account-dropdown"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: 220,
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  padding: 6,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)",
                  zIndex: 200,
                }}
              >
                {/* User info header */}
                <div
                  style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid #F1F5F9",
                    marginBottom: 4,
                  }}
                >
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", margin: 0 }}>
                    {user?.name || "Account"}
                  </p>
                  <p style={{ fontSize: 12, color: "#94A3B8", margin: "2px 0 0 0" }}>
                    {user?.email || "account@email.com"}
                  </p>
                </div>

                {/* Menu items */}
                {[
                  { label: t("nav.account"), icon: User, href: "/account" },
                  { label: t("nav.settings"), icon: Settings, href: "/settings" },
                  { label: t("nav.language"), icon: Globe, href: null },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.label === t("nav.language")) {
                        setLanguage(language === 'en' ? 'fr' : 'en')
                        return
                      }
                      setAccountMenuOpen(false)
                      if (item.href) router.push(item.href)
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "9px 12px",
                      background: "transparent",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "background 120ms ease",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <item.icon size={16} color="#64748B" />
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#0F172A" }}>
                      {item.label}
                    </span>
                    {item.label === t("nav.language") && (
                      <span style={{ marginLeft: "auto", fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>
                        {language === 'fr' ? 'FR' : 'EN'}
                      </span>
                    )}
                  </button>
                ))}

                {/* Divider */}
                <div style={{ height: 1, background: "#F1F5F9", margin: "4px 0" }} />

                {/* Sign out */}
                <button
                  onClick={() => {
                    setAccountMenuOpen(false)
                    signOut()
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 12px",
                    background: "transparent",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "background 120ms ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FEF2F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <LogOut size={16} color="#EF4444" />
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#EF4444" }}>
                    {t("nav.signOut")}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="iconbtn mobile-menu-btn"
            aria-label="Menu"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "transparent",
              border: "1px solid transparent",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={18} color="var(--text-secondary)" />
            ) : (
              <Menu size={18} color="var(--text-secondary)" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: 64,
            right: 16,
            background: "var(--bg-card)",
            border: "1px solid var(--border-default)",
            borderRadius: 12,
            padding: 8,
            boxShadow: "var(--shadow-nav)",
            zIndex: 100,
          }}
        >
          {mounted && tabs.map((tab) => {
            const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/") || (pathname === "/" && tab.href === "/dashboard")
            return (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 44,
                  padding: "0 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--primary-600)" : "var(--text-secondary)",
                  background: isActive ? "var(--primary-100)" : "transparent",
                }}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      )}

      <style jsx>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .tabs {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .username {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
