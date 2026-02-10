'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./map-component'), { 
  ssr: false,
  loading: () => <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>Loading map...</div>
})

interface LocationPickerProps {
  onLocationSelect: (city: string, coords: { lat: number; lng: number }, radius: string) => void
  initialCity?: string
  initialRadius?: string
  onNext: () => void
  isSubmitting: boolean
  isLastQuestion: boolean
}

interface CityOption {
  name: string
  lat: number
  lon: number
  display_name: string
}

export function LocationPicker({
  onLocationSelect,
  initialCity = '',
  initialRadius = '50',
  onNext,
  isSubmitting,
  isLastQuestion,
}: LocationPickerProps) {
  const { t } = useLanguage()
  const [city, setCity] = useState(initialCity)
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [radius, setRadius] = useState(initialRadius)
  const [mounted, setMounted] = useState(false)
  const [suggestions, setSuggestions] = useState<CityOption[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fetch city suggestions as user types
  useEffect(() => {
    if (!city || city.length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const fetchSuggestions = async () => {
      setIsLoadingSuggestions(true)
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=10`
        )
        const results = await response.json()
        setSuggestions(
          results.map((r: any) => ({
            name: r.name,
            lat: parseFloat(r.lat),
            lon: parseFloat(r.lon),
            display_name: r.display_name,
          }))
        )
        setShowSuggestions(true)
      } catch (error) {
        console.error('[v0] Suggestion fetch error:', error)
        setSuggestions([])
      } finally {
        setIsLoadingSuggestions(false)
      }
    }

    const debounceTimer = setTimeout(fetchSuggestions, 300)
    return () => clearTimeout(debounceTimer)
  }, [city])

  const handleSelectSuggestion = (suggestion: CityOption) => {
    setCity(suggestion.name)
    setCoords({ lat: suggestion.lat, lng: suggestion.lon })
    setSuggestions([])
    setShowSuggestions(false)
    onLocationSelect(suggestion.name, { lat: suggestion.lat, lng: suggestion.lon }, radius)
  }

  if (!mounted) return null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* City Search with Autocomplete */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F172A' }}>
          {t('onboarding.jobLocationSearchCity')}
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onFocus={() => city && suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={t('onboarding.jobLocationPlaceholder')}
          style={{
            padding: '12px 14px',
            borderRadius: '9px',
            border: '2px solid #E5E7EB',
            background: '#FFFFFF',
            fontSize: '14px',
            color: '#0F172A',
            fontFamily: 'inherit',
            transition: 'all 200ms ease',
            outline: 'none',
            position: 'relative',
            zIndex: 10,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#2563EB'
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#E5E7EB'
            e.currentTarget.style.boxShadow = 'none'
            // Delay to allow suggestion click to register
            setTimeout(() => setShowSuggestions(false), 100)
          }}
        />

        {/* Autocomplete Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '6px',
              background: '#FFFFFF',
              borderRadius: '9px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              zIndex: 20,
              maxHeight: '300px',
              overflowY: 'auto',
            }}
          >
            {suggestions.map((suggestion, idx) => (
              <button
                key={`${suggestion.lat}-${suggestion.lon}-${idx}`}
                onMouseDown={(e) => {
                  e.preventDefault()
                  handleSelectSuggestion(suggestion)
                }}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: 'none',
                  background: idx === 0 ? '#F0F9FF' : '#FFFFFF',
                  color: '#0F172A',
                  textAlign: 'left',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  borderBottom: idx < suggestions.length - 1 ? '1px solid #F1F5F9' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F0F9FF'
                  e.currentTarget.style.color = '#2563EB'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF'
                  e.currentTarget.style.color = '#0F172A'
                }}
              >
                <div style={{ fontWeight: '500' }}>{suggestion.name}</div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                  {suggestion.display_name.substring(0, 60)}
                </div>
              </button>
            ))}
          </div>
        )}

        {isLoadingSuggestions && city && city.length >= 2 && (
          <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
            {t('onboarding.jobLocationGeolocating')}
          </div>
        )}
      </div>

      {/* Map */}
      {coords && (
        <MapComponent coords={coords} radius={parseInt(radius)} city={city} />
      )}

      {/* Distance Slider */}
      {coords && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F172A' }}>
              {t('onboarding.jobLocationRadius')}
            </label>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#2563EB' }}>
              {t('onboarding.jobLocationRadiusKm').replace('{km}', radius)}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="200"
            value={radius}
            onChange={(e) => {
              setRadius(e.target.value)
              onLocationSelect(city, coords, e.target.value)
            }}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#E5E7EB',
              outline: 'none',
              cursor: 'pointer',
              accentColor: '#2563EB',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94A3B8' }}>
            <span>1 km</span>
            <span>200 km</span>
          </div>
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={onNext}
        disabled={!city || !coords || isSubmitting}
        style={{
          padding: '14px 16px',
          borderRadius: '10px',
          background: city && coords ? '#2563EB' : '#E5E7EB',
          color: city && coords ? 'white' : '#94A3B8',
          border: 'none',
          fontSize: '15px',
          fontWeight: '600',
          cursor: city && coords && !isSubmitting ? 'pointer' : 'not-allowed',
          transition: 'all 200ms ease',
          letterSpacing: '-0.2px',
          boxShadow: city && coords && !isSubmitting ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
        }}
        onMouseEnter={(e) => {
          if (city && coords && !isSubmitting) {
            e.currentTarget.style.background = '#1E40AF'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }
        }}
        onMouseLeave={(e) => {
          if (city && coords && !isSubmitting) {
            e.currentTarget.style.background = '#2563EB'
            e.currentTarget.style.transform = 'translateY(0)'
          }
        }}
      >
        {isLastQuestion ? (isSubmitting ? t('onboarding.settingUp') : t('onboarding.completeSetup')) : t('onboarding.continue')}
      </button>
    </div>
  )
}
