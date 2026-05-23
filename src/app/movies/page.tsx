"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { trendingMovies, genres } from "@/data/content";

export default function MoviesPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies = trendingMovies.filter((movie) => {
    if (selectedGenre === "All") return true;
    return movie.genre && movie.genre.includes(selectedGenre);
  });

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Movies</h1>
          <p className="text-gray-500 text-lg font-light">Discover our collection of premium films</p>
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

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-6 opacity-50">🎬</div>
            <h3 className="text-white text-xl font-medium mb-3">No movies found</h3>
            <p className="text-gray-500 font-light">Try selecting a different genre</p>
          </div>
        )}
      </div>
    </div>
  );
}
