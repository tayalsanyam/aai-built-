import type { AnchorHTMLAttributes } from 'react';
// Full document navigation avoids the preview runtime's broken RSC Link interception
// and works identically on the Sites preview and the Vercel build.
export default function SiteLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  const { children, ...rest } = props;
  return <a {...rest}>{children}</a>;
}
