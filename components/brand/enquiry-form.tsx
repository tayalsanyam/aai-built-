'use client';
import { useId } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EMAIL, whatsapp } from '@/lib/brand';
export default function EnquiryForm({
  compact = false,
}: {
  compact?: boolean;
}) {
  const id = useId();
  return (
    <form
      className={`enquiry-form ${compact ? 'compact' : ''}`}
      action={`https://formsubmit.co/${EMAIL}`}
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New AAI Built business enquiry"
      />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="Source"
        value={compact ? 'Website welcome popup' : 'Website contact page'}
      />
      <input
        type="text"
        name="_honey"
        className="honey-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="field-grid">
        <div>
          <label htmlFor={`${id}-name`}>Your name</label>
          <Input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${id}-business`}>Business name</label>
          <Input
            id={`${id}-business`}
            name="business"
            autoComplete="organization"
            required
            maxLength={150}
            placeholder="Your business or brand"
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`}>Email</label>
          <Input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@business.com"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`}>
            Phone / WhatsApp <span>(optional)</span>
          </label>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="+91"
          />
        </div>
      </div>
      <label htmlFor={`${id}-message`}>What would you like to improve?</label>
      <Textarea
        id={`${id}-message`}
        name="message"
        required
        maxLength={2500}
        rows={compact ? 3 : 5}
        placeholder="A process, a challenge, or an idea. Tell us where you’d like to start."
      />
      <p className="form-help">
        By sending, you ask AAI Built to contact you about your enquiry.
        FormSubmit processes these details and delivers them to our email.
        Please don’t include confidential business data.
      </p>
      <button type="submit" className="pill">
        Let’s talk about my business <ArrowUpRight size={16} />
      </button>
      <a
        className="enquiry-alternative"
        href={whatsapp()}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={16} /> Prefer WhatsApp? Message us directly.
      </a>
    </form>
  );
}
