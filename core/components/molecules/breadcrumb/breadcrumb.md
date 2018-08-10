```meta
  category: Navigation
  description: Display breadcrumbs on top of the page
```

`import { Breadcrumb } from '@auth0/breadcrumb'`

---



## Usage

A breadcrumb is a hierarchical representation of the page within the application. Breadcrumbs provide a trail for the user to follow back to the starting or entry point.

- The breadcrumb is displayed as single horizontal line.
- Using this component is optional: it only makes sense when there is a hierarchy of pages to display.
- The last item of the breadcrumb indicates the current page and it’s not clickable.


## Examples

### Simple Breadcrumb

Used when the page is part of more than two levels in navigation.

```jsx
  <Breadcrumb items={[
    { href: '/', pageTitle: 'Root' },
    { href: '/parent', pageTitle: 'Parent' },
    { pageTitle: 'Current Page' }
  ]} />
```

### Back to Parent

Used when there is a single navigation level on detail pages. It provides a shortcut back to the parent index/list page from the detail page. For example: it can be used on a User detail page to go back to the Users list page. The link displays the name of the parent section: “Users”, “Applications”.

```jsx
  <Breadcrumb items={[
    { href: '/', pageTitle: 'Applications' },
    { pageTitle: 'Current Page' }
  ]} />
```

### Collapsed Breadcrumb

When pages are deeply nested, the Breadcrumb collapses into an accessible Dropdown menu automatically.

```jsx
  <Breadcrumb items={[
    { href: '/', pageTitle: 'Root' },
    { href: '/path', pageTitle: 'Great Great Grandparent' },
    { href: '/path/to', pageTitle: 'Great Grandparent' },
    { href: '/path/to/the', pageTitle: 'Grandparent' },
    { href: '/path/to/the/parent', pageTitle: 'Parent' },
    { pageTitle: 'Current Page' }
  ]} />
```