import React from "react";
import { Mail, Copyright, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Branding & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold"><span className="text-red-500">Job</span> <span className="text-amber-400">Hunt</span></h1>
          <p className="flex items-center justify-center md:justify-start mt-1 text-gray-400 text-sm">
            <Copyright className="w-4 h-4 mr-1" />
            2025 JobHunt. All rights reserved.
          </p>
        </div>

        {/* Right Side: Contact Details */}
        <div className="flex flex-col items-center md:items-end space-y-1">
          {/* Email Options */}
          <a href="mailto:aman7549raj@gmail.com" className="flex items-center text-gray-300 hover:text-white transition">
            <Mail className="w-5 h-5 mr-2" /> aman7549raj@gmail.com
          </a>
          

          {/* Phone Number */}
          <p className="flex items-center text-gray-300 mt-2">
            <Phone className="w-5 h-6 mr-2" /> 9142277856
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
