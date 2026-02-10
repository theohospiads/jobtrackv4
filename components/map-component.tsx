'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

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
  const initializedRef = useRef(false)

  // Initialize map only once
  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return

    mapRef.current = L.map(containerRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
    }).setView([coords.lat, coords.lng], 11)

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(mapRef.current)

    // Add marker with custom styling
    markerRef.current = L.marker([coords.lat, coords.lng], {
      icon: L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [32, 41],
        iconAnchor: [16, 41],
        shadowSize: [41, 41],
      }),
    }).addTo(mapRef.current)

    // Add circle for radius
    circleRef.current = L.circle([coords.lat, coords.lng], {
      color: '#2563EB',
      fillColor: '#3B82F6',
      fillOpacity: 0.15,
      weight: 2.5,
      radius: radius * 1000, // Convert km to meters
      dashArray: '5, 5',
    }).addTo(mapRef.current)

    initializedRef.current = true
  }, []) // Empty dependency array - only initialize once

  // Update marker and circle position/radius without resetting view
  useEffect(() => {
    if (!mapRef.current) return

    if (markerRef.current) {
      markerRef.current.setLatLng([coords.lat, coords.lng])
    }

    if (circleRef.current) {
      circleRef.current.setLatLng([coords.lat, coords.lng])
      circleRef.current.setRadius(radius * 1000)
    }
  }, [coords, radius])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '500px',
        borderRadius: '14px',
        border: '1px solid #E5E7EB',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        background: '#F5F5F5',
      }}
    />
  )
}
