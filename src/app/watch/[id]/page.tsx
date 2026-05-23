"use client";

import { useParams } from "next/navigation";
import { Play, Star, Clock, Calendar, Share2, Heart, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import { allContent, trendingMovies, webSeries } from "@/data/content";
import MovieCard from "@/components/MovieCard";

export default function WatchPage() {
  const params = useParams();
  const id = params.id as string;
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"episodes" | "related">("related");

  // Find content by ID
  const content = allContent.find((item) => item.id === id) || allContent[0];

  // Get related content (same type)
  const relatedContent = allContent
    .filter((item) => item.type === content.type && item.id !== content.id)
    .slice(0, 6);

  return (
    <div className="pt-16 md:pt-20">
      {/* Video Player Area */}
      <div className="relative w-full aspect-video bg-black max-h-[70vh]">
        {/* Placeholder for video player */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${content.thumbnail})` }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <button className="w-20 h-20 md:w-24 md:h-24 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl shadow-primary/40">
            <Play size={36} className="text-white ml-1" fill="white" />
          </button>
        </div>

        {/* Video controls bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-700 rounded-full mb-4 cursor-pointer group">
            <div className="h-full bg-primary rounded-full w-[35%] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-primary transition-colors">
                <Play size={20} fill="white" />
              </button>
              <span className="text-gray-300 text-sm">০৫:২৩ / ০২:১৫:০০</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-300 text-sm hidden md:block">HD</span>
              <button className="text-white hover:text-primary transition-colors text-sm">
                সাবটাইটেল
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title and badges */}
            <div className="mb-4">
              {content.isPremium && (
                <span className="inline-block bg-gold text-black text-xs font-bold px-2.5 py-1 rounded mb-3">
                  প্রিমিয়াম
                </span>
              )}
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
                {content.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-gold" fill="#ffd700" />
                  <span className="text-gold font-medium">{content.rating}/১০</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar size={14} />
                  <span>{content.year}</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-1 text-gray-300">
                  <Clock size={14} />
                  <span>{content.duration}</span>
                </div>
                {content.genre && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{content.genre}</span>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg transition-colors font-medium">
                <Play size={18} fill="white" />
                চালু করুন
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg transition-colors border border-white/20">
                <Heart size={18} />
                পছন্দ
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg transition-colors border border-white/20">
                <Share2 size={18} />
                শেয়ার
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg transition-colors border border-white/20">
                <Download size={18} />
                ডাউনলোড
              </button>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className={`text-gray-300 leading-relaxed ${!isDescExpanded ? "line-clamp-3" : ""}`}>
                {content.description || "এটি একটি অসাধারণ কন্টেন্ট যা আপনাকে মুগ্ধ করবে। বাংলাদেশের সেরা পরিচালক এবং অভিনেতাদের সমন্বয়ে তৈরি এই প্রোডাকশন দর্শকদের হৃদয় ছুঁয়ে যাবে। গল্পের প্রতিটি মোড়ে রয়েছে চমক এবং আবেগ।"}
              </p>
              <button
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="flex items-center gap-1 text-primary hover:text-primary-hover mt-2 text-sm"
              >
                {isDescExpanded ? "কম দেখুন" : "আরও পড়ুন"}
                <ChevronDown size={14} className={isDescExpanded ? "rotate-180" : ""} />
              </button>
            </div>

            {/* Cast & Crew */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg mb-4">কাস্ট ও ক্রু</h3>
              {content.director && (
                <p className="text-gray-400 mb-2">
                  <span className="text-gray-300 font-medium">পরিচালক:</span> {content.director}
                </p>
              )}
              {content.cast && content.cast.length > 0 && (
                <div>
                  <span className="text-gray-300 font-medium">অভিনেতা:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {content.cast.map((actor, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-full text-sm border border-white/10"
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
              <div className="mb-8">
                <div className="flex items-center gap-6 border-b border-gray-800 mb-4">
                  <button
                    onClick={() => setActiveTab("episodes")}
                    className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                      activeTab === "episodes"
                        ? "text-primary border-primary"
                        : "text-gray-400 border-transparent hover:text-white"
                    }`}
                  >
                    পর্ব সমূহ ({content.episodes})
                  </button>
                  <button
                    onClick={() => setActiveTab("related")}
                    className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                      activeTab === "related"
                        ? "text-primary border-primary"
                        : "text-gray-400 border-transparent hover:text-white"
                    }`}
                  >
                    সম্পর্কিত
                  </button>
                </div>

                {activeTab === "episodes" && (
                  <div className="space-y-3">
                    {Array.from({ length: content.episodes }, (_, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 bg-card-bg hover:bg-card-hover rounded-lg p-4 transition-colors cursor-pointer group"
                      >
                        <div className="w-10 h-10 bg-white/10 group-hover:bg-primary rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                          <Play size={16} className="text-white ml-0.5" fill="white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">
                            পর্ব {i + 1}: {content.title} - পার্ট {i + 1}
                          </h4>
                          <p className="text-gray-400 text-xs mt-0.5">৪৫ মিনিট</p>
                        </div>
                        {content.isPremium && i > 1 && (
                          <span className="text-gold text-xs bg-gold/10 px-2 py-0.5 rounded">
                            প্রিমিয়াম
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar - Related Content */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">আপনার জন্য</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {relatedContent.slice(0, 4).map((item) => (
                <div key={item.id} className="flex gap-3 group cursor-pointer">
                  <div className="w-24 h-16 lg:w-32 lg:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Star size={10} className="text-gold" fill="#ffd700" />
                      <span className="text-gold text-xs">{item.rating}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Content Section */}
        {(content.type !== "series" || activeTab === "related") && (
          <section className="mt-12">
            <h2 className="text-white text-xl font-bold mb-6">আরও দেখুন</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
