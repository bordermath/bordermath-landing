import {
  Navbar,
  Hero,
  SocialProof,
  ValueGrid,
  Pricing,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <ValueGrid />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
