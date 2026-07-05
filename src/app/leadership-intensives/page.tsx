import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialList from "@/components/EditorialList";

export const metadata: Metadata = {
  title: "Leadership Intensives — Mission Clarity Group",
  description:
    "Private leadership intensives and workshops designed for executives, teams, athletes, and organizations seeking measurable performance improvement.",
};

export default function LeadershipIntensivesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/MissionClarityGroup_LeadershipIntensivesHero.jpg"
            alt="Leadership Intensives"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              Leadership Intensives
            </span>
            <h1 className="mt-5 text-mcg-bone">
              High-Level Leadership Development for Modern Pressure
              Environments.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              Mission Clarity Group delivers private leadership intensives and
              workshops designed for executives, teams, athletes, and
              organizations seeking measurable performance improvement.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>The Problem</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Most leadership programs are theoretical. Real leadership happens:
          </p>
          <EditorialList
            items={[
              "Under pressure",
              "During uncertainty",
              "Inside conflict",
              "Through rapid decision-making",
              "While managing stress and responsibility",
            ]}
          />
        </div>
      </section>

      {/* Centered statement (parallax) */}
      <section
        className="parallax-bg relative px-5 py-20 md:px-12 md:py-28"
        style={{ backgroundImage: "url(/banners/work-environment-table.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-8 h-px w-20 bg-mcg-gold" />
          <p className="font-display text-[clamp(22px,2.6vw,26px)] font-500 leading-[1.35] text-mcg-bone">
            Our programs are designed for real-world application.
          </p>
          <div className="mx-auto mt-8 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* Core Intensive Topics */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Core Intensive Topics</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Programs may include:
          </p>
          <EditorialList
            items={[
              "Leadership under pressure",
              "Strategic communication",
              "Team alignment",
              "Mental resilience",
              "Stress-response management",
              "Performance psychology",
              "Decision-making frameworks",
              "Behavioral profiling through DISCflex",
              "Human performance optimization",
              "Peak performance systems",
              "Recovery and sustainability",
            ]}
          />
        </div>
      </section>

      {/* Program Formats */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Program Formats</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group offers:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Half-day intensives",
              "Full-day workshops",
              "Executive retreats",
              "Team off-sites",
              "Private leadership sessions",
              "Athletic performance workshops",
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

      {/* Designed for Results */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Designed for Results</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Participants leave with:
          </p>
          <EditorialList
            items={[
              "Practical frameworks",
              "Clear action plans",
              "Greater self-awareness",
              "Improved communication",
              "Better pressure management",
              "Stronger team cohesion",
              "Sustainable performance systems",
            ]}
          />
        </div>
      </section>

      {/* Audience */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Audience</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Ideal for:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Executive teams",
              "Growth-stage companies",
              "Athletic organizations",
              "Professional sports environments",
              "Leadership groups",
              "High-performing teams",
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

      {/* Speaking & Facilitation */}
      <section
        id="speaking"
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Speaking &amp; Facilitation</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Curated keynote presentations and strategic facilitation
            experiences for leadership teams and organizations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-mcg-bone px-5 pb-5 md:px-12 md:pb-12">
      <section className="bg-mcg-green px-5 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="font-display text-[clamp(32px,4vw,48px)] font-500 leading-[1.15] text-mcg-bone">
            Leadership is tested under pressure. Build systems that hold when
            pressure rises.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-[2px] border border-mcg-bone bg-transparent px-8 py-4 font-body text-[16px] font-medium text-mcg-bone transition-all hover:bg-mcg-bone hover:text-mcg-green"
          >
            Request Program Information
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
