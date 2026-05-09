'use client';

// Landing Page - Beautiful Startup-Style Homepage
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Shield, 
  Users, 
  Smartphone,
  ArrowRight,
  Bus,
  Map,
  Search,
  Star,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  const features = [
    {
      icon: Map,
      title: 'Interactive Map',
      description: 'Explore Butuan City with our detailed interactive map showing all routes and terminals.',
      color: 'text-blue-600'
    },
    {
      icon: Navigation,
      title: 'Smart Route Planning',
      description: 'Get step-by-step directions with fare estimates and travel time for your commute.',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Stay informed with live traffic alerts, route closures, and schedule changes.',
      color: 'text-orange-600'
    },
    {
      icon: Shield,
      title: 'Emergency Access',
      description: 'Quick access to nearby hospitals, police stations, and emergency services.',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Help improve routes with community reports and suggestions.',
      color: 'text-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Seamless experience on any device - desktop, tablet, or mobile.',
      color: 'text-pink-600'
    }
  ];

  const stats = [
    { label: 'Active Routes', value: '50+', icon: Bus },
    { label: 'Daily Users', value: '10K+', icon: Users },
    { label: 'Terminals', value: '25+', icon: MapPin },
    { label: 'User Rating', value: '4.8', icon: Star }
  ];

  const popularRoutes = [
    { from: 'Robinsons', to: 'SM Butuan', fare: '₱15', time: '20 min' },
    { from: 'CSU', to: 'City Center', fare: '₱20', time: '35 min' },
    { from: 'Bancasi Airport', to: 'Robinsons', fare: '₱25', time: '25 min' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  #1 Transportation App in Butuan
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Know Where to{' '}
                <span className="gradient-text">Ride</span>
                {' '}in Butuan
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Your trusted companion for navigating Butuan City. Find routes, 
                plan trips, and discover the best way to commute - all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/map">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Explore Map
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/planner">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Plan Your Trip
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Map Preview Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-80"
              >
                <Card className="glass shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-green-600 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Live Map</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Real-time tracking
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 h-40 rounded-lg flex items-center justify-center">
                      <Map className="w-16 h-16 text-white/50" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Route Card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-40 left-0 w-72"
              >
                <Card className="glass shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Popular Route
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                        Active
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full" />
                        <span className="font-medium">Robinsons Butuan</span>
                      </div>
                      <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-700 ml-1.5 h-8" />
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full" />
                        <span className="font-medium">SM City Butuan</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Fare: ₱15</span>
                      <span className="text-gray-600 dark:text-gray-400">20 mins</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Action Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 right-10 w-64"
              >
                <Card className="glass shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Search className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">Quick Search</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">
                        Where do you want to go?
                      </div>
                      <Button size="sm" className="w-full">
                        Find Route
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Navigate
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to make your commute easier and stress-free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200 dark:hover:border-green-800">
                  <CardContent className="p-6">
                    <div className={`${feature.color} mb-4`}>
                      <feature.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Routes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Most traveled routes in Butuan City
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Bus className="w-8 h-8 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">
                        {route.fare}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span className="font-medium">{route.from}</span>
                      </div>
                      <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-700 ml-1 h-6" />
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="font-medium">{route.to}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {route.time}
                      </span>
                      <Link href="/planner">
                        <Button size="sm" variant="ghost">
                          View Route
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Join thousands of commuters who trust Route Butuan every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/map">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10">
                  Explore Map
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
