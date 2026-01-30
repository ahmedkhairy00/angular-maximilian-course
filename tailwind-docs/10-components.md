# Components & Reusable Patterns

Even though Tailwind is "utility-first," real projects require reusable UI patterns. Here are common components built with Tailwind.

## 1. Primary Button

```html
<button
  class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center transition-all"
>
  Get Started
</button>
```

## 2. Product Card

```html
<div
  class="max-w-sm bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden group"
>
  <img
    class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    src="image.jpg"
    alt="Product"
  />
  <div class="p-5">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-slate-900 leading-tight"
    >
      Modern Headsets
    </h5>
    <p class="mb-3 font-normal text-slate-700">
      Experience immersive sound quality with our new wireless technology.
    </p>
    <a
      href="#"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
    >
      Read more
    </a>
  </div>
</div>
```

## 3. Floating Label Input (Form Pattern)

```html
<div class="relative">
  <input
    type="text"
    id="username"
    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-transparent rounded-lg border-1 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
  />
  <label
    for="username"
    class="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
  >
    Username
  </label>
</div>
```

## 4. Simple Modal

```html
<div class="fixed inset-0 bg-slate-500/75 flex items-center justify-center p-4">
  <div
    class="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 animate-in fade-in zoom-in duration-300"
  >
    <h3 class="text-xl font-bold mb-4">Confirm Action</h3>
    <p class="text-slate-600 mb-6">
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
    <div class="flex justify-end gap-3">
      <button class="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
        Cancel
      </button>
      <button
        class="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg"
      >
        Delete
      </button>
    </div>
  </div>
</div>
```

---

[Next: Dark Mode](./11-dark-mode.md)
