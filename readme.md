learnings and notable skills

why scss?
file architecture / scss

bem class naming convention - refactored website to clean, scalable BEM

containers for individual section layouts. pros's / cons

class export for faster css styling - node extract-classes.js

# from interweb

# Serif Digital – Frontend Portfolio Website

A custom-designed, accessibility-focused frontend website for Serif Digital — a Perth-based web design and UI development studio. This project showcases clean HTML, modular SCSS, responsive layouts, accessibility best practices, and JavaScript enhancements.

---

## ✨ Learnings & Notable Skills

-   Modular SCSS architecture for scalable styling
-   Refactoring into BEM (Block Element Modifier) class naming convention
-   Semantic HTML5 structure
-   Responsive layout techniques using Flexbox and media queries
-   Accessibility enhancements including ARIA roles and keyboard navigation
-   Node-based workflow automation (e.g., class extraction script)

---

## 🎨 Why SCSS?

SCSS was chosen to:

-   Keep code DRY and modular using partials
-   Use variables and mixins for consistent styling
-   Support nesting that mirrors HTML structure
-   Easily manage a multi-section site

---

## 🗂 File Architecture / SCSS Structure

```
scss/
├── global/              # Reset, base, typography, accessibility
│   └── _accessibility.scss
├── layouts/             # General layout rules
├── sections/            # Section-specific styles (hero, cta, footer, etc.)
├── utilities/           # Variables and mixins
└── style.scss           # SCSS entry point
```

```
index.html               # Home page
contact.html             # Contact form with Netlify integration
employers.html           # Showcase/landing for employers
```

---

## 📐 BEM Class Naming Convention

The entire site was refactored using BEM for:

-   Clear, scalable class structure
-   Easier debugging and targeting in SCSS
-   Better maintainability and readability

Example:

```html
<section class="hero">
	<h1 class="hero__title">Welcome</h1>
	<p class="hero__text">Clean code, clear results.</p>
</section>
```

---

## 📦 Containers for Layouts (Per Section)

Using a `.container` wrapper within each section allows:

### ✅ Pros:

-   Consistent max-width alignment
-   Independent styling for sections
-   Modularity and reuse

### ⚠️ Cons:

-   Slightly more verbose HTML

Conclusion: This structure supports real-world, maintainable design patterns.

---

## ⚙️ Class Export Script (Node.js)

A custom `extract-classes.js` Node script helps:

-   Extract all class names from HTML
-   Deduplicate and sort them
-   Output to `class-names.txt` for styling or documentation

---

## ♿ Accessibility (In Progress)

Implemented:

-   [x] Semantic HTML structure (`<header>`, `<main>`, `<footer>`, `<section>`)
-   [x] Accessible form labels with `for`/`id` and `aria-required`
-   [x] `aria-describedby` for form hints and guidance
-   [x] `aria-labelledby` on form and footer sections for screen readers
-   [x] Keyboard navigable form with visible focus styling
-   [x] Decorative icons hidden from screen readers with `aria-hidden="true"`
-   [x] Footer declared with `role="contentinfo"` for landmark navigation
-   [x] Screen-reader-only text (`.sr-only`) used for descriptive labels
-   [x] Added `_accessibility.scss` containing:
    -   `.sr-only` utility for hidden headings
    -   Global focus outline styles
    -   Form hint text styling
-   [x] "Skip to main content" link
    -   Placed directly after `<body>` tag
    -   Targets `<main id="main" role="main">`
    -   Visually hidden unless focused via keyboard (`.skip-link`)
-   [x] "Back to top" link
    -   Placed at the bottom of the `<footer>`
    -   Uses the same `#main` target for consistency
    -   Styled with `.back-to-top` class and keyboard-focus visibility

Planned:

-   [ ] Live form validation feedback with `aria-live`
-   [ ] Screen reader announcements for success/error
-   [ ] Skip links to specific sections (e.g., contact, featured work)
-   [ ] Full accessibility audit on mobile devices and screen readers

---

## 🚀 Deployment

Intended for deployment via [Netlify](https://www.netlify.com/).

Netlify setup:

-   Use `method="POST"` and `data-netlify="true"` on forms
-   Ensure all input `name` attributes are defined
-   Add a `name="contact-form"` and include hidden honeypot field if needed

---

## ✍ Author

**Ben Roberts**
[serifdigital.com.au](https://www.serifdigital.com.au)
Frontend Developer & Designer – Perth, WA

## Accessibility(In Progress)

Implemented in may 2025:

Semantic HTML (header, main, section, footer)

Proper label/for + id connections on form inputs

aria-required on required fields

aria-describedby for helper text

aria-labelledby for form section headings

Keyboard navigable with visible focus styles

Planned:

Screen reader announcement of form success/error

Live validation feedback with aria-live

Mobile accessibility refinements

# Serif Digital – Frontend Portfolio Website - + May 2025 updates.

A personal web design and UI development portfolio built with semantic HTML, SCSS, and accessibility in mind. This project demonstrates best practices in structure, styling, and performance for small business clients.

---

## ✨ Learnings & Notable Skills

-   Modular SCSS architecture for scalable styling
-   BEM (Block Element Modifier) naming conventions
-   Semantic HTML5 structure and accessibility-first development
-   Clean two-column layouts using CSS Flexbox
-   Responsive design considerations from the ground up
-   Node.js scripting to automate repetitive tasks (e.g., class extraction)

---

## 🎨 Why SCSS?

SCSS was chosen for its:

-   Nested structure (reflects HTML hierarchy)
-   Variables and mixins for reusable design tokens
-   Easier file splitting for maintainable styles
-   Cleaner syntax compared to raw CSS

---

## 🗂 File Architecture / SCSS Structure

## 📐 ADDED BEM Class Naming Convention

All HTML/CSS was refactored using the **BEM methodology** for:

-   Predictable, scalable naming
-   Easier class targeting in SCSS
-   Lower chance of style conflicts
-   Cleaner developer hand-off
