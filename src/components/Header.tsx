"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, User, Bell } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="https://res.cloudinary.com/db1ulwbxc/image/upload/v1779044554/700906516_26654958984183418_6821224961536211562_n_lpfxqc.jpg"
              alt="GolpoBox"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
              GolpoBox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-white text-sm font-medium tracking-wide hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="/movies" className="text-gray-400 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300">
              Movies
            </Link>
            <Link href="/series" className="text-gray-400 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300">
              Series
            </Link>
            <Link href="/originals" className="text-gray-400 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300">
              Originals
            </Link>
            <Link href="/browse" className="text-gray-400 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300">
              Browse
            </Link>
            <Link href="/pricing" className="text-gray-400 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300">
              Pricing
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center glass rounded-full px-4 py-2 animate-scaleIn">
                  <input
                    type="text"
                    placeholder="Search titles, genres..."
                    className="bg-transparent text-white text-sm w-48 md:w-72 outline-none placeholder-gray-500"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)}>
                    <X size={16} className="text-gray-400 hover:text-white transition-colors" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Notification */}
            <button className="hidden md:block text-gray-300 hover:text-white transition-colors duration-300 p-2 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
            </button>

            {/* User/Login */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-md transition-all duration-300 text-sm font-medium tracking-wide"
            >
              Sign In
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass border-t border-white/5 animate-slideDown">
          <nav className="flex flex-col px-8 py-8 gap-6">
            <Link href="/" className="text-white hover:text-primary transition-colors text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/movies" className="text-gray-400 hover:text-white transition-colors text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Movies
            </Link>
            <Link href="/series" className="text-gray-400 hover:text-white transition-colors text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Series
            </Link>
            <Link href="/originals" className="text-gray-400 hover:text-white transition-colors text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Originals
            </Link>
            <Link href="/browse" className="text-gray-400 hover:text-white transition-colors text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Browse
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <div className="border-t border-white/10 pt-6 mt-2">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-md transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
