'use client';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import EnquiryForm from './enquiry-form';
const KEY = 'aai-built-connect-seen-v1';
export default function ConnectPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.location.pathname === '/contact') return;
    let seen = false;
    try {
      seen = localStorage.getItem(KEY) === 'yes';
    } catch {
      try {
        seen = sessionStorage.getItem(KEY) === 'yes';
      } catch {
        seen = true;
      }
    }
    if (seen) return;
    const timer = window.setTimeout(() => {
      if (document.hidden) return;
      try {
        localStorage.setItem(KEY, 'yes');
      } catch {
        try {
          sessionStorage.setItem(KEY, 'yes');
        } catch {
          return;
        }
      }
      setOpen(true);
    }, 14000);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="connect-popup">
        <span className="eyebrow">A SMALL FIRST STEP</span>
        <DialogTitle className="popup-title">
          What’s next for
          <br />
          your business?
        </DialogTitle>
        <DialogDescription className="popup-description">
          Tell us what you’re building. Let’s explore what the right technology
          could unlock.
        </DialogDescription>
        <EnquiryForm compact />
      </DialogContent>
    </Dialog>
  );
}
