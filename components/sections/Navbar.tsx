"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "@deemlol/next-icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solutions", href: "#", active: true },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md font-inter antialiased tracking-tight text-sm font-medium w-full border-b border-slate-200 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Globe className="w-5 h-5 text-secondary" />
          Bordermath
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "transition-all duration-150 ease-in-out pb-1",
                link.active
                  ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/login">
            <Button variant="primary" size="md">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "block text-sm",
                  link.active
                    ? "text-slate-900 font-semibold"
                    : "text-slate-500"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-slate-100">
              <Link href="/login" className="block">
                <Button variant="ghost" className="w-full justify-center">
                  Login
                </Button>
              </Link>
              <Link href="/login" className="block">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  size="md"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
