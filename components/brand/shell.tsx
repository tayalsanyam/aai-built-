'use client';
import Link from '@/components/brand/site-link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, MessageCircle } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { EMAIL, PHONE, whatsapp } from '@/lib/brand';
export function Mark() {
  return (
    <svg viewBox="0 0 56 56" aria-hidden="true">
      <rect x="1" y="1" width="54" height="54" rx="15" fill="#245de8" />
      <path d="M9 41 22 14h7L17 41Z" fill="white" />
      <path d="m27 14 13 27h-8l-4-9h-8l3-6h3l-3-6Z" fill="white" />
      <path d="M42 15h5v26h-5Z" fill="#91baff" />
    </svg>
  );
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="AAI Built home">
      <Mark />
      <span>
        AAI<span className="brand-light"> Built</span>
      </span>
    </Link>
  );
}
const links = [
  ['/solutions', 'Solutions'],
  ['/lead-engine', 'Lead Engine'],
  ['/projects', 'Projects'],
  ['/approach', 'Our approach'],
  ['/about', 'About'],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname?.startsWith(href) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-end">
          <a
            className="header-whatsapp"
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with AAI Built on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
          <Link className="pill small" href="/contact">
            Let’s build <ArrowUpRight size={14} />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="mobile-trigger"
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent className="mobile-menu">
              <SheetTitle>Explore AAI Built</SheetTitle>
              <SheetDescription>
                Technology for your next chapter.
              </SheetDescription>
              <nav aria-label="Mobile navigation">
                {links.map(([href, label]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}>
                    {label}
                    <ArrowUpRight size={19} />
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Let’s build
                  <ArrowUpRight size={19} />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <>
      <section className="closing">
        <div className="container">
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h2>
            Let’s build what
            <br />
            <span className="gradient-text">comes next.</span>
          </h2>
          <p>
            Bring the business. The challenge. The idea.
            <br />
            We’ll bring the questions that turn it into something real.
          </p>
          <div className="actions">
            <a
              className="pill"
              href={whatsapp()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Talk on WhatsApp{' '}
              <ArrowUpRight size={16} />
            </a>
            <Link className="link" href="/contact">
              Start with your idea <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <footer className="site-footer container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Human expertise.
              <br />
              Augmented by AI.
              <br />
              Built for your business.
            </p>
          </div>
          <div>
            <span className="footer-label">EXPLORE</span>
            <Link href="/solutions">What we build</Link>
            <Link href="/lead-engine">Lead Engine</Link>
            <Link href="/projects">Our projects</Link>
          </div>
          <div>
            <span className="footer-label">AAI BUILT</span>
            <Link href="/about">Our story</Link>
            <Link href="/approach">Our approach</Link>
            <a href="/aai-built-logo.svg" download>
              Brand mark ↗
            </a>
          </div>
          <div>
            <span className="footer-label">LET’S TALK</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={whatsapp()} target="_blank" rel="noreferrer">
              {PHONE} ↗
            </a>
            <a href="/discovery-brief.txt" download>
              Discovery brief ↓
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AAI Built · Augmented AI Built
          </span>
          <span>YOUR BUSINESS. YOUR NEXT CHAPTER.</span>
        </div>
      </footer>
    </>
  );
}
