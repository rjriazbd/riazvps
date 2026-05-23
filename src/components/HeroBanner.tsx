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
  duration: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: "1",
    title: "The Last Frontier",
    description: "A gripping tale of survival and redemption set against the backdrop of a world on the brink of collapse. Follow a group of unlikely heroes as they fight to protect what matters most.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=800&fit=crop",
    genre: "Action  •  Thriller",
    year: "2024",
    rating: "9.2",
    duration: "2h 15m",
  },
  {
    id: "2",
    title: "Midnight Shadows",
    description: "An investigative journalist uncovers a web of corruption that reaches the highest levels of power. A dark, atmospheric crime thriller that keeps you guessing until the very end.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=800&fit=crop",
    genre: "Crime  •  Mystery",
    year: "2024",
    rating: "8.8",
    duration: "1h 55m",
  },
  {
    id: "3",
    title: "Eternal Echoes",
    description: "Two souls separated by time find each other across different lifetimes. A visually stunning and emotionally powerful love story that transcends the boundaries of reality.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=800&fit=crop",
    genre: "Romance  •  Drama",
    year: "2024",
    rating: "8.5",
    duration: "2h 05m",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  const slide = bannerSlides[currentSlide];

  return (
    <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[1.5s] ease-out"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 gradient-left" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-end pb-28 md:pb-40">
        <div className="max-w-2xl animate-fadeIn" key={currentSlide}>
          {/* Meta info */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary/90 px-3 py-1 rounded text-white text-xs font-semibold uppercase tracking-widest">
              New
            </span>
            <span className="text-gray-300 text-sm font-light tracking-wide">{slide.genre}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {slide.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-gold font-semibold flex items-center gap-1">
              ★ {slide.rating}
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300 font-light">{slide.year}</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300 font-light">{slide.duration}</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light">
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-5">
            <Link
              href={`/watch/${slide.id}`}
              className="flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md transition-all duration-300 font-medium text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <Play size={18} fill="white" />
              Watch Now
            </Link>
            <Link
              href={`/watch/${slide.id}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-md transition-all duration-300 font-medium text-sm tracking-wide backdrop-blur-sm border border-white/10"
            >
              <Info size={18} />
              More Info
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/60 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/5"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/60 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/5"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-10 bg-primary" : "w-5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
