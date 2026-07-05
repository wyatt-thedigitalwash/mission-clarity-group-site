import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Advisory — Mission Clarity Group",
  description:
    "We help leaders, founders, athletes, and teams perform with greater clarity, resilience, and consistency in high-pressure environments.",
};

const offerings = [
  {
    name: "Executive Advisory",
    desc: "Strategic advisory built for leaders carrying real responsibility.",
    href: "/executive-advisory",
  },
  {
    name: "Athlete Performance",
    desc: "Mental clarity, emotional control, and performance systems for elite competitors.",
    href: "/athlete-performance",
  },
  {
    name: "Leadership Intensives",
    desc: "Private leadership intensives and workshops for teams and organizations.",
    href: "/leadership-intensives",
  },
  {
    name: "DISCflex Behavioral Analysis",
    desc: "Behavioral profiling used as a strategic performance tool.",
    href: "/discflex-behavioral-analysis",
  },
];

export default function PerformanceAdvisoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/StAndrewsgolfer.jpg"
            alt="Performance Advisory"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              Performance Advisory
            </span>
            <h1 className="mt-5 text-mcg-bone">
              Optimize Leadership, Decision-Making, and Performance.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              We help leaders, founders, athletes, and teams perform with
              greater clarity, resilience, and consistency in high-pressure
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS OF ENGAGEMENT */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Areas of Engagement</h2>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col justify-between border border-mcg-green/15 p-8 transition-opacity hover:opacity-70 md:p-10"
              >
                <div>
                  <h3 className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1.3]">
                    {item.name}
                  </h3>
                  <p className="mt-3 font-body text-[clamp(15px,1.6vw,16px)] leading-[1.65] text-mcg-sage">
                    {item.desc}
                  </p>
                </div>
                <span className="mt-6 font-body text-[12px] font-medium uppercase tracking-[0.15em] text-mcg-gold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Who This Is For</h2>
          <div className="mt-14">
            <div className="h-px w-full bg-mcg-gold" />
            {["Leaders", "Founders", "Athletes", "Teams"].map((item) => (
              <div key={item}>
                <div className="py-[10px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-green">
                  {item}
                </div>
                <div className="h-px w-full bg-mcg-sage/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTENT */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[680px] text-center">
          <p className="font-display text-[clamp(22px,2.8vw,28px)] font-500 leading-[1.35] text-mcg-green">
            Mission Clarity Group exists to help clients reduce risk, improve
            judgment, accelerate execution, and increase performance under
            pressure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-mcg-bone px-5 pb-5 md:px-12 md:pb-12">
      <section className="bg-mcg-green px-5 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="font-display text-[clamp(32px,4vw,48px)] font-500 leading-[1.15] text-mcg-bone">
            For leaders who understand that performance is not accidental.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-[2px] border border-mcg-bone bg-transparent px-8 py-4 font-body text-[16px] font-medium text-mcg-bone transition-all hover:bg-mcg-bone hover:text-mcg-green"
          >
            Request a Confidential Conversation
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
