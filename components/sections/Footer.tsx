const footerLinks = [
  { label: "Legal Disclaimer", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "API Docs", href: "#" },
  { label: "Support", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 w-full border-t border-slate-200">
      <div className="w-full py-8 md:py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
          <div className="font-bold text-slate-400">Bordermath Compliance</div>
          <p className="font-inter text-xs leading-relaxed text-slate-500 text-center md:text-left max-w-[20rem]">
            &copy; 2026 Bordermath Compliance. Data provided for informational
            purposes only. Bordermath is not a law firm.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs font-inter text-slate-500">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
