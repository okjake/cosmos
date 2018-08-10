```meta
  category: Navigation
  description: Display breadcrumbs on top of the page
```

`import { Breadcrumb } from '@auth0/breadcrumb'`

---

## Examples

Basic usage

```jsx
  <Breadcrumb items={[
    { href: '/', pageTitle: 'Root' },
    { href: '/parent', pageTitle: 'Parent' },
    { pageTitle: 'Current Page' }
  ]} />
```

Pass a single item to render a _Back to_ link

```jsx
  <Breadcrumb items={[
    { href: '/', pageTitle: 'Applications' }
  ]} />
```

Deep hierarchies will collapse into Dropdown Navigation

```jsx
  <Breadcrumb items={[
    { href: '/', pageTitle: 'Root' },
    { href: '/great-great-grandparent', pageTitle: 'Great Great Grandparent' },
    { href: '/great-grandparent', pageTitle: 'Great Grandparent' },
    { href: '/grandparent', pageTitle: 'Grandparent' },
    { href: '/parent', pageTitle: 'Parent' },
    { title: 'Current Page' }
  ]} />
```

## Usage

1. Using a `Breadcrumb` is optional, only use it if there is a logical hierarchy to display. Don't use it to display history.
2. Place the `Breadcrumb` on top of the main page content 
3. Include the homepage as the first item and the current page as the last item, omitting it's `href` prop