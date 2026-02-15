
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4a3728] text-[#f8f1e9] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight text-pink-300">Sweet Cake House</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Baking happiness since 2018. We use the finest organic ingredients to create memories that last a lifetime. Every bite is a celebration!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400 transition-colors bg-white/10 p-2 rounded-full"><Facebook size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition-colors bg-white/10 p-2 rounded-full"><Instagram size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition-colors bg-white/10 p-2 rounded-full"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-pink-200">OUR SPECIALTIES</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#/shop" className="hover:text-pink-200 transition-colors">Custom Birthday Cakes</a></li>
              <li><a href="#/shop" className="hover:text-pink-200 transition-colors">Wedding Tier Cakes</a></li>
              <li><a href="#/shop" className="hover:text-pink-200 transition-colors">Gourmet Cupcakes</a></li>
              <li><a href="#/shop" className="hover:text-pink-200 transition-colors">Vegan Options</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-pink-200">VISIT SHOP</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-pink-300 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-pink-300 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-pink-300 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-pink-500 fill-pink-500" /> by Sweet Cake House © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
