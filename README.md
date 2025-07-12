# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features multiple layout options for both the about page and projects showcase.

## ✨ Features

### 🎨 Multiple Layout Options
- **About Page**: 5 different layouts (Left Image, Top Image, Hero Background, Grid, Circular Image)
- **Projects Page**: 4 different layouts (Grid, Vertical Stack, Masonry, Timeline)
- Interactive layout selector to switch between designs

### 🛠️ Technology Stack
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for modern, responsive design
- **UI Components**: Radix UI for accessible components
- **Icons**: Custom SVG icons and Lucide React
- **Deployment**: Optimized for Vercel deployment

### 📱 Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Optimized for all screen sizes
- Touch-friendly interactions

### ♿ Accessibility
- Radix UI components for accessibility
- Proper ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader friendly

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page with 5 layout options
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── projects/
│   │   │   └── page.tsx          # Projects page with 4 layout options
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       └── navbar.tsx            # Navigation component
├── public/
│   └── images/
│       └── profile.jpg           # Profile image
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Pages Overview

### Home Page (`/`)
- Welcome section with profile image
- Clean, centered design
- Introduction to the portfolio

### About Page (`/about`)
- **5 Layout Options**:
  - **Left Image**: Professional side-by-side layout
  - **Top Image**: Centered with decorative elements
  - **Hero Background**: Dramatic gradient background
  - **Grid**: Structured two-column layout
  - **Circular Image**: Classic centered circular design

### Projects Page (`/projects`)
- **4 Layout Options**:
  - **Grid**: 2-column card layout
  - **Vertical Stack**: Single column, horizontal cards
  - **Masonry**: Pinterest-style masonry grid
  - **Timeline**: Chronological timeline layout

### Contact Page (`/contact`)
- Contact information and form
- Professional contact details

## 🎨 Customization

### Adding Your Content

1. **Profile Image**: Replace `/public/images/profile.jpg`
2. **About Content**: Edit `src/app/about/page.tsx`
3. **Projects**: Update the `projects` array in `src/app/projects/page.tsx`
4. **Contact Info**: Modify `src/app/contact/page.tsx`

### Styling
- Colors: Modify Tailwind classes or update `tailwind.config.js`
- Layouts: Each page has multiple layout options you can customize
- Components: Edit individual components in `src/components/`

### Adding New Layouts
1. Add new layout option to the `layouts` array
2. Create corresponding case in the `renderLayout()` function
3. Update TypeScript types if needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **GitHub Pages**: Configure for static export
- **AWS S3**: Upload built files to S3 bucket

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📞 Contact

- **Name**: [Your Name]
- **Email**: [your.email@example.com]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Made with ❤️ using Next.js and Tailwind CSS
