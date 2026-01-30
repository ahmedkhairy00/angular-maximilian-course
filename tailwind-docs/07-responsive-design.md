# Responsive Design

Responsive design in Tailwind is built on a mobile-first philosophy, using simple prefixes to apply styles at different screen sizes.

## 1. Breakpoint Prefixes

Reviewing the core breakpoints:

- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 2. Responsive Class Patterns

Standard classes have no prefix. Breakpoint classes overwrite them as the screen gets larger.

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  Item (Full width on mobile, 1/2 on tablet, 1/3 on desktop)
</div>
```

## 3. Real-World Responsive Layout

Here's a common pattern for a 3-column feature section:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
  <!-- Card 1 -->
  <div class="bg-white p-6 shadow-sm rounded-lg border border-slate-200">
    <h3 class="text-xl font-bold">Fast Performance</h3>
    <p class="text-slate-600">Optimized for speed and efficiency.</p>
  </div>

  <!-- Card 2 -->
  <div class="bg-white p-6 shadow-sm rounded-lg border border-slate-200">
    <h3 class="text-xl font-bold">Responsive Design</h3>
    <p class="text-slate-600">Looks great on every screen size.</p>
  </div>

  <!-- Card 3 -->
  <div class="bg-white p-6 shadow-sm rounded-lg border border-slate-200">
    <h3 class="text-xl font-bold">Customizable Themes</h3>
    <p class="text-slate-600">Easily adjust to your brand guidelines.</p>
  </div>
</div>
```

## 4. Responsive Visibility

Sometimes you want to hide elements specifically on certain devices.

- `hidden md:block`: Hide on mobile, show on tablet and up.
- `block md:hidden`: Show on mobile, hide on tablet and up.

**Warning**: Use responsive visibility sparingly. It's often better to design a layout that adapts naturally than one that completely swaps components.

---

[Next: Hover, Focus & Other States](./08-hover-focus-states.md)
