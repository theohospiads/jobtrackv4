'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/components/language-provider'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./map-component'), { ssr: false })

interface LocationPickerProps {
  onLocationSelect: (city: string, coords: { lat: number; lng: number }, radius: string) => void
  initialCity?: string
  initialRadius?: string
  onNext: () => void
  isSubmitting: boolean
  isLastQuestion: boolean
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
  const [isGeolocating, setIsGeolocating] = useState(false)
  const [geoError, setGeoError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Geocode city to coordinates
  useEffect(() => {
    if (!city || city.length < 2) return

    const geocodeCity = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`
        )
        const results = await response.json()
        if (results.length > 0) {
          const result = results[0]
          setCoords({ lat: parseFloat(result.lat), lng: parseFloat(result.lon) })
          onLocationSelect(city, { lat: parseFloat(result.lat), lng: parseFloat(result.lon) }, radius)
        }
      } catch (error) {
        console.error('Geocoding error:', error)
      }
    }

    const debounceTimer = setTimeout(geocodeCity, 500)
    return () => clearTimeout(debounceTimer)
  }, [city, radius, onLocationSelect])

  const handleUseCurrentLocation = () => {
    setIsGeolocating(true)
    setGeoError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        setCoords({ lat: latitude, lng: longitude })

        // Reverse geocode to get city name
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
          const result = await response.json()
          const cityName = result.address?.city || result.address?.town || result.address?.county || 'Current Location'
          setCity(cityName)
          onLocationSelect(cityName, { lat: latitude, lng: longitude }, radius)
        } catch (error) {
          console.error('Reverse geocoding error:', error)
          setCity('Current Location')
          onLocationSelect('Current Location', { lat: latitude, lng: longitude }, radius)
        }

        setIsGeolocating(false)
      },
      (error) => {
        setGeoError(t('onboarding.jobLocationLocationError'))
        setIsGeolocating(false)
      }
    )
  }

  if (!mounted) return null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Buttons Section */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={handleUseCurrentLocation}
          disabled={isGeolocating}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '9px',
            background: '#F1F5F9',
            color: '#0F172A',
            border: '1px solid #CBD5E1',
            fontSize: '14px',
            fontWeight: '600',
            cursor: isGeolocating ? 'wait' : 'pointer',
            transition: 'all 200ms ease',
          }}
          onMouseEnter={(e) => {
            if (!isGeolocating) {
              e.currentTarget.style.background = '#E0E7FF'
              e.currentTarget.style.borderColor = '#A5B4FC'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F1F5F9'
            e.currentTarget.style.borderColor = '#CBD5E1'
          }}
        >
          {isGeolocating ? t('onboarding.jobLocationGeolocating') : t('onboarding.jobLocationUseCurrentLocation')}
        </button>
      </div>

      {/* City Search */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: '#0F172A' }}>
          {t('onboarding.jobLocationSearchCity')}
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#2563EB'
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#E5E7EB'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
      </div>

      {/* Map */}
      {coords && (
        <MapComponent
          coords={coords}
          radius={parseInt(radius)}
          city={city}
        />
      )}

      {/* Error Message */}
      {geoError && (
        <div
          style={{
            padding: '12px 14px',
            borderRadius: '8px',
            background: '#FEE2E2',
            border: '1px solid #FECACA',
            color: '#DC2626',
            fontSize: '13px',
          }}
        >
          {geoError}
        </div>
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
