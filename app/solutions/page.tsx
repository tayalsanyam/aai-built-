import type { Metadata } from 'next';
import Link from '@/components/brand/site-link';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { PageIntro, SectionHead, Ownership } from '@/components/brand/sections';
import SolutionExplorer from '@/components/brand/solution-explorer';
export const metadata: Metadata = {
  title: 'Solutions built around your business',
  description:
    'Explore custom CRM, operations, team tools, lead generation and applied AI for SMEs.',
};
export default function Solutions() {
  return (
    <main>
      <PageIntro
        eyebrow="YOUR BUSINESS, AUGMENTED"
        title={
          <>
            Built for your flow.
            <br />
            <span className="gradient-text">Ready for your growth.</span>
          </>
        }
        description="One connected system can start with one well-chosen improvement. Build what matters today, with room for what comes next."
      />
      <section className="container solution-section">
        <div className="solution-anchors">
          <span id="sales" />
          <span id="operations" />
          <span id="people" />
          <span id="ai" />
        </div>
        <SolutionExplorer />
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHead
            kicker="FROM FRICTION TO FORWARD"
            title={
              <>
                Small changes in the flow.
                <br />
                <span>More room for the business.</span>
              </>
            }
            copy="Better software creates the conditions for growth. Here is what that can look like in everyday work."
          />
          <div className="outcome-grid">
            {[
              [
                'A lead gets a clear owner.',
                'Fewer opportunities left waiting.',
                'Assign enquiries by location, category, or team. Keep the next action visible.',
              ],
              [
                'The next step is built in.',
                'Less dependence on you.',
                'Help the team move work through the process without checking every detail with the founder.',
              ],
              [
                'The picture comes together.',
                'More informed decisions.',
                'Bring sales activity, pending work, and team updates into views built for the decisions you make.',
              ],
            ].map(([a, b, c]) => (
              <article key={a}>
                <span className="eyebrow">{a}</span>
                <ArrowRight />
                <h3>{b}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          kicker="BUILT FOR THE WAY YOU DO BUSINESS"
          title={
            <>
              Your industry is the context.
              <br />
              <span>Your workflow is the blueprint.</span>
            </>
          }
        />
        <div className="industry-grid">
          {[
            [
              'Distribution & wholesale',
              'Dealer enquiries, sales follow-ups, stock visibility, order handovers, and field teams.',
            ],
            [
              'Retail & growing brands',
              'Customer relationships, repeat business, store coordination, and connected reporting.',
            ],
            [
              'Services & consulting',
              'Enquiries, proposals, consultant allocation, client handovers, and delivery tracking.',
            ],
            [
              'Construction & project teams',
              'Site updates, tasks, approvals, people, and progress in a shared operational view.',
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          These are possibilities we can scope together—not a fixed package you
          need to fit into.
        </p>
      </section>
      <section className="ownership-explainer dark-panel container">
        <span className="eyebrow">START PRACTICAL. THINK BIGGER.</span>
        <h2>
          Your first tool.
          <br />
          The start of <span>your own ecosystem.</span>
        </h2>
        <p>
          Agree a focused first phase around a real bottleneck. Connect the next
          workflow when it earns its place. Pricing follows the scope we define
          together, with hosting, integrations, and ongoing support made clear.
        </p>
        <div className="inline-points">
          <span>
            <Check /> Prioritised scope
          </span>
          <span>
            <Check /> A usable first release
          </span>
          <span>
            <Check /> A roadmap that can grow
          </span>
        </div>
        <Link href="/approach" className="link">
          How we work together
          <ArrowUpRight size={17} />
        </Link>
      </section>
      <Ownership />
    </main>
  );
}
