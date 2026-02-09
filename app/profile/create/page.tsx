'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateProfilePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [profileData, setProfileData] = useState({
    targetRole: '',
    seniority: '',
    industries: [],
    locations: [],
    skills: [],
    yearsExperience: '',
    companySize: '',
    jobType: [],
  })

  const totalSteps = 5

  const isStepValid = () => {
    if (step === 1) return profileData.targetRole !== ''
    if (step === 2) return profileData.seniority !== ''
    if (step === 3) return profileData.industries.length > 0
    if (step === 4) return profileData.skills.length > 0
    if (step === 5) return profileData.companySize !== ''
    return false
  }

  const handleNext = () => {
    if (!isStepValid()) return
    
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      router.push('/profile')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateProfileData = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const progress = (step / totalSteps) * 100
  const isValid = isStepValid()

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <TopNav />
      
      <main className="mx-auto max-w-[600px] px-6 py-10">
        {/* Progress Bar */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ height: "6px", background: "#E5E7EB", borderRadius: "3px", overflow: "hidden", marginBottom: "12px" }}>
            <div
              style={{
                height: "100%",
                background: "#2563EB",
                width: `${progress}%`,
                transition: "width 0.3s ease",
                borderRadius: "3px",
              }}
            />
          </div>
          <p style={{ fontSize: "12px", color: "#64748B", margin: 0, fontWeight: "500" }}>
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Step 1: Target Role */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#0F172A", margin: "0 0 8px 0", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
              What's your target role?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 32px 0", lineHeight: "1.5" }}>
              We'll use this to personalize job matches and recommendations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Product Analyst", "Data Analyst", "Business Analyst", "Product Manager"].map(role => (
                <button
                  key={role}
                  onClick={() => updateProfileData('targetRole', role)}
                  style={{
                    padding: "16px 20px",
                    background: profileData.targetRole === role ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.targetRole === role ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "12px",
                    fontSize: "16px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (profileData.targetRole !== role) {
                      e.currentTarget.style.background = "#F8FAFC"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (profileData.targetRole !== role) {
                      e.currentTarget.style.background = "#FFFFFF"
                    }
                  }}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Seniority & Experience */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#0F172A", margin: "0 0 8px 0", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
              What's your seniority level?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 32px 0", lineHeight: "1.5" }}>
              This helps us match you with the right opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {["Entry-level (0-2 years)", "Mid-level (2-5 years)", "Senior (5-10 years)", "Lead (10+ years)"].map(level => (
                <button
                  key={level}
                  onClick={() => updateProfileData('seniority', level)}
                  style={{
                    padding: "16px 20px",
                    background: profileData.seniority === level ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.seniority === level ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "12px",
                    fontSize: "16px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (profileData.seniority !== level) {
                      e.currentTarget.style.background = "#F8FAFC"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (profileData.seniority !== level) {
                      e.currentTarget.style.background = "#FFFFFF"
                    }
                  }}
                >
                  {level}
                </button>
              ))}
            </div>

            <div>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "8px" }}>
                Years of experience
              </label>
              <input
                type="number"
                value={profileData.yearsExperience}
                onChange={(e) => updateProfileData('yearsExperience', e.target.value)}
                placeholder="e.g., 3"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "inherit",
                }}
              />
            </div>
          </div>
        )}

        {/* Step 3: Industries & Locations */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#0F172A", margin: "0 0 8px 0", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
              What industries interest you?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 32px 0", lineHeight: "1.5" }}>
              Select all that apply (pick at least one).
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {["SaaS", "FinTech", "AI/ML", "E-commerce", "Healthcare", "EdTech"].map(industry => (
                <button
                  key={industry}
                  onClick={() => {
                    const updated = profileData.industries.includes(industry)
                      ? profileData.industries.filter(i => i !== industry)
                      : [...profileData.industries, industry]
                    updateProfileData('industries', updated)
                  }}
                  style={{
                    padding: "12px 16px",
                    background: profileData.industries.includes(industry) ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.industries.includes(industry) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>

            <div>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "8px" }}>
                Preferred locations
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["Remote", "EU", "US", "Global"].map(loc => (
                  <button
                    key={loc}
                    onClick={() => {
                      const updated = profileData.locations.includes(loc)
                        ? profileData.locations.filter(l => l !== loc)
                        : [...profileData.locations, loc]
                      updateProfileData('locations', updated)
                    }}
                    style={{
                      padding: "12px 16px",
                      background: profileData.locations.includes(loc) ? "#F0F9FF" : "#FFFFFF",
                      border: profileData.locations.includes(loc) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#0F172A",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Key Skills */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#0F172A", margin: "0 0 8px 0", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
              What are your core skills?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 32px 0", lineHeight: "1.5" }}>
              Pick your 3-5 strongest skills.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {["SQL", "Python", "Excel", "Tableau", "Statistics", "A/B Testing", "Product Analytics", "Data Visualization"].map(skill => (
                <button
                  key={skill}
                  onClick={() => {
                    const updated = profileData.skills.includes(skill)
                      ? profileData.skills.filter(s => s !== skill)
                      : [...profileData.skills, skill]
                    updateProfileData('skills', updated)
                  }}
                  style={{
                    padding: "12px 16px",
                    background: profileData.skills.includes(skill) ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.skills.includes(skill) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Company Preferences */}
        {step === 5 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#0F172A", margin: "0 0 8px 0", lineHeight: "1.2", letterSpacing: "-0.5px" }}>
              Company preferences?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 32px 0", lineHeight: "1.5" }}>
              This helps us find the best matches for you.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "12px" }}>
                Company size
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["Startup (1-50)", "Growth (50-500)", "Mid-size (500-5k)", "Enterprise (5k+)"].map(size => (
                  <button
                    key={size}
                    onClick={() => updateProfileData('companySize', size)}
                    style={{
                      padding: "12px 16px",
                      background: profileData.companySize === size ? "#F0F9FF" : "#FFFFFF",
                      border: profileData.companySize === size ? "2px solid #2563EB" : "1px solid #E5E7EB",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#0F172A",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "12px" }}>
                Job type
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["Full-time", "Part-time", "Contract", "Advisory"].map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      const updated = profileData.jobType.includes(type)
                        ? profileData.jobType.filter(t => t !== type)
                        : [...profileData.jobType, type]
                      updateProfileData('jobType', updated)
                    }}
                    style={{
                      padding: "12px 16px",
                      background: profileData.jobType.includes(type) ? "#F0F9FF" : "#FFFFFF",
                      border: profileData.jobType.includes(type) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#0F172A",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ display: "flex", gap: "12px", marginTop: "48px" }}>
          {step > 1 && (
            <button
              onClick={handleBack}
              style={{
                flex: 1,
                padding: "12px 24px",
                background: "#FFFFFF",
                color: "#64748B",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
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
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isValid}
            style={{
              flex: 1,
              padding: "12px 24px",
              background: isValid ? "#2563EB" : "#D1D5DB",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: isValid ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              opacity: isValid ? 1 : 0.6,
            }}
            onMouseEnter={(e) => {
              if (isValid) {
                e.currentTarget.style.background = "#1E40AF"
              }
            }}
            onMouseLeave={(e) => {
              if (isValid) {
                e.currentTarget.style.background = "#2563EB"
              }
            }}
          >
            {step === totalSteps ? "Create profile" : "Next"}
          </button>
        </div>
      </main>
    </div>
  )
}
