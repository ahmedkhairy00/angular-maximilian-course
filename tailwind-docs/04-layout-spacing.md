# Layout & Spacing

Tailwind provides a comprehensive set of utilities for handling dimensions, spacing, and modern layout techniques like Flexbox and Grid.

## 1. Margin & Padding

Spacing utilities follow a consistent naming convention: `{property}{side}-{size}`.

- **Properties**: `m` (margin), `p` (padding)
- **Sides**:
  - `t` (top), `b` (bottom), `l` (left), `r` (right)
  - `x` (left + right), `y` (top + bottom)
  - (blind) applies to all 4 sides.
- **Sizes**: Based on a 4px scale (e.g., `1` = 4px, `4` = 16px, `10` = 40px).

**Examples:**

- `mt-4`: Margin top 16px.
- `px-6`: Padding left/right 24px.
- `mx-auto`: Centers an element (sets horizontal margin to auto).

## 2. Dimensions (Width & Height)

- `w-{n}`: Width (e.g., `w-64`, `w-1/2`, `w-full`, `w-screen`).
- `h-{n}`: Height (e.g., `h-32`, `h-full`, `h-screen`).
- `max-w-{size}`: Max width (e.g., `max-w-md`, `max-w-7xl`).

## 3. Flexbox

Flexbox is the most common way to align items in a row or column.

```html
<div class="flex flex-row justify-between items-center gap-4">
  <div class="flex-1">Item 1</div>
  <div class="flex-none">Item 2</div>
  <div>Item 3</div>
</div>
```

- `flex`: `display: flex`.
- `flex-col` / `flex-row`: Direction.
- `justify-center` / `justify-between`: Horizontal alignment.
- `items-center`: Vertical alignment.
- `gap-4`: Adds space between children (the modern way, replaces margins on children).

## 4. CSS Grid

For more complex 2D layouts.

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="col-span-1 md:col-span-2 bg-slate-100">Main Content</div>
  <div class="bg-slate-200">Sidebar</div>
</div>
```

- `grid`: `display: grid`.
- `grid-cols-3`: Creates 3 equal columns.
- `col-span-2`: Makes an element span across 2 columns.
- `gap-6`: Spacing between grid items.

---

[Next: Typography](./05-typography.md)
