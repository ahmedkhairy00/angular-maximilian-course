# Performance & Best Practices

In a production environment, performance and maintainability are critical. Tailwind is designed to be extremely fast if used correctly.

## 1. Purging Unused CSS (The Secret Sauce)

Tailwind works by scanning your files for class names and generating only the CSS you actually use.

**Configuration Check:**
Ensure your `content` array in `tailwind.config.js` is accurate. If you miss a directory, the styles for those files won't be generated.

```javascript
content: [
  "./src/**/*.{html,js,ts,jsx,tsx}",
  "./components/**/*.vue",
],
```

## 2. File Size Optimization

Because Tailwind only generates what you use, the final CSS bundle for a massive project is usually **less than 10kb** after Gzip/Brotli compression.

- **Don't** use inline styles where a Tailwind class exists.
- **Don't** create "helper" classes in CSS that just wrap Tailwind's `@apply`.

## 3. Naming Conventions

Tailwind doesn't force a naming convention for your components, but here's a professional standard:

- **Folders**: Group by feature or atomic level (`components/ui`, `components/features`).
- **File Names**: Use PascalCase for components (`PrimaryButton.tsx`, `UserCard.component.html`).

## 4. Class Order Consistency

To keep your HTML readable, follow a consistent order for classes:

1.  **Layout**: `flex`, `grid`, `block`, `absolute`, `relative`.
2.  **Sizing**: `w-`, `h-`, `max-w-`.
3.  **Spacing**: `p-`, `m-`, `gap-`.
4.  **Typography**: `text-`, `font-`.
5.  **Colors**: `bg-`, `border-`.
6.  **Interactive**: `hover:`, `focus:`.
7.  **Responsive**: `md:`, `lg:`.

> [!TIP]
> Use the official **Prettier plugin for Tailwind CSS** (`prettier-plugin-tailwindcss`). It automatically sorts your classes in the recommended order.

## 5. Avoiding Dynamic Class Names

Tailwind's compiler does not execute your JavaScript. It only looks for raw strings in your code.

**Bad (Will not work):**

```html
<div class="bg-{{ color }}-500"></div>
```

**Good (Always use full strings):**

```html
<div class="{{ color === 'red' ? 'bg-red-500' : 'bg-blue-500' }}"></div>
```

---

[Next: Common Mistakes & Fixes](./14-common-mistakes.md)
