# Portfolio Landing Page

A modern, visually stunning portfolio landing page built with React, Vite, GSAP, and Tailwind CSS. Features smooth animations, parallax effects, and beautiful SVG illustrations.

## Features

- **Parallax Effects**: Background elements move at different speeds on scroll
- **GSAP Animations**: Smooth scroll-triggered animations including fade-ins, slide-ins, and scaling effects
- **Animated SVG Illustrations**: Custom floating shapes, code illustrations, and rocket animations
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, colorful design with gradient accents
- **Smooth Navigation**: Header with smooth scrolling to sections
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with skill highlights
  - Projects showcase with hover effects
  - Contact form with social links
  - Footer with quick navigation

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **GSAP (GreenSock)** - Animation library with ScrollTrigger plugin
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Section** ([src/components/Hero.jsx](src/components/Hero.jsx)):
- Change "Your Name" to your actual name
- Update the tagline and description

**Contact Section** ([src/components/Contact.jsx](src/components/Contact.jsx)):
- Update email address
- Update social media links (LinkedIn, GitHub, Twitter)

**Footer** ([src/components/Footer.jsx](src/components/Footer.jsx)):
- Update copyright information
- Update social media links

### 2. Projects

Edit the `projects` array in [src/components/Projects.jsx](src/components/Projects.jsx):

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
    image: 'your-image-url',
  },
  // Add more projects...
];
```

### 3. Skills

Update the `skills` array in [src/components/About.jsx](src/components/About.jsx):

```javascript
const skills = [
  {
    icon: <FiCode size={32} />,
    title: 'Your Skill',
    description: 'Technologies you use',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more skills...
];
```

### 4. Colors & Styling

Edit [tailwind.config.js](tailwind.config.js) to customize the color scheme:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Your primary color
    // Add more shades...
  },
  accent: {
    500: '#d946ef',  // Your accent color
    // Add more shades...
  }
}
```

### 5. Animations

Animations are configured in each component using GSAP. To modify:

- **Timing**: Adjust `duration` values
- **Easing**: Change `ease` values (e.g., 'power3.out', 'elastic.out')
- **Stagger**: Modify `stagger` for sequential animations
- **Scroll Triggers**: Update `start` and `end` values in ScrollTrigger configs

## Project Structure

```
portfolio-landing/
├── src/
│   ├── components/
│   │   ├── svg/
│   │   │   ├── FloatingShapes.jsx    # Animated background shapes
│   │   │   ├── CodeIllustration.jsx  # Code editor illustration
│   │   │   └── RocketIllustration.jsx # Rocket animation
│   │   ├── Header.jsx                # Navigation header
│   │   ├── Hero.jsx                  # Hero section
│   │   ├── About.jsx                 # About section
│   │   ├── Projects.jsx              # Projects showcase
│   │   ├── Contact.jsx               # Contact form
│   │   └── Footer.jsx                # Footer
│   ├── App.jsx                       # Main app component
│   ├── index.css                     # Global styles
│   └── main.jsx                      # Entry point
├── vite.config.js                    # Vite configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
└── package.json                      # Dependencies
```

## GSAP Animation Tips

### Basic Animation
```javascript
gsap.from(element, {
  y: 50,        // Move from 50px below
  opacity: 0,   // Fade in from transparent
  duration: 1,  // Animation duration in seconds
  ease: 'power3.out'
});
```

### Scroll-Triggered Animation
```javascript
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',  // Start when element top hits 80% of viewport
    toggleActions: 'play none none reverse'
  },
  y: 100,
  opacity: 0
});
```

### Parallax Effect
```javascript
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    scrub: 1  // Smooth scrubbing effect
  },
  y: 200
});
```

## Performance Optimization

- Images are lazy-loaded through browser defaults
- GSAP animations use GPU acceleration
- Tailwind CSS purges unused styles in production
- Component-level code splitting with React

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio!

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Made with ❤️ using React, GSAP, and Tailwind CSS
