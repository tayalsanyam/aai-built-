# Publish AAI Built on your Vercel account

The project supports two builds. The private review site uses Sites; your Vercel deployment uses the official Next.js runtime.

## Deploy

1. Extract the source ZIP and push its contents to your Git repository.
2. In your Vercel account, choose Add New → Project and import that repository.
3. Use the project root. The included vercel.json selects Next.js, runs npm ci, and builds with npm run build:vercel.
4. Deploy. No database or environment variables are required for the current website.
5. Add aaibuilt.com and www.aaibuilt.com to the project's Domains settings and apply the DNS records Vercel gives you.

Local Vercel-equivalent commands: npm ci, npm run build:vercel, npm run start:vercel.
The normal npm run build is retained for the existing Sites review build; Vercel explicitly uses build:vercel.

## Activate enquiry delivery — required before launch

The popup and contact page POST to https://formsubmit.co/sanyamptayal@aaibuilt.com.

Submit one genuine test enquiry from your deployed website. FormSubmit will email sanyamptayal@aaibuilt.com an activation link. Open that email and activate the form. Then submit another test and verify the enquiry arrives, including the visitor's name, business, email, optional phone, message, and source. Check spam if necessary.

Email delivery has not been activated or verified by the agent. The integration and browser validation are implemented; receipt depends on this provider activation. No test message was sent by the agent.

FormSubmit handles its verification and confirmation screens. Keep its default CAPTCHA protection enabled. The provider processes submissions externally; the website has no database. Provider documentation: https://formsubmit.co/ and https://formsubmit.co/documentation.

Direct WhatsApp and email links continue to work independently of FormSubmit.

## Once-only popup

The invitation appears after 14 seconds on a visible page, except the contact page. A local preference named aai-built-connect-seen-v1 prevents it appearing again on that browser, including across page changes and future visits. It remains dismissible by close button or Escape. Browsers blocking all storage do not get the automatic popup; contact remains available in the header.

## Logo files

public/brand/aai-built-light.svg — light-background wordmark
public/brand/aai-built-dark.svg — dark-background wordmark
public/brand/aai-built-icon.svg — standalone icon
public/favicon.svg — browser icon
public/aai-built-logo.svg — downloadable primary wordmark

Project previews remain labelled workflow concepts. Replace them with approved product logos/screenshots when supplied.

## Navigation and verification

Internal links use normal document navigation. This fixes the preview runtime's broken RSC link interception and works on both hosting targets.
Solution tabs store their selection in the URL hash and support back/forward navigation.
Verified in the production preview: header page links, solution tabs, Operations → Olready, AI → Contact, browser back, mobile menu → Solutions, popup display/dismissal and required-field validation. Form action and recipient checked without sending a message.
