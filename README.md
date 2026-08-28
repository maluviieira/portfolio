# malu vieira — portfolio

A minimal, high-performance portfolio website built with a modern brutalist aesthetic to showcase my work as a developer! 

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) & Native CSS Transitions
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Contact Form**: [Formspree](https://formspree.io/)

## ✨ Implemented Features

- Brutalist design aesthetic with high contrast and sharp typography
- Fully responsive layouts including a custom mobile hamburger menu
- Smooth scrolling, native transitions, and GSAP micro-animations
- Custom interactive image gallery with sliding thumbnails
- Centralized data architecture (projects pull dynamically from a single file)
- Working contact form
- Reusable polymorphic UI components

## 🛠️ Local Development

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/maluviieira/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
portfolio/
├── public/                # Static assets and dynamic project images
├── src/
│   ├── assets/            # Bundler-processed assets (CV, me.png, etc.)
│   ├── components/        
│   │   └── ui/            # Reusable components (Navbar, Button, TechTag, etc.)
│   ├── data/              
│   │   └── projects.ts    # Single source of truth for project data
│   ├── pages/             # Page-level components
│   │   ├── AllProjects.tsx
│   │   └── ProjectDetail.tsx
│   ├── App.tsx            # Main router and app shell
│   ├── main.tsx           # React entry point
│   └── index.css          # Tailwind and global styles
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```


