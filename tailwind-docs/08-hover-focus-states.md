# Hover, Focus & Other States

Tailwind uses variants to style elements in different states like hover, focus, or even when a child is hovered.

## 1. Basic Interactive States

- `hover:`: Applied on mouse over.
- `focus:`: Applied when the element is focused (keyboard navigation or click).
- `active:`: Applied when the element is being clicked.
- `disabled:`: Applied when an element has the `disabled` attribute.

```html
<button
  class="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors"
>
  Interactive Button
</button>
```

## 2. Group Hover (Parent/Child States)

Sometimes you want to change a child's style when the **parent** is hovered.

```html
<div
  class="group p-6 bg-white hover:bg-slate-900 transition-all rounded-lg cursor-pointer"
>
  <h3 class="text-slate-900 group-hover:text-white font-bold">
    The parent is hovered
  </h3>
  <p class="text-slate-500 group-hover:text-slate-300">
    The child changes color automatically!
  </p>
</div>
```

1. Add `group` class to the parent.
2. Add `group-hover:{class}` to the child.

## 3. Focus-Within

Style a container when any element inside it receives focus.

```html
<div
  class="border border-slate-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 p-2 rounded"
>
  <label class="block text-sm text-slate-600">Username</label>
  <input type="text" class="w-full outline-none" placeholder="Type here..." />
</div>
```

## 4. Transitions & Animations

States feel much better with transitions.

- `transition-{property}`: (e.g., `transition-all`, `transition-colors`, `transition-opacity`).
- `duration-{ms}`: (e.g., `duration-300`, `duration-500`).
- `ease-{timing}`: (e.g., `ease-in-out`, `ease-linear`).

**Best Practice**: Always add a duration when using hover states (e.g., `hover:bg-blue-600 transition-colors duration-200`).

---

[Next: Media Queries in Tailwind](./09-media-queries.md)
