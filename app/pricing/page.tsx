import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const PricingTier = ({
  name,
  price,
  currency,
  description,
  features,
  isPopular,
  buttonText = "Get Started",
}: {
  name: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}) => (
  <Card
    className={`relative flex flex-col p-8 ${
      isPopular
        ? "border-cyan-500/50 overflow-visible bg-linear-to-br from-slate-900 to-slate-800 shadow-xl shadow-cyan-500/10"
        : "bg-slate-900/50"
    }`}
  >
    {isPopular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-cyan-500 text-slate-950 px-4 py-3 rounded-full text-sm font-semibold">
          Recommended
        </span>
      </div>
    )}

    <div className={isPopular ? "pt-4" : ""}>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-8">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-slate-400 ml-2">{currency}</span>
      </div>

      <Button
        className={`w-full mb-8 font-semibold ${
          isPopular
            ? "bg-white text-slate-950 hover:bg-slate-100"
            : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
        }`}
      >
        {buttonText}
      </Button>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <HugeiconsIcon
              icon={Tick02Icon}
              className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"
            />

            <span className="text-slate-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-block">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
              Pricing Plans
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">
            Simple, Transparent Pricing
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any
            time. No contracts, no surprises.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {/* Basic Plan */}
            <PricingTier
              name="Basic"
              price="50,000"
              currency="MMK"
              description="Perfect for getting started with essential features"
              features={[
                "Up to 5 projects",
                "Core features",
                "Basic analytics",
                "Email support",
                "1GB storage",
                "Community access",
              ]}
              buttonText="Start Free"
            />

            {/* Pro Plan - Recommended */}
            <PricingTier
              name="Pro"
              price="100,000"
              currency="MMK"
              description="Ideal for growing teams and businesses"
              features={[
                "Unlimited projects",
                "Advanced features",
                "Real-time analytics",
                "Priority email support",
                "100GB storage",
                "API access",
                "Team collaboration",
                "Custom integrations",
              ]}
              isPopular={true}
              buttonText="Upgrade to Pro"
            />

            {/* Premium Plan */}
            <PricingTier
              name="Premium"
              price="200,000"
              currency="MMK"
              description="Enterprise-grade solution for large organizations"
              features={[
                "Everything in Pro",
                "Unlimited storage",
                "24/7 priority support",
                "Dedicated account manager",
                "Advanced security",
                "SLA guarantee",
                "Custom branding",
                "White-label options",
              ]}
              buttonText="Contact Sales"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-slate-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect at the next billing cycle.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-slate-400">
                We offer a 30-day money-back guarantee if you&apos;re not
                satisfied with your purchase.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-400">
                We accept all major credit cards, bank transfers, and digital
                payment methods for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
