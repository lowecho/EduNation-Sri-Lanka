
Goal: Rebrand and expand the current “School Library Project” site into a modern, mobile-first website for “Breathing Letters”, with strong trust/transparency UX, updated forms (Donate Books + Volunteer), an official “Donate Money” path via https://rebuildingsrilanka.gov.lk/ (new tab), and multilingual UI (EN/සිංහල/தமிழ்) for key pages.

What I found in the existing codebase (so we can build on it cleanly)
- Routing is in `src/App.tsx` using React Router + a shared `AppLayout`.
- There is already a language toggle and a custom i18n context in `src/lib/i18n.tsx` with EN/SI/TA dictionaries.
- Donate Books, Volunteer, Contact forms already use `react-hook-form` + Zod validation + success toasts.
- There is already a “Donate Funds” page that links to the official government portal in a new tab.
- There is an animated counter component (`CountUpStat`) suitable for the Home counters.
- Tailwind is set up with a brand palette, but “fade/slide/scale” animation keyframes are not yet present in `tailwind.config.ts` (only accordion keyframes exist right now).

Key decisions already confirmed from your answers
- Rename the whole site everywhere to “Breathing Letters”.
- Updates / Transparency page should be “CMS-ready layout” (structured data objects, easy to extend later).
- Donate Books should show a dedicated success screen after submit (not just a toast), including WhatsApp share button.
- Contact should include a map embed.
- Contact details can remain placeholders for now.

Implementation plan (what I will change/add)

1) Information architecture & navigation (React Router + header nav)
- Update the navigation in `src/components/AppLayout.tsx` to the new page set:
  - Home
  - Donate Books
  - Volunteer
  - Donate Money (official link page)
  - Updates (new)
  - Contact
- Update routing in `src/App.tsx` to match:
  - `/` → Home (updated)
  - `/donate-books` → DonateBooks (updated form + success screen)
  - `/volunteer` → Volunteer (updated roles + form)
  - `/donate-money` (or keep `/donate-funds` but rename UI) → DonateMoney page
  - `/updates` → Updates/Transparency page (new)
  - `/contact` → Contact (WhatsApp button + FAQ + map)
- Decide on URL naming consistency:
  - Preferred: keep the old `/donate-funds` route working as a redirect or alias to avoid breaking links, but show “Donate Money” in the UI.
  - Implementation detail: In React Router we can either:
    A) Create `/donate-money` and keep `/donate-funds` as an alias route rendering the same component, or
    B) Keep `/donate-funds` but change labels. (A is more future-proof and matches your spec.)

2) Global branding + footer trust layout
- Update `src/lib/i18n.tsx`:
  - Change `"app.name"` to “Breathing Letters” in all 3 languages.
  - Replace the existing nav labels with the new nav items (including Updates and Donate Money).
  - Add translation keys needed for the new Home hero + badges + “how it works” + CTA strip, and for key page headings/buttons on:
    - Home
    - Donate Books
    - Volunteer
    - Updates
    - Contact
    - Donate Money
  - Keep the fallback behavior (if a key missing in SI/TA, it falls back to EN).
- Update `AppLayout` header brand mark and small-screen label (“Library”) to something consistent with “Breathing Letters”.
- Upgrade the footer in `AppLayout` to match your Home requirements:
  - Social links (placeholders)
  - Contact quick links
  - Donation link (official portal)
  - Privacy Policy link (placeholder page or external anchor for now)
  - Keep it lightweight and mobile-first (stacked on small screens, columns on desktop)

3) Home page rebuild (powerful hero + trust + steps + counters + featured update)
Update `src/pages/Home.tsx` to include these sections in order (mobile-first layout, with subtle animations):
- Hero section:
  - Title: “Breathing Letters”
  - Subtitle: “Building a school library. Collecting books across Sri Lanka.”
  - CTAs:
    - Primary: Donate Books (internal route)
    - Secondary: Volunteer (internal route)
    - Third: Donate Money (Official Link) → opens https://rebuildingsrilanka.gov.lk/ in a new tab
- Trust indicators (badges):
  - “Transparent updates”
  - “Photos & proof of delivery”
  - “Community-led project”
- How it works (3 steps):
  1) You pledge or donate books
  2) We collect + sort
  3) We build and donate the library
- Impact counters (reuse `CountUpStat`):
  - Books pledged
  - Books collected
  - Schools supported
  - Volunteers joined
  Notes:
  - For now these can be clearly marked as sample values (or “Updated weekly” text). Later we can wire them to a backend.
- Featured update card (latest announcement with date):
  - A compact card that previews the latest update and links to `/updates`
  - Data should be shared with the Updates page to avoid duplication (see section 6)
- Call-to-action strip:
  - “Be part of Breathing Letters — donate a book today.”
  - One-button CTA to Donate Books
- Subtle animations:
  - Hero and major sections can use `animate-fade-in` / `animate-slide-in` with reduced-motion support.

4) Donate Books page: new pledge form + guidelines + success screen + WhatsApp share
Update `src/pages/DonateBooks.tsx` to match your required fields and post-submit experience.

4.1 Form fields (with Zod + react-hook-form)
- Name (text)
- Phone / WhatsApp (text; validate minimum length, allow +94)
- District (text for now, or a Select if you prefer later)
- City (text)
- Book types (checkbox group):
  - Kids
  - School
  - Novels
  - Educational
  - Other
- Approx quantity (number or text; validate > 0, max reasonable)
- Condition (radio group):
  - New
  - Used (good condition)
- Optional message (textarea)
- Consent checkbox:
  - “I agree to be contacted for pickup/dropoff coordination” (required true)

UI components to use
- Existing `Input`, `Label`, `Textarea`
- Existing `Checkbox`
- Use existing Radix `radio-group` component for condition if already in `src/components/ui/radio-group.tsx` (it is), so it looks consistent and accessible.

4.2 Success screen behavior
- After a successful submit:
  - Replace the form with a success panel:
    - “Thank you! We will contact you soon.”
    - A WhatsApp share button (opens WhatsApp share URL)
- WhatsApp share implementation (safe encoding):
  - Use `https://wa.me/?text=${encodeURIComponent(message)}`
  - Message example (EN; can also localize later):
    “I just pledged books for Breathing Letters. Join me: <site-url>”
  - If you want, we can include the donor’s district/city in the message, but only if you approve (some users may not want location shared).

4.3 Guidelines section (below form or beside on desktop)
- “What books are accepted”
- “What books are not accepted (torn/missing pages)”
- “Quality promise” line
- Keep this content translatable at least for headings and core bullets (EN/SI/TA).

5) Volunteer page: roles + form fields per spec
Update `src/pages/Volunteer.tsx`:

5.1 Volunteer roles list (cards)
- Event support
- Book sorting
- Logistics coordination
- Photography/documentation
- School library setup

5.2 Volunteer form (Zod + react-hook-form)
- Name
- WhatsApp
- District
- Available days (simple input for now, or multi-select checkboxes like “Weekdays / Weekends / Flexible” to keep it easy on mobile)
- Skills (optional) (textarea)

Post-submit UX
- Keep toast success (fine), or optionally mirror Donate Books with a success panel; I’ll keep it consistent and lightweight unless you want both to be “success screens”.

6) Donate Money page (trustworthy, no payments on-site)
- Reuse and rename `src/pages/DonateFunds.tsx` to match your spec:
  - Clear statement: “Money donations are made through the official Rebuilding Sri Lanka portal.”
  - Bullet list: “transport, shelves, boxes, printing”
  - Primary button “Donate via Official Portal” opens https://rebuildingsrilanka.gov.lk/ in a new tab
- Ensure the button continues to look “official/trustworthy” (existing `variant="gov"` is already present).

7) Updates / Transparency page (new) — CMS-ready structure
Create a new page `src/pages/Updates.tsx` (or similarly named) and add a route `/updates`.

7.1 Layout sections
- Timeline (dated milestones)
- Photo gallery (before/after)
- Proof section (delivery photos + captions)
- Downloadable report (optional):
  - For now: a placeholder “Report coming soon” or a sample PDF link if you provide one later.

7.2 “CMS-ready” approach (without adding a real backend yet)
- Define structured arrays/objects in the page (or a small shared module later) like:
  - `updates: { id, date, title, summary, content, tags }[]`
  - `gallery: { src, alt, caption, date }[]`
  - `proof: { src, caption, schoolName?, date }[]`
- Home “Featured update card” will read the latest entry from the same dataset to ensure consistency.

7.3 UI components
- Use Cards + a simple vertical timeline (left border + dots) for speed and clarity.
- Use a responsive grid for gallery/proof with consistent aspect ratios (Radix aspect ratio component exists).

8) Contact page: WhatsApp button + socials + map + FAQ block
Update `src/pages/Contact.tsx`:

8.1 Contact actions
- Add a prominent WhatsApp contact button:
  - For now use placeholder number (since you chose placeholders):
    - Example: `+94 XX XXX XXXX`
  - Link format:
    - `https://wa.me/<digits>` (digits only) or `https://wa.me/?text=...` if you want a prefilled message.
- Keep email + social links placeholders but make them look real and trustworthy (icons, consistent spacing).

8.2 Map embed
- Add a Google Maps iframe embed section (optional location placeholder, e.g., Colombo).
- Include `loading="lazy"` and a responsive container for mobile.

8.3 FAQ block
- Add an Accordion with the required FAQs:
  - “How to donate?”
  - “Who receives the books?”
  - “How do I volunteer?”
- Ensure the FAQ text is simple, trust-building, and easy to translate (at least headings + questions).

9) Subtle animations (fade/slide) with reduced-motion support
- Update `tailwind.config.ts` to include lightweight keyframes + animations:
  - fade-in / fade-out
  - slide-in-up (or slide-in-right)
  - scale-in
- Use Tailwind’s `motion-reduce:` utilities where appropriate so accessibility is respected.
- Apply animations sparingly:
  - Hero content: `animate-fade-in`
  - Cards on home: `animate-fade-in` with slight delay classes (or just keep it simple and uniform)

10) Performance + mobile-first checklist (baked into implementation)
- Keep images lightweight (use `public/placeholder.svg` initially).
- Ensure large sections are not overly nested; keep DOM simple.
- Use responsive grids that collapse to one column on small screens.
- Make external links safe: `target="_blank" rel="noreferrer"`.

11) Testing plan (what you’ll verify in preview after implementation)
- Language toggle:
  - Switch EN/SI/TA and confirm key pages update (Home, Donate Books, Volunteer, Updates, Contact, Donate Money).
- Forms:
  - Donate Books: validation, consent required, success screen replaces form, WhatsApp share button opens correctly.
  - Volunteer: validation and success feedback.
  - Contact: still works with validation + shows map + FAQ expands/collapses.
- Mobile:
  - Header nav scroll behavior on small screens (existing horizontal scroll nav) remains usable.
  - CTAs are finger-friendly (button sizes).
- External donation link:
  - Opens official portal in a new tab from both Home and Donate Money page.

Files that will be updated/added (high-level)
- Update:
  - `src/lib/i18n.tsx` (rename + new translation keys)
  - `src/components/AppLayout.tsx` (nav + footer + brand)
  - `src/App.tsx` (routes: add `/updates`, add `/donate-money` alias strategy)
  - `src/pages/Home.tsx` (new hero + badges + 3 steps + counters + featured update + CTA strip)
  - `src/pages/DonateBooks.tsx` (new form fields + success screen + WhatsApp share)
  - `src/pages/Volunteer.tsx` (new roles + fields)
  - `src/pages/DonateFunds.tsx` (rename UI to Donate Money and update copy; optionally keep file name)
  - `src/pages/Contact.tsx` (WhatsApp button + map + FAQ)
  - `tailwind.config.ts` (add animation keyframes)
- Add:
  - `src/pages/Updates.tsx` (timeline + gallery + proof + report placeholder; “CMS-ready” data structure)

Open items (no blockers, but nice-to-know later)
- If you later provide real WhatsApp number/email/social links, we can replace placeholders quickly.
- If you want District as a dropdown, you can provide a preferred district list (or I can use a standard Sri Lanka district list as a default later).

If you approve, I’ll implement the above changes in the existing project while preserving the current design system and code style (React + Tailwind + shadcn UI patterns already in use).
