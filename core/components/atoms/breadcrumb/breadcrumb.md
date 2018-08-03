```meta
  category: Navigation
  description: A breadcrumb helps the user navigate and identify the hierarchy of page within the application.
```

`import { Breadcrumb } from '@auth0/breadcrumb'`

---

```jsx
<Breadcrumb>
  <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/page">Page</Breadcrumb.Link>
</Breadcrumb>
```

Basic usage

```jsx
<Breadcrumb>
  <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link>Current Page</Breadcrumb.Link>
</Breadcrumb>
```

### With home icon

Option to add a home icon to the first link to mark it as the home or root page.

```jsx
<Breadcrumb>
  <Breadcrumb.Link href="/" icon="home-fill">
    Home
  </Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link>Current Page</Breadcrumb.Link>
</Breadcrumb>
```

### Using a ‘Back to parent’ link

Used when there is a single navigation level on detail pages. It provides a shortcut back to the parent index/list page from the detail page. For example: it can be used on a User detail page to go back to the Users list page. The link displays the name of the parent section: “Users”, “Applications”.

```jsx
<Breadcrumb>
  <Breadcrumb.Link href="/" icon="arrow-left-fill">
    Back to Applications
  </Breadcrumb.Link>
</Breadcrumb>
```

If you need more control use `Breadcrumb.Item` to wrap any component that renders an anchor tag

This allows you to use components like `Link` from `react-router-dom`


```jsx
<Breadcrumb>
  <Breadcrumb.Item>
    <a href="/">
      <Breadcrumb.Icon name="home-fill" />
      Home
    </a>
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    <a href="/parent">Parent</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    <a>Current Page</a>
  </Breadcrumb.Item>
</Breadcrumb>
```


## Usage

1. Using a `Breadcrumb` is optional, only use it if there is a logical hierarchy to display. Don't use it to display history.
2. Place the `Breadcrumb` on top of the main page content 
3. Include the homepage as the first item and the current page as the last item, omitting it's `href` prop