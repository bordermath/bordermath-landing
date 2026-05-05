import { Bot, List } from "@deemlol/next-icons";
import { PricingCard } from "@/components/ui/PricingCard";

const freeFeatures = [
  { text: "1 itinerary", included: true },
  { text: "90/180 rule analysis", included: true },
  { text: "No adjustment suggestions", included: false },
];

const proFeatures = [
  { text: "Unlimited itineraries", included: true },
  { text: "Adjustment suggestions", included: true },
  { text: "Complete travel history", included: true },
];

const eliteFeatures = [
  { text: "Real-time dashboard", included: true },
  { text: "GPS tracking integration", included: true },
  { text: "Instant compliance alerts", included: true },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-display-lg mb-4">
            Pricing & Plans
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Choose the level of compliance monitoring that fits your travel patterns. From occasional visitors to professional nomads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            label="ENTRY"
            name="Free"
            price="$0"
            period="/forever"
            description="Essential tools for those traveling to the Schengen area once a year."
            features={freeFeatures}
            ctaText="Current Plan"
          />

          <PricingCard
            label="STANDARD"
            name="Pro"
            price="$15"
            period="/mo"
            description="For frequent travelers needing proactive planning and historical tracking."
            features={proFeatures}
            variant="highlight"
            badge="MOST POPULAR"
            ctaText="Upgrade to Pro"
          />

          <PricingCard
            label="ADVANCED"
            name="Elite"
            price="$50"
            period="/mo"
            description="Ultimate peace of mind with real-time tracking and emergency compliance support."
            features={eliteFeatures}
            ctaText="Get Elite"
          />
        </div>

        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl mb-2">Frequently Asked Questions</h3>
            <p className="text-on-surface-variant">Everything you need to know about Bordermath subscriptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="border-b border-outline-variant pb-8">
              <h4 className="font-semibold mb-3 text-on-surface">Can I switch plans later?</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features are available immediately and your billing cycle will reset.
              </p>
            </div>
            <div className="border-b border-outline-variant pb-8">
              <h4 className="font-semibold mb-3 text-on-surface">Is my data secure?</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We use banking-level encryption to secure your itineraries. We never sell your location data or travel history to third parties.
              </p>
            </div>
            <div className="border-b border-outline-variant pb-8">
              <h4 className="font-semibold mb-3 text-on-surface">How does GPS tracking work?</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                For Elite users, our mobile app passively tracks your entry and exit from Schengen zones to automatically update your remaining days in real-time.
              </p>
            </div>
            <div className="border-b border-outline-variant pb-8">
              <h4 className="font-semibold mb-3 text-on-surface">What happens if I overstay?</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Bordermath is a monitoring tool designed to prevent overstays. Elite users receive high-priority alerts 15, 7, and 3 days before their limit expires.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-surface-container border border-outline-variant rounded-2xl p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 20.93C8.06 19.83 5 15.53 5 11V6.3L12 3.19L19 6.3V11C19 15.53 15.94 19.83 12 20.93Z" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-[36rem]">
            <h4 className="font-headline text-xl mb-3">Still have questions about Schengen rules?</h4>
            <p className="text-sm text-on-surface-variant">
              Our AI compliance officer is available 24/7 to clarify complex legal scenarios for Pro and Elite members.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all text-sm">
              Contact Sales
            </button>
            <button className="bg-white text-primary border border-outline-variant px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all text-sm">
              Read Guides
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
