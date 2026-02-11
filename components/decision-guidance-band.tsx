"use client"

import { useLanguage } from "@/components/language-provider"

interface DecisionGuidanceBandProps {
  currentStage: number
  stageName: string
  daysSinceApplication: number
  companyName: string
  jobTitle: string
}

export function DecisionGuidanceBand({
  currentStage,
  stageName,
  daysSinceApplication,
  companyName,
  jobTitle,
}: DecisionGuidanceBandProps) {
  const { t } = useLanguage()

  // Don't show for first stage
  if (currentStage < 1) return null

  return (
    <div
      style={{
        marginBottom: 40,
        marginTop: 40,
        padding: "32px",
        background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
        borderRadius: 12,
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Section 1: What's Likely Happening Right Now */}
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: 12,
            gap: 8,
          }}
        >
          <h3
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#64748B",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {t("decisionGuidance.whatsHappening") || "What's Likely Happening Right Now"}
          </h3>
        </div>
        <p
          style={{
            fontSize: 15,
            color: "#1E293B",
            margin: 0,
            lineHeight: 1.6,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          {currentStage === 1
            ? t("decisionGuidance.applicationSubmittedNarrative") ||
              `Your application for ${jobTitle} at ${companyName} is in the initial review queue.`
            : currentStage === 2
              ? t("decisionGuidance.screeningNarrative") ||
                `Your application has passed the initial review and is now being evaluated by the hiring team.`
              : currentStage === 3
                ? t("decisionGuidance.interviewNarrative") ||
                  `You're in the interview process. The team is actively evaluating your fit for the role.`
                : t("decisionGuidance.finalDecisionNarrative") ||
                  `You're in the final stage. A decision should be made soon.`}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "#64748B",
            margin: "8px 0 0 0",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          {currentStage === 1 && daysSinceApplication <= 3
            ? t("decisionGuidance.earlyStage") ||
              "Recruiters typically screen candidates within 3–7 days of submission."
            : currentStage === 1 && daysSinceApplication > 7
              ? t("decisionGuidance.detectedActivity") ||
                "We've detected activity consistent with active review."
              : null}
        </p>
      </div>

      {/* Section 2: Your Leverage Window */}
      <div style={{ marginBottom: 32 }}>
        <h3
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#64748B",
            margin: "0 0 12px 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {t("decisionGuidance.leverageWindow") || "Your Leverage Window"}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 4,
              background: "#E2E8F0",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)",
                width: currentStage === 1 ? "100%" : currentStage === 2 ? "70%" : "40%",
                animation: "slideIn 0.6s ease-out",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#2563EB",
              whiteSpace: "nowrap",
            }}
          >
            {currentStage === 1
              ? t("decisionGuidance.open") || "OPEN"
              : currentStage === 2
                ? t("decisionGuidance.moderate") || "MODERATE"
                : t("decisionGuidance.closing") || "CLOSING"}
          </span>
        </div>
        <p
          style={{
            fontSize: 14,
            color: "#1E293B",
            margin: 0,
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          {currentStage === 1
            ? t("decisionGuidance.windowOpen") ||
              "Actions taken now can still significantly influence the recruiter's decision."
            : currentStage === 2
              ? t("decisionGuidance.windowModerate") ||
                "You're mid-funnel. Strategic actions still have high impact."
              : t("decisionGuidance.windowClosing") ||
                "You're in final consideration. Small details matter now."}
        </p>
        <p
          style={{
            fontSize: 12,
            color: "#64748B",
            margin: "8px 0 0 0",
            fontStyle: "italic",
          }}
        >
          {currentStage === 1
            ? t("decisionGuidance.highestImpact") ||
              "Highest impact actions: targeted follow-ups and internal visibility."
            : null}
        </p>
      </div>

      {/* Section 3: Your Next Best Action */}
      <div
        style={{
          marginBottom: 32,
          padding: "16px",
          background: "#EFF6FF",
          borderLeft: "4px solid #2563EB",
          borderRadius: 8,
        }}
      >
        <h3
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#1E293B",
            margin: "0 0 8px 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {t("decisionGuidance.nextBestAction") || "Your Next Best Action (5 minutes)"}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "#1E293B",
            margin: "0 0 12px 0",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          {currentStage === 1
            ? t("decisionGuidance.actionFollowUp") ||
              "Send a short, well-timed follow-up to reinforce your interest."
            : currentStage === 2
              ? t("decisionGuidance.actionPrepare") ||
                "Prepare thoroughly for upcoming interviews."
              : t("decisionGuidance.actionClarify") ||
                "Ask clarifying questions about the role and next steps."}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {[
            currentStage === 1
              ? t("decisionGuidance.whyFollowUp1") ||
                "Re-surfaces your application at the optimal moment"
              : currentStage === 2
                ? t("decisionGuidance.whyPrepare1") ||
                  "Preparation increases confidence and performance"
                : t("decisionGuidance.whyClarify1") ||
                  "Shows genuine interest in the opportunity",
            currentStage === 1
              ? t("decisionGuidance.whyFollowUp2") ||
                "Signals professionalism without being pushy"
              : currentStage === 2
                ? t("decisionGuidance.whyPrepare2") ||
                  "Research company culture and role requirements"
                : t("decisionGuidance.whyClarify2") ||
                  "Prevents misalignments after offer",
            currentStage === 1
              ? t("decisionGuidance.whyFollowUp3") ||
                "Statistically increases interview probability by 15–25%"
              : currentStage === 2
                ? t("decisionGuidance.whyPrepare3") ||
                  "Top performers spend 3x more time on prep"
                : t("decisionGuidance.whyClarify3") ||
                  "Early clarity leads to better long-term fit",
          ].map((reason, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#2563EB",
                  marginTop: 3,
                  flexShrink: 0,
                }}
              >
                •
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: What to Expect */}
      <div>
        <h3
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#64748B",
            margin: "0 0 12px 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {t("decisionGuidance.whatToExpect") || "What to Expect"}
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 12,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 12,
                color: "#64748B",
                margin: 0,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {t("decisionGuidance.reviewTime") || "Typical Review Time"}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#1E293B",
                margin: "4px 0 0 0",
                fontWeight: 600,
              }}
            >
              {currentStage === 1
                ? t("decisionGuidance.reviewTime1Stage") || "5–7 days"
                : currentStage === 2
                  ? t("decisionGuidance.reviewTime2Stage") || "7–14 days"
                  : t("decisionGuidance.reviewTime3Stage") || "3–5 days"}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 12,
                color: "#64748B",
                margin: 0,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {t("decisionGuidance.responseRisk") || "Response Risk"}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#1E293B",
                margin: "4px 0 0 0",
                fontWeight: 600,
              }}
            >
              {t("decisionGuidance.riskLow") || "Low"}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 12,
                color: "#64748B",
                margin: 0,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {t("decisionGuidance.interviewLikelihood") || "Interview Likelihood"}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#1E293B",
                margin: "4px 0 0 0",
                fontWeight: 600,
              }}
            >
              {currentStage === 1
                ? t("decisionGuidance.likelihood1Stage") || "Moderate"
                : currentStage === 2
                  ? t("decisionGuidance.likelihood2Stage") || "High"
                  : t("decisionGuidance.likelihood3Stage") || "Very High"}
            </p>
          </div>
        </div>
        <p
          style={{
            fontSize: 12,
            color: "#64748B",
            margin: "12px 0 0 0",
            fontStyle: "italic",
          }}
        >
          {t("decisionGuidance.basedOnFactors") ||
            "Based on role demand, company behavior, and timing."}
        </p>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </div>
  )
}
