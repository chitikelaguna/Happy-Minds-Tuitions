# Happy Minds Tuitions

A professional, mobile-first website for **Happy Minds Tuitions** — a tuition center in Manikonda, Hyderabad, offering personalized academic support for school students. The site showcases services, facilities, parent reviews, and contact information with a clean, accessible design.

---

## About the Business

**Happy Minds Tuitions** is a tuition center in **Lakshmi Nagar, K. V, Manikonda, Hyderabad (Telangana 500089)**. It provides:

- **Concept-based learning** and syllabus-aligned teaching  
- **Homework help** and assignment support  
- **Exam preparation** and revision  
- **After-school support** with flexible timings  

**Trust metrics:** 4.7 rating · 38 parent reviews · 5 boards supported (SSC, CBSE, ICSE, IB, Cambridge).

**Class timings:**  
- Morning: 5:00 AM – 7:30 AM  
- Evening: 3:00 PM – 10:00 PM  

**Contact:**  
- Phone: [081434 65151](tel:08143465151)  
- Email: [hello@happymindstuitions.com](mailto:hello@happymindstuitions.com)  
- WhatsApp: [wa.me/918143465151](https://wa.me/918143465151)  

---

## Project Structure

```
Happy Minds Tuitions/
├── index.html          # Home page
├── about.html          # About us & teaching approach
├── courses.html        # Courses & services
├── facilities.html     # Facilities & learning environment
├── reviews.html        # Parent reviews & testimonials
├── contact.html        # Contact form, address, map
├── css/
│   └── styles.css     # Main stylesheet (~2000+ lines)
├── js/
│   └── script.js      # Navbar, smooth scroll, scroll reveal, footer year
└── README.md
```

---

## Tech Stack

| Layer        | Technology |
|-------------|------------|
| **Markup**  | HTML5 (semantic, accessible) |
| **Styling** | [Bootstrap 5.3.2](https://getbootstrap.com/), custom CSS (CSS variables, mobile-first) |
| **Icons**   | [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) |
| **Fonts**   | [Google Fonts](https://fonts.google.com/) — DM Sans (body), Fraunces (headings) |
| **Script**  | Vanilla JavaScript (no frameworks) |

---

## Features

### Pages & Content

- **Home (`index.html`)** — Hero, trust strip (rating/reviews/boards), boards supported, core services, why parents choose us, class timings, CTA.
- **About (`about.html`)** — Intro, teaching approach (concept-based, homework support, individual attention, confidence building), boards, learning environment, timings, trust section, CTA.
- **Courses (`courses.html`)** — Academic Support, Homework Help, Exam Preparation, After-School Care; Call/Enquire CTAs.
- **Facilities (`facilities.html`)** — Six facility cards (structured learning, homework support, concept-based teaching, multi-board support, flexible timings, after-school care) and “Why our environment helps” section.
- **Reviews (`reviews.html`)** — Rating summary (4.7, 38 reviews), four parent testimonial cards.
- **Contact (`contact.html`)** — Enquiry form (name, phone, grade, message), address, phone/email links, Call & WhatsApp buttons, embedded Google Map.

### UX & Accessibility

- **Skip to main content** link for keyboard/screen-reader users.  
- **Sticky header** with “scrolled” state and **mobile hamburger** menu.  
- **Smooth scroll** for in-page anchors.  
- **Scroll reveal** for `.animate-on-scroll` sections (uses `IntersectionObserver`; respects `prefers-reduced-motion`).  
- **Responsive layout** — Bootstrap grid + custom breakpoints; touch-friendly buttons (min height 44px).  
- **Focus styles** and clear visual hierarchy (H1 → H2 → H3 → card titles → body).

### Design

- **Colors:** Navy primary (`#1e3a5f`), gold accent (`#c9a227`), cream background, clear contrast.  
- **Typography:** Fraunces for headings, DM Sans for body; readable base size (16px).  
- **Components:** Cards, badges, timing cards, trust strip, CTA banner; consistent spacing and shadows.

---

## Running the Project

This is a **static** site. No build step is required.

1. **Local:**  
   - Open `index.html` in a browser, or  
   - Use a simple local server, e.g.  
     - **Python 3:** `python -m http.server 8000`  
     - **Node:** `npx serve .`  
   Then visit `http://localhost:8000` (or the port shown).

2. **Production:**  
   Upload the project folder to any static host (e.g. Netlify, Vercel, GitHub Pages, or traditional web hosting). Ensure paths to `css/styles.css` and `js/script.js` stay correct relative to each HTML file.

---

## Customization

- **Contact form:** The form in `contact.html` uses `action="#"` and `method="post"`. Connect it to your backend or a form service (e.g. Formspree, Netlify Forms) for real submissions.
- **Content:** Update text, phone number, email, and address directly in the HTML files. The phone number `081434 65151` and WhatsApp link `918143465151` appear in the nav, footer, and contact page.
- **Styles:** Edit `css/styles.css`. Design tokens (colors, spacing, typography) are defined in `:root` at the top.

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge) with support for CSS Grid, Flexbox, CSS custom properties, and `IntersectionObserver`.
- Layout and interactions degrade gracefully on older browsers.

---

## License

© Happy Minds Tuitions. All rights reserved.
