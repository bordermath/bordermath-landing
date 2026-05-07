import Link from "next/link";
import { Shield, MessageCircle } from "@deemlol/next-icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="z-10">
          <Badge
            variant="secondary"
            icon={<Shield className="w-4 h-4" />}
            className="mb-6"
          >
            TRUSTED BY 10,000+ NOMADS
          </Badge>

          <h1 className="font-display-lg text-5xl sm:text-6xl md:text-7xl mb-6 tracking-tighter leading-[1.1]">
            Your AI Travel Assistant for the{" "}
            <span className="text-secondary">Schengen Area</span>
          </h1>

          <p className="font-body-lg text-on-surface-variant mb-8 md:mb-10 max-w-[32rem]">
            Plan and manage your stays with intelligent chat-based compliance
            tracking. Stay ahead of the 90/180 Schengen rule with an AI that
            knows the law.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/login">
              <Button variant="primary" size="lg" className="flex items-center">
                Chat with Your Assistant
                <MessageCircle className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                View Compliance Demo
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-secondary/5 blur-3xl rounded-full -z-10 transition-transform group-hover:scale-110 duration-1000"></div>
          <img
            alt="Visa Dashboard Interface"
            className="rounded-xl border border-outline-variant shadow-2xl w-full object-cover aspect-[4/3]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9brsq59c7TLb0iKmc2WyQKEhf12h333sPVgtZXdRCVSrc1fKUGGib1f3VQr1NcEZmwM6T7YDXW2Je_ijQ-iZSzpXO4dTL2SX0ORPDwS5N7jMb7asIicCWnGIP3P__CEvBO486CNhQDKQegOSlAe8TlQtdxggyVo-hoBl3eE9O7KP4lbBwguTDaaRESGG8-4kH_uKkskUkyS7GYZgMJaRjhb-seEo-47Y7be4rOSMyyhsoZpgvT23lUC8F69BPP2Y2ZYv9XMk_tF9f"
          />
        </div>
      </div>
    </section>
  );
}
