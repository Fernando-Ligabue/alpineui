# Input

Form input component with validation, icons, and various states.

## Installation

```bash
npx alpineui add input
```

Or copy and paste the code from below.

## Basic Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script defer src="https://unpkg.com/@Fernando-Ligabue/input"></script>
<link rel="stylesheet" href="https://unpkg.com/@Fernando-Ligabue/input/styles.css">
```

## Input Types

Support for all HTML input types:

```html
<!-- Text -->
<input x-data="input" type="text" class="au-input au-input-md" placeholder="Enter text..." />

<!-- Email -->
<input x-data="input" type="email" class="au-input au-input-md" placeholder="email@example.com" />

<!-- Password -->
<input x-data="input" type="password" class="au-input au-input-md" placeholder="Enter password..." />

<!-- Number -->
<input x-data="input" type="number" class="au-input au-input-md" placeholder="0" />

<!-- Search -->
<input x-data="input" type="search" class="au-input au-input-md" placeholder="Search..." />

<!-- URL -->
<input x-data="input" type="url" class="au-input au-input-md" placeholder="https://example.com" />
```

## Sizes

Three sizes are available:

```html
<!-- Small -->
<input x-data="input" type="text" class="au-input au-input-sm" placeholder="Small" />

<!-- Medium (default) -->
<input x-data="input" type="text" class="au-input au-input-md" placeholder="Medium" />

<!-- Large -->
<input x-data="input" type="text" class="au-input au-input-lg" placeholder="Large" />
```

## With Icons

Add icons to the left or right of the input:

```html
<!-- With left icon -->
<div class="au-input-wrapper">
  <span class="au-input-icon au-input-icon-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  </span>
  <input x-data="input" type="search" class="au-input au-input-md au-input-icon-left" placeholder="Search..." />
</div>

<!-- With right icon -->
<div class="au-input-wrapper">
  <input x-data="input" type="email" class="au-input au-input-md au-input-icon-right" placeholder="email@example.com" />
  <span class="au-input-icon au-input-icon-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  </span>
</div>
```

## Validation States

The input component includes built-in validation:

```html
<!-- Required -->
<div class="au-field">
  <label class="au-label au-label-required">Required Field</label>
  <input x-data="input" type="text" class="au-input au-input-md" required />
  <span class="au-input-helper">This field is required</span>
</div>

<!-- With Error -->
<div class="au-field">
  <label class="au-label">Email</label>
  <input x-data="input" type="email" class="au-input au-input-md au-input-error" />
  <span class="au-input-error-message">Please enter a valid email</span>
</div>

<!-- Success State -->
<div class="au-field">
  <label class="au-label">Username</label>
  <input x-data="input" type="text" class="au-input au-input-md au-input-success" value="johndoe" />
  <span class="au-input-success-message">Username is available!</span>
</div>

<!-- Disabled -->
<input x-data="input" type="text" class="au-input au-input-md" value="Disabled" disabled />

<!-- Readonly -->
<input x-data="input" type="text" class="au-input au-input-md" value="Readonly" readonly />
```

## Textarea

For multi-line text input:

```html
<div class="au-field">
  <label class="au-label">Message</label>
  <textarea x-data="input" class="au-textarea au-textarea-md" rows="4" placeholder="Enter your message..."></textarea>
  <span class="au-input-helper">Max 500 characters</span>
</div>
```

## Input with Addons

Prefix or suffix text to your input:

```html
<!-- URL with https:// prefix -->
<div class="au-input-wrapper au-input-with-addon-left">
  <span class="au-input-addon au-input-addon-left">https://</span>
  <input x-data="input" type="url" class="au-input au-input-md" placeholder="website.com" />
</div>

<!-- Email username with domain suffix -->
<div class="au-input-wrapper au-input-with-addon-right">
  <input x-data="input" type="text" class="au-input au-input-md" placeholder="username" />
  <span class="au-input-addon au-input-addon-right">@example.com</span>
</div>
```

## Input Group

A radio-style group for selecting options:

```html
<div x-data="inputGroup">
  <div class="au-input-group">
    <button 
      type="button" 
      class="au-input-group-item"
      :class="{ 'au-input-group-item-active': selectedValue === 'week' }"
      @click="select('week')"
    >Week</button>
    <button 
      type="button" 
      class="au-input-group-item"
      :class="{ 'au-input-group-item-active': selectedValue === 'month' }"
      @click="select('month')"
    >Month</button>
    <button 
      type="button" 
      class="au-input-group-item"
      :class="{ 'au-input-group-item-active': selectedValue === 'year' }"
      @click="select('year')"
    >Year</button>
  </div>
  <p>Selected: <span x-text="selectedValue"></span></p>
</div>
```

## CSS Classes Reference

### Sizes

| Class | Description |
|-------|-------------|
| `.au-input-sm` | Small size (height: 2rem) |
| `.au-input-md` | Medium size (default, height: 2.5rem) |
| `.au-input-lg` | Large size (height: 3rem) |

### States

| Class | Description |
|-------|-------------|
| `.au-input-error` | Error state (red border) |
| `.au-input-success` | Success state (green border) |
| `.au-input-icon-left` | Input with left icon |
| `.au-input-icon-right` | Input with right icon |

### Textarea

| Class | Description |
|-------|-------------|
| `.au-textarea` | Base textarea |
| `.au-textarea-sm` | Small textarea |
| `.au-textarea-md` | Medium textarea |
| `.au-textarea-lg` | Large textarea |

### Helpers

| Class | Description |
|-------|-------------|
| `.au-field` | Container for label + input + helper |
| `.au-label` | Label text |
| `.au-label-required` | Required field indicator |
| `.au-input-helper` | Helper text |
| `.au-input-error-message` | Error message |
| `.au-input-success-message` | Success message |
| `.au-input-counter` | Character counter |

## Built-in Validation

The input component validates:

- `required` - Required fields
- `minlength` / `maxlength` - Text length
- `email` - Email format
- `url` - URL format
- `min` / `max` - Number range
- `pattern` - Custom regex pattern

## CSS Variables

```css
:root {
  --au-background: #ffffff;
  --au-foreground: #0a0a0a;
  --au-border: #e5e5e5;
  --au-ring: #0a0a0a;
  --au-ring-alpha: rgba(10, 10, 10, 0.1);
  --au-radius: 0.5rem;
  --au-destructive: #ef4444;
}
```
