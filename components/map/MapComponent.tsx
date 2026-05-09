'use client';

// Interactive Map Component using Leaflet
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { BUTUAN_CENTER, MAJOR_LANDMARKS, TERMINALS, EMERGENCY_LOCATIONS } from '@/lib/constants/locations';
import { SAMPLE_ROUTES } from '@/lib/constants/routes';

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  height?: string;
  showRoutes?: boolean;
  showLandmarks?: boolean;
  showTerminals?: boolean;
  showEmergency?: boolean;
}

export default function MapComponent({
  height = '600px',
  showRoutes = true,
  showLandmarks = true,
  showTerminals = true,
  showEmergency = false,
}: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView(
      [BUTUAN_CENTER.lat, BUTUAN_CENTER.lng],
      13
    );

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom icons
    const landmarkIcon = (type: string) => {
      const colors: Record<string, string> = {
        mall: '#3B82F6',
        school: '#8B5CF6',
        hospital: '#EF4444',
        terminal: '#10B981',
        government: '#F59E0B',
        other: '#6B7280',
      };

      return L.divIcon({
        html: `<div style="background-color: ${colors[type] || colors.other}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });
    };

    const terminalIcon = L.divIcon({
      html: `<div style="background-color: #10B981; width: 35px; height: 35px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">T</div>`,
      className: 'custom-marker',
      iconSize: [35, 35],
      iconAnchor: [17.5, 17.5],
    });

    const emergencyIcon = L.divIcon({
      html: `<div style="background-color: #EF4444; width: 35px; height: 35px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">!</div>`,
      className: 'custom-marker',
      iconSize: [35, 35],
      iconAnchor: [17.5, 17.5],
    });

    // Add landmarks
    if (showLandmarks) {
      MAJOR_LANDMARKS.forEach((landmark) => {
        const marker = L.marker([landmark.coordinates.lat, landmark.coordinates.lng], {
          icon: landmarkIcon(landmark.type),
        }).addTo(map);

        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-lg mb-1">${landmark.name}</h3>
            <p class="text-sm text-gray-600 mb-2">${landmark.description || ''}</p>
            <p class="text-xs text-gray-500">${landmark.address}</p>
          </div>
        `);
      });
    }

    // Add terminals
    if (showTerminals) {
      TERMINALS.forEach((terminal) => {
        const marker = L.marker([terminal.coordinates.lat, terminal.coordinates.lng], {
          icon: terminalIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-lg mb-1">${terminal.name}</h3>
            <p class="text-sm text-gray-600 mb-2">${terminal.type.toUpperCase()} Terminal</p>
            <p class="text-xs text-gray-500 mb-2">${terminal.address}</p>
            <p class="text-xs"><strong>Hours:</strong> ${terminal.operating_hours.start} - ${terminal.operating_hours.end}</p>
          </div>
        `);
      });
    }

    // Add emergency locations
    if (showEmergency) {
      EMERGENCY_LOCATIONS.forEach((location) => {
        const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
          icon: emergencyIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-lg mb-1">${location.name}</h3>
            <p class="text-sm text-gray-600 mb-2">${location.type.replace('_', ' ').toUpperCase()}</p>
            <p class="text-xs text-gray-500 mb-1">${location.address}</p>
            <p class="text-xs mb-1"><strong>Contact:</strong> ${location.contact}</p>
            ${location.hotline ? `<p class="text-xs"><strong>Hotline:</strong> ${location.hotline}</p>` : ''}
            ${location.is24Hours ? '<p class="text-xs text-green-600 font-semibold">Open 24 Hours</p>' : ''}
          </div>
        `);
      });
    }

    // Add routes
    if (showRoutes) {
      SAMPLE_ROUTES.forEach((route) => {
        const polyline = L.polyline(
          route.route_coordinates.map((coord) => [coord.lat, coord.lng]),
          {
            color: route.color,
            weight: 4,
            opacity: 0.7,
          }
        ).addTo(map);

        polyline.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-lg mb-1">${route.route_name}</h3>
            <p class="text-sm text-gray-600 mb-2">${route.vehicle_type.toUpperCase()} - ${route.route_code}</p>
            <p class="text-xs mb-1"><strong>Fare:</strong> ₱${route.fare}</p>
            <p class="text-xs mb-1"><strong>Time:</strong> ~${route.estimated_time} minutes</p>
            <p class="text-xs"><strong>Stops:</strong> ${route.stops.length}</p>
          </div>
        `);

        // Add markers for stops
        route.stops.forEach((stop, index) => {
          const stopMarker = L.circleMarker([stop.coordinates.lat, stop.coordinates.lng], {
            radius: 6,
            fillColor: route.color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
          }).addTo(map);

          stopMarker.bindPopup(`
            <div class="p-2">
              <h4 class="font-semibold mb-1">Stop ${index + 1}: ${stop.name}</h4>
              ${stop.landmark ? `<p class="text-xs text-gray-600">${stop.landmark}</p>` : ''}
            </div>
          `);
        });
      });
    }

    // Add user location control
    map.locate({ setView: false, maxZoom: 16 });

    map.on('locationfound', (e) => {
      const radius = e.accuracy / 2;
      L.marker(e.latlng, {
        icon: L.divIcon({
          html: `<div style="background-color: #3B82F6; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);"></div>`,
          className: 'user-location-marker',
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        }),
      })
        .addTo(map)
        .bindPopup('You are here');

      L.circle(e.latlng, radius).addTo(map);
    });

    mapRef.current = map;

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [showRoutes, showLandmarks, showTerminals, showEmergency]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height, width: '100%' }}
      className="rounded-xl shadow-lg z-0"
    />
  );
}
