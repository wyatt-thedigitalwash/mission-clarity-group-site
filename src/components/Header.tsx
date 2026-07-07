"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Wordmark from "./Wordmark";

// Pages without a full-bleed dark hero need a solid header from the start
const solidRoutes = ["/contact", "/about"];

const performanceLinks = [
  { href: "/performance-advisory", label: "Overview" },
  { href: "/executive-advisory", label: "Executive Advisory" },
  { href: "/athlete-performance", label: "Athlete Performance" },
  { href: "/leadership-intensives", label: "Leadership Intensives" },
  { href: "/discflex-behavioral-analysis", label: "DISCflex Behavioral Analysis" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

function HamburgerIcon() {
  return (
    <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [performanceOpen, setPerformanceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const forceSolid = solidRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Force scrolled styling when mobile menu is open, or on light-background pages
  const solid = scrolled || mobileOpen || forceSolid;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-[background-color] duration-300 [backface-visibility:hidden] ${
          solid ? "bg-mcg-bone" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-12">
          {/* Wordmark */}
          <Link href="/" aria-label="Mission Clarity Group home">
            <Wordmark
              className="h-[44px] w-auto min-[1440px]:h-[60px]"
              textColor={solid ? "var(--mcg-green)" : "var(--mcg-bone)"}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 min-[1440px]:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[15px] font-medium leading-none transition-all duration-300 hover:opacity-70 ${
                  solid ? "text-mcg-green" : "text-mcg-bone"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Performance Advisory dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setPerformanceOpen(true)}
              onMouseLeave={() => setPerformanceOpen(false)}
            >
              <Link
                href="/performance-advisory"
                className={`cursor-pointer font-body text-[15px] font-medium leading-none transition-all duration-300 hover:opacity-70 ${
                  solid ? "text-mcg-green" : "text-mcg-bone"
                }`}
                aria-haspopup="true"
                aria-expanded={performanceOpen}
              >
                Performance Advisory
              </Link>

              <div
                className={`absolute left-0 top-full z-50 pt-3 transition-all duration-200 ${
                  performanceOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="border-t border-mcg-gold bg-mcg-bone px-1 pb-3 pt-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  {performanceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block whitespace-nowrap rounded-[2px] px-4 py-2 font-body text-[14px] text-mcg-green transition-colors hover:bg-mcg-green/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/risk-advisory"
              className={`font-body text-[15px] font-medium leading-none transition-all duration-300 hover:opacity-70 ${
                solid ? "text-mcg-green" : "text-mcg-bone"
              }`}
            >
              Risk Advisory
            </Link>

            <Link
              href="/integrated-advisory"
              className={`font-body text-[15px] font-medium leading-none transition-all duration-300 hover:opacity-70 ${
                solid ? "text-mcg-green" : "text-mcg-bone"
              }`}
            >
              Integrated Advisory
            </Link>

            <Link
              href="/contact"
              className={`font-body text-[15px] font-medium leading-none transition-all duration-300 hover:opacity-70 ${
                solid ? "text-mcg-green" : "text-mcg-bone"
              }`}
            >
              Contact
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className={`rounded-[2px] border px-5 py-2.5 font-body text-[14px] font-medium transition-all duration-300 ${
                solid
                  ? "border-mcg-green bg-mcg-green text-mcg-bone hover:opacity-70"
                  : "border-mcg-bone bg-transparent text-mcg-bone hover:bg-mcg-bone hover:text-mcg-green"
              }`}
            >
              Request a Confidential Conversation
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={`transition-all duration-300 hover:opacity-70 min-[1440px]:hidden ${
              solid ? "text-mcg-green" : "text-mcg-bone"
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-mcg-green transition-all duration-500 ease-in-out min-[1440px]:pointer-events-none min-[1440px]:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Top bar: wordmark + close */}
        <div className="flex items-center justify-between px-5 py-5">
          <Link
            href="/"
            aria-label="Mission Clarity Group home"
            onClick={() => setMobileOpen(false)}
          >
            <Wordmark
              className="h-[44px] w-auto"
              textColor="var(--mcg-bone)"
            />
          </Link>
          <button
            type="button"
            className="text-mcg-bone transition-opacity hover:opacity-70"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-col gap-5 px-8 pt-8"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-[28px] font-500 leading-[1.2] text-mcg-bone transition-opacity hover:opacity-70"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Performance Advisory group */}
          <div>
            <Link
              href="/performance-advisory"
              className="font-display text-[28px] font-500 leading-[1.2] text-mcg-bone transition-opacity hover:opacity-70"
              onClick={() => setMobileOpen(false)}
            >
              Performance Advisory
            </Link>
            <div className="mt-3 flex flex-col gap-2 pl-4">
              {performanceLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[15px] text-mcg-bone/70 transition-opacity hover:opacity-70"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/risk-advisory"
            className="font-display text-[28px] font-500 leading-[1.2] text-mcg-bone transition-opacity hover:opacity-70"
            onClick={() => setMobileOpen(false)}
          >
            Risk Advisory
          </Link>

          <Link
            href="/integrated-advisory"
            className="font-display text-[28px] font-500 leading-[1.2] text-mcg-bone transition-opacity hover:opacity-70"
            onClick={() => setMobileOpen(false)}
          >
            Integrated Advisory
          </Link>

          <Link
            href="/contact"
            className="font-display text-[28px] font-500 leading-[1.2] text-mcg-bone transition-opacity hover:opacity-70"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="mt-6 inline-block self-start rounded-[2px] border border-mcg-bone px-6 py-3 text-center font-body text-[15px] font-medium text-mcg-bone transition-all hover:bg-mcg-bone hover:text-mcg-green"
            onClick={() => setMobileOpen(false)}
          >
            Request a Confidential Conversation
          </Link>
        </nav>
      </div>
    </>
  );
}
