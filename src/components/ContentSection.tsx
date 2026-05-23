"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import MovieCard from "./MovieCard";

interface Content {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  year: string;
  duration: string;
  isPremium?: boolean;
  type?: "movie" | "series" | "natok";
}

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  items: Content[];
}

export default function ContentSection({ title, subtitle, viewAllLink, items }: ContentSectionProps) {
  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="text-gray-500 text-sm mt-2 font-light">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide group"
            >
              View All
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
          {items.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
