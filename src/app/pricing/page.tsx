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
  price: string;
  period: string;
  description: string;
  icon: typeof Crown;
  popular?: boolean;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Basic access with ads",
    icon: Zap,
    features: [
      { text: "Limited content library", included: true },
      { text: "SD quality (480p)", included: true },
      { text: "Ad-supported streaming", included: true },
      { text: "1 device at a time", included: true },
      { text: "Premium content", included: false },
      { text: "Offline downloads", included: false },
      { text: "Ad-free experience", included: false },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$9.99",
    period: "/month",
    description: "Full HD, ad-free streaming",
    icon: Star,
    features: [
      { text: "Full content library", included: true },
      { text: "Full HD quality (1080p)", included: true },
      { text: "Ad-free streaming", included: true },
      { text: "2 devices simultaneously", included: true },
      { text: "Most premium content", included: true },
      { text: "5 offline downloads", included: true },
      { text: "4K Ultra HD", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$14.99",
    period: "/month",
    description: "Everything unlimited — the best experience",
    icon: Crown,
    popular: true,
    features: [
      { text: "Everything unlimited", included: true },
      { text: "4K Ultra HD + HDR", included: true },
      { text: "Ad-free streaming", included: true },
      { text: "4 devices simultaneously", included: true },
      { text: "All premium content", included: true },
      { text: "Unlimited downloads", included: true },
      { text: "Early access to new releases", included: true },
    ],
  },
];

const faqs = [
  {
    q: "How does the free trial work?",
    a: "Sign up and get 7 days of Premium access completely free. No commitment — cancel anytime before the trial ends and you won't be charged.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, PayPal, and mobile payment options including Apple Pay and Google Pay.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel your subscription at any time with no cancellation fees. You'll continue to have access until the end of your current billing period.",
  },
  {
    q: "How many devices can I stream on?",
    a: "Depending on your plan, you can stream on 1 to 4 devices simultaneously. All plans support mobile, tablet, laptop, desktop, and smart TV.",
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Choose Your Plan
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto font-light leading-relaxed">
            Unlock unlimited entertainment. Start with a free trial and upgrade anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-5 mb-16">
          <span className={`text-sm font-light transition-colors ${billingPeriod === "monthly" ? "text-white" : "text-gray-600"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
            className="relative w-14 h-7 bg-white/10 rounded-full transition-colors border border-white/5"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-all duration-300 ${
                billingPeriod === "yearly" ? "left-8" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm font-light transition-colors ${billingPeriod === "yearly" ? "text-white" : "text-gray-600"}`}>
            Yearly
          </span>
          {billingPeriod === "yearly" && (
            <span className="bg-green-500/10 text-green-400 text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider border border-green-500/20">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/10 to-card-bg border border-primary/30 scale-[1.02] shadow-2xl shadow-primary/10"
                    : "bg-card-bg border border-white/5 hover:border-white/10"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                {/* Plan icon & name */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.popular ? "bg-primary/15" : "bg-white/5"}`}>
                    <Icon size={18} className={plan.popular ? "text-primary" : "text-gray-500"} />
                  </div>
                  <h3 className="text-white font-bold text-lg tracking-tight">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {billingPeriod === "yearly" && plan.price !== "$0"
                        ? plan.id === "standard" ? "$95.90" : "$143.90"
                        : plan.price}
                    </span>
                    <span className="text-gray-500 text-sm font-light">
                      {billingPeriod === "yearly" ? "/year" : plan.period}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 font-light">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3.5">
                      {feature.included ? (
                        <div className="w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={11} className="text-green-400" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-white/3 rounded-full flex items-center justify-center flex-shrink-0">
                          <X size={11} className="text-gray-700" />
                        </div>
                      )}
                      <span className={`text-sm font-light ${feature.included ? "text-gray-300" : "text-gray-700"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/register"
                  className={`block w-full text-center py-3.5 rounded-md font-medium transition-all duration-300 text-sm tracking-wide ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {plan.id === "free" ? "Get Started Free" : "Start Free Trial"}
                </Link>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
            Frequently Asked
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/3 border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/3 transition-colors duration-300"
                >
                  <span className="text-white font-medium pr-6 text-sm">{faq.q}</span>
                  <span className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fadeInUp">
                    <p className="text-gray-500 leading-relaxed text-sm font-light">{faq.a}</p>
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
