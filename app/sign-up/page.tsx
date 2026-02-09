"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"

export default function SignUpPage() {
  const { signUp } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsLoading(true)
    // Simulate a small delay for better UX
    setTimeout(() => {
      signUp(name, email)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <svg
              width={32}
              height={32}
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
            <span style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-primary)" }}>
              JobTrack
            </span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: "600", color: "var(--text-primary)", margin: 0 }}>
            Start Your Search
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              margin: "8px 0 0 0",
              lineHeight: "1.6",
            }}
          >
            Create an account to track your job search and get matched with opportunities.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Name Input */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor="name"
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              disabled={isLoading}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid var(--border-default)",
                background: "var(--bg-card)",
                fontSize: "14px",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                transition: "border 120ms ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-500)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
            />
          </div>

          {/* Email Input */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor="email"
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              disabled={isLoading}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid var(--border-default)",
                background: "var(--bg-card)",
                fontSize: "14px",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                transition: "border 120ms ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-500)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!name.trim() || !email.trim() || isLoading}
            style={{
              marginTop: "8px",
              padding: "12px 16px",
              borderRadius: "10px",
              background: !name.trim() || !email.trim() ? "var(--primary-300)" : "var(--primary-600)",
              color: "white",
              border: "none",
              fontSize: "14px",
              fontWeight: "600",
              cursor: !name.trim() || !email.trim() || isLoading ? "not-allowed" : "pointer",
              transition: "background 120ms ease",
              letterSpacing: "-0.2px",
            }}
            onMouseEnter={(e) => {
              if (name.trim() && email.trim() && !isLoading) {
                e.currentTarget.style.background = "var(--primary-700)"
              }
            }}
            onMouseLeave={(e) => {
              if (name.trim() && email.trim() && !isLoading) {
                e.currentTarget.style.background = "var(--primary-600)"
              }
            }}
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-secondary)",
            textAlign: "center",
            margin: 0,
          }}
        >
          By creating an account, you agree to our{" "}
          <Link
            href="#"
            style={{
              color: "var(--primary-600)",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  )
}
