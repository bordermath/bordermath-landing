import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white border border-outline-variant rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <h2 className="font-display-lg text-4xl md:text-5xl mb-4 md:mb-6 tracking-tight">
          Ready to Meet Your AI Travel Assistant?
        </h2>

        <p className="font-body-lg text-on-surface-variant mb-8 md:mb-10 max-w-[36rem] mx-auto text-sm md:text-base">
          Stop worrying about passport stamps and start focusing on your
          journey. Secure your legal status today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/login">
            <Button variant="primary" size="lg" className="shadow-xl w-full sm:w-auto">
              Start Your First Conversation
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Talk to Compliance Expert
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-xs md:text-sm text-on-surface-variant opacity-60">
          No credit card required for free trial.
        </p>
      </div>
    </section>
  );
}
