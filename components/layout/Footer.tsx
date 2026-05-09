'use client';

// Footer Component
import Link from 'next/link';
import { MapPin, Mail, Phone, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">ERA ROUTES</h3>
                <p className="text-sm text-gray-400">Know where to ride in Butuan</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted companion for navigating Butuan City. Find routes, plan trips, 
              and discover the best way to commute across the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/map" className="hover:text-green-400 transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="/routes" className="hover:text-green-400 transition-colors">
                  All Routes
                </Link>
              </li>
              <li>
                <Link href="/planner" className="hover:text-green-400 transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="hover:text-green-400 transition-colors">
                  Emergency
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <span className="text-sm">support@routebutuan.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <span className="text-sm">(085) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                <span className="text-sm">Butuan City, Agusan del Norte</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Route Butuan. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
