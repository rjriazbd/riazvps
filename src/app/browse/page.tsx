"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { allContent, genres } from "@/data/content";

export default function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState("সব");
  const [selectedType, setSelectedType] = useState<"all" | "movie" | "series" | "natok">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "year" | "name">("rating");

  // Filter content
  const filteredContent = allContent.filter((item) => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "সব" || (item.genre && item.genre.includes(selectedGenre));
    return matchesType && matchesSearch && matchesGenre;
  });

  // Sort content
  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="pt-24 md:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">ব্রাউজ করুন</h1>
          <p className="text-gray-400">আপনার পছন্দের কন্টেন্ট খুঁজুন</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="মুভি, সিরিজ বা নাটক খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card-bg border border-gray-700 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Type Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { value: "all", label: "সব" },
              { value: "movie", label: "মুভি" },
              { value: "series", label: "সিরিজ" },
              { value: "natok", label: "নাটক" },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value as typeof selectedType)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type.value
                    ? "bg-primary text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 md:ml-auto">
            <SlidersHorizontal size={16} className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-card-bg border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="rating">রেটিং অনুযায়ী</option>
              <option value="year">সাম্প্রতিক</option>
              <option value="name">নাম অনুযায়ী</option>
            </select>
          </div>
        </div>

        {/* Genre Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedGenre === genre
                  ? "bg-primary/20 text-primary border border-primary"
                  : "bg-white/5 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-gray-400 text-sm mb-6">
          {sortedContent.length}টি কন্টেন্ট পাওয়া গেছে
        </p>

        {/* Content Grid */}
        {sortedContent.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {sortedContent.map((item) => (
              <MovieCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-white text-xl font-medium mb-2">কোনো কন্টেন্ট পাওয়া যায়নি</h3>
            <p className="text-gray-400">অনুগ্রহ করে অন্য ফিল্টার ব্যবহার করুন</p>
          </div>
        )}
      </div>
    </div>
  );
}
