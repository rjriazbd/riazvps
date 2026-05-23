"use client";

import Link from "next/link";
import { Play, Star } from "lucide-react";

interface MovieCardProps {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  year: string;
  duration: string;
  isPremium?: boolean;
  type?: "movie" | "series" | "natok";
}

export default function MovieCard({
  id,
  title,
  thumbnail,
  rating,
  year,
  duration,
  isPremium = false,
  type = "movie",
}: MovieCardProps) {
  return (
    <Link href={`/watch/${id}`} className="group block">
      <div className="relative rounded-lg overflow-hidden card-hover">
        {/* Thumbnail */}
        <div className="aspect-[2/3] bg-gray-900 relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
            <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-400">
              <Play size={22} className="text-white ml-0.5" fill="white" />
            </div>
          </div>

          {/* Premium badge */}
          {isPremium && (
            <div className="absolute top-3 right-3 bg-gold/90 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              Premium
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded uppercase tracking-wider border border-white/10">
            {type === "movie" ? "Movie" : type === "series" ? "Series" : "Original"}
          </div>
        </div>

        {/* Info */}
        <div className="p-4 bg-card-bg">
          <h3 className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center gap-1">
              <Star size={11} className="text-gold" fill="#f5c518" />
              <span className="text-gold text-xs font-medium">{rating}</span>
            </div>
            <span className="text-gray-700 text-xs">•</span>
            <span className="text-gray-500 text-xs">{year}</span>
            <span className="text-gray-700 text-xs">•</span>
            <span className="text-gray-500 text-xs">{duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
