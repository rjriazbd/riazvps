import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-primary font-black text-2xl tracking-tight">STREAM</span>
              <span className="text-white font-light text-2xl tracking-tight">BD</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Your premium destination for movies, series, and exclusive originals. Stream unlimited entertainment anytime, anywhere.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Navigate</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link href="/movies" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Movies</Link></li>
              <li><Link href="/series" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Series</Link></li>
              <li><Link href="/originals" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Originals</Link></li>
              <li><Link href="/pricing" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">FAQ</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Device Compatibility</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-16 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-sm">
            &copy; 2024 StreamBD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300 text-sm">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300 text-sm">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300 text-sm">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-300 text-sm">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
