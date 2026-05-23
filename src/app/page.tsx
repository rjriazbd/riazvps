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
        title="Trending Now"
        subtitle="The most popular movies this week"
        viewAllLink="/movies"
        items={trendingMovies}
      />

      {/* Web Series */}
      <ContentSection
        title="Popular Series"
        subtitle="Binge-worthy shows everyone is talking about"
        viewAllLink="/series"
        items={webSeries}
      />

      {/* Originals */}
      <ContentSection
        title="StreamBD Originals"
        subtitle="Exclusive content you won't find anywhere else"
        viewAllLink="/originals"
        items={natoks}
      />

      {/* New Releases */}
      <ContentSection
        title="Just Added"
        subtitle="Fresh titles added this week"
        items={newReleases}
      />

      {/* CTA Section */}
      <section className="section-spacing px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-2xl p-12 md:p-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border border-white/5 rounded-2xl" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Unlimited Entertainment<br className="hidden md:block" /> Awaits You
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Stream thousands of movies, series, and originals in stunning quality. 
                Start your journey today with a free trial.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a
                  href="/pricing"
                  className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-md font-medium transition-all duration-300 text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  View Plans
                </a>
                <a
                  href="/register"
                  className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 border border-white/10 text-sm tracking-wide"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
