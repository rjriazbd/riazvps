"use client";

import { useState } from "react";
import { Check, X, Crown, Zap, Star } from "lucide-react";
import Link from "next/link";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  nameEn: string;
  price: string;
  period: string;
  description: string;
  icon: typeof Crown;
  color: string;
  popular?: boolean;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    id: "free",
    name: "ফ্রি",
    nameEn: "Free",
    price: "০",
    period: "টাকা/মাস",
    description: "বিজ্ঞাপনসহ বেসিক কন্টেন্ট দেখুন",
    icon: Zap,
    color: "gray",
    features: [
      { text: "সীমিত কন্টেন্ট অ্যাক্সেস", included: true },
      { text: "SD কোয়ালিটি (480p)", included: true },
      { text: "বিজ্ঞাপন সহ", included: true },
      { text: "১টি ডিভাইসে দেখা যাবে", included: true },
      { text: "প্রিমিয়াম কন্টেন্ট", included: false },
      { text: "ডাউনলোড সুবিধা", included: false },
      { text: "বিজ্ঞাপন মুক্ত", included: false },
    ],
  },
  {
    id: "basic",
    name: "বেসিক",
    nameEn: "Basic",
    price: "৯৯",
    period: "টাকা/মাস",
    description: "বিজ্ঞাপন মুক্ত HD কন্টেন্ট উপভোগ করুন",
    icon: Star,
    color: "blue",
    features: [
      { text: "সব কন্টেন্ট অ্যাক্সেস", included: true },
      { text: "HD কোয়ালিটি (720p)", included: true },
      { text: "বিজ্ঞাপন মুক্ত", included: true },
      { text: "২টি ডিভাইসে দেখা যাবে", included: true },
      { text: "বেশিরভাগ প্রিমিয়াম কন্টেন্ট", included: true },
      { text: "ডাউনলোড সুবিধা (৫টি)", included: true },
      { text: "4K কোয়ালিটি", included: false },
    ],
  },
  {
    id: "premium",
    name: "প্রিমিয়াম",
    nameEn: "Premium",
    price: "১৯৯",
    period: "টাকা/মাস",
    description: "সবকিছু আনলিমিটেড - সেরা অভিজ্ঞতা",
    icon: Crown,
    color: "gold",
    popular: true,
    features: [
      { text: "সব কন্টেন্ট আনলিমিটেড", included: true },
      { text: "4K + HDR কোয়ালিটি", included: true },
      { text: "বিজ্ঞাপন মুক্ত", included: true },
      { text: "৪টি ডিভাইসে দেখা যাবে", included: true },
      { text: "সব প্রিমিয়াম কন্টেন্ট", included: true },
      { text: "আনলিমিটেড ডাউনলোড", included: true },
      { text: "এক্সক্লুসিভ প্রিমিয়ার অ্যাক্সেস", included: true },
    ],
  },
];

const faqs = [
  {
    q: "ফ্রি ট্রায়াল কিভাবে কাজ করে?",
    a: "রেজিস্টার করলে স্বয়ংক্রিয়ভাবে ৭ দিনের প্রিমিয়াম ট্রায়াল পাবেন। ট্রায়াল শেষে আপনার পছন্দের প্ল্যান সিলেক্ট করতে পারবেন।",
  },
  {
    q: "পেমেন্ট কিভাবে করবো?",
    a: "বিকাশ, নগদ, রকেট, ক্রেডিট/ডেবিট কার্ড - যেকোনো মাধ্যমে পেমেন্ট করতে পারবেন।",
  },
  {
    q: "যেকোনো সময় বাতিল করা যাবে?",
    a: "হ্যাঁ! যেকোনো সময় সাবস্ক্রিপশন বাতিল করতে পারবেন। বাতিল করলে চলমান মাসের শেষ পর্যন্ত সেবা পাবেন।",
  },
  {
    q: "কতগুলো ডিভাইসে দেখা যাবে?",
    a: "প্ল্যান অনুযায়ী ১-৪টি ডিভাইসে একসাথে দেখতে পারবেন। মোবাইল, ট্যাবলেট, ল্যাপটপ, স্মার্ট টিভি - সব ডিভাইসে সাপোর্ট করে।",
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 md:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            আপনার প্ল্যান বেছে নিন
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            বাংলাদেশের সেরা বিনোদন প্ল্যাটফর্মে যোগ দিন। সবার জন্য সাশ্রয়ী মূল্যে।
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${billingPeriod === "monthly" ? "text-white" : "text-gray-500"}`}>
            মাসিক
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
            className="relative w-14 h-7 bg-gray-700 rounded-full transition-colors"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-all ${
                billingPeriod === "yearly" ? "left-8" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm ${billingPeriod === "yearly" ? "text-white" : "text-gray-500"}`}>
            বাৎসরিক
          </span>
          {billingPeriod === "yearly" && (
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full font-medium">
              ২০% সাশ্রয়
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 md:p-8 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/20 to-card-bg border-2 border-primary scale-105 shadow-2xl shadow-primary/20"
                    : "bg-card-bg border border-gray-800 hover:border-gray-600"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}

                {/* Plan icon & name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      plan.popular ? "bg-primary/20" : "bg-white/10"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={plan.popular ? "text-primary" : "text-gray-400"}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                    <p className="text-gray-500 text-xs">{plan.nameEn}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      ৳{billingPeriod === "yearly" && plan.price !== "০"
                        ? plan.id === "basic" ? "৯৪৯" : "১,৯০৯"
                        : plan.price}
                    </span>
                    <span className="text-gray-400 text-sm">
                      /{billingPeriod === "yearly" ? "বছর" : "মাস"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-green-400" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <X size={12} className="text-red-400/60" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/register"
                  className={`block w-full text-center py-3.5 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30"
                      : plan.id === "free"
                      ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      : "bg-white/10 hover:bg-primary text-white border border-gray-600 hover:border-primary"
                  }`}
                >
                  {plan.id === "free" ? "ফ্রিতে শুরু করুন" : "সাবস্ক্রাইব করুন"}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <div className="text-center mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">পেমেন্ট মাধ্যম</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["বিকাশ", "নগদ", "রকেট", "VISA", "MasterCard", "AMEX"].map((method) => (
              <div
                key={method}
                className="bg-card-bg border border-gray-700 rounded-lg px-5 py-2.5 text-gray-300 text-sm"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            সাধারণ প্রশ্নোত্তর
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card-bg border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-card-hover transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <span
                    className={`text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 animate-fadeIn">
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
