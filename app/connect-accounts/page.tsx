'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

const PLATFORMS = [
  // Email
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Track offer emails & auto-organize correspondence',
    category: 'Email',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#FFFFFF" stroke="#EA4335" strokeWidth="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="#EA4335" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    description: 'Email tracking & calendar sync',
    category: 'Email',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#0078D4">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <circle cx="8" cy="12" r="2" fill="#FFFFFF"/>
        <path d="M16 10v4" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Auto-fill applications & track recruiter interactions',
    category: 'Job Boards',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.783 0-9.69h3.554v1.374c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.393 3.745 4.386v5.538zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.955-1.71 1.187 0 1.916.755 1.916 1.71 0 .951-.729 1.71-1.956 1.71zm1.581 11.019H3.757V9.762h3.161v10.69zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'indeed',
    name: 'Indeed',
    description: 'Instant job alerts & application tracking',
    category: 'Job Boards',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#003A9B"/>
        <circle cx="7" cy="12" r="2.5" fill="#FFFFFF"/>
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF"/>
        <circle cx="17" cy="12" r="2.5" fill="#FFFFFF"/>
      </svg>
    ),
  },
]

export default function ConnectAccountsPage() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = (platformId: string) => {
    setConnectedPlatforms(new Set([...connectedPlatforms, platformId]))
  }

  const handleDisconnect = (platformId: string) => {
    const newSet = new Set(connectedPlatforms)
    newSet.delete(platformId)
    setConnectedPlatforms(newSet)
  }

  const handleContinue = () => {
    const connectedArray = Array.from(connectedPlatforms)
    updateProfile({ connected_platforms: connectedArray.join(',') })
    router.push('/dashboard')
  }

  if (!mounted) return null

  const emailPlatforms = PLATFORMS.filter(p => p.category === 'Email')
  const jobBoardPlatforms = PLATFORMS.filter(p => p.category === 'Job Boards')

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 32px' }}>
          <button
            onClick={() => router.push('/onboarding')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: '#64748B',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              padding: '0',
              marginBottom: '16px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#0F172A' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B' }}
          >
            <ArrowLeft size={16} />
            Back to onboarding
          </button>
          <h1 style={{ fontSize: '28px', fontWeight: '600', margin: '0', color: '#0F172A', letterSpacing: '-0.5px' }}>
            Connect Your Accounts
          </h1>
          <p style={{ fontSize: '15px', color: '#64748B', margin: '8px 0 0 0', lineHeight: '1.6' }}>
            Link your job search platforms to track applications, opportunities, and communications in one place.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '48px 32px' }}>
        {/* Email Section */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 8px 0' }}>
              Email & Communication
            </h2>
            <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
              Track offer emails and auto-organize job search correspondence
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {emailPlatforms.map(platform => (
              <div
                key={platform.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.2s ease-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.borderColor = '#D4D4D8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '10px',
                      backgroundColor: '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {platform.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '600', margin: '0', color: '#0F172A' }}>
                        {platform.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#64748B', margin: '6px 0 0 0', lineHeight: '1.4' }}>
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  {connectedPlatforms.has(platform.id) ? (
                    <button
                      onClick={() => handleDisconnect(platform.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#E0E7FF',
                        color: '#2563EB',
                        border: '1px solid #C7D2FE',
                        borderRadius: '7px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#C7D2FE'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E0E7FF'
                      }}
                    >
                      ✓ Connected
                    </button>
                  ) : (
                    <button
                      onClick={() => handleConnect(platform.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '7px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1E40AF'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563EB'
                      }}
                    >
                      Connect
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Boards Section */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 8px 0' }}>
              Job Boards
            </h2>
            <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
              Track applications and receive real-time job alerts from major job boards
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {jobBoardPlatforms.map(platform => (
              <div
                key={platform.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.2s ease-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.borderColor = '#D4D4D8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '10px',
                      backgroundColor: '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {platform.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '600', margin: '0', color: '#0F172A' }}>
                        {platform.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#64748B', margin: '6px 0 0 0', lineHeight: '1.4' }}>
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  {connectedPlatforms.has(platform.id) ? (
                    <button
                      onClick={() => handleDisconnect(platform.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#E0E7FF',
                        color: '#2563EB',
                        border: '1px solid #C7D2FE',
                        borderRadius: '7px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#C7D2FE'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E0E7FF'
                      }}
                    >
                      ✓ Connected
                    </button>
                  ) : (
                    <button
                      onClick={() => handleConnect(platform.id)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '7px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1E40AF'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563EB'
                      }}
                    >
                      Connect
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div style={{
          backgroundColor: '#F0F9FF',
          border: '1px solid #BFDBFE',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '32px',
        }}>
          <p style={{ fontSize: '13px', color: '#0369A1', margin: 0, lineHeight: '1.6' }}>
            <strong>Privacy First:</strong> We never post, apply, or access your accounts without explicit permission. All connections are encrypted and stored securely.
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div style={{
        borderTop: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        padding: '20px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button
            onClick={handleContinue}
            style={{
              padding: '10px 28px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E40AF'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563EB'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.2)'
            }}
          >
            {connectedPlatforms.size > 0 ? 'Continue' : 'Skip for now'}
          </button>
        </div>
      </div>
    </div>
  )
}
