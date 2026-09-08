import type { Metadata } from 'next';
import Link from '@/components/brand/site-link';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ListFilter,
  Workflow,
  Radar,
  Check,
} from 'lucide-react';
import { PageIntro, SectionHead } from '@/components/brand/sections';
import { whatsapp } from '@/lib/brand';
export const metadata: Metadata = {
  title: 'Lead Engine — From business research to sales action',
  description:
    'Custom lead research, permitted web data extraction, enrichment, qualification and CRM workflows for your sales team.',
};
export default function LeadEngine() {
  return (
    <main className="lead-page">
      <PageIntro
        eyebrow="THE LEAD ENGINE"
        title={
          <>
            Your next customer
            <br />
            <span className="gradient-text">is out there.</span>
          </>
        }
        description="Build a system that helps you find the right businesses, understand the opportunity, and give your sales team a clear next move."
      >
        <div className="actions">
          <a
            className="pill"
            href={whatsapp(
              'Hi Sanyam, I’d like to build a lead research and sales engine for my business.',
            )}
            target="_blank"
            rel="noreferrer"
          >
            Build my lead engine <ArrowUpRight size={16} />
          </a>
          <a className="link" href="#how-it-works">
            See how it connects <ArrowRight size={16} />
          </a>
        </div>
      </PageIntro>
      <section className="lead-pipeline container">
        <div className="pipeline-source">
          <span className="eyebrow">OPPORTUNITY COMES FROM EVERYWHERE</span>
          {[
            'Public business sources',
            'Website enquiries',
            'Campaign leads',
            'Your spreadsheets',
          ].map((x) => (
            <span key={x}>
              <Search size={15} />
              {x}
            </span>
          ))}
        </div>
        <div className="pipeline-arrow">
          <ArrowRight />
        </div>
        <div className="pipeline-core">
          <Radar size={64} strokeWidth={0.8} />
          <h3>Your Lead Engine</h3>
          <p>Find. Clean. Qualify. Connect.</p>
        </div>
        <div className="pipeline-arrow">
          <ArrowRight />
        </div>
        <div className="pipeline-result">
          <span className="eyebrow">ONE USEFUL NEXT STEP</span>
          <div>
            <span className="lead-dot" /> Qualified opportunity
          </div>
          <div>
            <Check size={15} /> Source recorded
          </div>
          <div>
            <Check size={15} /> Owner assigned
          </div>
          <div>
            <Check size={15} /> Follow-up planned
          </div>
        </div>
        <span className="diagram-caption">
          ILLUSTRATIVE WORKFLOW · BUILT TO YOUR CRITERIA
        </span>
      </section>
      <section className="section container" id="how-it-works">
        <SectionHead
          kicker="A LIST IS JUST THE BEGINNING"
          title={
            <>
              Find the fit.
              <br />
              <span>Build the follow-through.</span>
            </>
          }
        />
        <div className="steps-grid">
          {[
            [
              '01',
              'Define the customer',
              'Start with the geography, business category, size, and buying signals that make a prospect relevant to you.',
            ],
            [
              '02',
              'Research and collect',
              'Build research tools and web scraping for permitted public business sources, alongside APIs, directories, imports, and your own incoming leads.',
            ],
            [
              '03',
              'Make the data useful',
              'Normalise fields, remove duplicates, record sources, and enrich approved business information. Flag uncertain records for review.',
            ],
            [
              '04',
              'Turn insight into action',
              'Qualify against your criteria, assign an owner, and create the next action in your CRM. Track what turns into a conversation and a sale.',
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="step-index">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section soft">
        <div className="container split-story">
          <div>
            <span className="eyebrow">IMAGINE THE WORKFLOW</span>
            <h2>
              You sell to retailers.
              <br />
              <span>
                Your system knows
                <br />
                where to start.
              </span>
            </h2>
            <p>
              Say you’re expanding a distribution business into a new city.
              Instead of building a list by hand, a scoped lead engine could
              help research relevant stores and organise the next steps.
            </p>
            <a
              className="link"
              href={whatsapp(
                'Hi Sanyam, I want to explore a lead engine for my target customer segment.',
              )}
              target="_blank"
              rel="noreferrer"
            >
              Tell us who you want to reach <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="scenario-card">
            <span className="eyebrow">EXAMPLE · DISTRIBUTOR EXPANSION</span>
            {[
              ['Your criteria', 'Retail category + city + business fit'],
              ['Your research', 'Permitted sources + existing contacts'],
              ['Your shortlist', 'Deduplicated, sourced, ready to review'],
              ['Your sales flow', 'Assigned representative + next action'],
              ['Your learning', 'Which sources create real conversations'],
            ].map(([t, d], i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <div>
                  <strong>{t}</strong>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="principles-grid">
          <article>
            <ListFilter />
            <h3>Relevance over volume.</h3>
            <p>
              A useful prospect fits your business. Build criteria, review
              steps, and qualification into the system before handing records to
              the sales team.
            </p>
          </article>
          <article>
            <Workflow />
            <h3>A pipeline, not another file.</h3>
            <p>
              Connect the research to your CRM, assignments, and approved
              communication channels. Keep human review where the relationship
              needs it.
            </p>
          </article>
          <article>
            <Search />
            <h3>Know where data came from.</h3>
            <p>
              Agree the sources, permissions, fields, and outreach rules during
              discovery. Keep collection focused on the business information you
              need.
            </p>
          </article>
        </div>
        <div className="inline-note">
          <span>THE LEAD ENGINE IS A CUSTOM BUILD CAPABILITY.</span>
          <p>
            Data availability, source permissions, integrations, and
            qualification rules shape the final scope. It is not a promise of a
            fixed number of leads or sales.
          </p>
        </div>
        <Link className="link" href="/solutions">
          See the rest of your connected business <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
