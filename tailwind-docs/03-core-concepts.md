# Core Concepts

To master Tailwind, you need to understand three fundamental pillars: Utility-First, Responsive Design, and Hover/Focus states.

## 1. Utility Classes vs. Component Classes

In Tailwind, you build components by composing utility classes.

**Example: A Simple Button**

```html
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Click Me
</button>
```

- `bg-blue-500`: Sets background color.
- `hover:bg-blue-700`: Changes background on hover.
- `text-white`: Sets text color.
- `font-bold`: Sets font weight.
- `py-2`: Sets vertical padding (top and bottom).
- `px-4`: Sets horizontal padding (left and right).
- `rounded`: Adds a border radius.

## 2. Responsive Design System

Tailwind uses a **Mobile-First** approach. This means:

- Unprefixed classes (e.g., `w-full`) apply to **all** screen sizes (starting from mobile).
- Prefixed classes (e.g., `md:w-1/2`) apply only at that breakpoint **and above**.

### Default Breakpoints:

| Prefix | Minimum Width | CSS Equivalent               |
| :----- | :------------ | :--------------------------- |
| `sm`   | 640px         | `@media (min-width: 640px)`  |
| `md`   | 768px         | `@media (min-width: 768px)`  |
| `lg`   | 1024px        | `@media (min-width: 1024px)` |
| `xl`   | 1280px        | `@media (min-width: 1280px)` |
| `2xl`  | 1536px        | `@media (min-width: 1536px)` |

**Example:**

```html
<!-- Mobile: Red background, Desktop: Blue background -->
<div class="bg-red-500 md:bg-blue-500">Responsive Box</div>
```

## 3. Mobile-First Mindset

**Don't do this:**
`lg:hidden` (to hide on desktop) and expect it to show on mobile.

**Do this:**
`hidden lg:block` (hide by default, then show on large screens).

Always start by designing for the smallest screen, then add prefixes as the screen gets larger.

---

[Next: Layout & Spacing](./04-layout-spacing.md)
