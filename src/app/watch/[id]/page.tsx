"use client";

import { useParams } from "next/navigation";
import { Play, Star, Clock, Calendar, Share2, Heart, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import { allContent } from "@/data/content";
import MovieCard from "@/components/MovieCard";

export default function WatchPage() {
  const params = useParams();
  const id = params.id as string;
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"episodes" | "related">("related");

  const content = allContent.find((item) => item.id === id) || allContent[0];

  const relatedContent = allContent
    .filter((item) => item.type === content.type && item.id !== content.id)
    .slice(0, 6);

  return (
    <div className="pt-20 md:pt-24">
      {/* Video Player Area */}
      <div className="relative w-full aspect-video bg-black max-h-[75vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${content.thumbnail})` }}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <button className="w-20 h-20 md:w-24 md:h-24 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-primary/30">
            <Play size={32} className="text-white ml-1" fill="white" />
          </button>
        </div>

        {/* Video controls bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
          <div className="w-full h-1 bg-white/10 rounded-full mb-5 cursor-pointer group">
            <div className="h-full bg-primary rounded-full w-[35%] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <button className="text-white hover:text-primary transition-colors">
                <Play size={18} fill="white" />
              </button>
              <span className="text-gray-400 text-sm font-light">05:23 / 02:15:00</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xs font-medium tracking-wider uppercase">HD</span>
              <button className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                Subtitles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title and badges */}
            <div className="mb-8">
              {content.isPremium && (
                <span className="inline-block bg-gold/90 text-black text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider mb-4">
                  Premium
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                {content.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-gold" fill="#f5c518" />
                  <span className="text-gold font-medium">{content.rating}/10</span>
                </div>
                <span className="text-gray-700">|</span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Calendar size={13} />
                  <span className="font-light">{content.year}</span>
                </div>
                <span className="text-gray-700">|</span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Clock size={13} />
                  <span className="font-light">{content.duration}</span>
                </div>
                {content.genre && (
                  <>
                    <span className="text-gray-700">|</span>
                    <span className="text-gray-400 font-light">{content.genre}</span>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button className="flex items-center gap-2.5 bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-md transition-all duration-300 font-medium text-sm tracking-wide">
                <Play size={16} fill="white" />
                Play Now
              </button>
              <button className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-md transition-all duration-300 border border-white/10 text-sm">
                <Heart size={16} />
                Watchlist
              </button>
              <button className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-md transition-all duration-300 border border-white/10 text-sm">
                <Share2 size={16} />
                Share
              </button>
              <button className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-md transition-all duration-300 border border-white/10 text-sm">
                <Download size={16} />
                Download
              </button>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className={`text-gray-400 leading-relaxed font-light ${!isDescExpanded ? "line-clamp-3" : ""}`}>
                {content.description || "An extraordinary production featuring top-tier talent. This compelling story will captivate you from beginning to end with its masterful storytelling and stunning visuals."}
              </p>
              <button
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="flex items-center gap-1.5 text-gray-300 hover:text-white mt-4 text-sm font-medium transition-colors"
              >
                {isDescExpanded ? "Show Less" : "Read More"}
                <ChevronDown size={14} className={`transition-transform ${isDescExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Cast & Crew */}
            <div className="mb-10">
              <h3 className="text-white font-semibold text-base mb-5 tracking-wide">Cast & Crew</h3>
              {content.director && (
                <p className="text-gray-500 mb-3 text-sm">
                  <span className="text-gray-300 font-medium">Director: </span>
                  {content.director}
                </p>
              )}
              {content.cast && content.cast.length > 0 && (
                <div>
                  <span className="text-gray-300 font-medium text-sm">Starring:</span>
                  <div className="flex flex-wrap gap-2.5 mt-3">
                    {content.cast.map((actor, index) => (
                      <span
                        key={index}
                        className="bg-white/5 text-gray-400 px-4 py-2 rounded-md text-sm border border-white/5 font-light"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Episodes Tab (for series) */}
            {content.type === "series" && content.episodes && (
              <div className="mb-10">
                <div className="flex items-center gap-8 border-b border-white/5 mb-6">
                  <button
                    onClick={() => setActiveTab("episodes")}
                    className={`pb-4 text-sm font-medium transition-all duration-300 border-b-2 tracking-wide ${
                      activeTab === "episodes"
                        ? "text-white border-primary"
                        : "text-gray-500 border-transparent hover:text-white"
                    }`}
                  >
                    Episodes ({content.episodes})
                  </button>
                  <button
                    onClick={() => setActiveTab("related")}
                    className={`pb-4 text-sm font-medium transition-all duration-300 border-b-2 tracking-wide ${
                      activeTab === "related"
                        ? "text-white border-primary"
                        : "text-gray-500 border-transparent hover:text-white"
                    }`}
                  >
                    More Like This
                  </button>
                </div>

                {activeTab === "episodes" && (
                  <div className="space-y-3">
                    {Array.from({ length: content.episodes }, (_, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-5 bg-white/3 hover:bg-white/5 rounded-lg p-5 transition-all duration-300 cursor-pointer group border border-white/3"
                      >
                        <div className="w-10 h-10 bg-white/5 group-hover:bg-primary/80 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <Play size={14} className="text-white ml-0.5" fill="white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">
                            Episode {i + 1}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1 font-light">45 min</p>
                        </div>
                        {content.isPremium && i > 1 && (
                          <span className="text-gold text-[10px] bg-gold/10 px-2.5 py-1 rounded uppercase tracking-wider font-bold">
                            Premium
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Recommended</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
              {relatedContent.slice(0, 4).map((item) => (
                <div key={item.id} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-16 lg:w-32 lg:h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-900">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <Star size={10} className="text-gold" fill="#f5c518" />
                      <span className="text-gold text-xs font-medium">{item.rating}</span>
                    </div>
                    <p className="text-gray-600 text-xs mt-1 font-light">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Content Section */}
        {(content.type !== "series" || activeTab === "related") && (
          <section className="mt-20">
            <h2 className="text-white text-2xl font-bold mb-8 tracking-tight">More Like This</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
              {relatedContent.map((item) => (
                <MovieCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
