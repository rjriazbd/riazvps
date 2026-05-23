import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg px-3 py-1.5">
                <span className="text-white font-bold text-xl">বাংলা</span>
              </div>
              <span className="text-white font-bold text-lg">OTT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              বাংলাদেশের সেরা OTT প্ল্যাটফর্ম। বাংলা সিনেমা, নাটক, ওয়েব সিরিজ এবং আরও অনেক কিছু এক জায়গায়।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">হোম</Link></li>
              <li><Link href="/movies" className="text-gray-400 hover:text-primary transition-colors text-sm">মুভি</Link></li>
              <li><Link href="/series" className="text-gray-400 hover:text-primary transition-colors text-sm">সিরিজ</Link></li>
              <li><Link href="/natok" className="text-gray-400 hover:text-primary transition-colors text-sm">নাটক</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors text-sm">সাবস্ক্রিপশন</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">সাপোর্ট</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">সাহায্য কেন্দ্র</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">যোগাযোগ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">ফিডব্যাক</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">আইনি তথ্য</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">গোপনীয়তা নীতি</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">ব্যবহারের শর্তাবলী</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">রিফান্ড পলিসি</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">কুকি পলিসি</Link></li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © ২০২৪ বাংলা OTT। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">আমাদের অনুসরণ করুন:</span>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-white text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-white text-xs font-bold">Y</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-white text-xs font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
