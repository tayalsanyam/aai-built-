import type { Metadata } from 'next';
import Link from '@/components/brand/site-link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects, whatsapp } from '@/lib/brand';
import { ProjectVisual } from '@/components/brand/sections';
import { createPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) {
    return createPageMetadata({
      title: 'Project not found',
      description: 'The requested AAI Built project could not be found.',
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${p.name} — ${p.category}`,
    description: p.description,
    path: `/projects/${p.slug}`,
    keywords: [p.name, p.category, 'AAI Built project', 'custom business software'],
  });
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const next =
    projects[
      (projects.findIndex((x) => x.slug === slug) + 1) % projects.length
    ];
  return (
    <main className={`project-detail ${p.theme}`}>
      <div className="project-subnav container">
        <Link href="/projects">
          <ArrowLeft size={14} /> All projects
        </Link>
        <span>{p.name}</span>
        <a href={p.url} target="_blank" rel="noreferrer">
          Open product <ArrowUpRight size={14} />
        </a>
      </div>
      <section className="project-intro container">
        <span className="eyebrow">{p.eyebrow}</span>
        <h1>{p.title}</h1>
        <p>{p.intro}</p>
        <div className="actions">
          <a href={p.url} target="_blank" rel="noreferrer" className="pill">
            Explore {p.name}
            <ArrowUpRight size={16} />
          </a>
          <a
            href={whatsapp(
              `Hi Sanyam, I’d like a walkthrough of ${p.name} and to discuss a similar workflow for my business.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Request a walkthrough
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <section className="container project-showcase">
        <ProjectVisual project={p} large />
      </section>
      <section className="section container project-context">
        <div>
          <span className="eyebrow">THE BUSINESS CHALLENGE</span>
          <h2>
            Start with
            <br />
            <span>the real work.</span>
          </h2>
          <p>{p.problem}</p>
        </div>
        <div>
          <span className="eyebrow">THE PRODUCT</span>
          <h2>
            A system with
            <br />
            <span>a clear purpose.</span>
          </h2>
          <p>{p.solution}</p>
        </div>
      </section>
      <section className="soft section">
        <div className="container">
          <span className="eyebrow">INSIDE THE IDEA</span>
          <h2>The thinking behind {p.name}.</h2>
          <div className="module-grid">
            {p.modules.map(([t, d], i) => (
              <article key={t}>
                <span className="step-index">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className="project-flow">
            {p.flow.map((f, i) => (
              <span key={f}>
                {f}
                {i < p.flow.length - 1 && <ArrowRight size={20} />}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section container project-opportunity">
        <span className="eyebrow">WHAT THIS COULD MEAN FOR YOU</span>
        <h2>
          Different business.
          <br />
          <span>The same possibility.</span>
        </h2>
        <p>{p.opportunity}</p>
        <a
          href={whatsapp(
            `Hi Sanyam, ${p.name} gave me an idea for my own business. Can we explore it?`,
          )}
          className="pill"
          target="_blank"
          rel="noreferrer"
        >
          Build something for my business
          <ArrowUpRight size={16} />
        </a>
        <p className="project-note">{p.note}</p>
      </section>
      <div className="next-project container">
        <span>KEEP EXPLORING</span>
        <Link href={`/projects/${next.slug}`}>
          {next.name}
          <ArrowRight />
        </Link>
      </div>
    </main>
  );
}
