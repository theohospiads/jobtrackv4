"use client"

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

export default function ActionsPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const secondaryActions = [
    {
      title: t("actions.data.followUpTechStart"),
      subtext: t("actions.data.10daysSince")
    },
    {
      title: t("actions.data.followUpDataFlow"),
      subtext: t("actions.data.7daysSince")
    },
    {
      title: t("actions.data.updateResume"),
      subtext: t("actions.data.increasesMatch")
    },
    {
      title: t("actions.data.addPortfolio"),
      subtext: t("actions.data.boostsVisibility")
    }
  ]

  const jobCards = [
    {
      title: "Product Analyst Intern",
      company: "Acme Corp",
      location: "Paris",
      workType: "Hybrid",
      appliedDate: t("opp.data.3daysAgo"),
      nextTasks: [
        { text: t("actions.data.followUpEmail"), urgency: 3 },
        { text: t("actions.data.prepareInterview"), urgency: 2 }
      ],
      urgency: t("actions.veryUrgent")
    },
    {
      title: "Data Analyst",
      company: "TechStart Inc",
      location: "London",
      workType: "Remote",
      appliedDate: t("opp.data.5daysAgo"),
      nextTasks: [
        { text: t("actions.data.codingChallenge"), urgency: 2 },
        { text: t("actions.data.scheduleCall"), urgency: 1 }
      ],
      urgency: t("actions.urgent")
    },
    {
      title: "Business Analyst",
      company: "DataFlow",
      location: "New York",
      workType: "On-site",
      appliedDate: t("opp.data.2daysAgo"),
      nextTasks: [
        { text: t("actions.data.reviewRequirements"), urgency: 2 },
        { text: t("actions.data.submitPortfolio"), urgency: 3 }
      ],
      urgency: t("actions.normal")
    },
    {
      title: "UX Designer",
      company: "Creative Studios",
      location: "Berlin",
      workType: "Remote",
      appliedDate: t("opp.data.1dayAgo"),
      nextTasks: [
        { text: t("actions.data.portfolioReview"), urgency: 1 },
        { text: t("actions.data.designTest"), urgency: 2 }
      ],
      urgency: t("actions.urgent")
    },
    {
      title: "Senior Developer",
      company: "TechCorp",
      location: "San Francisco",
      workType: "Hybrid",
      appliedDate: t("opp.data.4daysAgo"),
      nextTasks: [
        { text: t("actions.data.phoneScreen"), urgency: 3 },
        { text: t("actions.data.technicalInterview"), urgency: 2 }
      ],
      urgency: t("actions.veryUrgent")
    },
    {
      title: "Marketing Manager",
      company: "Growth Labs",
      location: "Boston",
      workType: "Remote",
      appliedDate: t("opp.data.6daysAgo"),
      nextTasks: [
        { text: t("actions.data.caseStudy"), urgency: 1 },
        { text: t("actions.data.finalRound"), urgency: 2 }
      ],
      urgency: t("actions.normal")
    }
  ]

  return (
    <div 
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <TopNav />
      
      <main 
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '32px 24px 64px 24px'
        }}
      >
        {/* Page Header */}
        <header style={{ marginBottom: 24 }}>
          <h1 
            style={{
              fontSize: 24,
              fontWeight: 600,
              lineHeight: '32px',
              color: '#0F172A'
            }}
          >
            {t("actions.title")}
          </h1>
        </header>

        {/* Banner Image */}
        <div 
          style={{ 
            width: '100%', 
            height: 100, 
            borderRadius: 12, 
            marginBottom: 24,
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
            transition: 'box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)'
          }}
        >
          <svg 
            viewBox="0 0 1120 100" 
            preserveAspectRatio="xMidYMid slice"
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
          >
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="lightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#E0F2FE" />
              </linearGradient>
            </defs>
            
            {/* Background */}
            <rect width="1120" height="100" fill="#F0F9FF" />
            
            {/* Large flowing shapes */}
            <path d="M 0 30 Q 200 10, 400 30 T 800 30 L 800 100 L 0 100 Z" fill="url(#blueGrad)" opacity="0.15" />
            <path d="M 0 50 Q 250 40, 500 50 T 1000 50 L 1120 100 L 0 100 Z" fill="url(#blueGrad)" opacity="0.25" />
            
            {/* Accent circles */}
            <circle cx="150" cy="20" r="8" fill="url(#blueGrad)" opacity="0.4" />
            <circle cx="950" cy="80" r="6" fill="#2563EB" opacity="0.3" />
            <circle cx="1050" cy="25" r="5" fill="#2563EB" opacity="0.25" />
            
            {/* Geometric lines */}
            <line x1="100" y1="10" x2="130" y2="40" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" />
            <line x1="950" y1="20" x2="1000" y2="60" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" />
            <line x1="500" y1="5" x2="550" y2="35" stroke="#2563EB" strokeWidth="1" opacity="0.2" />
            
            {/* Dots pattern */}
            <circle cx="700" cy="15" r="2.5" fill="#2563EB" opacity="0.4" />
            <circle cx="730" cy="18" r="2.5" fill="#2563EB" opacity="0.35" />
            <circle cx="760" cy="15" r="2.5" fill="#2563EB" opacity="0.4" />
          </svg>
        </div>

        {/* Filter Section */}
        <div style={{ 
          display: 'flex', 
          gap: 12, 
          marginBottom: 32,
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Search by Name */}
          <input
            type="text"
            placeholder={t("actions.searchPlaceholder")}
            style={{
              padding: '8px 12px',
              fontSize: 13,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#0F172A',
              minWidth: 200,
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563EB'
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB'
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.04)'
            }}
          />

          {/* Filter by Urgency */}
          <select
            style={{
              padding: '8px 12px',
              fontSize: 13,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#0F172A',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563EB'
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB'
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.04)'
            }}
          >
            <option value="">{t("actions.filterUrgency")}</option>
            <option value="very-urgent">{t("actions.veryUrgent")}</option>
            <option value="urgent">{t("actions.urgent")}</option>
            <option value="normal">{t("actions.normal")}</option>
          </select>

          {/* Filter by Date */}
          <select
            style={{
              padding: '8px 12px',
              fontSize: 13,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#0F172A',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563EB'
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB'
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.04)'
            }}
          >
            <option value="">{t("actions.filterDate")}</option>
            <option value="1-day">{t("actions.last1Day")}</option>
            <option value="3-days">{t("actions.last3Days")}</option>
            <option value="7-days">{t("actions.last7Days")}</option>
            <option value="all">{t("actions.allTime")}</option>
          </select>
        </div>

        {/* Job Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {jobCards.map((card, index) => {
            const isAltStyle = index % 2 === 1
            const bgColor = isAltStyle ? "#EFF6FF" : "#FFFFFF"

            return (
            <div
              key={index}
              style={{
                background: bgColor,
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer'
              }}
              onClick={() => router.push(`/actions/${index + 1}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top Section: Title and Urgency Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                {/* Title */}
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#0F172A',
                    margin: 0
                  }}
                >
                  {card.title}
                </h3>
                
                {/* Urgency Badge */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#2563EB',
                    background: '#DBEAFE',
                    padding: '4px 10px',
                    borderRadius: 16,
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  {card.urgency}
                </span>
              </div>

              {/* Job Info */}
              <p
                style={{
                  fontSize: 13,
                  color: '#64748B',
                  marginBottom: 12
                }}
              >
                {card.company} · {card.location} · {card.workType}
              </p>

              {/* When Applied */}
              <p
                style={{
                  fontSize: 12,
                  color: '#94A3B8',
                  marginBottom: 12
                }}
              >
                {t("actions.applied")} {card.appliedDate}
              </p>

              {/* Progress Bar and View Tasks */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Tasks Label */}
                <span style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', flexShrink: 0 }}>{t("actions.tasks")}</span>
                
                {/* Progress Bar */}
                <div style={{ flex: 1, height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden', boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                  <div 
                    style={{ 
                      width: card.urgency === 'Very urgent' ? '75%' : card.urgency === 'Urgent' ? '50%' : '25%',
                      height: '100%', 
                      background: 'linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)',
                      borderRadius: 3,
                      transition: 'width 0.5s ease'
                    }} 
                  />
                </div>
                
                {/* Arrow Icon Button */}
                <button
                  className="flex items-center justify-center cursor-pointer transition-all rounded-lg flex-shrink-0"
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    padding: "6px 8px",
                    border: "none",
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  onClick={() => router.push(`/actions/${index + 1}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1D4ED8"
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.3)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2563EB"
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            )
          })}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-1 cursor-pointer text-sm font-medium transition-all rounded-lg px-4 py-2"
            style={{
              background: "#2563EB",
              color: "#FFFFFF",
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1D4ED8"
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.3)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#2563EB"
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {t("actions.loadMore")}
          </button>
        </div>
      </main>
    </div>
  )
}
