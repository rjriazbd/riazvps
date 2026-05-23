"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, User, Bell } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg px-3 py-1.5">
              <span className="text-white font-bold text-xl md:text-2xl">বাংলা</span>
            </div>
            <span className="text-white font-bold text-lg md:text-xl hidden sm:block">OTT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-primary transition-colors font-medium">
              হোম
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-primary transition-colors font-medium">
              মুভি
            </Link>
            <Link href="/series" className="text-gray-300 hover:text-primary transition-colors font-medium">
              সিরিজ
            </Link>
            <Link href="/natok" className="text-gray-300 hover:text-primary transition-colors font-medium">
              নাটক
            </Link>
            <Link href="/browse" className="text-gray-300 hover:text-primary transition-colors font-medium">
              ব্রাউজ
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors font-medium">
              সাবস্ক্রিপশন
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-black/80 border border-gray-600 rounded-full px-3 py-1.5 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="সার্চ করুন..."
                    className="bg-transparent text-white text-sm w-40 md:w-60 outline-none placeholder-gray-400"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)}>
                    <X size={18} className="text-gray-400 hover:text-white" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-primary transition-colors p-2"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Notification */}
            <button className="hidden md:block text-white hover:text-primary transition-colors p-2 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>

            {/* User/Login */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full transition-colors text-sm font-medium"
            >
              <User size={16} />
              লগইন
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 animate-slideIn">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link href="/" className="text-white hover:text-primary transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              হোম
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-primary transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              মুভি
            </Link>
            <Link href="/series" className="text-gray-300 hover:text-primary transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              সিরিজ
            </Link>
            <Link href="/natok" className="text-gray-300 hover:text-primary transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              নাটক
            </Link>
            <Link href="/browse" className="text-gray-300 hover:text-primary transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              ব্রাউজ
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              সাবস্ক্রিপশন
            </Link>
            <div className="border-t border-gray-800 pt-4">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                লগইন / রেজিস্টার
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
