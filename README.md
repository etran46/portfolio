# Portfolio Website - React + Vite

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning fast with Vite
- 🚀 Built with React and modern React hooks
- 💼 Showcase your projects, skills, and experience
- 📧 Contact form integration ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── index.html          # Entry HTML file (Vite expects this in root)
├── vite.config.js      # Vite configuration
├── public/             # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

Edit the component files in `src/components/` to customize:
- Your name and role (Hero.jsx)
- About section content (About.jsx)
- Skills and technologies (Skills.jsx)
- Projects and portfolio items (Projects.jsx)
- Contact information (Contact.jsx)

## Technologies Used

- React 18
- Vite 5
- CSS3 with CSS Variables
- React Hooks (useState, useEffect, useRef)

## Why Vite?

Vite is significantly faster than Create React App:
- ⚡ Instant server start
- 🔥 Hot Module Replacement (HMR)
- 📦 Smaller bundle size
- 🚀 Faster builds

## License

MIT
