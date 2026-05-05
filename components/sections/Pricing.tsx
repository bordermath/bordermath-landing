import { Bot, List } from "@deemlol/next-icons";
import { PricingCard } from "@/components/ui/PricingCard";

const freeFeatures = [
  { text: "2 Destination Destinations", included: true },
  { text: "Manual Rule Refresh", included: true },
  { text: "Basic Compliance Alerts", included: true },
  { text: "Multi-Passport Support", included: false },
];

const proFeatures = [
  { text: "Unlimited Destinations", included: true, icon: <Bot className="w-4 h-4" /> },
  { text: "Real-Time Compliance Sync", included: true, icon: <Bot className="w-4 h-4" /> },
  { text: "Multi-Passport Support", included: true, icon: <Bot className="w-4 h-4" /> },
  { text: "Priority 24/7 Support", included: true, icon: <Bot className="w-4 h-4" /> },
  { text: "Advanced AI Chat Capabilities", included: true, icon: <List className="w-4 h-4" /> },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-display-lg mb-4">
            Transparent Pricing
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Reliability shouldn&apos;t be a luxury. Start for free, upgrade for
            power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            name="Free Tier"
            price="$0"
            description="Essential tracking for casual travelers."
            features={freeFeatures}
            ctaText="Choose Free"
          />

          <PricingCard
            name="Pro Tier"
            price="$12"
            description="Full AI-powered compliance automation for serious travelers."
            features={proFeatures}
            variant="highlight"
            badge="MOST POPULAR"
            ctaText="Upgrade to Pro"
          />
        </div>
      </div>
    </section>
  );
}
