# Real-world Examples

Here are three complete UI patterns commonly used in production-level applications.

## 1. Simple Dashboard Header

```html
<nav
  class="bg-white border-b border-slate-200 px-4 py-2.5 dark:bg-slate-800 dark:border-slate-700"
>
  <div
    class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
  >
    <div class="flex items-center">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >AdminPro</span
      >
    </div>
    <div class="flex items-center lg:order-2">
      <a
        href="#"
        class="text-slate-800 dark:text-white hover:bg-slate-50 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:hover:bg-slate-700 focus:outline-none"
        >Log in</a
      >
      <a
        href="#"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >Get started</a
      >
    </div>
  </div>
</nav>
```

## 2. Multi-column Landing Page Section

```html
<section class="bg-white dark:bg-slate-900 py-16">
  <div class="max-w-screen-xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">
      Trusted by Millions
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="flex flex-col items-center">
        <dt class="text-4xl font-bold text-blue-600 mb-2">73M+</dt>
        <dd class="text-slate-500 dark:text-slate-400">Developers</dd>
      </div>
      <div class="flex flex-col items-center">
        <dt class="text-4xl font-bold text-blue-600 mb-2">100M+</dt>
        <dd class="text-slate-500 dark:text-slate-400">Repositories</dd>
      </div>
      <div class="flex flex-col items-center">
        <dt class="text-4xl font-bold text-blue-600 mb-2">4M+</dt>
        <dd class="text-slate-500 dark:text-slate-400">Organizations</dd>
      </div>
      <div class="flex flex-col items-center">
        <dt class="text-4xl font-bold text-blue-600 mb-2">90%</dt>
        <dd class="text-slate-500 dark:text-slate-400">Satisfaction</dd>
      </div>
    </div>
  </div>
</section>
```

## 3. Centered Authentication UI

```html
<div
  class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="text-center text-3xl font-extrabold text-slate-900">
      Sign in to your account
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div
      class="bg-white py-8 px-4 shadow-sm rounded-xl sm:px-10 border border-slate-200"
    >
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 text-left"
            >Email address</label
          >
          <input
            type="email"
            class="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
```

---

[Back to README](./README.md)
