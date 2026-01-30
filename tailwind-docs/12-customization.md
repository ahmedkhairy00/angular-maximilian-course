# Customization

The power of Tailwind lies in its configuration. The `tailwind.config.js` file allows you to define your brand's unique design system.

## 1. `tailwind.config.js` Structure

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Where to look for classes
  theme: {
    extend: {
      // Add custom values or override defaults
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // For styling markdown/CMS content
    require("@tailwindcss/forms"), // Reset form styles
  ],
};
```

## 2. Extend vs. Override

- **Inside `extend`**: Adds new values to the existing Tailwind defaults. (Recommended).
- **Outside `extend` (directly in `theme`)**: Replaces the entire default scale. (Use sparingly).

## 3. Custom Colors

Always create a color scale if possible. This allows you to use `bg-brand-light`, `text-brand-dark`, etc.

```javascript
colors: {
  primary: '#5c6ac4',
  secondary: '#ecc94b',
}
```

## 4. Plugins

Plugins allow you to add new styles or utilities to Tailwind.

- **Typography Plugin**: Use the `prose` class to automatically style raw HTML (like blog posts).
- **Forms Plugin**: Makes form elements look consistent across browsers and easier to style.

## 5. The `@layer` Directive

If you need to write custom CSS that uses Tailwind's features, use layers in your main CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded transition-colors hover:bg-blue-600;
  }
}
```

> [!WARNING]
> Only extract components with `@apply` when you find yourself repeating the exact same long list of classes in 10+ places AND you cannot use a component (React/Angular/Vue).

---

[Next: Performance & Best Practices](./13-performance-best-practices.md)
