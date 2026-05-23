"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { trendingMovies, genres } from "@/data/content";

export default function MoviesPage() {
  const [selectedGenre, setSelectedGenre] = useState("সব");

  const filteredMovies = trendingMovies.filter((movie) => {
    if (selectedGenre === "সব") return true;
    return movie.genre && movie.genre.includes(selectedGenre);
  });

  return (
    <div className="pt-24 md:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🎬 বাংলা মুভি</h1>
          <p className="text-gray-400">সেরা বাংলা সিনেমা সমগ্র এক জায়গায়</p>
        </div>

        {/* Genre Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedGenre === genre
                  ? "bg-primary text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-white text-xl font-medium mb-2">এই ক্যাটাগরিতে কোনো মুভি নেই</h3>
            <p className="text-gray-400">অন্য ক্যাটাগরি বেছে নিন</p>
          </div>
        )}
      </div>
    </div>
  );
}
