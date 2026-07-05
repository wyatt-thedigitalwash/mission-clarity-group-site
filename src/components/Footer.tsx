import Link from "next/link";
import Wordmark from "./Wordmark";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/performance-advisory", label: "Performance Advisory" },
  { href: "/executive-advisory", label: "Executive Advisory" },
  { href: "/athlete-performance", label: "Athlete Performance" },
  { href: "/leadership-intensives", label: "Leadership Intensives" },
  { href: "/discflex-behavioral-analysis", label: "DISCflex Behavioral Analysis" },
  { href: "/risk-advisory", label: "Risk Advisory" },
  { href: "/integrated-advisory", label: "Integrated Advisory" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-mcg-gold bg-mcg-green px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Wordmark */}
        <Link href="/" aria-label="Mission Clarity Group home">
          <Wordmark
            className="h-[50px] w-auto"
            textColor="var(--mcg-bone)"
          />
        </Link>

        {/* Brand description */}
        <p className="mt-10 max-w-[540px] font-body text-[15px] leading-[1.65] text-mcg-bone/70">
          Mission Clarity Group is a strategic advisory and performance
          development firm serving executives, organizations, and elite
          athletes.
        </p>

        {/* Footer nav */}
        <nav
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          aria-label="Footer"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[13px] text-mcg-bone/60 transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-mcg-gold/30" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-[15px] italic tracking-wide text-mcg-gold">
            Clarity. Performance. Precision.
          </p>
          <p className="font-body text-[12px] text-mcg-bone/40">
            &copy; {new Date().getFullYear()} Mission Clarity Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
