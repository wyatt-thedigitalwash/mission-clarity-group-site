import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialList from "@/components/EditorialList";

export const metadata: Metadata = {
  title: "DISC Behavioral Analysis — Mission Clarity Group",
  description:
    "DISC behavioral analysis to help leaders, executives, teams, and athletes improve communication, performance, stress management, and decision-making.",
};

export default function DiscBehavioralAnalysisPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/MissionClarityGroup_ExecutiveAdvisoryHero.jpg"
            alt="DISC Behavioral Analysis"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              DISC Behavioral Analysis
            </span>
            <h1 className="mt-5 text-mcg-bone">
              Understand the Operating System Behind Performance.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              Mission Clarity Group uses DISC behavioral analysis to help
              leaders, executives, teams, and athletes improve communication,
              performance, stress management, and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Self-Awareness Changes Performance */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Self-Awareness Changes Performance</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Most people operate without understanding:
          </p>
          <EditorialList
            items={[
              "How they respond to stress",
              "How they communicate under pressure",
              "How they make decisions",
              "What drains or restores energy",
              "How they impact teams and relationships",
            ]}
          />
          <p className="mt-10 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            DISC creates clarity around these patterns.
          </p>
        </div>
      </section>

      {/* What DISC Reveals */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>What DISC Reveals</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Our DISC performance profiling identifies:
          </p>
          <EditorialList
            items={[
              "Communication tendencies",
              "Leadership style",
              "Motivational drivers",
              "Stress-response patterns",
              "Behavioral blind spots",
              "Conflict tendencies",
              "Performance strengths",
              "Recovery needs",
            ]}
          />
        </div>
      </section>

      {/* Application */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Application</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            DISC is integrated into:
          </p>
          <EditorialList
            items={[
              "Executive advisory",
              "Athlete performance coaching",
              "Team alignment",
              "Leadership development",
              "Communication training",
              "Stress management systems",
              "Organizational performance",
            ]}
          />
        </div>
      </section>

      {/* The Mission Clarity Difference */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>The Mission Clarity Difference</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            The objective is practical application:
          </p>
          <EditorialList
            items={[
              "Better decisions",
              "Better communication",
              "Better leadership",
              "Better recovery",
              "Better performance consistency",
            ]}
          />
        </div>
      </section>

      {/* Centered statement (parallax) */}
      <section
        className="parallax-bg relative px-5 py-20 md:px-12 md:py-28"
        style={{ backgroundImage: "url(/banners/MissionClarityGroup_DISCHero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-8 h-px w-20 bg-mcg-gold" />
          <p className="font-display text-[clamp(22px,2.6vw,26px)] font-500 leading-[1.35] text-mcg-bone">
            We do not use DISC as a personality label. We use it as a
            strategic performance tool.
          </p>
          <div className="mx-auto mt-8 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* Deliverables */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Deliverables</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Clients may receive:
          </p>
          <EditorialList
            items={[
              "Individual DISC debriefs",
              "Performance reports",
              "Leadership insights",
              "Team dynamic analysis",
              "Stress management recommendations",
              "Custom development plans",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <div className="bg-mcg-bone px-5 pb-5 md:px-12 md:pb-12">
      <section className="bg-mcg-green px-5 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="font-display text-[clamp(32px,4vw,48px)] font-500 leading-[1.15] text-mcg-bone">
            Performance improves when awareness becomes actionable.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-[2px] border border-mcg-bone bg-transparent px-8 py-4 font-body text-[16px] font-medium text-mcg-bone transition-all hover:bg-mcg-bone hover:text-mcg-green"
          >
            Schedule a DISC Performance Assessment
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
