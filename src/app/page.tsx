import Image from "next/image";
import Link from "next/link";
import EditorialList from "@/components/EditorialList";
import SplitSection from "@/components/SplitSection";
import PullQuote from "@/components/PullQuote";

export default function Home() {
  return (
    <>
      {/* SECTION 1 -- HERO */}
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0 bg-[#1e331f]">
          <Image
            src="/banners/Leatherduffel.jpg"
            alt="Mission Clarity Group"
            fill
            priority
            className="object-cover -scale-x-100"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 py-32 md:px-12 lg:px-20">
          <div className="max-w-[680px]">
            <p className="mb-6 font-display text-[clamp(20px,2.4vw,24px)] italic leading-[1.5] text-mcg-bone/80">
              For the decisions that don&apos;t get a second pass.
            </p>
            <h1 className="text-mcg-bone">
              Advisors to Leaders Operating in High-Consequence Environments
            </h1>
            <p className="mt-8 max-w-[680px] font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
              We help executives, founders, professional athletes,
              organizations, and families achieve clarity, improve performance,
              and manage risk.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="rounded-[2px] bg-mcg-green px-6 py-3 font-body text-[15px] font-medium text-mcg-bone transition-opacity hover:opacity-70"
              >
                Request a Confidential Conversation
              </Link>
              <a
                href="#what-we-do"
                className="font-body text-[15px] font-medium text-mcg-bone transition-opacity hover:opacity-70"
              >
                Explore Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 -- THE THREE PATHWAYS (editorial rows) */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>How We Work With Clients</h2>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                name: "Performance Advisory",
                desc: "Optimize leadership, decision-making, and performance.",
                href: "/performance-advisory",
              },
              {
                name: "Risk Advisory",
                desc: "Protect people, assets, and operations.",
                href: "/risk-advisory",
              },
              {
                name: "Integrated Advisory",
                desc: "For clients requiring both.",
                href: "/integrated-advisory",
              },
            ].map((item) => (
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

      {/* SECTION 3 -- POSITIONING STATEMENT (green ribbon) */}
      <section className="bg-mcg-green px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-10 flex w-[46px] flex-col items-center gap-[6px]">
            <div className="h-px w-full bg-mcg-gold" />
            <div className="h-px w-full bg-mcg-gold" />
          </div>
          <p className="font-display text-[clamp(24px,2.8vw,30px)] font-500 leading-[1.35] text-mcg-bone">
            Mission Clarity Group is a boutique advisory firm serving executives,
            founders, professional athletes, organizations, and families. We help
            clients reduce risk, improve decision quality, strengthen
            performance, and achieve mission-critical objectives in environments
            where the consequences of failure matter.
          </p>
          <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/70">
            We are the firm executives call when the stakes are high, uncertainty
            is increasing, performance matters, and critical decisions must be
            made correctly.
          </p>
          <div className="mx-auto mt-10 flex w-[46px] flex-col items-center gap-[6px]">
            <div className="h-px w-full bg-mcg-gold" />
            <div className="h-px w-full bg-mcg-gold" />
          </div>
        </div>
      </section>

      {/* SECTION 4 -- THE DIAGNOSTIC MODEL */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[920px]">
          <span className="block font-body text-[11px] font-medium uppercase tracking-[0.15em] text-mcg-sage">
            The Mission Clarity Diagnostic Model
          </span>
          <h2 className="mt-4">Never prescribe before diagnosing.</h2>

          <div className="mt-14">
            {[
              "Assessments",
              "Solution Prescriptions",
              "Implementation",
            ].map((step, i) => (
              <div key={step}>
                <div className="h-px w-full bg-mcg-gold" />
                <div className="flex items-baseline gap-6 py-8 md:py-10">
                  <span className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1] text-mcg-gold">
                    {i + 1}
                  </span>
                  <p className="font-body text-[clamp(16px,1.8vw,17px)] font-medium leading-[1.4] text-mcg-green">
                    {step}
                  </p>
                </div>
              </div>
            ))}
            <div className="h-px w-full bg-mcg-gold" />
          </div>
        </div>
      </section>

      {/* SECTION 5 -- THE CREDO (full-bleed green ribbon) */}
      <section className="bg-mcg-green px-5 py-16 md:px-12 md:py-[88px]">
        <div className="mx-auto max-w-[680px] text-center">
          {/* Gold double-rule motif */}
          <div className="mx-auto flex w-[46px] flex-col items-center gap-[6px]">
            <div className="h-px w-full bg-mcg-gold" />
            <div className="h-px w-full bg-mcg-gold" />
          </div>

          <div className="mt-10 space-y-5 font-display text-[clamp(28px,3.5vw,38px)] font-500 leading-[1.25] text-mcg-bone">
            <p>Our work is private.</p>
            <p>Our methods are deliberate.</p>
            <p>Our focus is measurable performance.</p>
          </div>

          <div className="mx-auto mt-10 flex w-[46px] flex-col items-center gap-[6px]">
            <div className="h-px w-full bg-mcg-gold" />
            <div className="h-px w-full bg-mcg-gold" />
          </div>
        </div>
      </section>

      {/* CREDO SUPPORTING PARAGRAPH */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-14 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-[680px] text-center">
          <p className="font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-sage">
            From boardrooms to championship environments, Mission Clarity Group
            helps high performers navigate complexity, reduce internal friction,
            and execute with clarity when the stakes are highest.
          </p>
        </div>
      </section>

      {/* SECTION -- WHO WE WORK WITH */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32 lg:pb-40"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>
            Built for Individuals and Organizations Operating at a Higher
            Standard
          </h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group partners with leaders and organizations
            where performance matters, pressure is constant, and clarity
            becomes a competitive advantage.
          </p>
        </div>

        {/* Founder image within container */}
        <div className="mx-auto mt-14 max-w-[920px]">
          <Image
            src="/banners/MissionClarity_DifficultSiutations.jpg"
            alt="Mission Clarity Group"
            width={920}
            height={613}
            className="h-auto w-full"
          />
        </div>

        <div className="mx-auto mt-14 max-w-[920px]">
          <div className="h-px w-full bg-mcg-sage/30" />
          <div className="py-8 md:py-10">
            <h3 className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1.3]">
              Executive Leadership
            </h3>
            <p className="mt-3 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
              CEOs, founders, boards, private equity leaders, healthcare
              executives, and growth-stage organizations seeking sharper
              strategic execution and stronger leadership alignment.
            </p>
          </div>

          <div className="h-px w-full bg-mcg-sage/30" />
          <div className="py-8 md:py-10">
            <h3 className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1.3]">
              Elite Athletes
            </h3>
            <p className="mt-3 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
              Professional and elite-level athletes pursuing sustained
              peak performance, mental resilience, emotional regulation,
              and championship-level consistency.
            </p>
          </div>

          <div className="h-px w-full bg-mcg-sage/30" />
          <div className="py-8 md:py-10">
            <h3 className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1.3]">
              Teams &amp; Organizations
            </h3>
            <p className="mt-3 font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
              Organizations navigating growth, uncertainty, transition,
              culture challenges, operational friction, or elevated
              performance demands.
            </p>
          </div>
          <div className="h-px w-full bg-mcg-sage/30" />
        </div>
      </section>

      {/* SECTION 4 -- WHAT WE DO (image left, services right) */}
      <section
        id="what-we-do"
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32 lg:pb-40"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>
            Strategic Advisory for Human Performance and Organizational Clarity
          </h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-sage">
            Mission Clarity Group integrates principles from behavioral science,
            cognitive performance, strategic decision-making, leadership
            psychology, neuroscience, stress adaptation, and elite performance
            training into practical systems that improve execution. Our work is
            designed to create sustainable performance, not temporary motivation.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Strategic Advisory",
                desc: "Executive and organizational guidance designed to improve clarity, alignment, communication, and strategic execution.",
              },
              {
                name: "Mental Performance",
                desc: "Training individuals to perform effectively under pressure through attention control, emotional regulation, stress adaptation, and cognitive resilience.",
              },
              {
                name: "Leadership Development",
                desc: "Developing leaders capable of operating with calm, decisiveness, and strategic awareness during complexity and uncertainty.",
              },
              {
                name: "Athlete Performance",
                desc: "Helping elite athletes strengthen mindset, focus, confidence, recovery, adaptability, and competitive consistency.",
              },
              {
                name: "Executive Coaching",
                desc: "Private advisory engagements tailored for leaders operating in high-demand environments.",
              },
              {
                name: "Intensive Experiences",
                desc: "Half-day, full-day, and multi-day immersive experiences focused on leadership, performance, decision-making, and strategic clarity.",
              },
            ].map((item) => (
              <div key={item.name} className="border border-mcg-green/15 p-8">
                <h3 className="font-display text-[clamp(20px,2.2vw,24px)] font-500 leading-[1.3]">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-[clamp(15px,1.6vw,16px)] leading-[1.65] text-mcg-sage">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 -- OUR PHILOSOPHY (parallax background) */}
      <section
        className="parallax-bg relative px-5 py-24 md:px-12 md:py-32 lg:py-40"
        style={{ backgroundImage: "url(/banners/Golferswing.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-[680px]">
          <h2 className="text-mcg-bone">
            Performance Is Not Built on Motivation Alone
          </h2>
          <p className="mt-6 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/70">
            The highest performers in business and sport share common traits:
          </p>

          <div className="mt-8">
            <div className="h-px w-full bg-mcg-gold" />
            {[
              "The ability to remain composed under pressure",
              "The discipline to execute consistently",
              "The awareness to make better decisions in uncertainty",
              "The resilience to recover quickly from adversity",
              "The clarity to focus on what matters most",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-mcg-bone/15 py-[13px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-bone/90"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-12 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/70">
            Mission Clarity Group helps develop these capabilities intentionally.
            Our philosophy combines strategic thinking with human performance
            science to create leaders and athletes who perform with greater
            precision, confidence, and control.
          </p>
        </div>
      </section>

      {/* SECTION 6 -- DIFFERENTIATOR */}
      <section
        data-bg="dark"
        className="px-5 py-24 md:px-12 md:py-32 lg:py-40"
        style={{ background: "radial-gradient(ellipse at center, #355636 0%, var(--mcg-green) 70%)" }}
      >
        <div className="mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-10 h-px w-20 bg-mcg-gold" />
          <h2 className="text-mcg-bone">
            Discreet. Strategic. Highly Personalized.
          </h2>
          <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/85">
            We are intentionally selective in who we work with. Mission Clarity
            Group is not built around volume. It is built around trust,
            relationships, and measurable impact. Every engagement is tailored to
            the individual, team, or organization. We prioritize
            confidentiality, strategic insight, and practical implementation over
            generic frameworks or performative leadership trends. This is
            advisory work for people operating in environments where outcomes
            matter.
          </p>
          <div className="mx-auto mt-10 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* SECTION 7 -- AREAS OF FOCUS */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-24 md:px-12 md:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>Areas of Focus</h2>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Decision-Making Under Pressure",
                desc: "Improving clarity, composure, and execution during uncertainty and stress.",
              },
              {
                name: "Team Alignment",
                desc: "Reducing friction and improving trust, accountability, and operational cohesion.",
              },
              {
                name: "Stress & Recovery",
                desc: "Developing sustainable performance through recovery systems, nervous system regulation, and stress adaptation.",
              },
              {
                name: "Cognitive Performance",
                desc: "Enhancing focus, attention control, adaptability, and mental endurance.",
              },
              {
                name: "Leadership Presence",
                desc: "Strengthening communication, confidence, emotional intelligence, and influence.",
              },
              {
                name: "Competitive Resilience",
                desc: "Helping leaders and athletes recover quickly, stay adaptive, and sustain high performance over time.",
              },
            ].map((item) => (
              <div key={item.name} className="border border-mcg-green/15 p-8">
                <h3 className="font-display text-[clamp(20px,2.2vw,24px)] font-500 leading-[1.3]">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-[clamp(15px,1.6vw,16px)] leading-[1.65] text-mcg-sage">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 -- HOW WE ENGAGE (editorial rows) */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[920px]">
          <h2>How We Engage</h2>

          <div className="mt-14">
            {[
              {
                name: "Private Advisory",
                desc: "Confidential one-on-one engagements for executives, founders, investors, and elite performers.",
                href: "/performance-advisory",
              },
              {
                name: "Leadership Intensives",
                desc: "Immersive workshops and strategic sessions designed for executive teams and organizations.",
                href: "/leadership-intensives",
              },
              {
                name: "Athlete Development",
                desc: "Mental performance and leadership coaching for elite and professional athletes.",
                href: "/athlete-performance",
              },
              {
                name: "Speaking & Facilitation",
                desc: "Curated keynote presentations and strategic facilitation experiences for leadership teams and organizations.",
                href: "/leadership-intensives#speaking",
              },
            ].map((item) => (
              <div key={item.name}>
                <div className="h-px w-full bg-mcg-gold" />
                <div className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-8 md:py-10">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-opacity hover:opacity-70"
                    >
                      <h3 className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1.3]">
                        {item.name}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="font-display text-[clamp(22px,2.4vw,26px)] font-500 leading-[1.3]">
                      {item.name}
                    </h3>
                  )}
                  <p className="font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-sage">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="h-px w-full bg-mcg-gold" />
          </div>
        </div>
      </section>

      {/* SECTION 9 -- BRAND STATEMENT */}
      <section
        className="parallax-bg relative px-5 py-24 md:px-12 md:py-32 lg:py-40"
        style={{ backgroundImage: "url(/backgrounds/StatementBackground.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-[680px] text-center">
          <div className="mx-auto mb-10 h-px w-20 bg-mcg-gold" />
          <p className="font-display text-[clamp(28px,3.5vw,38px)] font-500 leading-[1.25] text-mcg-bone">
            In environments where pressure is constant, clarity becomes a
            strategic advantage.
          </p>
          <p className="mt-8 font-body text-[clamp(16px,1.8vw,18px)] leading-[1.65] text-mcg-bone/90">
            Mission Clarity Group exists to help leaders and athletes think more
            clearly, perform more consistently, and operate with greater control
            when the stakes are highest.
          </p>
          <div className="mx-auto mt-10 h-px w-20 bg-mcg-gold" />
        </div>
      </section>

      {/* SECTION 10 -- FINAL CTA */}
      <section
        data-bg="light"
        className="bg-mcg-bone px-5 py-32 md:px-12 md:py-40 lg:py-52"
      >
        <div className="mx-auto max-w-[780px] text-center">
          <h1>Private Conversations. Strategic Outcomes.</h1>
          <p className="mt-10 font-body text-[clamp(17px,2vw,20px)] leading-[1.65] text-mcg-sage">
            We work with a limited number of clients and organizations each year
            to ensure depth, discretion, and meaningful impact. If you are
            seeking a strategic partner focused on performance, leadership, and
            clarity at the highest level, we invite you to begin the
            conversation.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-[2px] bg-mcg-green px-8 py-4 font-body text-[16px] font-medium text-mcg-bone transition-opacity hover:opacity-70"
          >
            Schedule a Confidential Introduction
          </Link>
        </div>
      </section>
    </>
  );
}
