'use client';

// All Routes Page
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Bus, 
  Clock, 
  DollarSign, 
  MapPin,
  Search,
  Filter,
  Navigation
} from 'lucide-react';
import { SAMPLE_ROUTES } from '@/lib/constants/routes';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RoutesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredRoutes = SAMPLE_ROUTES.filter((route) => {
    const matchesSearch =
      route.route_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.route_code.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterType === 'all' || route.vehicle_type === filterType;

    return matchesSearch && matchesFilter;
  });

  const vehicleTypes = [
    { value: 'all', label: 'All Vehicles' },
    { value: 'jeepney', label: 'Jeepney' },
    { value: 'multicab', label: 'Multicab' },
    { value: 'bus', label: 'Bus' },
    { value: 'van', label: 'Van' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">All Routes</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse all available transportation routes in Butuan City
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search routes, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {vehicleTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-green-600">
                  {SAMPLE_ROUTES.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Routes
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {SAMPLE_ROUTES.filter((r) => r.vehicle_type === 'jeepney').length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Jeepney Routes
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {SAMPLE_ROUTES.filter((r) => r.vehicle_type === 'multicab').length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Multicab Routes
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {SAMPLE_ROUTES.filter((r) => r.isActive).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Active Now
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Routes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: route.color }}
                          />
                          <span className="font-bold text-lg">{route.route_code}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {route.route_name}
                        </h3>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium uppercase">
                        {route.vehicle_type}
                      </div>
                    </div>

                    {/* Route Path */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {route.origin}
                        </span>
                      </div>
                      <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-700 ml-1 h-6" />
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {route.destination}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span>₱{route.fare}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{route.estimated_time}m</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{route.stops.length} stops</span>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                      <strong>Hours:</strong> {route.operating_hours.start} -{' '}
                      {route.operating_hours.end}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Link href="/map" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <MapPin className="w-4 h-4 mr-2" />
                          View Map
                        </Button>
                      </Link>
                      <Link href="/planner" className="flex-1">
                        <Button size="sm" className="w-full">
                          <Navigation className="w-4 h-4 mr-2" />
                          Use Route
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredRoutes.length === 0 && (
            <div className="text-center py-12">
              <Bus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No routes found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
