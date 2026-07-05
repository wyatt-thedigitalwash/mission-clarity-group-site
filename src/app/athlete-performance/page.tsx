import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialList from "@/components/EditorialList";

export const metadata: Metadata = {
  title: "Athlete Performance — Mission Clarity Group",
  description:
    "Mental performance and leadership coaching for professional and elite athletes pursuing sustained peak performance, resilience, and championship-level consistency.",
};

export default function AthletePerformancePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center pt-20">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/distraught-athlete-mental-toughness.jpg"
            alt="Athlete Performance"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-bone/70">
              Athlete Performance
            </span>
            <h1 className="mt-5 text-mcg-bone">
              Elite Performance Begins Long Before Competition.
            </h1>
            <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              Mission Clarity Group helps professional and elite athletes
              develop the mental clarity, emotional control, and performance
              systems required to compete consistently at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Physical Talent */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Beyond Physical Talent</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            At elite levels, physical ability is assumed. The difference
            becomes:
          </p>
          <EditorialList
            items={[
              "Mental resilience",
              "Emotional discipline",
              "Recovery capacity",
              "Decision-making under pressure",
              "Focus consistency",
              "Identity management",
              "Stress response control",
            ]}
          />
          <p className="mt-10 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            The athlete who manages these variables gains a competitive edge
            others cannot see.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Our Approach</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group integrates:
          </p>
          <EditorialList
            items={[
              "Mental performance training",
              "DISCflex behavioral analysis",
              "Stress and recovery systems",
              "Competitive mindset development",
              "Performance routines",
              "Leadership development",
              "Emotional regulation",
              "Identity and transition coaching",
            ]}
          />
        </div>
      </section>

      {/* Centered statement (parallax) */}
      <section
        className="parallax-bg relative px-5 py-20 md:px-12 md:py-28"
        style={{ backgroundImage: "url(/banners/swimming-athlete-training.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-8 h-px w-20 bg-mcg-gold" />
          <p className="font-display text-[clamp(22px,2.6vw,26px)] font-500 leading-[1.35] text-mcg-bone">
            We work with athletes as complete human beings, not simply
            performers.
          </p>
          <div className="mx-auto mt-8 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* Areas of Focus (two-column) */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Areas of Focus</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            Programs may include:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] md:gap-x-12">
            <div>
              <div className="h-px w-full bg-mcg-gold" />
              {[
                "Pre-performance preparation",
                "Competition mindset",
                "Focus training",
                "Confidence development",
                "Emotional regulation",
                "Post-performance recovery",
              ].map((item) => (
                <div key={item}>
                  <div className="py-[10px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-green">
                    {item}
                  </div>
                  <div className="h-px w-full bg-mcg-sage/30" />
                </div>
              ))}
            </div>
            <div className="hidden bg-mcg-gold/40 md:block" />
            <div>
              <div className="h-px w-full bg-mcg-gold" />
              {[
                "Lifestyle structure",
                "Leadership and communication",
                "Pressure management",
                "Team dynamics",
                "Career transition preparation",
              ].map((item) => (
                <div key={item}>
                  <div className="py-[10px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-green">
                    {item}
                  </div>
                  <div className="h-px w-full bg-mcg-sage/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built for High Performers */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Built for High Performers</h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
            We understand elite performance environments. Our work is designed
            for athletes competing at:
          </p>
          <div className="mt-10">
            {[
              "Professional levels",
              "Collegiate levels",
              "Olympic development pathways",
              "High-performance amateur competition",
            ].map((item) => (
              <div key={item}>
                <div className="h-px w-full bg-mcg-gold" />
                <div className="py-6 font-display text-[clamp(20px,2.4vw,24px)] font-500 leading-[1.3] text-mcg-green md:py-8">
                  {item}
                </div>
              </div>
            ))}
            <div className="h-px w-full bg-mcg-gold" />
          </div>
        </div>
      </section>

      {/* Confidential Partnership */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <div>
            <div className="mx-auto max-w-[680px] text-center">
              <div className="mx-auto mb-8 h-px w-20 bg-mcg-gold" />
              <p className="font-display text-[clamp(20px,2.4vw,24px)] italic leading-[1.5] text-mcg-green/80">
                The strongest competitors are often carrying the most pressure
                privately. Mission Clarity Group provides a discreet
                environment where athletes can strengthen performance without
                distraction or unnecessary exposure.
              </p>
              <div className="mx-auto mt-8 h-px w-20 bg-mcg-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-mcg-bone px-5 pb-5 md:px-12 md:pb-12">
      <section className="bg-mcg-green px-5 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="font-display text-[clamp(32px,4vw,48px)] font-500 leading-[1.15] text-mcg-bone">
            Clarity under pressure changes outcomes.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-[2px] border border-mcg-bone bg-transparent px-8 py-4 font-body text-[16px] font-medium text-mcg-bone transition-all hover:bg-mcg-bone hover:text-mcg-green"
          >
            Request a Confidential Athlete Consultation
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
