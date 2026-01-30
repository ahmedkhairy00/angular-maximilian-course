# Common Mistakes & Fixes

Even experienced developers make mistakes when first switching to a utility-first workflow.

## 1. Overusing `@apply`

**The Mistake**: Extracting everything into CSS classes because you think the HTML is "too messy."

```css
/* Bad: defeats the purpose of Tailwind */
.my-card {
  @apply bg-white rounded-lg p-4 shadow-md border border-gray-200 flex flex-col items-center;
}
```

**The Fix**: Use your framework's component system (React components, Angular components). If you need to change a card's style, you change it in the component, not in a massive CSS file.

## 2. Thinking Mobile-First "Backwards"

**The Mistake**: Using `lg:hidden` to hide something on desktop and thinking it will magically stay hidden on mobile.

**The Fix**: In Tailwind, styles apply from small to large. Start with `hidden` (for mobile) and then add `lg:block` (for desktop).

## 3. Ignoring the Design System

**The Mistake**: Using arbitrary values for everything.

```html
<div class="p-[17px] bg-[#f0f0f0] text-[13px]">...</div>
```

**The Fix**: Check if a standard class like `p-4` or `bg-slate-100` works. This ensures your UI is consistent and easier to maintain.

## 4. Nested Group Hover

**The Mistake**: Thinking one `group` class works for multiple levels of nesting.

**The Fix**: Tailwind v3.2 introduced **named groups**.

```html
<div class="group/sidebar">
  <div class="group/item">
    <span class="group-hover/sidebar:text-white group-hover/item:font-bold">
      I react to both!
    </span>
  </div>
</div>
```

## 5. Invalid Class Names

**The Mistake**: Writing `text-red-500-20` for opacity (the old syntax).

**The Fix**: Use the slash syntax: `text-red-500/20`.

---

[Next: Real-world Examples](./15-real-world-examples.md)
