import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[150px] md:text-[200px] font-bold text-white/5 leading-none mb-2">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight -mt-16">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-base mb-12 font-light leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-md font-medium transition-all duration-300 text-sm tracking-wide"
          >
            Go Home
          </Link>
          <Link
            href="/browse"
            className="bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-md font-medium transition-all duration-300 border border-white/10 text-sm tracking-wide"
          >
            Browse Content
          </Link>
        </div>
      </div>
    </div>
  );
}
