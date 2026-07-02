import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Mission Clarity Group",
  description:
    "Ed Thomas is the Founder and Lead Principal of Mission Clarity Group, a strategic advisory and performance development firm serving executives, athletes, and high-performing organizations.",
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 -- HEADSHOT AND BIO */}
      <section className="bg-mcg-bone px-5 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-[920px]">
          {/* Full-width headshot */}
          <Image
            src="/founder-photos/Ed-Thomas-Headshot-3.JPG"
            alt="Ed Thomas, Founder of Mission Clarity Group"
            width={920}
            height={613}
            priority
            className="h-auto w-full"
          />

          {/* Bio below */}
          <div className="mt-12">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-sage">
              Founder
            </span>
            <h1 className="mt-3">Ed Thomas</h1>
            <div className="mt-8 space-y-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
              <p>
                Ed Thomas is the Founder and Lead Principal of Mission Clarity
                Group, a strategic advisory and performance development firm
                serving executives, entrepreneurs, professional athletes, elite
                teams, and high-performing organizations. With more than two
                decades of experience in high-stakes environments, Ed has built
                his career around leadership, resilience, decision-making, and
                human performance under pressure.
              </p>
              <p>
                His background includes service as an Army Ranger, Delta Force
                Operator, and Paramilitary work with the Central Intelligence
                Agency. These experiences shaped his understanding of strategic
                clarity, decentralized leadership, emotional discipline, and
                sustained performance in demanding conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 -- PULL QUOTE (parallax) */}
      <section className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24">
        <div
          className="parallax-bg absolute inset-0"
          style={{ backgroundImage: "url(/banners/american-flag.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-[680px]">
          <div className="mx-auto mb-8 h-px w-20 bg-mcg-gold" />
          <p className="text-center font-display text-[clamp(22px,2.8vw,28px)] font-500 leading-[1.35] text-mcg-bone">
            Sustained elite performance begins with clarity - clarity of
            mission, mindset, and action under pressure.
          </p>
          <div className="mx-auto mt-8 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* SECTION 3 -- CONTINUED BIO */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-[920px] space-y-6 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
          <p>
            Today, through Mission Clarity Group, Ed helps leaders, athletes,
            and organizations improve decision-making, adaptability, culture,
            and long-term performance. Drawing from neuroscience, behavioral
            science, leadership psychology, and elite operational principles,
            his work focuses on helping clients perform at a high level without
            sacrificing well-being.
          </p>
          <p>
            Mission Clarity Group&apos;s approach is discreet, personalized,
            and relationship-driven. Through executive advisory engagements,
            leadership retreats, athlete development, and private coaching, Ed
            serves as a trusted advisor to individuals and teams navigating
            growth, pressure, and transition. His philosophy is simple:
            sustained elite performance begins with clarity - clarity of
            mission, mindset, and action under pressure.
          </p>
        </div>
      </section>

      {/* SECTION 4 -- PHOTO STRIP */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-20 md:px-12 md:pb-28"
      >
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/founder-photos/EdThomas_1.jpg"
              alt="Ed Thomas"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/founder-photos/EdThomas_3.jpeg"
              alt="Ed Thomas"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/founder-photos/EdThomos_2.jpeg"
              alt="Ed Thomas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 -- CTA */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[680px] text-center">
          <Link
            href="/contact"
            className="inline-block rounded-[2px] bg-mcg-green px-6 py-3 font-body text-[15px] font-medium text-mcg-bone transition-opacity hover:opacity-70"
          >
            Request a Confidential Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
