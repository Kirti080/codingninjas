# Coding Ninjas Clone

A complete responsive front-end clone of the Coding Ninjas website built with React, TailwindCSS, and modern React best practices.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, modern design with smooth animations and transitions
- **React Router**: Client-side routing with React Router DOM
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Component-Based Architecture**: Reusable components for maintainable code
- **Interactive Forms**: Login, signup, and contact forms with validation
- **Course Management**: Course listing with search and filtering capabilities
- **Testimonials**: Student testimonials with ratings and reviews

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.js       # Custom button component
│   ├── CourseCard.js   # Course display card
│   ├── Footer.js       # Site footer
│   ├── Navbar.js       # Navigation bar
│   └── TestimonialCard.js # Testimonial display card
├── pages/              # Page components
│   ├── Home.js         # Homepage with hero section
│   ├── Courses.js      # Course listing page
│   ├── About.js        # About us page
│   ├── Contact.js      # Contact page with form
│   ├── Login.js        # Login page
│   └── Signup.js       # Registration page
├── data/               # Static data files
│   ├── courses.js      # Course data
│   └── testimonials.js # Testimonial data
├── App.js              # Main app component with routing
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Technologies Used

- **React 18**: Latest version with hooks and functional components
- **React Router DOM**: For client-side routing
- **TailwindCSS**: For styling and responsive design
- **Heroicons**: For beautiful SVG icons
- **Modern JavaScript**: ES6+ features and best practices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coding-ninjas-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Features showcase
- Featured courses preview
- Student testimonials
- Statistics and achievements

### Courses Page (`/courses`)
- Complete course listing
- Search functionality
- Category and level filters
- Course cards with detailed information
- Course categories overview

### About Page (`/about`)
- Company mission and vision
- Team information
- Core values
- Company story and achievements

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- FAQ section
- Business hours and location

### Login Page (`/login`)
- User authentication form
- Social login options
- Password visibility toggle
- Remember me functionality

### Signup Page (`/signup`)
- User registration form
- Password strength validation
- Terms and conditions
- Marketing preferences

## 🎨 Design Features

- **Responsive Grid Layouts**: CSS Grid and Flexbox for responsive designs
- **Modern Color Scheme**: Primary blue theme with complementary colors
- **Smooth Animations**: CSS transitions and hover effects
- **Typography**: Inter font family for clean, readable text
- **Card-Based Design**: Modern card layouts for content organization
- **Interactive Elements**: Hover states and focus indicators

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  }
}
```

### Components
All components are modular and can be easily customized:
- Modify component props for different variants
- Update styling classes for different themes
- Add new features by extending existing components

### Data
Update the dummy data in the `data/` folder:
- `courses.js` - Add or modify course information
- `testimonials.js` - Update student testimonials

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is for educational purposes. The design and content are inspired by the original Coding Ninjas website.

## 🙏 Acknowledgments

- Coding Ninjas for the original design inspiration
- TailwindCSS team for the amazing utility-first CSS framework
- React team for the powerful frontend library
- Heroicons for the beautiful icon set

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

**Note**: This is a frontend-only clone for educational purposes. No backend functionality is implemented. 