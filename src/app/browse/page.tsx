"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { allContent, genres } from "@/data/content";

export default function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedType, setSelectedType] = useState<"all" | "movie" | "series" | "natok">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "year" | "name">("rating");

  const filteredContent = allContent.filter((item) => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All" || (item.genre && item.genre.includes(selectedGenre));
    return matchesType && matchesSearch && matchesGenre;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Browse</h1>
          <p className="text-gray-500 text-lg font-light">Find your next favorite to watch</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search movies, series, originals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-14 pr-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all duration-300 text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Type Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { value: "all", label: "All" },
              { value: "movie", label: "Movies" },
              { value: "series", label: "Series" },
              { value: "natok", label: "Originals" },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value as typeof selectedType)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 tracking-wide ${
                  selectedType === type.value
                    ? "bg-primary text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 md:ml-auto">
            <SlidersHorizontal size={16} className="text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 cursor-pointer appearance-none"
            >
              <option value="rating">Top Rated</option>
              <option value="year">Most Recent</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Genre Tags */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-10">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-all duration-300 font-medium ${
                selectedGenre === genre
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-white/3 text-gray-500 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-gray-600 text-sm mb-8 font-light">
          {sortedContent.length} titles found
        </p>

        {/* Content Grid */}
        {sortedContent.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
            {sortedContent.map((item) => (
              <MovieCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <div className="text-6xl mb-6 opacity-50">🔍</div>
            <h3 className="text-white text-xl font-medium mb-3">No results found</h3>
            <p className="text-gray-500 font-light">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
