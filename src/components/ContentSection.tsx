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
  viewAllLink?: string;
  items: Content[];
}

export default function ContentSection({ title, viewAllLink, items }: ContentSectionProps) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl md:text-2xl font-bold">{title}</h2>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="flex items-center gap-1 text-primary hover:text-primary-hover transition-colors text-sm font-medium"
            >
              সব দেখুন
              <ChevronRight size={16} />
            </Link>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {items.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
