/* oxlint-disable next/no-img-element */
import type { Metadata } from 'next';
import { ArrowUpRight, Plus } from 'lucide-react';
import { PageIntro } from '@/components/brand/sections';
import { whatsapp } from '@/lib/brand';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About Sanyam Tayal and AAI Built',
  description:
    '12 years across distribution, retail, wholesale, construction, technology and consulting. Meet the business experience behind AAI Built.',
  path: '/about',
  keywords: [
    'Sanyam Tayal',
    'AAI Built founder',
    'business software consultant India',
    'HAG India',
    'Myfresh',
  ],
});
export default function About() {
  return (
    <main>
      <PageIntro
        eyebrow="THE HUMAN IN AUGMENTED AI"
        title={
          <>
            Technology gets powerful
            <br />
            <span className="gradient-text">when it gets your business.</span>
          </>
        }
        description="AAI Built brings together the speed of AI and the judgement that comes from doing the work yourself."
      />
      <section className="about-masthead container">
        <div>
          <span className="eyebrow">A NOTE FROM THE FOUNDER</span>
          <h2>
            I’ve been on your
            <br />
            side of the desk.
          </h2>
          <p className="founder-lede">
            “When you’ve run the business, you see the software differently.”
          </p>
          <p>
            I’m Sanyam Tayal. Across 12 years, I’ve worked as a wholesaler,
            retailer, stockist, builder, tech founder, stock trader, and
            consultant. I’ve run brands including HAG India and Myfresh.
          </p>
          <p>
            I’ve seen what happens when a growing business has to work around
            its tools. More spreadsheets. More chasing. More decisions held in
            one person’s head.
          </p>
          <p>
            AAI Built is my answer: understand the business properly, then use
            AI and human expertise to create technology around it.
          </p>
          <div className="founder-signature">
            Sanyam Tayal<span>FOUNDER · AAI BUILT</span>
          </div>
          <a
            href={whatsapp(
              'Hi Sanyam, I’d like to talk about the next chapter for my business.',
            )}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Talk to Sanyam <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="about-art">
          <img
            src="/aai-sculpture.png"
            width={1536}
            height={1024}
            loading="lazy"
            alt="Sculptural AAI mark in silver and blue"
          />
          <div>
            <strong>12</strong>
            <span>
              YEARS OF BUSINESS EXPERIENCE.
              <br />
              ONE CONNECTED VISION.
            </span>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <span className="eyebrow">EXPERIENCE THAT SHAPES THE QUESTIONS</span>
          <h2>
            Many roles.
            <br />
            <span>A wider perspective.</span>
          </h2>
          <div className="experience-grid">
            {[
              [
                'Retail & brands',
                'Understanding the customer, the daily operation, and what keeps people coming back.',
              ],
              [
                'Wholesale & distribution',
                'Seeing how relationships, stock, teams, and order handovers need to work together.',
              ],
              [
                'Construction & projects',
                'Working with moving parts, responsibilities, and the need for a clear operational picture.',
              ],
              [
                'Technology & consulting',
                'Turning business context into practical systems, and asking what is worth building first.',
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <Plus size={22} />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container belief">
        <span className="eyebrow">WHAT WE BELIEVE</span>
        <h2>
          Your business is unique.
          <br />
          Your ambition is real.
          <br />
          <span>
            Your software should
            <br />
            rise to meet it.
          </span>
        </h2>
        <p>
          Augmented AI Built means human understanding stays in charge. AI helps
          us move faster. Your team helps us build the right thing. The result
          should feel like it belongs in your business—because that is where it
          began.
        </p>
      </section>
    </main>
  );
}
