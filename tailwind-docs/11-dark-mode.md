# Dark Mode

Tailwind has first-class support for dark mode, allowing you to style your site differently when a user has dark mode enabled.

## 1. The `dark:` Variant

Use the `dark:` prefix to apply a class only when dark mode is active.

```html
<div
  class="bg-white dark:bg-slate-900 px-6 py-4 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm"
>
  <h3 class="text-slate-900 dark:text-white font-bold">Automatic Dark Mode</h3>
  <p class="text-slate-600 dark:text-slate-400">
    This content adapts to your system settings!
  </p>
</div>
```

## 2. Configuration Strategy

There are two ways to trigger dark mode in Tailwind:

### A. Media Strategy (Default)

By default, Tailwind uses the `prefers-color-scheme` CSS media query. It follows your OS settings.

### B. Class Strategy (Recommended for Toggle)

If you want a manual toggle switch, you must update your config:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class", // Change from 'media' (default) to 'class'
  // ...
};
```

Now, Tailwind applies `dark:` styles when there is a `dark` class on the `<html>` or `<body>` tag.

```html
<!-- Dark mode is ON -->
<html class="dark">
  <body class="dark:bg-slate-950">
    <!-- ... -->
  </body>
</html>
```

## 3. Best Practices for Dark Mode

1.  **Don't use pure black**: `#000` often looks too harsh. Use high-weight grays like `slate-900` or `zinc-950`.
2.  **Invert Text Colors**: `text-slate-600` (on light) -> `text-slate-400` (on dark).
3.  **Adjust Borders**: High contrast borders on light mode should be very subtle on dark mode (`border-slate-200` to `border-slate-800`).
4.  **Shadows**: Shadows are often invisible on dark backgrounds. Consider using a subtle border instead.

---

[Next: Customization](./12-customization.md)
