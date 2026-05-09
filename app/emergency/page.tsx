'use client';

// Emergency Locations Page
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  MapPin, 
  Clock,
  Navigation,
  AlertCircle,
  Hospital,
  Shield,
  Flame,
  Building2
} from 'lucide-react';
import { EMERGENCY_LOCATIONS } from '@/lib/constants/locations';
import { motion } from 'framer-motion';

export default function EmergencyPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'hospital':
        return <Hospital className="w-6 h-6" />;
      case 'police':
        return <Shield className="w-6 h-6" />;
      case 'fire_station':
        return <Flame className="w-6 h-6" />;
      case 'barangay_hall':
        return <Building2 className="w-6 h-6" />;
      default:
        return <AlertCircle className="w-6 h-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'hospital':
        return 'bg-red-100 dark:bg-red-900/20 text-red-600';
      case 'police':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-600';
      case 'fire_station':
        return 'bg-orange-100 dark:bg-orange-900/20 text-orange-600';
      case 'barangay_hall':
        return 'bg-green-100 dark:bg-green-900/20 text-green-600';
      default:
        return 'bg-gray-100 dark:bg-gray-900/20 text-gray-600';
    }
  };

  const emergencyHotlines = [
    { name: 'Emergency Hotline', number: '911', description: 'All emergencies' },
    { name: 'Police Hotline', number: '117', description: 'Police assistance' },
    { name: 'Fire Department', number: '160', description: 'Fire emergencies' },
    { name: 'Red Cross', number: '143', description: 'Medical assistance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Emergency Services</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Quick access to emergency services and hotlines in Butuan City
            </p>
          </div>

          {/* Emergency Hotlines */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Hotlines</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyHotlines.map((hotline, index) => (
                <motion.div
                  key={hotline.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
                    <CardContent className="p-6 text-center">
                      <Phone className="w-8 h-8 mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-1">{hotline.number}</div>
                      <div className="font-semibold mb-1">{hotline.name}</div>
                      <div className="text-sm text-red-100">{hotline.description}</div>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-4 w-full"
                        onClick={() => window.open(`tel:${hotline.number}`)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emergency Locations */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Nearby Emergency Facilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {EMERGENCY_LOCATIONS.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${getColor(location.type)}`}>
                          {getIcon(location.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{location.address}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <span>{location.contact}</span>
                            </div>
                            {location.hotline && (
                              <div className="flex items-center space-x-2">
                                <AlertCircle className="w-4 h-4" />
                                <span>Hotline: {location.hotline}</span>
                              </div>
                            )}
                            {location.is24Hours && (
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-green-600" />
                                <span className="text-green-600 font-semibold">
                                  Open 24 Hours
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`tel:${location.contact}`)}
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Call
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                window.open(
                                  `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`
                                )
                              }
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Safety Tips */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-900">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                  Safety Tips
                </h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Always keep emergency numbers saved in your phone</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Know the location of the nearest hospital and police station</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Share your location with family when traveling alone</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Keep a first aid kit and emergency supplies at home</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>In case of emergency, stay calm and call 911 immediately</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
