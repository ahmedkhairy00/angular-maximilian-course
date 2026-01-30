# Installation & Setup

Tailwind CSS can be integrated into almost any project. Here are the most common setup methods.

## 1. Tailwind with Plain HTML (CDN - For Learning Only)

The easiest way to try Tailwind is via the Play CDN. **Do not use this for production!**

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

## 2. Tailwind with React (Vite)

1. **Create your project:**
   ```bash
   npm create vite@latest my-project -- --template react
   cd my-project
   ```
2. **Install Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. **Configure your template paths (`tailwind.config.js`):**
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
4. **Add the Tailwind directives to your CSS (`./src/index.css`):**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 3. Tailwind with Angular

1. **Install Tailwind:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
2. **Configure template paths (`tailwind.config.js`):**
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{html,ts}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
3. **Add directives to `styles.css`:**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Folder Structure and Config Explanation

- `tailwind.config.js`: The brain of your Tailwind setup. Use this to customize colors, fonts, and breakpoints.
- `postcss.config.js`: Tailwind is a PostCSS plugin. This file tells your build tool to process CSS using Tailwind.
- `@tailwind base`: Injects Tailwind's reset styles (Preflight).
- `@tailwind components`: Injects component classes (like `container`).
- `@tailwind utilities`: Injects the utility classes (the core of Tailwind).

---

[Next: Core Concepts](./03-core-concepts.md)
