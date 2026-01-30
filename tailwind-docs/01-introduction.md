# Introduction to Tailwind CSS

Tailwind CSS is a **utility-first CSS framework** for rapidly building custom user interfaces. Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn't come with pre-designed components like buttons or navbars. Instead, it provides low-level utility classes that let you build completely custom designs without leaving your HTML.

## What is "Utility-First"?

In a traditional workflow, you write CSS classes and apply them to your HTML:

```html
<!-- Traditional CSS -->
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img
      class="chat-notification-logo"
      src="/img/logo.svg"
      alt="ChitChat Logo"
    />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  /* ... more CSS ... */
</style>
```

With Tailwind, you apply pre-existing classes directly in your HTML:

```html
<!-- Tailwind CSS -->
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
>
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

## Why Companies Use Tailwind

1.  **Speed**: You don't have to switch between HTML and CSS files. You build the UI entirely in the markup.
2.  **No More "Dead CSS"**: Since classes are written in HTML, when you delete a component, you don't have to worry about removing unused CSS from a stylesheet.
3.  **Maintainability**: You don't have to come up with silly class names like `wrapper-inner-container-v2`.
4.  **Consistency**: Tailwind uses a predefined design system (colors, spacing, etc.), ensuring your UI remains consistent.
5.  **Small Bundle Size**: Tailwind automatically "purges" (removes) all unused CSS, meaning your final CSS file is often less than 10kb.

---

[Next: Installation & Setup](./02-installation-setup.md)
