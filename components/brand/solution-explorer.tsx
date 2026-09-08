'use client';
import Link from '@/components/brand/site-link';
import { useSyncExternalStore } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Radar,
  Workflow,
  Users,
  Sparkles,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const items = [
  {
    id: 'sales',
    name: 'Sales & leads',
    icon: Radar,
    headline: 'Make the next opportunity easier to act on.',
    copy: 'Capture enquiries from your website, campaigns, imports, and connected channels. Put each one in front of the right person, with context and a clear next step.',
    features: [
      'Lead research, imports, and source tracking',
      'Custom pipelines and lead assignment',
      'Follow-up reminders and sales visibility',
    ],
    flow: ['Find', 'Qualify', 'Assign', 'Follow up'],
    href: '/lead-engine',
    cta: 'Explore the Lead Engine',
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: Workflow,
    headline: 'Build the flow your team already understands.',
    copy: 'Take the process out of scattered sheets and into a shared system. Your stages, approvals, responsibilities, and handovers become part of how the software works.',
    features: [
      'Operational CRM and custom approval flows',
      'Orders, tasks, and delivery coordination',
      'Role-based views and management reporting',
    ],
    flow: ['Enquiry', 'Approval', 'Handover', 'Delivery'],
    href: '/projects/olready',
    cta: 'Explore Olready',
  },
  {
    id: 'people',
    name: 'People',
    icon: Users,
    headline: 'Expand your team without losing the thread.',
    copy: 'Give people one place to understand what needs doing, what has happened, and who is responsible. Build around your reporting structure and everyday team rhythm.',
    features: [
      'Attendance and daily work reporting',
      'Call activity and follow-up visibility',
      'Consultant and recruitment workflows',
    ],
    flow: ['Recruit', 'Onboard', 'Coordinate', 'Review'],
    href: '/projects/crew',
    cta: 'Explore Crew',
  },
  {
    id: 'ai',
    name: 'Applied AI',
    icon: Sparkles,
    headline: 'Let your team spend more time being human.',
    copy: 'Use AI to handle preparation, retrieval, and routine drafting. Put review points where judgement matters, and connect each capability to an actual business task.',
    features: [
      'Call summaries and draft follow-ups',
      'Search across approved business knowledge',
      'Document extraction and assisted reporting',
    ],
    flow: ['Capture', 'Understand', 'Assist', 'Review'],
    href: '/contact',
    cta: 'Explore AI for my business',
  },
];
const subscribe = (fn: () => void) => {
  window.addEventListener('hashchange', fn);
  window.addEventListener('popstate', fn);
  return () => {
    window.removeEventListener('hashchange', fn);
    window.removeEventListener('popstate', fn);
  };
};
const snapshot = () => {
  const hash = window.location.hash.slice(1);
  return items.some((i) => i.id === hash) ? hash : 'sales';
};
export default function SolutionExplorer() {
  const selected = useSyncExternalStore(subscribe, snapshot, () => 'sales');
  return (
    <Tabs
      value={selected}
      onValueChange={(value) => {
        window.history.pushState(window.history.state, '', `#${String(value)}`);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }}
      className="solution-tabs"
    >
      <TabsList
        aria-label="Explore business solutions"
        className="solution-tab-list"
      >
        {items.map(({ id, name, icon: Icon }) => (
          <TabsTrigger value={id} key={id}>
            <Icon size={16} />
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((i) => (
        <TabsContent value={i.id} key={i.id} className="solution-panel">
          <div>
            <span className="eyebrow">
              BUILT AROUND YOUR {i.name.toUpperCase()}
            </span>
            <h3>{i.headline}</h3>
            <p>{i.copy}</p>
            <ul className="check-list">
              {i.features.map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <Link href={i.href} className="link">
              {i.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className={`flow-preview ${i.id}`}>
            <i.icon strokeWidth={0.8} />
            <span className="eyebrow">YOUR CONNECTED WORKFLOW</span>
            <div>
              {i.flow.map((f, n) => (
                <span key={f}>
                  {f}
                  {n < 3 && <ArrowRight size={15} />}
                </span>
              ))}
            </div>
            <small>Example flow. Designed around your business.</small>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
