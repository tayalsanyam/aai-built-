import Link from '@/components/brand/site-link';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Command,
  Layers,
  Users,
  TrendingUp,
} from 'lucide-react';
import { projects, type Project } from '@/lib/brand';
export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro container">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
export function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker?: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <div className="section-head">
      <div>
        {kicker && <span className="eyebrow">{kicker}</span>}
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}
export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div className={`product-visual ${project.theme} ${large ? 'large' : ''}`}>
      <div className="product-window">
        <div className="window-bar">
          <span className="window-dots">● ● ●</span>
          <span>{project.name}</span>
          <span className="concept-label">WORKFLOW CONCEPT</span>
        </div>
        {project.type === 'market' ? (
          <div className="market-concept">
            <div className="mini-heading">
              <span>Strategy workspace</span>
              <TrendingUp size={18} />
            </div>
            <div className="strategy-tokens">
              <span>Entry rules</span>
              <span>Risk controls</span>
              <span>Exit rules</span>
            </div>
            <svg
              viewBox="0 0 480 130"
              aria-label="Illustration of a strategy price path, not performance data"
            >
              <path
                d="M0 30H480M0 65H480M0 100H480"
                stroke="currentColor"
                opacity=".13"
              />
              <path
                d="M0 115 20 102 40 109 65 84 82 91 103 55 124 68 147 57 168 76 190 54 212 61 234 32 253 51 272 42 295 63 318 31 341 41 362 16 387 29 415 15 440 23 480 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle cx="318" cy="31" r="5" fill="currentColor" />
              <circle cx="212" cy="61" r="5" fill="currentColor" />
            </svg>
            <div className="visual-caption">Define. Evaluate. Refine.</div>
          </div>
        ) : project.type === 'crm' ? (
          <div className="crm-concept">
            <div className="mini-heading">
              <span>Your operational flow</span>
              <Layers size={18} />
            </div>
            <div className="concept-columns">
              {[
                ['Enquiry', 'New customer', 'Needs captured'],
                ['In progress', 'Assigned owner', 'Next action set'],
                ['Delivery', 'Team handover', 'Work coordinated'],
              ].map(([a, b, c]) => (
                <div key={a}>
                  <span className="column-title">{a}</span>
                  <div className="mini-card">
                    <span className="mini-dot" />
                    <strong>{b}</strong>
                    <span>{c}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="team-concept">
            <div className="mini-heading">
              <span>The team, connected</span>
              <Users size={18} />
            </div>
            {[
              ['Attendance', 'A clear start to the day'],
              ['Calling activity', 'Follow-ups in view'],
              ['Recruitment', 'The next person, the next step'],
            ].map(([a, b], i) => (
              <div className="team-row" key={a}>
                <span className="avatar-dot">{['A', 'C', 'R'][i]}</span>
                <div>
                  <strong>{a}</strong>
                  <span>{b}</span>
                </div>
                <Check size={15} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export function ProjectCards() {
  return (
    <div className="project-grid">
      {projects.map((p) => (
        <Link
          className="project-card"
          key={p.slug}
          href={`/projects/${p.slug}`}
        >
          <ProjectVisual project={p} />
          <div className="project-card-copy">
            <span className="eyebrow">{p.category}</span>
            <h3>
              {p.name}
              <span className="circle-arrow">
                <ArrowUpRight size={19} />
              </span>
            </h3>
            <p>{p.description}</p>
            <span className="link">
              Explore the project <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Ownership() {
  return (
    <section className="ownership container">
      <div className="ownership-mark">
        <Command strokeWidth={0.65} />
        <span>YOURS, BY DESIGN.</span>
      </div>
      <div>
        <span className="eyebrow">BUILD AN ASSET</span>
        <h2>
          Your data.
          <br />
          Your infrastructure.
          <br />
          <span>Your advantage.</span>
        </h2>
        <p>
          Your business knowledge should become a lasting asset. Plan deployment
          on your server or cloud account, with clear access, exports,
          documentation, and ownership terms.
        </p>
        <Link className="link" href="/approach#ownership">
          Understand how ownership works <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
