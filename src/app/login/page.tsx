"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, Phone } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass rounded-2xl p-12 md:p-14 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-8">
              <Image
                src="https://res.cloudinary.com/db1ulwbxc/image/upload/v1779044554/700906516_26654958984183418_6821224961536211562_n_lpfxqc.jpg"
                alt="GolpoBox"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Welcome Back</h1>
            <p className="text-gray-500 text-base font-light">Sign in to continue watching</p>
          </div>

          {/* Login Method Toggle */}
          <div className="flex bg-white/5 rounded-lg p-1.5 mb-10">
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-3.5 rounded-md text-sm font-medium transition-all duration-300 tracking-wide ${
                loginMethod === "email"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-3.5 rounded-md text-sm font-medium transition-all duration-300 tracking-wide ${
                loginMethod === "phone"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Phone
            </button>
          </div>

          {/* Form */}
          <form className="space-y-8">
            {loginMethod === "email" ? (
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-14 pr-5 py-4.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-base"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-14 pr-5 py-4.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-base"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-14 pr-14 py-4.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-white/5 border border-white/20 rounded accent-primary"
                />
                <span className="text-gray-500 text-sm font-light">Remember me</span>
              </label>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-light">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-4.5 rounded-lg font-semibold transition-all duration-300 text-base tracking-wide shadow-lg shadow-primary/20 mt-4"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-5 my-10">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-gray-600 text-xs font-light uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 py-4 rounded-lg transition-all duration-300 text-base font-light">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-gray-500 text-base mt-10 font-light">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-white hover:text-primary font-semibold transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
