"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Phone, User } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      {/* Register Form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-card-bg/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg px-3 py-1.5">
                <span className="text-white font-bold text-lg">বাংলা</span>
              </div>
              <span className="text-white font-bold text-lg">OTT</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">রেজিস্টার করুন</h1>
            <p className="text-gray-400 text-sm">নতুন অ্যাকাউন্ট তৈরি করুন এবং ৭ দিন ফ্রি দেখুন!</p>
          </div>

          {/* Free trial badge */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-6 text-center">
            <p className="text-primary text-sm font-medium">🎉 ৭ দিনের ফ্রি ট্রায়াল পাচ্ছেন!</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                পুরো নাম
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                মোবাইল নম্বর
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <div className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm border-r border-gray-600 pr-2">
                  +880
                </div>
                <input
                  type="tel"
                  placeholder="১XXXXXXXXX"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg pl-[5.5rem] pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                ইমেইল (ঐচ্ছিক)
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="কমপক্ষে ৬ অক্ষর"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg pl-11 pr-11 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="পুনরায় পাসওয়ার্ড লিখুন"
                  className="w-full bg-white/5 border border-gray-700 rounded-lg pl-11 pr-11 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 bg-white/5 border border-gray-600 rounded accent-primary"
              />
              <span className="text-gray-400 text-sm leading-relaxed">
                আমি{" "}
                <Link href="#" className="text-primary hover:underline">
                  ব্যবহারের শর্তাবলী
                </Link>{" "}
                এবং{" "}
                <Link href="#" className="text-primary hover:underline">
                  গোপনীয়তা নীতি
                </Link>{" "}
                পড়েছি এবং সম্মত আছি।
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-lg font-medium transition-colors shadow-lg shadow-primary/30 mt-2"
            >
              রেজিস্টার করুন
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm">অথবা</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-gray-700 text-white py-3 rounded-lg transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google দিয়ে রেজিস্টার
            </button>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link href="/login" className="text-primary hover:text-primary-hover font-medium">
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
