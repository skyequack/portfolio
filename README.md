# 🤖 Robotics Portfolio Website

A modern, minimalist portfolio website built for robotics engineers and makers. Features a clean design inspired by MIT student portfolios with smooth animations and responsive layout.

## ✨ Features

- **Hero Section** - Eye-catching landing with animated robot graphic and tagline
- **About Section** - Introduction highlighting mechanical, electronics, and software synergy
- **Projects Section** - Grid layout showcasing robotics projects with hover effects and tags
- **Experience Section** - Timeline of competitions, internships, and research
- **Contact Section** - Functional contact form with social media links
- **Dark Mode** - Automatic theme detection with manual toggle
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Works seamlessly across all devices
- **SEO Optimized** - Metadata and semantic HTML for better search visibility

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter & JetBrains Mono
- **Language:** TypeScript

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization Guide

### Personal Information

1. **Update Metadata** - Edit `src/app/layout.tsx`:
   - Change title, description, and author name
   - Update OpenGraph metadata

2. **Hero Section** - Edit `src/components/Hero.tsx`:
   - Modify headline and tagline
   - Customize the robot SVG or add your own

3. **About Section** - Edit `src/components/About.tsx`:
   - Write your personal bio
   - Replace avatar placeholder with your photo
   - Update skills and descriptions

4. **Projects** - Edit `src/components/Projects.tsx`:
   - Replace sample projects with your actual work
   - Add project images (replace placeholders)
   - Update GitHub links and demo URLs
   - Customize tags to match your tech stack

5. **Experience** - Edit `src/components/Experience.tsx`:
   - Add your internships, competitions, and research
   - Update organization names and durations
   - Customize highlights and descriptions

6. **Contact Info** - Edit `src/components/Contact.tsx`:
   - Update email address
   - Add your GitHub and LinkedIn profile URLs
   - Integrate actual form submission (emailjs, formspree, etc.)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page integrating all sections
│   └── globals.css         # Global styles & theme variables
└── components/
    ├── Hero.tsx            # Landing section
    ├── About.tsx           # About section
    ├── Projects.tsx        # Projects grid
    ├── Experience.tsx      # Timeline
    ├── Contact.tsx         # Contact form
    ├── Navigation.tsx      # Navbar with smooth scroll
    ├── ThemeToggle.tsx     # Dark mode switch
    ├── ScrollToTop.tsx     # Back-to-top button
    └── Footer.tsx          # Footer section
```

## 🎨 Design Philosophy

This portfolio follows a **builder/maker aesthetic**:
- **Minimal** - Clean white background, no clutter
- **Functional** - Every element serves a purpose
- **Action-oriented** - Focus on what you've built
- **Professional** - Sharp typography and layout
- **Fast** - Optimized performance

Perfect for engineers who value substance over style but still want a polished web presence.

## 🔧 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Built with ❤️ for the robotics community**
