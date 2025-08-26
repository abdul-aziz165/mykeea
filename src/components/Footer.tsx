import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">STEM KEEA</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the future through STEM education in the KEEA district. 
              We believe every child deserves access to quality science, technology, 
              engineering, and mathematics education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-green-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-green-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-green-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">KEEA District, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <a href="mailto:info@stemkeea.org" className="text-gray-300 text-sm hover:text-green-400">
                  info@stemkeea.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <a href="tel:+233123456789" className="text-gray-300 text-sm hover:text-green-400">
                  +233 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 STEM KEEA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;