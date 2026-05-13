# Fitness Form

A modern, responsive fitness tracking form application built with HTML, CSS, and vanilla JavaScript.

## Features

✅ **Personal Information Collection**
- Full name, email, age, gender
- Weight and height input with automatic BMI calculation
- Color-coded BMI indicators (Underweight, Normal, Overweight, Obese)

✅ **Fitness Goals & Experience**
- Primary fitness goal selection
- Experience level assessment (Beginner, Intermediate, Advanced)
- Multiple activity preferences (Running, Weightlifting, Yoga, Cycling, Swimming, Cardio)
- Weekly workout frequency tracking

✅ **Additional Information**
- Space for noting injuries or health concerns
- Terms and conditions agreement

✅ **User Experience**
- Real-time BMI calculation and color coding
- Form validation on submission
- Local storage support (form data persists across sessions)
- Responsive design (works on desktop, tablet, mobile)
- Smooth animations and transitions
- Success message on form submission
- Auto-reset after submission

✅ **Accessibility**
- Semantic HTML structure
- Proper label associations
- Keyboard navigation support
- ARIA-friendly form elements

## File Structure

```
fitness-form/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Form logic and interactions
└── README.md       # This file
```

## How to Use

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Fill out the form** with your fitness information
4. **Click Submit** to save your data (stored locally)
5. **Data persists** - Refresh the page and your information will be automatically loaded

## Technical Details

### HTML
- Semantic form elements with proper fieldsets and legends
- Required field validation
- Multiple input types (text, email, number, select, checkbox, textarea)

### CSS
- Modern gradient background
- Flexbox and CSS Grid for layout
- Mobile-first responsive design
- Smooth transitions and animations
- Color-coded BMI indicators

### JavaScript
- Real-time BMI calculation
- Form validation
- Local storage for data persistence
- Dynamic success messages
- Keyboard shortcuts (Ctrl+S to submit)
- Auto-reset functionality

## BMI Categories

- **Underweight** (< 18.5) - Blue
- **Normal Weight** (18.5-24.9) - Green
- **Overweight** (25-29.9) - Orange
- **Obese** (≥ 30) - Red

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Backend integration for data storage
- User authentication
- Progress tracking dashboard
- Workout routine recommendations
- Integration with fitness APIs
- PDF export functionality
- Email notifications

## License

Free to use and modify for personal or commercial projects.

---

**Ready to start your fitness journey!** 💪
