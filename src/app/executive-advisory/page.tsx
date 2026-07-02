import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialList from "@/components/EditorialList";

export const metadata: Metadata = {
  title: "Executive Advisory — Mission Clarity Group",
  description:
    "Strategic advisory for executives, founders, investors, and decision-makers navigating complexity, growth, transition, and high-stakes environments.",
};

export default function ExecutiveAdvisoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/ExecutiveAdvisory_MissionClarity.jpg"
            alt="Executive Advisory"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              Executive Advisory
            </span>
            <h1 className="mt-5 text-mcg-bone">
              Strategic Clarity for Leaders Operating Under Pressure.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              Mission Clarity Group partners with executives, founders,
              investors, and decision-makers navigating complexity, growth,
              transition, and high-stakes environments. This is not traditional
              coaching. This is strategic advisory built for leaders carrying
              real responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* The Reality of Leadership */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>The Reality of Leadership</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            The higher you rise, the fewer places you can speak candidly.
          </p>

          <div className="mt-10">
            <div className="h-px w-full bg-mcg-gold" />
            {[
              "Pressure compounds.",
              "Decisions accelerate.",
              "Expectations expand.",
            ].map((item) => (
              <div key={item}>
                <div className="py-[10px] font-display text-[clamp(20px,2.4vw,24px)] font-500 leading-[1.3] text-mcg-green">
                  {item}
                </div>
                <div className="h-px w-full bg-mcg-sage/30" />
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-[680px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Most leaders do not need more motivation. They need clarity,
            structure, perspective, and a trusted strategic partner who
            understands performance under pressure. Mission Clarity Group
            exists for that purpose.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>What We Do</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            We work alongside executives and business leaders to improve:
          </p>
          <EditorialList
            items={[
              "Strategic decision-making",
              "Leadership presence under pressure",
              "Communication and influence",
              "Stress management and recovery",
              "Team alignment",
              "Operational clarity",
              "Mental performance",
              "Personal discipline and accountability",
              "Long-term sustainability at high output",
            ]}
          />
        </div>
      </section>

      {/* How We Work */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>How We Work</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Every engagement is customized. Services may include:
          </p>
          <EditorialList
            items={[
              "One-on-one executive advisory",
              "Leadership intensives",
              "Strategic off-sites",
              "Decision-making frameworks",
              "Performance optimization systems",
              "Executive stress management",
              "DISC behavioral analysis",
              "Team alignment sessions",
              "Ongoing strategic partnership retainers",
            ]}
          />
        </div>
      </section>

      {/* The Difference */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>The Difference</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group combines:
          </p>
          <EditorialList
            items={[
              "Human performance science",
              "Executive advisory",
              "Elite performance psychology",
              "Behavioral profiling",
              "Leadership development",
              "Stress-response management",
              "Strategic operational thinking",
            ]}
          />
        </div>
      </section>

      {/* Centered statement (parallax) */}
      <section
        className="parallax-bg relative px-5 py-20 md:px-12 md:py-28"
        style={{ backgroundImage: "url(/banners/Bible.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-8 h-px w-20 bg-mcg-gold" />
          <p className="font-display text-[clamp(22px,2.6vw,26px)] font-500 leading-[1.35] text-mcg-bone">
            Our approach is discreet, direct, and practical. No corporate
            theater. No generic leadership language. Only actionable
            clarity.
          </p>
          <div className="mx-auto mt-8 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* Who We Serve */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Who We Serve</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            We work with:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "CEOs",
              "Founders",
              "Executive teams",
              "Investors",
              "High-growth companies",
              "Entrepreneurs",
              "Family offices",
              "Professional athletes transitioning into business",
              "Leaders operating in high-pressure environments",
            ].map((item) => (
              <div
                key={item}
                className="border border-mcg-green/15 px-6 py-5 font-body text-[clamp(15px,1.6vw,16px)] leading-[1.65] text-mcg-green"
              >
                {item}
              </div>
            ))}
          </div>
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
            Request a Confidential Consultation
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
