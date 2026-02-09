'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean
  hasCompletedOnboarding: boolean
  user: { name: string; email: string } | null
  profile: Record<string, string> | null
  signUp: (name: string, email: string) => void
  updateProfile: (profileData: Record<string, string>) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [profile, setProfile] = useState<Record<string, string> | null>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check auth status on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('jobtrack_user')
    const storedProfile = localStorage.getItem('jobtrack_profile')

    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setUser(userData)
      setIsAuthenticated(true)

      if (storedProfile) {
        const profileData = JSON.parse(storedProfile)
        setProfile(profileData)
        setHasCompletedOnboarding(true)
      }
    }
    setMounted(true)
  }, [])

  // Redirect logic
  useEffect(() => {
    if (!mounted) return

    const publicRoutes = ['/sign-up', '/onboarding', '/connect-accounts', '/']
    const isPublicRoute = publicRoutes.includes(pathname)

    if (!isAuthenticated && !isPublicRoute) {
      router.push('/sign-up')
    } else if (isAuthenticated && !hasCompletedOnboarding && pathname !== '/onboarding' && pathname !== '/sign-up') {
      router.push('/onboarding')
    } else if (isAuthenticated && hasCompletedOnboarding && pathname === '/sign-up') {
      router.push('/dashboard')
    }
  }, [mounted, isAuthenticated, hasCompletedOnboarding, pathname, router])

  const signUp = (name: string, email: string) => {
    const userData = { name, email }
    localStorage.setItem('jobtrack_user', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    router.push('/onboarding')
  }

  const updateProfile = (profileData: Record<string, string>) => {
    localStorage.setItem('jobtrack_profile', JSON.stringify(profileData))
    setProfile(profileData)
    setHasCompletedOnboarding(true)
  }

  const signOut = () => {
    localStorage.removeItem('jobtrack_user')
    localStorage.removeItem('jobtrack_profile')
    setUser(null)
    setProfile(null)
    setIsAuthenticated(false)
    setHasCompletedOnboarding(false)
    router.push('/sign-up')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        hasCompletedOnboarding,
        user,
        profile,
        signUp,
        updateProfile,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
