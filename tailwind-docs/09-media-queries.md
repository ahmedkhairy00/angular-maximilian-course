# Media Queries in Tailwind

In traditional CSS, you use `@media` rules to apply styles based on screen width. In Tailwind, these are replaced by responsive prefixes.

## 1. Comparing CSS vs. Tailwind

### Traditional CSS

```css
/* style.css */
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

### Tailwind Equivalent

```html
<div class="w-full md:w-1/2"></div>
```

## 2. Why Tailwind's Approach is Better

1.  **Locality of Behavior**: You see exactly how an element behaves across all devices just by looking at its classes.
2.  **No Naming Fatigue**: You don't have to create names for every media query state.
3.  **Constraint-Based**: You are forced to use the predefined breakpoints, which leads to more consistent designs across the app.

## 3. Custom Breakpoints

If the default breakpoints don't fit your design, you can add or change them in `tailwind.config.js`.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
};
```

Now you can use `tablet:`, `laptop:`, and `desktop:` as prefixes.

## 4. Arbitrary Values for One-Off Breakpoints

Sometimes you need a specific breakpoint just for one element. You can use Tailwind's arbitrary value syntax.

```html
<div class="min-[320px]:text-center max-[600px]:bg-sky-300">
  This is highly specific!
</div>
```

> [!TIP]
> Use arbitrary values sparingly. If you find yourself using a specific pixel value multiple times, add it to your config instead.

---

[Next: Components & Reusable Patterns](./10-components.md)
