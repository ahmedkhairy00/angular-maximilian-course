# Colors & Backgrounds

Tailwind includes a meticulously crafted palette of default colors, featuring a range of shades for each color.

## 1. The Color System

Colors are named by their hue (e.g., `blue`, `red`, `slate`) followed by a weight ranging from `50` to `950`.

- `slate-50`: Very light / faint.
- `slate-500`: The base color.
- `slate-950`: Very dark.

**Common Use Cases:**

- `text-{color}-{weight}`: Set text color (e.g., `text-blue-600`).
- `bg-{color}-{weight}`: Set background color (e.g., `bg-red-500`).
- `border-{color}-{weight}`: Set border color (e.g., `border-gray-200`).

## 2. Opacity

You can control the opacity of any color using a slash (`/`) followed by an opacity percentage.

```html
<!-- Background blue with 50% opacity -->
<div class="bg-blue-500/50 p-4">Translucent Background</div>
```

## 3. Background Gradients

Gradients are built by specifying a direction, a starting color, and an ending color.

- `bg-linear-to-r` (New in v4, formerly `bg-gradient-to-r` in v3)
- `from-{color}`: Start color.
- `via-{color}`: Middle color (optional).
- `to-{color}`: End color.

**Example:**

```html
<div
  class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-lg"
>
  Beautiful Gradient Header
</div>
```

## 4. Background Size & Position

- `bg-cover`: Scales the image to cover the entire container.
- `bg-center`: Centers the background image.
- `bg-no-repeat`: Prevents the image from tiling.

## 5. Professional Color Tip: Contrast

Always pair dark text with light backgrounds, or white text with dark backgrounds.

- High contrast: `bg-slate-900 text-white`
- Subtle contrast: `bg-slate-50 text-slate-600`

---

[Next: Responsive Design](./07-responsive-design.md)
