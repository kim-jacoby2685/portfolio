# Portfolio Design System

Design documentation for the Kim Jacoby portfolio website — a WCAG 2.2 AA-compliant site built with semantic HTML, CSS, and vanilla JavaScript.

---

## Design Principles

1. **Accessibility first** — Inclusive design is a core requirement, not a final checklist item.
2. **Clarity over complexity** — Clean layouts, readable typography, and purposeful whitespace.
3. **Native HTML first** — Use semantic elements before reaching for ARIA.
4. **Progressive enhancement** — The site works without JavaScript; JS improves navigation behavior.
5. **Consistency** — Shared components, spacing, and patterns across all pages.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#fafafa` | Page background |
| `--color-surface` | `#ffffff` | Cards, header, content panels |
| `--color-text` | `#1a1a2e` | Primary body text |
| `--color-text-muted` | `#3d3d56` | Secondary text, tags, captions |
| `--color-primary` | `#0d5c63` | Links, buttons, headings accents |
| `--color-primary-hover` | `#094549` | Link and button hover states |
| `--color-accent` | `#c45c26` | Accent (reserved for emphasis) |
| `--color-border` | `#c8c8d4` | Borders and dividers |
| `--color-focus` | `#005fcc` | Keyboard focus outline |
| `--color-focus-bg` | `#e8f0fe` | Focus background highlight |

**Footer (dark region)**

| Element | Hex |
|---|---|
| Background | `#1a1a2e` |
| Link text | `#a8d4ff` |
| Link hover / focus | `#ffffff` |

All primary text/background pairs meet WCAG 2.2 AA contrast minimums (4.5:1 for normal text, 3:1 for large text and UI components).

---

## Typography

**Font stack**

- Body: `"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- Code: `"Cascadia Code", "Consolas", monospace`

**Scale**

| Element | Size |
|---|---|
| Body | `1.125rem` (18px base) |
| H1 | `clamp(1.75rem, 4vw, 2.5rem)` |
| H2 | `clamp(1.375rem, 3vw, 1.75rem)` |
| H3 | `clamp(1.125rem, 2.5vw, 1.375rem)` |
| Tag / caption | `0.875rem` |

**Line height**

- Body: `1.6`
- Headings: `1.25`

**Casing**

- Page titles and section headings use title case (e.g., "Featured Projects", "About Me").
- Body copy uses sentence case.

---

## Spacing

Spacing uses a consistent rem-based scale via CSS custom properties:

| Token | Value |
|---|---|
| `--space-xs` | `0.25rem` |
| `--space-sm` | `0.5rem` |
| `--space-md` | `1rem` |
| `--space-lg` | `1.5rem` |
| `--space-xl` | `2rem` |
| `--space-2xl` | `3rem` |
| `--space-3xl` | `4rem` |

**Layout widths**

- Max content area: `72rem`
- Prose / paragraph max width: `42rem`

---

## Page Structure

Every page follows the same landmark structure:

```
skip-link
header (site-header)
  logo
  nav-toggle (mobile)
  nav (primary-navigation)
main (#main-content)
footer (site-footer)
  footer-nav
  copyright
```

### Site map

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Accessibility Statement | `accessibility.html` |
| Accessible Parks Search | `projects/accessible-parks.html` |
| AI Recipe Search | `projects/recipe-search.html` |
| Youth Sports Team Manager | `projects/sports-manager.html` |

---

## Wireframes

Low-fidelity layout references for each major page type. Wireframes prioritize reading order, landmark regions, and content hierarchy — not visual polish.

### Global chrome (all pages)

**Desktop**

```
┌─────────────────────────────────────────────────────────────┐
│ [Skip to main content]                                      │
├─────────────────────────────────────────────────────────────┤
│ Kim Jacoby          Home  About  Contact  Accessibility   │
│                     Statement                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      MAIN CONTENT                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ Home  About  Contact  Accessibility Statement               │
│ © 2026 Kim Jacoby                                           │
└─────────────────────────────────────────────────────────────┘
```

**Mobile**

```
┌──────────────────────┐
│ Kim Jacoby    [Menu] │
├──────────────────────┤
│ Home                 │
│ About                │
│ Contact              │
│ Accessibility Stmt   │
├──────────────────────┤
│                      │
│    MAIN CONTENT      │
│                      │
├──────────────────────┤
│ Footer nav links     │
│ © 2026 Kim Jacoby    │
└──────────────────────┘
```

**Notes**

- Skip link is the first focusable element, above the header.
- Header is sticky; main content scrolls beneath it.
- Footer nav mirrors header links for wayfinding.

---

### Home page

**Desktop**

```
┌─────────────────────────────────────────────────────────────┐
│ HERO                                                        │
│ ┌─────────────────────────┐  ┌──────────────────────────┐ │
│ │ H1: Designing Accessible│  │                          │ │
│ │     and User-Centered...  │  │   Hero illustration      │ │
│ │ Tagline                   │  │                          │ │
│ │ Intro paragraphs (×3)     │  │                          │ │
│ │ [View My Work] [Get in    │  │                          │ │
│ │  Touch]                   │  │                          │ │
│ └─────────────────────────┘  └──────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ H2: Featured Projects                                       │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│ │  Image   │  │  Image   │  │  Image   │                  │
│ │  Title   │  │  Title   │  │  Title   │                  │
│ │  Tags    │  │  Tags    │  │  Tags    │                  │
│ │  Summary │  │  Summary │  │  Summary │                  │
│ │  Link    │  │  Link    │  │  Link    │                  │
│ └──────────┘  └──────────┘  └──────────┘                  │
├─────────────────────────────────────────────────────────────┤
│ H2: Accessibility Commitment                                │
│ Statement paragraph + link to full accessibility page       │
└─────────────────────────────────────────────────────────────┘
```

**Mobile**

- Hero stacks vertically: text block, then illustration.
- Project cards display in a single column.
- Accessibility Commitment section follows with generous top spacing.

---

### About page

```
┌─────────────────────────────────────────────────────────────┐
│ H1: About Me                                                │
│ ┌────────┐  Intro paragraphs                                │
│ │ Photo  │  (who I am, current role, HCI program)           │
│ └────────┘                                                  │
│                                                             │
│ H2: My Background Includes                                  │
│ • Bullet list of skills                                     │
│ Closing paragraph                                           │
│ [Get in Touch]                                              │
└─────────────────────────────────────────────────────────────┘
```

**Desktop:** Photo left, intro text right (two-column grid).
**Mobile:** Photo above intro text.

---

### Contact page

```
┌─────────────────────────────────────────────────────────────┐
│ H1: Contact                                                 │
│ H2: Professional Contact                                    │
│ Intro paragraph                                             │
│ Email      → kimberly.e.jacoby@gmail.com                    │
│ LinkedIn   → linkedin.com/in/kimberlyjacoby                 │
│ GitHub     → github.com/kim-jacoby2685                      │
└─────────────────────────────────────────────────────────────┘
```

Uses a definition list (`<dl>`) to associate labels with contact links.

---

### Project case study page

```
┌─────────────────────────────────────────────────────────────┐
│ ← Back to Projects                                          │
│ H1: [Project Title]                                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │              Screenshot placeholder (16:9)            │ │
│ │              Figcaption: coming soon                    │ │
│ └─────────────────────────────────────────────────────────┘ │
│ H2: Overview                                                │
│ H2: Problem                                                 │
│ H2: Solution                                                │
│ H2: Key Features (bullets)                                  │
│ H2: Technologies Used (tags)                                │
│ H2: What I Learned (bullets)                                │
│ H2: Future Enhancements (bullets)                           │
│ H2: Project Links (demo + GitHub placeholders)              │
│ [View All Projects]  [Discuss a Similar Project]            │
└─────────────────────────────────────────────────────────────┘
```

All project pages share this single-column, section-based template for scannability and consistent screen reader navigation.

---

### Accessibility Statement page

```
┌─────────────────────────────────────────────────────────────┐
│ H1: Accessibility Statement                                 │
│ Intro paragraph                                             │
│ ┌ Table of contents (in-page anchor links) ───────────────┐ │
│ └─────────────────────────────────────────────────────────┘ │
│ H2 sections: Commitment, Conformance Goal, Features,        │
│   Keyboard, Responsive, Screen Readers, Limitations,        │
│   Feedback, Date Last Reviewed                              │
└─────────────────────────────────────────────────────────────┘
```

Long-form content page with a table of contents for quick navigation.

---

### Wireframe principles

1. **One H1 per page** — Clearly identifies the page topic.
2. **Single-column reading flow** — Except the home hero and about intro, content is one column for easy scanning.
3. **Consistent section pattern** — H2 heading, short prose or list, then next section.
4. **Whitespace between major blocks** — Especially between project grid and accessibility commitment on the home page.
5. **Placeholders are labeled** — Screenshot and link placeholders include visible text so layout intent is clear before final assets are ready.

---

## Brand Voice

### Who is speaking

Kim Jacoby — Principal UX Designer, accessibility specialist, and HCI graduate student. The voice reflects expertise in inclusive design without being overly academic or corporate.

### Voice attributes

| Attribute | Description | Example |
|---|---|---|
| **Clear** | Plain language, no jargon unless explained | "A searchable web application that helps users locate parks based on accessibility features" |
| **Confident** | States experience and skills directly | "I have more than 15 years of experience creating inclusive digital experiences" |
| **Inclusive** | Centers users of all abilities | "Experiences that are intuitive, useful, and accessible to everyone" |
| **Human** | First person, warm but professional | "Hi, I'm Kim Jacoby…" |
| **Purposeful** | Every section answers a why | Problem → Solution structure in case studies |

### Tone by context

| Context | Tone | Guidance |
|---|---|---|
| Home / hero | Inspiring, professional | Lead with mission and expertise |
| About | Personal, credible | Share background and motivation |
| Case studies | Analytical, user-centered | Lead with the problem, then the solution |
| Accessibility statement | Transparent, accountable | State goals honestly; document limitations |
| Contact | Welcoming, direct | Make it easy to reach out; no unnecessary friction |
| UI labels & buttons | Action-oriented, concise | "View My Work", "Get in Touch", "Read Case Study: [Project Name]" |

### Writing guidelines

**Do**

- Use active voice: "I designed a centralized search experience."
- Write descriptive link text: "Read Case Study: AI Recipe Search."
- Keep paragraphs to 2–4 sentences.
- Use bullet lists for features, skills, and learnings.
- Use title case for headings; sentence case for body copy.

**Don't**

- Use vague links ("click here", "learn more" without context).
- Lead with technology before the user need.
- Overuse acronyms without defining them on first use (e.g., spell out WCAG before abbreviating).
- Use overly casual language ("super excited!!!") or stiff corporate phrasing ("leverage synergies").
- Claim full WCAG conformance without testing — use "designed to meet" or "goal of meeting."

### Sample voice

**On-brand**

> Accessibility information for parks is often difficult to locate across multiple websites and resources.

**Off-brand**

> Parks lack unified accessibility data silos across fragmented digital ecosystems.

### Brand voice in UI microcopy

| Element | Copy pattern |
|---|---|
| Primary CTA | Verb + object: "View My Work", "Get in Touch" |
| Case study link | "Read Case Study: [Unique Project Name]" |
| Nav items | Short, literal: "About", "Contact", "Accessibility Statement" |
| Placeholders | Honest and temporary: "Screenshot Placeholder", "Live Demo Placeholder" |
| Skip link | Functional: "Skip to main content" |

---

## Components

### Skip link

- First focusable element on every page.
- Visually hidden until focused.
- Moves keyboard and screen reader focus to `<main>`.

### Header & navigation

- Sticky header with bottom border.
- Desktop: horizontal nav links.
- Mobile (`≤ 48rem`): collapsible menu toggled by a button with `aria-expanded` and `aria-label`.
- Current page indicated with `aria-current="page"`.
- Minimum touch target: `2.75rem` (44px).

### Buttons

Two variants:

| Class | Style |
|---|---|
| `.btn-primary` | Teal background, white text |
| `.btn-secondary` | Transparent background, teal border and text |

Focus state: 3px blue outline + light blue `box-shadow`.

### Project cards (homepage)

- 16:9 preview image
- Project title (plain text heading)
- Tag list
- Short description
- Single descriptive case study link (e.g., "Read Case Study: AI Recipe Search")

Grid layout: 1 column → 2 columns (36rem) → 3 columns (60rem).

### Case study template (project pages)

Consistent section order:

1. Project title (H1)
2. Screenshot placeholder
3. Overview
4. Problem
5. Solution
6. Key Features
7. Technologies Used
8. What I Learned
9. Future Enhancements
10. Project Links (demo + GitHub placeholders)
11. Action buttons (View All Projects, Discuss a Similar Project)

### Tags

Used for technology labels on project pages.

- Small pill shape
- Muted text on light background
- `0.875rem`, semibold

### Placeholder boxes

Used for screenshots and unavailable project links.

- Dashed border
- Muted text
- Visible `<figcaption>` for screenshot placeholders

### Table of contents

Used on the Accessibility Statement page.

- Contained card with border
- Ordered list of in-page anchor links

---

## Accessibility Specifications

This site targets **WCAG 2.2 Level AA**.

### Keyboard

- All functionality available via keyboard.
- Logical tab order follows visual layout.
- `Escape` closes the mobile navigation menu.
- No keyboard traps.

### Focus

- Global `:focus-visible` outline: 3px solid `#005fcc`, 3px offset.
- `scroll-padding-top` and `scroll-margin-top` prevent the sticky header from obscuring focused elements.
- Footer links use white focus outlines on the dark background.

### Links

- Underlined by default (not color-only).
- No custom `:visited` styles (avoids contrast failures on buttons).
- Each link has unique, descriptive text.

### Images

- Informative images: descriptive `alt` text.
- Decorative placeholder boxes: `aria-hidden="true"`.
- SVG illustrations include internal `<title>` and `<desc>` when loaded directly.

### Motion

- `prefers-reduced-motion: reduce` disables animations and smooth scrolling.

### High contrast

- `forced-colors: active` media query adjusts button and card borders.

### Responsive & zoom

- Reflows at 320px without horizontal scrolling.
- Supports browser zoom up to 400%.
- `overflow-x: clip` on body prevents accidental horizontal scroll.

---

## File Structure

```
portfolio/
├── index.html
├── about.html
├── contact.html
├── accessibility.html
├── design.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── hero-illustration.svg
│   ├── profile.svg
│   ├── project-parks.svg
│   ├── project-recipe.svg
│   └── project-sports.svg
└── projects/
    ├── accessible-parks.html
    ├── recipe-search.html
    └── sports-manager.html
```

---

## JavaScript Behavior

`js/script.js` handles:

1. **Mobile navigation** — Toggles menu visibility, updates `aria-expanded` and `aria-label`.
2. **Skip link** — Programmatically focuses `<main>` after activation.

No frameworks. No form validation (contact page uses direct links only).

---

## Content Guidelines

Voice and tone are defined in the [Brand Voice](#brand-voice) section above. The following are content-specific rules for this site.

### Project case studies

- Lead with the user problem, not the technology.
- Keep overview paragraphs concise (2–3 sentences).
- Use bullet lists for features, technologies, and learnings.
- Replace placeholders with real screenshots and links before publishing.

### Contact information

- Email: kimberly.e.jacoby@gmail.com
- LinkedIn: linkedin.com/in/kimberlyjacoby
- GitHub: github.com/kim-jacoby2685

---

## Future Design Considerations

- Replace SVG placeholder images with real project screenshots.
- Add live demo and GitHub links to project pages.
- Consider a favicon and Open Graph meta tags for social sharing.
- Add a professional headshot to replace the profile SVG placeholder.

---

*Last updated: June 30, 2026*
