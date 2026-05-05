const partners = [
  { name: "NomadList", style: "tracking-tighter" },
  { name: "TravelBank", style: "tracking-tighter italic" },
  { name: "Remote.co", style: "tracking-tighter uppercase" },
  { name: "visa.io", style: "tracking-tighter lowercase" },
  { name: "GlobalPass", style: "tracking-tighter" },
];

export function SocialProof() {
  return (
    <section className="py-12 bg-surface-container-low border-y border-outline-variant">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-label-caps text-on-surface-variant mb-10 opacity-60">
          FEATURED IN LEADING NOMAD COMMUNITIES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70">
          {partners.map((partner) => (
            <div key={partner.name} className={`font-bold text-2xl ${partner.style}`}>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
