# Apex Web Solutions

## Current State
New project. No existing pages or components.

## Requested Changes (Diff)

### Add
- Single-page marketing website for a web design agency targeting real estate agents and general clients
- Hero section: bold headline, subheadline, prominent CTA ("Get Your Free Consultation")
- Services section: Custom Website Design, AI-Powered Solutions, Real Estate Websites, SEO Optimization, Landing Pages
- Why Choose Us section: Fast Delivery, Modern Design, AI Support, Mobile Responsive
- Portfolio section: sample project cards (3–4 cards with title, category, description)
- Testimonials section: 3 client quotes with name, role, avatar initials
- Pricing section: 3 tiers (Starter, Professional, Enterprise) with feature lists and CTAs
- Contact/Lead capture form: name, email, phone, message fields with submit
- Footer: logo, navigation links, social media icons (Twitter/X, LinkedIn, Instagram, Facebook)
- Backend: store contact form submissions (name, email, phone, message, timestamp)
- Sticky navigation bar with logo and anchor links to all sections
- Smooth scroll behavior

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Backend: Motoko canister with `submitContact(name, email, phone, message)` and `getContacts()` functions
2. Frontend design tokens: deep navy primary, electric blue accent, white background, gold highlights
3. Navbar component with sticky positioning and section anchor links
4. Hero section with headline, subheadline, CTA button
5. Services section with icon cards (5 services)
6. Why Choose Us section with 4 benefit cards
7. Portfolio section with 3–4 sample project cards
8. Testimonials section with quote cards
9. Pricing section with 3-tier cards (Starter, Professional, Enterprise)
10. Contact form wired to backend submitContact
11. Footer with logo, nav links, social icons
12. data-ocid markers on all interactive elements (CTAs, nav links, form inputs, submit)
