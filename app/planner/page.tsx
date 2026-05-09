'use client';

// Trip Planner Page
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  DollarSign,
  ArrowRight,
  Bus,
  Bookmark,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAMPLE_ROUTES } from '@/lib/constants/routes';
import { CommutePlan, CommuteStep } from '@/lib/types';

export default function PlannerPage() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [commutePlan, setCommutePlan] = useState<CommutePlan | null>(null);
  const [loading, setLoading] = useState(false);

  const popularLocations = [
    'Robinsons Place Butuan',
    'SM City Butuan',
    'Caraga State University',
    'Father Saturnino Urios University',
    'Bancasi Airport',
    'Gaisano Mall',
    'Langihan Terminal',
    'Libertad Market'
  ];

  const handlePlanTrip = () => {
    if (!origin || !destination) return;

    setLoading(true);

    // Simulate route planning
    setTimeout(() => {
      // Simple route matching logic
      const matchingRoute = SAMPLE_ROUTES.find(
        (route) =>
          (route.origin.toLowerCase().includes(origin.toLowerCase()) &&
            route.destination.toLowerCase().includes(destination.toLowerCase())) ||
          (route.destination.toLowerCase().includes(origin.toLowerCase()) &&
            route.origin.toLowerCase().includes(destination.toLowerCase()))
      );

      if (matchingRoute) {
        const steps: CommuteStep[] = [
          {
            step: 1,
            instruction: `Walk to ${matchingRoute.stops[0].name}`,
            vehicle_type: 'walk',
            fare: 0,
            landmark: matchingRoute.stops[0].landmark,
          },
          {
            step: 2,
            instruction: `Ride ${matchingRoute.vehicle_type} - ${matchingRoute.route_name}`,
            vehicle_type: matchingRoute.vehicle_type,
            route_name: matchingRoute.route_code,
            fare: matchingRoute.fare,
            distance: `${matchingRoute.stops.length} stops`,
          },
          {
            step: 3,
            instruction: `Arrive at ${matchingRoute.destination}`,
            vehicle_type: 'walk',
            fare: 0,
          },
        ];

        setCommutePlan({
          origin,
          destination,
          steps,
          totalFare: matchingRoute.fare,
          totalTime: matchingRoute.estimated_time,
          totalDistance: `${(matchingRoute.stops.length * 2).toFixed(1)} km`,
        });
      } else {
        // Generate generic multi-step route
        setCommutePlan({
          origin,
          destination,
          steps: [
            {
              step: 1,
              instruction: `Walk to nearest terminal`,
              vehicle_type: 'walk',
              fare: 0,
            },
            {
              step: 2,
              instruction: `Ride jeepney to city center`,
              vehicle_type: 'jeepney',
              fare: 15,
            },
            {
              step: 3,
              instruction: `Transfer to multicab`,
              vehicle_type: 'multicab',
              fare: 12,
            },
            {
              step: 4,
              instruction: `Arrive at destination`,
              vehicle_type: 'walk',
              fare: 0,
            },
          ],
          totalFare: 27,
          totalTime: 45,
          totalDistance: '8.5 km',
        });
      }

      setLoading(false);
    }, 1500);
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'jeepney':
      case 'multicab':
      case 'bus':
      case 'van':
        return <Bus className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Plan Your Trip</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Get step-by-step directions for your commute in Butuan City
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Input Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="w-5 h-5 mr-2 text-green-600" />
                    Route Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Origin */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Starting Point
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                      <Input
                        placeholder="Enter origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="pl-10"
                        list="origin-suggestions"
                      />
                      <datalist id="origin-suggestions">
                        {popularLocations.map((loc) => (
                          <option key={loc} value={loc} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Destination
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
                      <Input
                        placeholder="Enter destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="pl-10"
                        list="destination-suggestions"
                      />
                      <datalist id="destination-suggestions">
                        {popularLocations.map((loc) => (
                          <option key={loc} value={loc} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Plan Button */}
                  <Button
                    onClick={handlePlanTrip}
                    disabled={!origin || !destination || loading}
                    className="w-full"
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Planning...
                      </>
                    ) : (
                      <>
                        Find Route
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {/* Popular Routes */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="font-semibold mb-3 text-sm">Popular Routes</h4>
                    <div className="space-y-2">
                      {SAMPLE_ROUTES.slice(0, 3).map((route) => (
                        <button
                          key={route.id}
                          onClick={() => {
                            setOrigin(route.origin);
                            setDestination(route.destination);
                          }}
                          className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <div className="font-medium">{route.route_name}</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">
                                ₱{route.fare} • {route.estimated_time} min
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {commutePlan ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Summary Card */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-2xl font-bold">Your Route</h2>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Bookmark className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>

                        {/* Trip Summary */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-green-600">
                              ₱{commutePlan.totalFare}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Total Fare
                            </div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600">
                              {commutePlan.totalTime}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Minutes
                            </div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <Navigation className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-purple-600">
                              {commutePlan.totalDistance}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Distance
                            </div>
                          </div>
                        </div>

                        {/* Step-by-Step Directions */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Directions</h3>
                          {commutePlan.steps.map((step, index) => (
                            <motion.div
                              key={step.step}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                            >
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                  {step.step}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  {getVehicleIcon(step.vehicle_type)}
                                  <span className="font-semibold">
                                    {step.instruction}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 space-x-4">
                                  {step.route_name && (
                                    <span>Route: {step.route_name}</span>
                                  )}
                                  {step.fare > 0 && <span>Fare: ₱{step.fare}</span>}
                                  {step.landmark && <span>Near: {step.landmark}</span>}
                                  {step.distance && <span>{step.distance}</span>}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full"
                  >
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center h-full min-h-[500px] text-center p-12">
                        <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-full mb-6">
                          <Navigation className="w-16 h-16 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          Plan Your Journey
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                          Enter your starting point and destination to get detailed
                          directions with fare estimates and travel time.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
