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
        <div className="aspect-[2/3] bg-gray-800 relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>
          </div>

          {/* Premium badge */}
          {isPremium && (
            <div className="absolute top-2 right-2 bg-gold text-black text-xs font-bold px-2 py-0.5 rounded">
              প্রিমিয়াম
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs px-2 py-0.5 rounded">
            {type === "movie" ? "মুভি" : type === "series" ? "সিরিজ" : "নাটক"}
          </div>
        </div>

        {/* Info */}
        <div className="p-3 bg-card-bg">
          <h3 className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1">
              <Star size={12} className="text-gold" fill="#ffd700" />
              <span className="text-gold text-xs">{rating}</span>
            </div>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-gray-400 text-xs">{year}</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-gray-400 text-xs">{duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
