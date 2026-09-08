import type { Metadata } from 'next';
import Link from '@/components/brand/site-link';
import {
  ArrowUpRight,
  Check,
  FileSpreadsheet,
  MessagesSquare,
  Layers,
  KeyRound,
} from 'lucide-react';
import { PageIntro, SectionHead } from '@/components/brand/sections';
export const metadata: Metadata = {
  title: 'Our approach — Business first, then software',
  description:
    'From spreadsheets and workflow discovery to a focused build, team adoption, hosting and handover.',
};
const steps = [
  {
    icon: MessagesSquare,
    n: '01',
    title: 'We learn the business.',
    sub: 'BEFORE A SINGLE LINE OF CODE',
    text: 'We talk to the people doing the work. We look at your Excel files, current tools, and daily routines. We ask where customers come from, what happens next, and what keeps landing back on your desk.',
    deliverable: 'A shared understanding of the workflow and its bottlenecks.',
  },
  {
    icon: FileSpreadsheet,
    n: '02',
    title: 'We map the opportunity.',
    sub: 'MAKE THE INVISIBLE VISIBLE',
    text: 'We connect the stages from enquiry to sale to delivery. We identify repeated work, missing information, unclear ownership, and the one improvement that deserves to happen first.',
    deliverable:
      'A prioritised scope, workflow map, and practical first phase.',
  },
  {
    icon: Layers,
    n: '03',
    title: 'We build it with you.',
    sub: 'REAL WORK. REAL FEEDBACK.',
    text: 'AI accelerates development while human expertise guides the product. Your team reviews a working version, tries it against real scenarios, and helps refine the flow before rollout.',
    deliverable:
      'A usable product, tested against the agreed business workflows.',
  },
  {
    icon: KeyRound,
    n: '04',
    title: 'We make it part of the business.',
    sub: 'FROM SOFTWARE TO EVERYDAY ADVANTAGE',
    text: 'We plan data migration, access, hosting, training, and handover. We agree how support and future changes will work, so the next phase has a clear foundation.',
    deliverable:
      'A rollout plan, agreed handover, and a roadmap for what comes next.',
  },
];
export default function Approach() {
  return (
    <main>
      <PageIntro
        eyebrow="THE AAI BUILT APPROACH"
        title={
          <>
            Business first.
            <br />
            <span className="gradient-text">Everything follows.</span>
          </>
        }
        description="You don’t need to know what to ask a developer. You need to know your business. We’ll work through the rest, together."
      />
      <section className="container approach-timeline">
        {steps.map((s) => (
          <article key={s.n}>
            <div className="timeline-rail">
              <span>{s.n}</span>
              <div />
            </div>
            <div className="timeline-content">
              <span className="eyebrow">{s.sub}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <div className="deliverable">
                <Check size={17} />
                <span>{s.deliverable}</span>
              </div>
            </div>
            <div className="timeline-icon">
              <s.icon size={70} strokeWidth={0.75} />
            </div>
          </article>
        ))}
      </section>
      <section className="section soft" id="ownership">
        <div className="container">
          <SectionHead
            kicker="CLARITY FROM THE START"
            title={
              <>
                A product for your business.
                <br />
                <span>With the details agreed.</span>
              </>
            }
            copy="Ownership means getting specific. We define these decisions with you before the build."
          />
          <div className="ownership-grid">
            {[
              [
                'Your hosting',
                'Deploy on your server or your cloud account when the architecture supports it. Agree access, backups, maintenance, and recurring costs.',
              ],
              [
                'Your data',
                'Define what is stored, who can see it, and how you can export it. Plan migration from existing tools and spreadsheets.',
              ],
              [
                'Your software',
                'Set source-code access, intellectual-property terms, documentation, and handover in the project agreement.',
              ],
              [
                'Your future changes',
                'Agree what support covers and how new requirements will be scoped. Build a roadmap around business priorities.',
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container split-story">
        <div>
          <span className="eyebrow">RIGHT-SIZED FOR YOUR BUSINESS</span>
          <h2>
            Start where
            <br />
            <span>it makes a difference.</span>
          </h2>
          <p>
            A first phase can focus on your biggest bottleneck. We agree the
            scope and quote before building, and explain the costs of hosting,
            integrations, and ongoing support separately.
          </p>
          <Link href="/contact" className="link">
            Let’s scope your first phase <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="prepare-card">
          <span className="eyebrow">FOR OUR FIRST CONVERSATION</span>
          <h3>Bring what you have.</h3>
          <ul className="check-list">
            {[
              'A quick description of your business',
              'The process that takes too much effort',
              'An anonymised sample of your spreadsheet structure',
              'The tools and channels your team uses',
              'Your priorities, budget range, and timing',
            ].map((x) => (
              <li key={x}>
                <Check size={16} />
                {x}
              </li>
            ))}
          </ul>
          <a href="/discovery-brief.txt" className="link" download>
            Download the discovery brief ↓
          </a>
        </div>
      </section>
    </main>
  );
}
