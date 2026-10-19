# codingninjas reviewer notes

## Architecture
This is a React 18 single-page frontend clone built with Create React App, React Router DOM, and TailwindCSS. `src/App.js` owns the shared `Navbar`/`Footer` shell and route definitions, while `src/pages/` contains page-level views, `src/components/` contains reusable UI, and `src/data/` contains static course and testimonial data. There is no backend or persistence layer; forms and course interactions are frontend-only.

## Conventions
- Use functional React components with hooks; examples include `src/components/Navbar.js` (`useState`, `useEffect`, `useLocation`) and `src/index.js` (`React.StrictMode`).
- Keep routes centralized in `src/App.js`; currently supported paths are `/`, `/courses`, `/about`, `/contact`, `/login`, and `/signup`.
- Prefer reusable components for repeated UI. `src/components/CourseCard.js` and `src/components/TestimonialCard.js` receive a single data object, while `src/components/Button.js` exposes `variant`, `size`, `className`, `disabled`, and `type` props.
- Static content belongs in `src/data/`; `src/data/courses.js` exports `courses`, and `src/data/testimonials.js` exports `testimonials`. Components should consume these records rather than duplicate course/testimonial objects.
- Styling is primarily Tailwind utility classes. Custom theme values are defined in `tailwind.config.js`, notably `primary-*`, `secondary-*`, and the `Inter` sans font. Tailwind scans `src/**/*.{js,jsx,ts,tsx}`.
- Shared layout spacing accounts for the fixed navbar: `App.js` applies `pt-16` to `<main>`, and page sections commonly use `section-padding`/responsive `max-w-7xl` layouts.
- Internal navigation generally uses React Router `Link`, as in `src/components/Navbar.js` and `src/components/Footer.js`; route changes also close the mobile menu via the `location` effect in `Navbar.js`.
- Preserve accessibility basics used throughout: meaningful image `alt` text, `aria-label` on social links, explicit button types in `Button.js`, and visible focus-ring classes.

## Intentional non-standard choices
- This is explicitly an educational, frontend-only clone (`README.md`); course data, testimonials, images, and company claims are dummy/static content, not live product data.
- `src/components/Button.tsx` duplicates the JavaScript `Button.js`, but the package is configured as a JavaScript CRA app and current imports use `Button.js`. Treat the TSX file as unused/parallel code unless a migration is intentional.

## Watch out for
- Do not add routes or footer links without updating `src/App.js`; many footer destinations such as `/careers`, `/blog`, `/privacy`, and `/terms` currently have no corresponding route.
- Prefer `Link` for internal page navigation. `src/pages/About.js` uses plain `<a href="/courses">` and `<a href="/contact">`, which causes a full-page reload and can break GitHub Pages routing.
- Preserve the GitHub Pages deployment assumptions in `package.json` (`homepage`, `gh-pages`, and `deploy` script) when changing routing or asset paths.
- Validate `CourseCard` data shape: it assumes `features`, numeric `rating`/`students`, and currency strings parseable by `parseInt` (`src/components/CourseCard.js`).
