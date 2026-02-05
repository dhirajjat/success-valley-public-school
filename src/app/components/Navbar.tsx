import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {  Menu, X } from "lucide-react";

import logo from "@/app/assets/logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      {" "}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b border-white/11 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            {/* <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1
                  className="font-bold text-lg text-[#1E3A8A]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Success Valley
                </h1>
                <p className="text-xs text-gray-600">Public School</p>
              </div>
            </div> */}
            <img
              className="  h-12 w-14 md:h-18 md:w-20   "
              src={logo}
              alt="Success Valley Public School Logo"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#2265e3d3] transition font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#2265e3d3] transition font-medium"
              >
                About
              </a>
              <a
                href="#programs"
                className="text-gray-700 hover:text-[#2265e3d3] transition font-medium"
              >
                Programs
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-[#2265e3d3] transition font-medium"
              >
                Gallery
              </a>

              <Button
                variant="outline"
                className=" text-[rgb(237,228,228)] bg-[#E7A201] hover:bg-[#d47f00f9] hover:text-white   rounded-xl"
              >
                <a href="#contact">Contact</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-[#1E3A8A] transition font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-[#1E3A8A] transition font-medium"
                >
                  About
                </a>
                <a
                  href="#programs"
                  className="text-gray-700 hover:text-[#1E3A8A] transition font-medium"
                >
                  Programs
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-[#1E3A8A] transition font-medium"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#1E3A8A] transition font-medium"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
