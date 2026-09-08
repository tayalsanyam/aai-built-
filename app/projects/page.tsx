import type { Metadata } from 'next';
import { PageIntro, ProjectCards } from '@/components/brand/sections';
export const metadata: Metadata = {
  title: 'Projects — Purpose-built business technology',
  description:
    'Explore Fusion Algo trading technology, Olready operational CRM, and Crew attendance, calling and recruitment tools.',
};
export default function Projects() {
  return (
    <main>
      <PageIntro
        eyebrow="BUILT WITH PURPOSE"
        title={
          <>
            Ideas are good.
            <br />
            <span className="gradient-text">Built is better.</span>
          </>
        }
        description="Markets. Operations. People. Three different challenges, shaped into software around the people who use it."
      />
      <section className="container projects-index">
        <ProjectCards />
        <p className="section-note">
          The previews illustrate each product’s workflow. Open a project for
          context and a link to the product.
        </p>
      </section>
      <section className="project-manifesto container">
        <span className="eyebrow">THE THREAD THAT CONNECTS THEM</span>
        <h2>
          A specific business.
          <br />A specific way of working.
          <br />
          <span>A product that makes sense.</span>
        </h2>
        <p>
          Your business doesn’t need to look like these. It needs technology
          that understands what makes it yours.
        </p>
      </section>
    </main>
  );
}
