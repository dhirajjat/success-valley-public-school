import React from "react";
import {
 
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,

} from "lucide-react";

import logo from "@/app/assets/logo.png";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-gradient-to-br from-gray-900 to-[#1E3A8A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo and About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12   flex items-center justify-center shadow-lg">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Success Valley
                  </h3>
                  <p className="text-xs text-gray-300">Public School</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Nurturing excellence for 5 years. Building leaders of tomorrow
                through innovative education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Parent Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Student Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Career Opportunities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> Downloads
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#F59E0B] transition text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" /> News & Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Kumhariya Rao,
                    <br />
                    Success Valley Public School, 455118
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#F59E0B] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">8224009936</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#F59E0B] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">successvalleypublicschool@gmail.com</span>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-sm">Follow Us</h5>
                <div className="flex gap-3">
                  {/* <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F59E0B] flex items-center justify-center transition backdrop-blur-sm border border-white/20"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F59E0B] flex items-center justify-center transition backdrop-blur-sm border border-white/20"
                  >
                    <Twitter className="h-5 w-5" />
                  </a> */}
                  <a
                    href="https://www.instagram.com/successvalley_publicschool?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F59E0B] flex items-center justify-center transition backdrop-blur-sm border border-white/20"
                  >
                    <Instagram className="h-5 w-5" />
                  
                    
                  </a>
                
                  {/* <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F59E0B] flex items-center justify-center transition backdrop-blur-sm border border-white/20"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F59E0B] flex items-center justify-center transition backdrop-blur-sm border border-white/20"
                  >
                    <Youtube className="h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm text-center md:text-left">
                &copy; 2026 Success Valley Public School. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Images used are for representational purposes only.
              </p>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="#" className="hover:text-[#F59E0B] transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#F59E0B] transition">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#F59E0B] transition">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
