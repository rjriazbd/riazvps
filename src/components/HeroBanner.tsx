"use client";

import { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BannerSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  genre: string;
  year: string;
  rating: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: "1",
    title: "মাটির প্রজার দেশে",
    description: "একটি গ্রামীণ বাংলাদেশের গল্প, যেখানে সাধারণ মানুষের জীবন সংগ্রাম আর স্বপ্নের কথা বলা হয়েছে। এই নাটকটি আপনাকে আবেগে ভাসাবে।",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=800&fit=crop",
    genre: "ড্রামা • পারিবারিক",
    year: "২০২৪",
    rating: "৮.৫",
  },
  {
    id: "2",
    title: "ঢাকা ক্রাইম",
    description: "ঢাকা শহরের অন্ধকার জগতের রহস্য উন্মোচন করে এক সাহসী সাংবাদিক। থ্রিলার ভরপুর এই সিরিজ আপনাকে শেষ পর্যন্ত ধরে রাখবে।",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=800&fit=crop",
    genre: "থ্রিলার • ক্রাইম",
    year: "২০২৪",
    rating: "৯.২",
  },
  {
    id: "3",
    title: "প্রেমের রং",
    description: "দুই তরুণ-তরুণীর ভালোবাসার গল্প, যেখানে সমাজের বাধা পেরিয়ে তারা একত্র হওয়ার চেষ্টা করে। একটি হৃদয়স্পর্শী রোমান্টিক গল্প।",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=800&fit=crop",
    genre: "রোমান্স • ড্রামা",
    year: "২০২৪",
    rating: "৮.৮",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  const slide = bannerSlides[currentSlide];

  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 gradient-left opacity-60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20 md:pb-32">
        <div className="max-w-2xl animate-fadeIn" key={currentSlide}>
          {/* Meta info */}
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wide">
              নতুন
            </span>
            <span className="text-gray-300 text-sm">{slide.genre}</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-300 text-sm">{slide.year}</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gold text-sm font-medium">★ {slide.rating}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 line-clamp-3">
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href={`/watch/${slide.id}`}
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg transition-all font-medium text-sm md:text-base shadow-lg shadow-primary/30"
            >
              <Play size={20} fill="white" />
              এখনই দেখুন
            </Link>
            <Link
              href={`/watch/${slide.id}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg transition-all font-medium text-sm md:text-base backdrop-blur-sm border border-white/20"
            >
              <Info size={20} />
              বিস্তারিত
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
