# 🚀 Portfolio Landing Page

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring stunning animations and interactive UI components.

![Portfolio Preview](./public/og-image.jpg)

## ✨ Features

- **Modern Design** - Clean, professional design with emerald/cyan color scheme
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Responsive** - Fully responsive design for all devices
- **Interactive Components** - Hover effects, floating dock, and animated cards
- **SEO Optimized** - Comprehensive meta tags for social media sharing
- **Contact Form** - Integrated EmailJS for seamless communication
- **Performance** - Optimized build with code splitting and lazy loading

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React features and performance improvements
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Motion** - Smooth animations and transitions

### UI Components
- **Aceternity UI** - Beautiful, reusable UI components
- **React Icons** - Comprehensive icon library
- **React Toastify** - Elegant toast notifications

### Integration
- **EmailJS** - Contact form email delivery
- **Vercel** - Deployment platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/themazharhussain/portfolio-landing.git
   cd portfolio-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npx vercel
```

**Note:** Don't forget to add environment variables in Vercel dashboard:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 📁 Project Structure

```
portfolio-landing/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── og-image.jpg       # Social media preview image
│   └── profile.png
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── svg/          # SVG components
│   │   └── ui/           # Aceternity UI components
│   ├── lib/              # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Global styles
├── .env                  # Environment variables (not committed)
├── .env.example         # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
2. **About Section** - Edit `src/components/About.jsx`
3. **Skills** - Edit `src/components/Skills.jsx`
4. **Projects** - Edit `src/components/Projects.jsx`
5. **Contact Links** - Edit `src/components/Contact.jsx`

### Update Meta Tags

Edit `index.html` after deployment with your actual domain:
```html
<meta property="og:url" content="https://your-domain.com/" />
<meta property="og:image" content="https://your-domain.com/og-image.jpg" />
```

### Update Colors

Modify the color scheme in `src/index.css`:
```css
/* Current: Emerald/Cyan theme */
--color-primary: #10b981;
--color-secondary: #06b6d4;
```

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service
3. Create an email template
4. Get your credentials and add to `.env`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Breakdown

### Animations
- **GSAP ScrollTrigger** - Scroll-based animations
- **Smooth transitions** - CSS and Motion animations
- **Hover effects** - Interactive card animations

### Components
- **Floating Dock** - macOS-style social links
- **Background Gradient** - Animated gradient borders
- **Hover Effect Cards** - 3D hover transformations
- **Toast Notifications** - Custom-styled notifications

### Performance
- **Code Splitting** - Optimized bundle size
- **Lazy Loading** - Images and components
- **Tree Shaking** - Unused code elimination

## 📱 Responsive Design

Optimized for:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## 🔒 Security

- Environment variables for sensitive data
- `.env` files excluded from Git
- EmailJS public keys (safe for client-side)
- Domain restrictions in EmailJS dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mazhar Hussain**
- GitHub: [@themazharhussain](https://github.com/themazharhussain)
- LinkedIn: [Mazhar Hussain](https://www.linkedin.com/in/mazhar-hussain-2a2469310/)
- Email: thedevdigi@gmail.com

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) - Beautiful UI components
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service

## 📝 To-Do After Deployment

- [ ] Update meta tags with actual domain URL
- [ ] Add environment variables to Vercel
- [ ] Test contact form functionality
- [ ] Verify all external links
- [ ] Check mobile responsiveness
- [ ] Test social media preview cards
- [ ] Set up domain restrictions in EmailJS

---

**Built with React & Passion 💚**

*UI components by [Aceternity UI](https://ui.aceternity.com/)*
