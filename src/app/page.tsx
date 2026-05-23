import HeroBanner from "@/components/HeroBanner";
import ContentSection from "@/components/ContentSection";
import { trendingMovies, webSeries, natoks, newReleases } from "@/data/content";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Trending Movies */}
      <ContentSection
        title="🔥 ট্রেন্ডিং মুভি"
        viewAllLink="/movies"
        items={trendingMovies}
      />

      {/* Web Series */}
      <ContentSection
        title="📺 জনপ্রিয় ওয়েব সিরিজ"
        viewAllLink="/series"
        items={webSeries}
      />

      {/* Natoks */}
      <ContentSection
        title="🎭 সেরা নাটক"
        viewAllLink="/natok"
        items={natoks}
      />

      {/* New Releases */}
      <ContentSection
        title="✨ নতুন যুক্ত হয়েছে"
        items={newReleases}
      />

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              সীমাহীন বিনোদনের জগতে আপনাকে স্বাগতম!
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              মাসে মাত্র ৯৯ টাকায় পান সব প্রিমিয়াম কন্টেন্ট। বাংলা সিনেমা, নাটক, ওয়েব সিরিজ - সব এক জায়গায়।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium transition-colors shadow-lg shadow-primary/30 text-base"
              >
                সাবস্ক্রাইব করুন
              </a>
              <a
                href="/register"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-medium transition-colors border border-white/20 text-base"
              >
                ফ্রি ট্রায়াল শুরু করুন
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
