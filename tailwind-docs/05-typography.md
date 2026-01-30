# Typography

Tailwind provides extensive utilities for controlling every aspect of text styling.

## 1. Font Sizes

Tailwind uses a relative scaling system based on `rem` units.

| Class       | Equivalent Size |
| :---------- | :-------------- |
| `text-xs`   | 0.75rem (12px)  |
| `text-sm`   | 0.875rem (14px) |
| `text-base` | 1rem (16px)     |
| `text-lg`   | 1.125rem (18px) |
| `text-xl`   | 1.25rem (20px)  |
| `text-2xl`  | 1.5rem (24px)   |
| `text-5xl`  | 3rem (48px)     |

**Example:**

```html
<h1 class="text-3xl font-bold">Main Heading</h1>
<p class="text-base text-gray-600">This is a standard paragraph.</p>
```

## 2. Font Weights

- `font-thin` (100)
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)

## 3. Text Alignment & Wrapping

- `text-left`, `text-center`, `text-right`, `text-justify`.
- `truncate`: Truncates overflowing text with an ellipsis (...).
- `break-words`: Forces long words to break onto the next line.

## 4. Line Height (Leading)

Controls the vertical space between lines of text.

- `leading-none` (1)
- `leading-tight` (1.25)
- `leading-normal` (1.5)
- `leading-loose` (2)

## 5. Letter Spacing (Tracking)

- `tracking-tighter`
- `tracking-tight`
- `tracking-normal`
- `tracking-wide`
- `tracking-widest`

## 6. Real-world example: Article Title

```html
<article class="max-w-2xl mx-auto py-8">
  <h2
    class="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
  >
    The Future of Utility-First CSS
  </h2>
  <p class="text-lg text-slate-700 leading-relaxed">
    Tailwind CSS has revolutionized the way we think about web development...
  </p>
</article>
```

---

[Next: Colors & Backgrounds](./06-colors-backgrounds.md)
