import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl md:text-9xl font-bold text-primary/30 mb-4">৪০৪</div>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md mx-auto">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে অথবা বর্তমানে পাওয়া যাচ্ছে না।
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            হোমে ফিরে যান
          </Link>
          <Link
            href="/browse"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-white/20"
          >
            ব্রাউজ করুন
          </Link>
        </div>
      </div>
    </div>
  );
}
