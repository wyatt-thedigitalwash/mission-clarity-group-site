import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risk Advisory — Mission Clarity Group",
  description:
    "We help families, executives, organizations, and travelers anticipate, reduce, and manage risk in environments where the consequences of failure matter.",
};

export default function RiskAdvisoryPage() {
  return (
    <>
      {/* SECTION 1 -- HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/Mountaineering.jpg"
            alt="Risk Advisory"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              Risk Advisory
            </span>
            <h1 className="mt-5 text-mcg-bone">
              Protect People, Assets, and Operations.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              We help families, executives, organizations, and travelers
              anticipate, reduce, and manage risk in environments where the
              consequences of failure matter.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 -- TRUSTED AUTHORITY + WHO THIS IS FOR */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <p className="max-w-[680px] font-display text-[clamp(22px,2.8vw,28px)] font-500 leading-[1.35] text-mcg-green">
            Mission Clarity Group is the trusted authority acting in their
            client&apos;s best interests.
          </p>

          <h2 className="mt-16 md:mt-20">Who This Is For</h2>

          <div className="mt-10">
            <div className="h-px w-full bg-mcg-gold" />
            {["Families", "Executives", "Organizations", "Travelers"].map(
              (item) => (
                <div key={item}>
                  <div className="py-[10px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-green">
                    {item}
                  </div>
                  <div className="h-px w-full bg-mcg-sage/30" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4 -- HOW WE DEFINE RISK (parallax) */}
      <section className="relative overflow-hidden py-[60px] md:py-[88px]">
        <div
          className="parallax-bg absolute inset-0"
          style={{ backgroundImage: "url(/banners/leap-of-faith.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-[680px] px-5 text-center md:px-12">
          {/* Double-rule motif */}
          <div className="mx-auto flex w-[46px] flex-col items-center gap-[6px]">
            <div className="h-px w-full bg-mcg-gold" />
            <div className="h-px w-full bg-mcg-gold" />
          </div>

          <span className="mt-8 block font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/50">
            Our Definition of Risk
          </span>

          <p className="mt-8 font-display text-[clamp(22px,2.8vw,28px)] font-500 leading-[1.35] text-mcg-bone">
            Risk is anything that creates uncertainty, degrades decision
            quality, reduces performance, threatens assets, damages
            relationships, disrupts execution, or prevents achievement of the
            mission.
          </p>

          <div className="mx-auto mt-10 flex w-[46px] flex-col items-center gap-[6px]">
            <div className="h-px w-full bg-mcg-gold" />
            <div className="h-px w-full bg-mcg-gold" />
          </div>
        </div>
      </section>

      {/* SECTION 5 -- HOW WE WORK */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>How We Work</h2>
          <p className="mt-6 max-w-[680px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group follows a disciplined diagnostic process. We
            never prescribe before diagnosing. Every engagement begins with
            assessment, moves to tailored solution prescriptions, and ends in
            implementation.
          </p>
        </div>
      </section>

      {/* SECTION 6 -- CTA */}
      <div className="bg-mcg-bone px-5 pb-5 md:px-12 md:pb-12">
      <section className="bg-mcg-green px-5 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="font-display text-[clamp(32px,4vw,48px)] font-500 leading-[1.15] text-mcg-bone">
            When the consequences of failure matter, begin the conversation.
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
