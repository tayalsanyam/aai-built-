import Link from '@/components/brand/site-link';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Radar,
  Workflow,
  Users,
  Plus,
} from 'lucide-react';
import BusinessScene from '@/components/brand/scene';
import {
  SectionHead,
  ProjectCards,
  Ownership,
} from '@/components/brand/sections';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Your next chapter. Built in.',
  description:
    'Custom software for ambitious SMEs. Human business expertise, augmented by AI. CRM, sales, operations and team tools built around your business.',
  path: '/',
  absoluteTitle: 'AAI Built — Your next chapter. Built in.',
  keywords: [
    'custom software for SMEs',
    'business software India',
    'AI software development',
    'custom CRM',
    'SME technology partner',
  ],
});

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-heading container">
          <span className="eyebrow">
            <span className="blue-dot" /> INTRODUCING YOUR BUSINESS, AUGMENTED.
          </span>
          <h1>
            Your next chapter.
            <br />
            <span className="gradient-text">Built in.</span>
          </h1>
          <p>
            Extraordinary software. Built around your everyday.
            <br />
            Human business expertise, amplified by AI.
          </p>
          <div className="actions">
            <Link className="pill" href="/contact">
              Let’s build your advantage <ArrowUpRight size={17} />
            </Link>
            <Link className="link" href="/solutions">
              Explore the possibilities <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <BusinessScene />
        <div className="hero-foot container">
          <span>BUILT FOR AMBITIOUS SMEs</span>
          <span>12 YEARS OF BUSINESS EXPERIENCE</span>
          <span>SOFTWARE YOU CAN OWN</span>
        </div>
      </section>
      <section className="intro-statement container">
        <span className="eyebrow">YOU’VE OUTGROWN “MAKE IT WORK.”</span>
        <h2>
          The spreadsheets. The workarounds.
          <br />
          The tools that almost fit.
          <br />
          <span>You’re ready for what’s next.</span>
        </h2>
        <p>
          We turn the way your business works into technology that works for
          you. From your first lead to your next location. From a team of a few
          to a team with room to grow.
        </p>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHead
            kicker="A BUSINESS THAT MOVES AS ONE"
            title={
              <>
                More connected.
                <br />
                <span>More possible.</span>
              </>
            }
            copy="Choose a starting point. Build the bigger picture as you grow."
          />
          <div className="possibility-grid">
            {[
              {
                icon: Radar,
                kicker: 'FIND YOUR NEXT CUSTOMER',
                title: 'Opportunity,\nmeet engine.',
                copy: 'Turn business research, incoming enquiries, and scattered contacts into a pipeline your sales team can act on.',
                href: '/lead-engine',
                className: 'opportunity',
              },
              {
                icon: Workflow,
                kicker: 'GIVE WORK A WAY FORWARD',
                title: 'Less friction.\nMore flow.',
                copy: 'A CRM that knows your stages. Operations that know the next step. Approvals that keep things moving.',
                href: '/solutions#operations',
                className: 'flow',
              },
              {
                icon: Users,
                kicker: 'MAKE ROOM FOR GROWTH',
                title: 'A bigger team.\nA clearer picture.',
                copy: 'Connect attendance, calls, recruitment, and responsibilities without turning every update into a meeting.',
                href: '/solutions#people',
                className: 'people',
              },
              {
                icon: Sparkles,
                kicker: 'MAKE AI PART OF THE TEAM',
                title: 'Intelligence.\nWhere it matters.',
                copy: 'Summarise calls. Find answers. Draft the follow-up. Put human judgement at the centre of useful AI.',
                href: '/solutions#ai',
                className: 'intelligence',
              },
            ].map(({ icon: Icon, ...c }) => (
              <Link
                href={c.href}
                key={c.title}
                className={`possibility ${c.className}`}
              >
                <span className="eyebrow">{c.kicker}</span>
                <h3>{c.title}</h3>
                <p>{c.copy}</p>
                <div className="possibility-bottom">
                  <Icon size={35} strokeWidth={1} />
                  <span className="circle-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          kicker="THE WORK SPEAKS"
          title={
            <>
              Different businesses.
              <br />
              <span>Distinct possibilities.</span>
            </>
          }
          copy="Explore three products shaped around specific ways of working."
        />
        <ProjectCards />
      </section>
      <Ownership />
      <section className="founder-teaser">
        <div className="container founder-layout">
          <div className="experience-number">
            12<span>YEARS. MANY SIDES OF BUSINESS.</span>
          </div>
          <div>
            <span className="eyebrow">THE HUMAN BEHIND THE AI</span>
            <h2>
              Built by someone
              <br />
              who’s been there.
            </h2>
            <p>
              Retailer. Wholesaler. Stockist. Builder. Tech founder. Trader.
              Consultant. Sanyam Tayal brings experience running brands
              including HAG India and Myfresh to the technology he builds today.
            </p>
            <Link className="link" href="/about">
              Meet the founder <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container process-teaser">
        <span className="eyebrow">THE START IS SURPRISINGLY SIMPLE</span>
        <h2>
          Bring your Excel.
          <br />
          <span>We’ll see the possibilities.</span>
        </h2>
        <div className="process-strip">
          <span>Your business</span>
          <Plus />
          <span>Human understanding</span>
          <Plus />
          <span>AI development</span>
          <ArrowRight />
          <strong>Your next chapter</strong>
        </div>
        <Link className="link" href="/approach">
          See how we build together <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
