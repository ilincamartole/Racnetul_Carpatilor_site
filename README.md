# Răcnetul Carpaților — Online News Website

A multi-page **Romanian news website** built from scratch with HTML, CSS, and JavaScript, simulating a real online newspaper with sections for politics, weather, education, sports, recipes, horoscope, a photo/video gallery, a comment system, and an article archive.


---

## Live Preview

> https://ilincamartole.github.io/Racnetul_Carpatilor_site/

---

## Pages

| File | Description |
|------|-------------|
| `PROIECT.html` | 🏠 Homepage — daily news (weather, politics, education) with countdown timer |
| `stiridinsport.html` | ⚽ Sports section — football, tennis, and dance news |
| `zodiac_mancare.html` | 🍪 Recipes & horoscope weekly column |
| `visuals.html` | 📷 Photo & video gallery, with links to related articles |
| `comentariu.html` | 💬 Comment section with login, persistent storage, and live clock |
| `arhiva.html` | 🗂️ Article archive, dynamically populated via JavaScript |

---

## Features

- **Sticky navigation bar** with dropdown submenus across all pages
- **CSS Grid layout** for the homepage news sections
- **CSS animations** — pulsing header title, hover zoom on images, animated nav links
- **Responsive design** with media queries for tablets and mobile devices
- **Countdown timer** on the homepage for an upcoming story
- **Live clock** displayed in the footer (updates every second)
- **Comment system** with localStorage persistence — comments survive page refresh
- **Login / logout UI** with a welcome message on the comments page
- **Randomize section colors** button using JavaScript
- **Photo gallery** with clickable images linking to their related articles
- **Google Fonts** (Oswald) integrated throughout

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **HTML5** — semantic structure (`<main>`, `<header>`, `<nav>`, `<section>`, `<footer>`)
- **CSS3** — Grid, Flexbox, animations (`@keyframes`), transitions, pseudo-elements, media queries
- **JavaScript** — DOM manipulation, `localStorage`, `setInterval`, event listeners

---

## Project Structure

```
.
├── PROIECT.html            # Homepage
├── stiridinsport.html      # Sports page
├── zodiac_mancare.html     # Recipes & horoscope
├── visuals.html            # Photo & video gallery
├── comentariu.html         # Comments & login
├── arhiva.html             # Article archive
├── PROIECT.css             # Main stylesheet
├── JAVA.js                 # Main JavaScript file
├── jscomentarii.js         # Comments logic
├── stirisport.css          # Sports page styles
├── balanta.css             # Zodiac page styles
├── visuals1.css            # Gallery page styles
├── comentariu.css          # Comments page styles
└── POZE_PROIECT/           # Images and favicon
```

---

## Learning Outcomes

- Building a multi-page website with consistent navigation and shared styles
- Using CSS Grid and Flexbox for complex, responsive layouts
- Writing interactive UI features with JavaScript (no frameworks)
- Working with the DOM, browser events, and `localStorage`
- Applying CSS animations and transitions for a polished user experience
