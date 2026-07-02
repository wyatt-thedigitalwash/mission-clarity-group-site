import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialList from "@/components/EditorialList";

export const metadata: Metadata = {
  title: "Integrated Advisory — Mission Clarity Group",
  description:
    "For clients who require both performance advisory and risk advisory in a single, coordinated engagement.",
};

export default function IntegratedAdvisoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/integrated-advisory-risk-performance.jpg"
            alt="Integrated Advisory"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              Integrated Advisory
            </span>
            <h1 className="mt-5 text-mcg-bone">
              When Performance and Risk Cannot Be Separated.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              For clients who require both. Some situations demand sharper
              performance and stronger protection at the same time. Integrated
              Advisory brings both disciplines into a single, coordinated
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* TWO DISCIPLINES, ONE FIRM */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Two Disciplines, One Firm</h2>
          <div className="mt-6 space-y-4 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            <p>Mission Clarity Group operates across two disciplines.</p>
            <p>Performance Advisory optimizes leadership, decision-making, and performance.</p>
            <p>Risk Advisory protects people, assets, and operations.</p>
            <p>Most clients need one. Some need both, at the same time.</p>
          </div>
        </div>
      </section>

      {/* WHERE THEY MEET */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Where They Meet</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            The highest-stakes environments rarely present performance problems
            and risk problems in isolation. Growth invites exposure. Pressure
            shapes judgment. A single decision can carry both competitive and
            protective consequences. Integrated Advisory exists for the clients
            living at that intersection.
          </p>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Who This Is For</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Integrated engagements are built for:
          </p>
          <EditorialList
            items={[
              "Executives and founders carrying both performance and exposure",
              "Families balancing achievement with privacy and protection",
              "Organizations navigating growth, transition, and heightened scrutiny",
              "Elite performers whose careers depend on both results and discretion",
            ]}
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>A Single Coordinated Approach</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Every engagement follows the same disciplined method. We never
            prescribe before diagnosing. Assessment comes first, across both
            performance and risk, and the resulting plan is implemented as one
            coordinated effort.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-mcg-bone px-5 pb-5 md:px-12 md:pb-12">
      <section className="bg-mcg-green px-5 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="font-display text-[clamp(32px,4vw,48px)] font-500 leading-[1.15] text-mcg-bone">
            When the stakes span both performance and protection, begin the
            conversation.
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
