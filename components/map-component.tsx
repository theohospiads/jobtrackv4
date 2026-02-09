'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'

interface MapComponentProps {
  coords: { lat: number; lng: number }
  radius: number
  city: string
}

export default function MapComponent({ coords, radius, city }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null)
  const circleRef = useRef<L.Circle | null>(null)
  const markerRef = useRef<L.Marker | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize map only once
    if (!mapRef.current) {
      mapRef.current = L.map(containerRef.current).setView([coords.lat, coords.lng], 10)

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapRef.current)

      // Add marker
      markerRef.current = L.marker([coords.lat, coords.lng], {
        icon: L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          shadowSize: [41, 41],
        }),
      }).addTo(mapRef.current)

      // Add circle
      circleRef.current = L.circle([coords.lat, coords.lng], {
        color: '#2563EB',
        fillColor: '#3B82F6',
        fillOpacity: 0.2,
        weight: 2,
        radius: radius * 1000, // Convert km to meters
      }).addTo(mapRef.current)
    } else {
      // Update existing map, marker, and circle
      mapRef.current.setView([coords.lat, coords.lng], 10)

      if (markerRef.current) {
        markerRef.current.setLatLng([coords.lat, coords.lng])
      }

      if (circleRef.current) {
        circleRef.current.setLatLng([coords.lat, coords.lng])
        circleRef.current.setRadius(radius * 1000)
      }
    }
  }, [coords, radius])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '320px',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    />
  )
}
