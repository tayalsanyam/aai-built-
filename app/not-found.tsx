import Link from '@/components/brand/site-link';
export default function NotFound() {
  return (
    <main className="page-intro container">
      <span className="eyebrow">404 · A DIFFERENT DIRECTION</span>
      <h1>
        This chapter
        <br />
        isn’t here.
      </h1>
      <p>Let’s get you back to the possibilities.</p>
      <div className="actions">
        <Link className="pill" href="/">
          Explore AAI Built
        </Link>
        <Link className="link" href="/projects">
          See our projects →
        </Link>
      </div>
    </main>
  );
}
