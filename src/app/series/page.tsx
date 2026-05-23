"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { webSeries, genres } from "@/data/content";

export default function SeriesPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredSeries = webSeries.filter((series) => {
    if (selectedGenre === "All") return true;
    return series.genre && series.genre.includes(selectedGenre);
  });

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Series</h1>
          <p className="text-gray-500 text-lg font-light">Binge-worthy shows you&apos;ll love</p>
        </div>

        {/* Genre Filter */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-5 py-2.5 rounded-md text-sm whitespace-nowrap transition-all duration-300 font-medium tracking-wide ${
                selectedGenre === genre
                  ? "bg-primary text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Series Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
          {filteredSeries.map((series) => (
            <MovieCard key={series.id} {...series} />
          ))}
        </div>

        {filteredSeries.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-6 opacity-50">📺</div>
            <h3 className="text-white text-xl font-medium mb-3">No series found</h3>
            <p className="text-gray-500 font-light">Try selecting a different genre</p>
          </div>
        )}
      </div>
    </div>
  );
}
