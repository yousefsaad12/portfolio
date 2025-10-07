# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website is inspired by Ahmed Mostafa's portfolio design and includes all the essential sections for showcasing your work and skills.

## Features

- 🚀 **Modern React Architecture** - Built with React 19, TypeScript, and Vite
- 🎨 **Beautiful Design** - Clean, modern UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with Vite and modern build tools
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **SEO Ready** - Semantic HTML and proper meta tags
- 📧 **Contact Form** - Working contact form with validation
- 🌙 **Dark Mode Ready** - Easy to implement dark mode

## Sections

- **Hero** - Introduction with social links and call-to-action
- **Employment** - Work experience and career history
- **Work** - Services offered and expertise areas
- **Stack** - Technologies and tools you work with
- **Projects** - Current and past projects
- **Education** - Academic background and certifications
- **Contact** - Contact form and social media links

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update your name, title, and bio
   - Add your social media links
   - Update your location and experience

2. **Employment** (`src/components/Employment.tsx`):
   - Add your work experience
   - Update job titles, companies, and descriptions

3. **Education** (`src/components/Education.tsx`):
   - Add your educational background
   - Include relevant certifications

4. **Projects** (`src/components/Projects.tsx`):
   - Add your current and past projects
   - Include project links and technologies used

5. **Stack** (`src/components/Stack.tsx`):
   - Add or remove technologies you work with
   - Update technology categories

6. **Contact** (`src/components/Contact.tsx`):
   - Update your contact information
   - Add your social media profiles

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `src/index.css`
- **Animations**: Modify animations in component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify

1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Inspired by Ahmed Mostafa's portfolio design from [ahmed.softworks.studio](https://ahmed.softworks.studio)

---

**Happy coding! 🚀**