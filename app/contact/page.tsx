import type { Metadata } from 'next';
import { ArrowUpRight, MessageCircle, Mail, Check } from 'lucide-react';
import { PageIntro } from '@/components/brand/sections';
import ContactForm from '@/components/brand/contact-form';
import { EMAIL, PHONE, whatsapp } from '@/lib/brand';
export const metadata: Metadata = {
  title: 'Let’s build — Contact AAI Built',
  description:
    'Talk to Sanyam Tayal about custom business software. WhatsApp +91 70091 91914 or email Letsbuild@aaibuilt.com.',
};
export default function Contact() {
  return (
    <main>
      <PageIntro
        eyebrow="THE FIRST STEP IS A CONVERSATION"
        title={
          <>
            Big idea.
            <br />
            <span className="gradient-text">Small first step.</span>
          </>
        }
        description="You don’t need a perfect brief. Tell us what your business does, what gets in the way, and where you want to go."
      />
      <section className="container contact-layout">
        <ContactForm />
        <aside className="contact-aside">
          <a
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <MessageCircle />
            <span>WHATSAPP SANYAM</span>
            <strong>{PHONE}</strong>
            <span className="link">
              Start a conversation
              <ArrowUpRight size={15} />
            </span>
          </a>
          <a href={`mailto:${EMAIL}`} className="contact-card">
            <Mail />
            <span>WRITE TO US</span>
            <strong>{EMAIL}</strong>
            <span className="link">
              Open your email app
              <ArrowUpRight size={15} />
            </span>
          </a>
          <div className="conversation-note">
            <h3>What we’ll talk about.</h3>
            <ul className="check-list">
              <li>
                <Check size={15} /> Your business and current workflow
              </li>
              <li>
                <Check size={15} /> Your biggest bottleneck or opportunity
              </li>
              <li>
                <Check size={15} /> A sensible starting scope
              </li>
              <li>
                <Check size={15} /> Hosting, ownership, budget, and timing
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
