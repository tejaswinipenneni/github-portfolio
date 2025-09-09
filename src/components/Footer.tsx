import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Tejaswini Penneni</span>
          </div>
          <p className="text-gray-400 mb-6">
           Full Stack Java Developer
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & TypeScript</span>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tejaswini Penneni. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
