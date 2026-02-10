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

  // Function to fit map to circle bounds with padding
  const fitMapToCircle = (map: L.Map, circle: L.Circle) => {
    const bounds = circle.getBounds()
    map.fitBounds(bounds, { padding: [80, 80] }) // Add padding (in pixels) for breathing room
  }

  // Initialize map only once
  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return

    mapRef.current = L.map(containerRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
    })

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

    // Fit map to circle with padding for good UX - wait for map to be ready
    mapRef.current.once('load', () => {
      if (mapRef.current && circleRef.current) {
        try {
          fitMapToCircle(mapRef.current, circleRef.current)
        } catch (e) {
          console.error('[v0] Failed to fit map bounds:', e)
        }
      }
    })

    // Add recenter button control
    const RecenterControl = L.Control.extend({
      options: {
        position: 'topright',
      },

      onAdd: () => {
        const container = L.DomUtil.create('div', 'leaflet-control leaflet-bar')
        const button = L.DomUtil.create('a', '', container)
        button.innerHTML = '📍'
        button.href = '#'
        button.title = 'Center map on location'
        button.style.width = '36px'
        button.style.height = '36px'
        button.style.lineHeight = '36px'
        button.style.textAlign = 'center'
        button.style.fontSize = '18px'
        button.style.cursor = 'pointer'
        button.style.userSelect = 'none'
        button.style.display = 'flex'
        button.style.alignItems = 'center'
        button.style.justifyContent = 'center'
        button.style.backgroundColor = '#FFFFFF'
        button.style.color = '#2563EB'
        button.style.border = '1px solid #E5E7EB'
        button.style.borderRadius = '4px'
        button.style.transition = 'all 200ms ease'
        button.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'

        button.onmouseover = () => {
          button.style.backgroundColor = '#EFF6FF'
          button.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)'
          button.style.borderColor = '#2563EB'
          button.style.transform = 'scale(1.05)'
        }

        button.onmouseout = () => {
          button.style.backgroundColor = '#FFFFFF'
          button.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
          button.style.borderColor = '#E5E7EB'
          button.style.transform = 'scale(1)'
        }

        L.DomEvent.on(button, 'click', (e: any) => {
          L.DomEvent.preventDefault(e)
          if (circleRef.current && mapRef.current) {
            fitMapToCircle(mapRef.current, circleRef.current)
          }
        })

        return container
      },
    })

    new RecenterControl().addTo(mapRef.current)

    initializedRef.current = true
  }, []) // Empty dependency array - only initialize once

  // Update marker and circle position/radius without resetting view
  useEffect(() => {
    if (!mapRef.current || !circleRef.current || !markerRef.current) return

    markerRef.current.setLatLng([coords.lat, coords.lng])
    circleRef.current.setLatLng([coords.lat, coords.lng])
    circleRef.current.setRadius(radius * 1000)
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
