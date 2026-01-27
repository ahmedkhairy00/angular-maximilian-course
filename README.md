# Angular Mastery: Comprehensive Course Notes 🚀

This repository tracks my journey through the **Angular - The Complete Guide** course. It contains hands-on projects, detailed architectural notes, and deep dives into modern Angular features like Signals and standalone components.

![Angular Architecture](public/images/architecture.png)

---

## 🛠️ Getting Started

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Useful Commands

| Task                   | Command                      |
| :--------------------- | :--------------------------- |
| **Start Server**       | `ng serve`                   |
| **Build Project**      | `ng build`                   |
| **Run Unit Tests**     | `ng test`                    |
| **Run E2E Tests**      | `ng e2e`                     |
| **Generate Component** | `ng generate component name` |

---

## 📚 Course Progress & Learning Path

- [x] **Introduction to Angular**: A TypeScript-based framework by Google for building scalable Single-Page Applications (SPAs).
- [x] **Angular Architecture**: Organizing apps using components, templates, and services with a focus on modularity and dependency injection.

### 📁 Project Structure Deep Dive

#### TypeScript Configuration

1. `tsconfig.json`: Global TypeScript compiler configuration.
2. `tsconfig.app.json`: Specific configuration for the Angular application.
3. `tsconfig.spec.json`: Configuration for unit tests.

#### Core Configuration Files

- `angular.json`: The heart of project configuration. Used to define build targets, assets, and global styles/scripts (e.g., Bootstrap, Tailwind CSS).
- `.gitignore`: Specifies files for Git to ignore (e.g., `node_modules`, `.env`).
- `package.json`: Manages project dependencies and scripts.
- `editorconfig`: Maintains consistent coding styles across different editors.

#### Source Directory (`src`)

- `index.html`: The main HTML file where the app is rendered.
- `main.ts`: The entry point that bootstraps the `AppModule` or standalone component.
- `styles.css`: Global application styles.
- `app/`: Contains the core application logic, components, and routing.

---

## 🏗️ Components & Templates

Components are the fundamental building blocks of Angular. Each component typically consists of:

- **Logic**: `component.ts` (Class & Metadata)
- **View**: `component.html` (Structure)
- **Styles**: `component.css` (Look & Feel)
- **Tests**: `component.spec.ts` (Unit Testing)

> [!TIP]
> Use the `@Component` decorator to define a class as an Angular component. It metadata links the logic to the template and styles.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [], // Add dependencies here
})
export class UserComponent {
  // Logic goes here
}
```

---

## 🔄 Data Binding & Interaction

![Data Binding Flow](public/images/data-binding.png)

Angular provides powerful ways to sync data between your logic and the UI:

### 1. Interpolation `{{ }}`

Used to display dynamic data from the component class in the HTML template.

```html
<h1>{{ title }}</h1>
```

### 2. Property Binding `[ ]`

Binds a component property to a DOM element attribute or directive.

```html
<h1 [title]="title"></h1>
<img [src]="imageUrl" />
```

### 3. Event Binding `( )`

Captures user interactions (like clicks) and executes logic in the component.

```html
<button (click)="onSelectUser()">Select User</button>
```

### 4. Getters & Setters in Data Binding

Getters and setters are standard OOP features used to encapsulate logic when reading or writing a property. In Angular, **getters** are incredibly useful for returning computed or dynamic values to the template.

> [!TIP]
> From the template's perspective, a getter is used just like a normal property (no parentheses are needed).

```typescript
export class AppComponent {
  private _userCount = 0;

  // Getter used as a property in HTML
  get userCountDisplay(): string {
    return `Total Users: ${this._userCount}`;
  }
}
```

```html
<!-- No parentheses needed for getters! -->
<h2>{{ userCountDisplay }}</h2>
```

---

## ⚡ Angular Signals & Change Detection

![Angular Signals](public/images/signals.png)

### The Reactive Revolution

Angular uses **Zone.js** by default to detect changes. However, **Signals** (introduced in Angular 16) provide a more granular and efficient way to track state.

> [!NOTE]
> A **Signal** is a "trackable data container" that notifies Angular exactly when its value changes, allowing for targeted UI updates.

#### Working with Signals

```typescript
import { signal, computed } from '@angular/core';

// 1. Initialize
const userName = signal('Ahmed');

// 2. Update (using previous value)
userName.update((prev) => prev + ' Master');

// 3. Set (direct update)
userName.set('Mohamed');

// 4. Computed Signals (read-only, derived state)
const upperName = computed(() => userName().toUpperCase());
```

---

## 🛠️ Advanced Concepts

- [x] **Directives**: Manipulate the DOM structure or behavior.
- [x] **Services**: Encapsulate shared business logic and data.
- [x] **Dependency Injection**: Efficiently provide services to components.
- [x] **Routing**: Manage navigation between views.
- [x] **RxJS**: Handle asynchronous data streams with Observables.
- [x] **HTTP Client**: Seamlessly make API requests.
- [x] **Testing & Deployment**: Finalizing and shipping the app.

---

_Notes inspired by Maximilian Schwarzmüller's Angular Course._
