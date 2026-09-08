'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = Array.from(
      document.querySelectorAll(
        'main .section-head, main .possibility, main .project-card, main .ownership, main .timeline-content, main .belief',
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 },
    );
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight) {
        node.setAttribute('data-reveal', 'pending');
        observer.observe(node);
      }
    });
    return () => {
      observer.disconnect();
      nodes.forEach((node) => node.removeAttribute('data-reveal'));
    };
  }, [pathname]);
  return null;
}
