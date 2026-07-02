# SITE.md — Mission Clarity Group

## Project
Mission Clarity Group (MCG) is a discreet strategic advisory and human performance firm. It serves executives, founders, investors, boards, private equity operating teams, healthcare executives, high-growth organizations, and elite athletes. It helps high performers improve decision-making, resilience, adaptability, and sustained performance under pressure. Founder and Lead Principal: Ed Thomas.

Positioning: a premium strategic partner, not a traditional leadership consultancy or motivational coaching company. Selective, relationship-driven, confidential. The brand qualifies; it does not sell.

Brand promise: help leaders and athletes think more clearly, perform more consistently, and operate with greater control when the stakes are highest.

Taglines: "Clarity under pressure." and "For the decisions that don't get a second pass."

## Firm positioning, two-pillar model
Mission Clarity Group is a boutique advisory firm operating across two pillars, with an integrated option.

New hero headline: Advisors to Leaders Operating in High-Consequence Environments
New hero subheading: We help executives, founders, professional athletes, organizations, and families achieve clarity, improve performance, and manage risk.

The three pathways:
- Performance Advisory. Optimize leadership, decision-making, and performance. For: Leaders, Founders, Athletes, Teams. Links to /performance-advisory, a hub page. The four offerings each live at their own route: Executive Advisory (/executive-advisory), Athlete Performance (/athlete-performance), Leadership Intensives (/leadership-intensives), DISC Behavioral Analysis (/disc-behavioral-analysis).
- Risk Advisory. Protect people, assets, and operations. For: Families, Executives, Organizations, Travelers.
- Integrated Advisory. For clients requiring both.

Signature positioning statement (use verbatim where placed):
Mission Clarity Group is a boutique advisory firm serving executives, founders, professional athletes, organizations, and families. We help clients reduce risk, improve decision quality, strengthen performance, and achieve mission-critical objectives in environments where the consequences of failure matter.
We are the firm executives call when the stakes are high, uncertainty is increasing, performance matters, and critical decisions must be made correctly.

Additional firm statements (use verbatim where placed):
Mission Clarity Group is the trusted authority acting in their client's best interests.
Mission Clarity Group exists to help clients reduce risk, improve judgment, accelerate execution, and increase performance under pressure.

Proprietary risk definition (use verbatim, this is a firm differentiator):
Risk is anything that creates uncertainty, degrades decision quality, reduces performance, threatens assets, damages relationships, disrupts execution, or prevents achievement of the mission.

The Mission Clarity Diagnostic Model (firm-wide method, governs both pillars):
Guiding principle: Never prescribe before diagnosing.
1. Assessments
2. Solution Prescriptions
3. Implementation

## Brand direction: Fixed Point
Quiet authority. Cinematic restraint. Precision rendered as restraint. The system works only when it stays narrow. It fails by addition, not subtraction. When in doubt, remove an element.

Structural reference: Cookson Adventures. Borrow its editorial structure and motion (kinetic hero phrasing, full-bleed sections, pull quotes, invitation CTAs, generous negative space). Execute type-led in the Fixed Point palette until real photography exists. Build sections so they can accept cinematic photography later without a rebuild.

## Color tokens
Four colors. No others, ever. Define as CSS variables.
- Hunter Green #2D4A2E, --mcg-green, all type, headlines, links
- Gold #B68B4F, --mcg-gold, the two wordmark rules and hairline accents only
- Bone White #FAFAF7, --mcg-bone, page background and all surfaces
- Sage #6B7355, --mcg-sage, long-form body, captions, fine print only. Never headlines, CTAs, or the mark.

## Typography
Two families only: Cormorant Garamond (display serif) and Inter (text grotesque). No third family. No mixed serifs. No italics in headlines. No bold in body. Load via next/font.

Scale:
- Wordmark MISSION CLARITY: Cormorant Garamond, cap height ~32px, weight 600, line-height 1.0, letter-spacing 0.34em
- Wordmark GROUP: Cormorant Garamond, ~14px, weight 400, line-height 1.0, letter-spacing 0.5em
- H1: Cormorant Garamond, 44 to 56px, weight 500, line-height 1.15, letter-spacing 0
- H2: Cormorant Garamond, 28 to 32px, weight 500, line-height 1.2
- H3: Inter, 18px, weight 500, line-height 1.4
- Body: Inter, 17 to 18px, weight 400, line-height 1.65
- Eyebrow / label: Inter, uppercase, 11 to 12px, weight 500, line-height 1.4, letter-spacing 0.15em
- Pull quote / tagline: Cormorant Garamond italic, 22 to 26px, weight 400, line-height 1.5

## Wordmark construction
Build as a single scalable SVG. Two gold rules, 1px stroke (1.5px retina), each the full width of the longest type line. Vertical order and spacing: top rule, 18px gap, MISSION CLARITY, 10px gap, GROUP, 18px gap, bottom rule. Always centered horizontally on its surface. The wordmark always sits framed between both rules and never floats unframed. Minimum total width 180px on web. Below 180px, use a compressed lockup that drops the GROUP line.

## Layout and spacing
- Body content max-width: 680px for long-form, 920px for landing sections.
- Section padding: 96 to 128px top and bottom on desktop, 64px on mobile.
- A globals.css rule already collapses top padding between consecutive same-background sections. Respect it.
- Generous, deliberate negative space is part of the brand. Do not fill space. Empty surface signals confidence.

## Imagery
Sparse and intentional. No stock photography. No boardroom-and-handshake imagery. No people-in-suits-pointing-at-laptops. No military, tactical, or operations imagery of any kind, ever. The firm has no photography yet, so build with restrained placeholder zones (solid bone or sage fields, never gray boxes or "image here" text) that can be swapped for real photography later.

## Interactions
Hover states are subtle: opacity to 0.7, no color change, no underline animation. No flash or slide page transitions. Forms feel like a private bank's onboarding, not a SaaS landing page. CTAs read as invitations, not commands: "Request a Confidential Conversation," "Begin a conversation," never "Get started" or "Sign up."

## Voice
Client-approved copy is used exactly as written. Do not rewrite, condense, reorder, or improve page copy. The only permitted edit is repairing an obviously broken word (for example, a single word split across a line). For any net-new microcopy that the client did not supply (nav labels, form field labels, alt text, 404 and error text), follow these anchors: composed, considered, confident in omission. No em dashes anywhere, in copy or in code comments. Do not invent specific scarcity figures. Use "a limited number of clients" as written; never write "twelve principals" or "six engagements."
When placing any of the new positioning copy, statements, risk definition, pathway taglines, For lists, or Diagnostic Model steps, use them exactly as written above. Do not rewrite or embellish them.

## Anti-patterns, do not produce
- Pill buttons with gradients
- Lucide or any icons set inside colored circles
- Three-column card grids for services
- Centered hero with a CTA and a feature grid stacked below
- Blue or teal palettes, or any color outside the four tokens
- Generic headers like "Our Services," "Why Choose Us," "Get Started Today"
- Stock photography of smiling people
- Gradients, drop shadows, bold weight in body type, more than two type families
- Trust badges, testimonial carousels
- Any visual gesture toward military, tactical, or operations imagery

## Page architecture, 9 pages
Three advisory pillars. Performance Advisory is a hub page with four dedicated offering pages. Risk Advisory and Integrated Advisory are each a single page.
1. Home
2. About (built around Ed Thomas bio)
3. Performance Advisory (hub page, overview plus links to the four offering pages below)
4. Executive Advisory (under Performance)
5. Athlete Performance (under Performance)
6. Leadership Intensives (under Performance, Speaking and Facilitation folds in here)
7. DISC Behavioral Analysis (under Performance)
8. Risk Advisory (single page)
9. Integrated Advisory (single page)
10. Contact

Header nav: Home, About, Performance Advisory, Risk Advisory, Integrated Advisory, Contact. Performance Advisory is a dropdown revealing: Overview (the hub page), Executive Advisory, Athlete Performance, Leadership Intensives, DISC Behavioral Analysis. Risk Advisory and Integrated Advisory are single links. Header CTA: "Request a Confidential Conversation." The header is fixed and overlays the hero. At the top of the page it is fully transparent with bone-colored contents and gold wordmark rules. Once the user scrolls past the first ~16px it transitions to a solid bone background with the standard hunter green contents.

## Contact method
Custom contact form via Resend. Minimal fields. No third-party scheduler embed.

## Placeholder log
- Photography: entire site launches image-light. Placeholder zones throughout. Awaiting Ed's cinematic photography.
- Social proof: no testimonials or press quotes provided. Likely omitted by design given the confidentiality positioning. Awaiting client decision.
- Ed headshot: undecided. The discreet brand may intentionally have none.
- Home, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Home, Services photograph: tall portrait beside the six core areas. Temporary sage-toned field awaiting real photography.
- Home, Statement photograph: full-bleed brand statement background. Temporary hunter-tinted field awaiting real photography.
- About, Founder portrait: tall portrait beside bio. Temporary sage-toned field awaiting headshot decision.
- Performance Advisory hub, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Executive Advisory, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Athlete Performance, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Leadership Intensives, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- DISC Behavioral Analysis, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Contact, destination email: form sends to CONTACT_TO_EMAIL environment variable. Awaiting Ed's address.
- Contact, public contact details: no phone number or direct email displayed on page or footer. Awaiting Ed's decision.
- Risk Advisory, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Risk Advisory, How We Work connective sentence: agency-drafted microcopy pending Ed's review.
- Home, Three Pathways link cues: "Explore Performance Advisory," "Explore Risk Advisory," and "Begin a conversation" are agency-drafted microcopy pending Ed's review.
- Integrated Advisory, Hero photograph: full-bleed hero background. Temporary hunter-tinted field awaiting real photography.
- Integrated Advisory, body copy: hero subheadline, "Two Disciplines, One Firm" section, "Where They Meet" section, "Who This Is For" list, and "A Single Coordinated Approach" section are agency-drafted copy pending Ed's review.

## Preserved service copy (source of record for Performance Advisory consolidation)

### Executive Advisory (/executive-advisory)

Eyebrow: Executive Advisory
H1: Strategic Clarity for Leaders Operating Under Pressure.
Subheadline: Mission Clarity Group partners with executives, founders, investors, and decision-makers navigating complexity, growth, transition, and high-stakes environments. This is not traditional coaching. This is strategic advisory built for leaders carrying real responsibility.

H2: The Reality of Leadership
Lead-in: The higher you rise, the fewer places you can speak candidly.
Statements:
- Pressure compounds.
- Decisions accelerate.
- Expectations expand.
Closing paragraph: Most leaders do not need more motivation. They need clarity, structure, perspective, and a trusted strategic partner who understands performance under pressure. Mission Clarity Group exists for that purpose.

H2: What We Do
Lead-in: We work alongside executives and business leaders to improve:
List:
- Strategic decision-making
- Leadership presence under pressure
- Communication and influence
- Stress management and recovery
- Team alignment
- Operational clarity
- Mental performance
- Personal discipline and accountability
- Long-term sustainability at high output

H2: How We Work
Lead-in: Every engagement is customized. Services may include:
List:
- One-on-one executive advisory
- Leadership intensives
- Strategic off-sites
- Decision-making frameworks
- Performance optimization systems
- Executive stress management
- DISC behavioral analysis
- Team alignment sessions
- Ongoing strategic partnership retainers

H2: The Difference
Lead-in: Mission Clarity Group combines:
List:
- Human performance science
- Executive advisory
- Elite performance psychology
- Behavioral profiling
- Leadership development
- Stress-response management
- Strategic operational thinking
Centered statement: Our approach is discreet, direct, and practical. No corporate theater. No generic leadership language. Only actionable clarity.

H2: Who We Serve
Lead-in: We work with:
List:
- CEOs
- Founders
- Executive teams
- Investors
- High-growth companies
- Entrepreneurs
- Family offices
- Professional athletes transitioning into business
- Leaders operating in high-pressure environments

CTA lead line: For leaders who understand that performance is not accidental.
CTA button: Request a Confidential Consultation

### Athlete Performance (/athlete-performance)

Eyebrow: Athlete Performance
H1: Elite Performance Begins Long Before Competition.
Subheadline: Mission Clarity Group helps professional and elite athletes develop the mental clarity, emotional control, and performance systems required to compete consistently at the highest level.

H2: Beyond Physical Talent
Lead-in: At elite levels, physical ability is assumed. The difference becomes:
List:
- Mental resilience
- Emotional discipline
- Recovery capacity
- Decision-making under pressure
- Focus consistency
- Identity management
- Stress response control
Closing paragraph: The athlete who manages these variables gains a competitive edge others cannot see.

H2: Our Approach
Lead-in: Mission Clarity Group integrates:
List:
- Mental performance training
- DISC behavioral analysis
- Stress and recovery systems
- Competitive mindset development
- Performance routines
- Leadership development
- Emotional regulation
- Identity and transition coaching
Centered statement: We work with athletes as complete human beings, not simply performers.

H2: Areas of Focus
Lead-in: Programs may include:
List (column 1):
- Pre-performance preparation
- Competition mindset
- Focus training
- Confidence development
- Emotional regulation
- Post-performance recovery
List (column 2):
- Lifestyle structure
- Leadership and communication
- Pressure management
- Team dynamics
- Career transition preparation

H2: Built for High Performers
Lead-in: We understand elite performance environments. Our work is designed for athletes competing at:
List:
- Professional levels
- Collegiate levels
- Olympic development pathways
- High-performance amateur competition

H2: Confidential Partnership
Statement: The strongest competitors are often carrying the most pressure privately. Mission Clarity Group provides a discreet environment where athletes can strengthen performance without distraction or unnecessary exposure.

CTA lead line: Clarity under pressure changes outcomes.
CTA button: Request a Confidential Athlete Consultation

### Leadership Intensives (/leadership-intensives)

Eyebrow: Leadership Intensives
H1: High-Level Leadership Development for Modern Pressure Environments.
Subheadline: Mission Clarity Group delivers private leadership intensives and workshops designed for executives, teams, athletes, and organizations seeking measurable performance improvement.

H2: The Problem
Lead-in: Most leadership programs are theoretical. Real leadership happens:
List:
- Under pressure
- During uncertainty
- Inside conflict
- Through rapid decision-making
- While managing stress and responsibility
Centered statement: Our programs are designed for real-world application.

H2: Core Intensive Topics
Lead-in: Programs may include:
List:
- Leadership under pressure
- Strategic communication
- Team alignment
- Mental resilience
- Stress-response management
- Performance psychology
- Decision-making frameworks
- Behavioral profiling through DISC
- Human performance optimization
- Peak performance systems
- Recovery and sustainability

H2: Program Formats
Lead-in: Mission Clarity Group offers:
List:
- Half-day intensives
- Full-day workshops
- Executive retreats
- Team off-sites
- Private leadership sessions
- Athletic performance workshops

H2: Designed for Results
Lead-in: Participants leave with:
List:
- Practical frameworks
- Clear action plans
- Greater self-awareness
- Improved communication
- Better pressure management
- Stronger team cohesion
- Sustainable performance systems

H2: Audience
Lead-in: Ideal for:
List:
- Executive teams
- Growth-stage companies
- Athletic organizations
- Professional sports environments
- Leadership groups
- High-performing teams

H2: Speaking & Facilitation
Description: Curated keynote presentations and strategic facilitation experiences for leadership teams and organizations.

CTA lead line: Leadership is tested under pressure. Build systems that hold when pressure rises.
CTA button: Request Program Information

### DISC Behavioral Analysis (/disc-behavioral-analysis)

Eyebrow: DISC Behavioral Analysis
H1: Understand the Operating System Behind Performance.
Subheadline: Mission Clarity Group uses DISC behavioral analysis to help leaders, executives, teams, and athletes improve communication, performance, stress management, and decision-making.

H2: Self-Awareness Changes Performance
Lead-in: Most people operate without understanding:
List:
- How they respond to stress
- How they communicate under pressure
- How they make decisions
- What drains or restores energy
- How they impact teams and relationships
Closing paragraph: DISC creates clarity around these patterns.

H2: What DISC Reveals
Lead-in: Our DISC performance profiling identifies:
List:
- Communication tendencies
- Leadership style
- Motivational drivers
- Stress-response patterns
- Behavioral blind spots
- Conflict tendencies
- Performance strengths
- Recovery needs

H2: Application
Lead-in: DISC is integrated into:
List:
- Executive advisory
- Athlete performance coaching
- Team alignment
- Leadership development
- Communication training
- Stress management systems
- Organizational performance

H2: The Mission Clarity Difference
Centered statement: We do not use DISC as a personality label. We use it as a strategic performance tool.
Lead-in: The objective is practical application:
List:
- Better decisions
- Better communication
- Better leadership
- Better recovery
- Better performance consistency

H2: Deliverables
Lead-in: Clients may receive:
List:
- Individual DISC debriefs
- Performance reports
- Leadership insights
- Team dynamic analysis
- Stress management recommendations
- Custom development plans

CTA lead line: Performance improves when awareness becomes actionable.
CTA button: Schedule a DISC Performance Assessment
