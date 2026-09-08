export const EMAIL = 'sanyamptayal@aaibuilt.com';
export const PHONE = '+91 70091 91914';
export const whatsapp = (
  message = 'Hi Sanyam, I’d like to explore custom software for my business.',
) => `https://wa.me/917009191914?text=${encodeURIComponent(message)}`;
export const projects = [
  {
    slug: 'fusion-algo',
    name: 'Fusion Algo',
    category: 'Trading technology',
    eyebrow: 'THE STRATEGY IS YOURS. THE SYSTEM SHOULD BE TOO.',
    title: 'Conviction,\nmade systematic.',
    intro:
      'Software that turns a trader’s way of thinking into structured market strategies.',
    description:
      'Custom trading and strategy software that translates market ideas into clearly defined rules.',
    url: 'https://fusionalgo.aaibuilt.com/',
    theme: 'blue',
    type: 'market',
    problem:
      'A strategy is only useful when its logic is clear enough to evaluate and repeat. Manually watching every condition makes that difficult.',
    solution:
      'Fusion Algo is a trading technology project built around market strategies. It brings the AAI Built approach to a specialised domain: start with the operator’s logic, then build software around it.',
    modules: [
      [
        'Strategy logic',
        'Translate entry, exit, and risk conditions into explicit rules that can be reviewed.',
      ],
      [
        'Market workflows',
        'Shape the software around the instruments, information, and decisions the trader works with.',
      ],
      [
        'Structured evaluation',
        'Define a testing and review process before relying on a strategy in live conditions.',
      ],
    ],
    flow: ['Market idea', 'Defined rules', 'Evaluate', 'Refine'],
    opportunity:
      'The same approach can turn a complex, repeatable decision in your business into a structured tool.',
    note: 'Trading involves risk. Software and backtesting do not guarantee profits or consistent returns. Broker integrations and live execution depend on the agreed scope.',
  },
  {
    slug: 'olready',
    name: 'Olready',
    category: 'End-to-end operations',
    eyebrow: 'ONE BUSINESS. ONE CONNECTED FLOW.',
    title: 'From first hello\nto job well done.',
    intro:
      'An operational CRM built around the work that happens before, during, and after a sale.',
    description:
      'An end-to-end operational CRM that connects customer relationships with the work behind them.',
    url: 'https://olready.aaibuilt.com/login',
    theme: 'green',
    type: 'crm',
    problem:
      'A sale rarely ends at “won.” Follow-ups, handovers, responsibilities, and delivery still need to move together. Disconnected tools leave the team filling in the gaps.',
    solution:
      'Olready is an end-to-end operational CRM. It represents a connected approach to running a business, with customer relationships and day-to-day operations brought into a system designed around the workflow.',
    modules: [
      [
        'Customer context',
        'Keep the customer relationship at the centre of the operation, from enquiry onward.',
      ],
      [
        'Operational continuity',
        'Design the handover between sales and delivery so work has an owner and a next step.',
      ],
      [
        'Management visibility',
        'Shape views around the information managers need to keep work moving.',
      ],
    ],
    flow: ['Enquiry', 'Relationship', 'Handover', 'Operations'],
    opportunity:
      'Your CRM can become the working system for your whole business, shaped around your stages, team, and approvals.',
    note: 'The workflow illustration is a concept, not a screenshot or a complete list of live features. A walkthrough can clarify the current product and your requirements.',
  },
  {
    slug: 'crew',
    name: 'Crew',
    category: 'People & performance',
    eyebrow: 'GROW YOUR TEAM. KEEP EVERYONE CONNECTED.',
    title: 'More people.\nOne clear picture.',
    intro:
      'Attendance, calling activity, and recruitment brought into the rhythm of a working team.',
    description:
      'Connected tools for attendance, call tracking, daily activity, consultants, and recruitment.',
    url: 'https://crew.aaibuilt.com/login',
    theme: 'purple',
    type: 'team',
    problem:
      'As the team grows, updates multiply. Attendance sits in one sheet, calling activity in another, and recruitment becomes another process to chase.',
    solution:
      'Crew brings attendance, call tracking, daily call activity, consultant workflows, and recruitment into a connected team system. It is built for the work of coordinating people as the business expands.',
    modules: [
      [
        'Attendance & daily activity',
        'Bring presence and everyday work into a more consistent team routine.',
      ],
      [
        'Call tracking',
        'Connect calling activity with day-to-day oversight and follow-up.',
      ],
      [
        'Consultants & recruitment',
        'Bring consultant and recruitment workflows into the broader team operation.',
      ],
    ],
    flow: ['Recruit', 'Onboard', 'Coordinate', 'Review'],
    opportunity:
      'Build a team system that reflects your roles, locations, reporting lines, and way of working.',
    note: 'The workflow illustration is a concept, not a live dashboard. Data access and activity tracking should be configured transparently for your team.',
  },
] as const;
export type Project = (typeof projects)[number];
