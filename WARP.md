# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Viewing the Website
```bash
# Open the website in your default browser
open index.html

# Or open in a specific browser
open -a "Google Chrome" index.html
open -a "Firefox" index.html
open -a "Safari" index.html
```

### Development Server (Optional)
```bash
# Start a simple HTTP server for development (requires Python)
python3 -m http.server 8000

# Alternative with PHP (if available)
php -S localhost:8000

# Alternative with Node.js (if available)
npx http-server
```

### File Management
```bash
# View project structure
find . -type f -name "*.html" -o -name "*.css" -o -name "*.js" | head -20

# Check file sizes
du -sh css/* js/* *.html

# Search for specific content
grep -r "caffeinate" . --include="*.html" --include="*.css" --include="*.js"
```

## Architecture Overview

### Project Structure
This is a static website built with vanilla HTML, CSS, and JavaScript. The project follows a simple, clean structure:

- **`index.html`** - Single-page application containing all website sections (hero, about, products, nutrition, contact)
- **`css/style.css`** - Comprehensive stylesheet with mobile-responsive design
- **`js/main.js`** - Interactive features including smooth scrolling and scroll animations

### Design System

#### Brand Colors
- **Primary Brand**: `#d4a574` (warm gold/bronze)
- **Dark Brand**: `#2c1810` (dark brown)
- **Background**: `#f5f3f0` (warm off-white)
- **Secondary**: `#c19660` (darker gold for hover states)

#### Layout Architecture
- **Fixed Navigation**: Sticky header with smooth scroll navigation
- **Hero Section**: Split layout (content + product image placeholder)
- **Feature Grid**: CSS Grid responsive layout for benefits
- **Product Cards**: Responsive grid with hover animations
- **Nutrition Display**: Large number displays with grid layout

### Key Components

#### Navigation System
- Fixed position header with brand and menu
- Smooth scroll implementation for anchor links
- Responsive hamburger menu styling for mobile
- Scroll-based background opacity effects

#### Interactive Features
- **Intersection Observer**: Fade-in animations for sections
- **Smooth Scrolling**: Custom implementation with header offset
- **Hover Effects**: Transform animations on cards and buttons
- **CTA Button**: Placeholder alert for shop functionality

#### Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: 768px (tablet) and 480px (mobile)
- **Grid layouts** automatically adapt to screen size
- **Typography scaling** for different devices

### Content Strategy

#### Brand Identity
The site represents a premium caffeinated protein bar brand with focus on:
- Clean energy without crashes
- Premium protein content (20g per bar)
- Natural caffeine (100mg from green coffee beans)
- Clean ingredients philosophy

#### Product Lines (Per README)
- **Pick Me Up**: Energy & hydration (80mg caffeine)
- **Chill Me Out**: Relaxation/anti-stress with adaptogens
- **Focus Me Up**: Nootropic bar (50mg caffeine + L-theanine)
- **Fill Me Up**: Meal replacement (300-350 kcal)
- **Juice Me Up**: Recovery bar (20-25g protein)

### Development Guidelines

#### File Modifications
- **Brand updates**: Modify navigation brand name and colors in CSS
- **Product content**: Update product cards in HTML and corresponding CSS
- **Contact info**: Update footer contact details
- **Images**: Replace `.product-placeholder` and `.product-image-placeholder` with actual images

#### Styling Conventions
- **BEM-like naming**: Classes like `.hero-content`, `.product-card`, `.nutrition-item`
- **Consistent spacing**: Uses rem units for typography, px for borders/shadows
- **Hover states**: Consistent transform and box-shadow patterns
- **Grid layouts**: Uses CSS Grid with `auto-fit` and `minmax()` for responsiveness

#### JavaScript Patterns
- **Event delegation**: Uses `querySelectorAll` with forEach for multiple elements
- **Modern APIs**: Intersection Observer for animations, smooth scrolling
- **Performance**: Debounced scroll events, efficient DOM querying

### Deployment Considerations

Since this is a static site, deployment options include:
- **GitHub Pages**: Push to gh-pages branch
- **Netlify**: Connect repository for automatic deployments
- **Vercel**: Simple static hosting with domain support
- **Traditional hosting**: Upload files to web server

### Future Enhancements

Based on the README roadmap, future development may include:
- E-commerce integration for the CTA button functionality
- Product image galleries and detailed nutrition pages
- Contact form with backend integration
- Social media feed integration
- Blog section for brand storytelling