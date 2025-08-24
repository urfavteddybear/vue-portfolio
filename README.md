# Vue Portfolio

A clean, minimalist portfolio website built with Vue.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimalist design with maroon accent colors
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Vue 3 and Vite
- 🎯 Smooth animations and transitions
- 📧 Contact form integration
- 💼 Project showcase
- 📝 Blog integration
- 🔧 TypeScript support

## Tech Stack

- **Framework**: Vue.js 3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)
- **Animations**: CSS transitions and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vue-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Vue components
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── ProjectsSection.vue
│   ├── WorkExperienceSection.vue
│   ├── WritingsSection.vue
│   ├── ContactSection.vue
│   ├── ThemeToggle.vue
│   └── WaveIcon.vue
├── views/              # Page components
│   └── Home.vue
├── router/             # Vue Router configuration
│   └── index.ts
├── assets/             # Static assets
│   └── main.css
├── App.vue             # Root component
└── main.ts             # Application entry point
```

## Customization

### Colors

The portfolio uses a maroon color palette defined in `tailwind.config.js`. You can customize the colors by modifying the `maroon` and `primary` color definitions.

### Content

Update the following files to customize content:
- `src/components/HeroSection.vue` - Personal information and hero content
- `src/components/ProjectsSection.vue` - Project data and descriptions
- `src/components/WorkExperienceSection.vue` - Work experience data
- `src/components/WritingsSection.vue` - Blog posts and articles
- `src/components/ContactSection.vue` - Contact information

### Images

Add your project images to the `public/images/` directory and update the image paths in the components.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting platform (Netlify, Vercel, GitHub Pages, etc.)

## Performance Features

- Optimized bundle size with Vite
- Lazy loading for images
- Efficient CSS with Tailwind's purging
- Smooth animations with CSS transitions
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to reach out:
- Email: wahyuputra@gmail.com
- Website: wahyuputra.biz.id
- GitHub: @urfavteddybear
