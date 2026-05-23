"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      {/* Register Form */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="glass rounded-2xl p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1 mb-6">
              <span className="text-primary font-black text-2xl tracking-tight">STREAM</span>
              <span className="text-white font-light text-2xl tracking-tight">BD</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-3 tracking-tight">Create Account</h1>
            <p className="text-gray-500 text-sm font-light">Start your free 7-day trial today</p>
          </div>

          {/* Free trial badge */}
          <div className="bg-primary/10 border border-primary/20 rounded-md p-3.5 mb-8 text-center">
            <p className="text-primary text-xs font-medium tracking-wide">7 days free  •  Cancel anytime</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2.5 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-md pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2.5 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-md pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="w-full bg-white/5 border border-white/10 rounded-md pl-11 pr-11 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mt-0.5 bg-white/5 border border-white/20 rounded accent-primary"
              />
              <span className="text-gray-500 text-xs leading-relaxed font-light">
                I agree to the{" "}
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-md font-medium transition-all duration-300 text-sm tracking-wide shadow-lg shadow-primary/20 mt-3"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-gray-600 text-xs font-light uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/8 border border-white/5 text-gray-300 py-3.5 rounded-md transition-all duration-300 text-sm font-light">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-600 text-sm mt-8 font-light">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:text-primary font-medium transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
