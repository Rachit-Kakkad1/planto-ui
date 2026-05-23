# Planto UI

A premium, modern e-commerce landing page built with React and TailwindCSS. Designed with a focus on cinematic glassmorphism, fluid motion, and responsive architecture.

## Preview

Here is a glimpse of the different sections of the Planto landing page:

![Trendy Plants](/screenshots/trendy_plants.png)
![Top Selling](/screenshots/top_selling.png)
![Our Best O2](/screenshots/best_o2.png)
![Customer Reviews](/screenshots/customer_review.png)
![Footer](/screenshots/footer.png)

## Live Demo

[View Live Project](#) <!-- Insert deployment link here -->

## Tech Stack

- **React** - Component architecture and UI state
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first styling and glassmorphism utilities
- **Framer Motion** - Cinematic scroll reveals and micro-interactions
- **Lucide React** - Clean, modern iconography

## Features

- **Cinematic Glassmorphism UI:** Soft blurred backdrops, glowing orbs, and premium layering.
- **Responsive Design:** Fluidly adapts across desktop, tablet, and mobile breakpoints without sacrificing aesthetics.
- **Reusable Components:** Clean, modular React architecture allowing easy scalability of product cards, sections, and sliders.
- **Premium Animations:** Hardware-accelerated transitions utilizing opacity, blur, and 3D transforms.
- **Floating Product Cards:** Interactive hover states with magnetic shines and depth shadows.
- **Modern E-Commerce Layout:** Optimized for product discovery, featuring trendy highlights, top-selling grids, and customer testimonials.

## Folder Structure

```text
src/
├── components/
│   ├── bestO2/        # Best-in-class product highlights
│   ├── footer/        # Site footer and newsletter
│   ├── hero/          # Cinematic hero section and sliders
│   ├── layout/        # Shared wrappers and Navbar
│   ├── products/      # Reusable product cards and grids
│   └── reviews/       # Customer testimonials
├── data/              # Static data arrays and constants
├── pages/             # Main route components
├── index.css          # Global styles and Tailwind imports
├── App.jsx            # Core layout and routing
└── main.jsx           # React DOM entry point
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rachit-Kakkad1/planto-ui.git
   ```

2. Navigate to the project directory:
   ```bash
   cd planto-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Responsive Design

The interface is engineered to maintain its premium feel across all devices.
- **Desktop:** Expansive layouts with complex layering, hover interactions, and full ambient animations.
- **Tablet:** Adjusted grid systems and optimized typography for medium viewports.
- **Mobile:** Streamlined, touch-friendly UI featuring a mobile-optimized navigation menu and stacked component flows.

## Animations

Motion is treated as a core design element rather than an afterthought. Using **Framer Motion**, the application features:
- Staggered, GPU-friendly scroll reveal animations.
- Subtle glass sweeps and magnetic hover states on interactive elements.
- Ambient background movement for a living, cinematic feel.

## Inspiration

The aesthetic draws inspiration from high-end modern tech interfaces and luxury e-commerce platforms, emphasizing "almost invisible" sophistication, high contrast, and polished micro-interactions over flashy, chaotic motion.

---

**Author:** Rachit Kakkad  
**License:** MIT
