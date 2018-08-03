import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Breadcrumb } from '@auth0/cosmos'
import { MemoryRouter, Link as ReactRouterLink } from 'react-router-dom'

storiesOf('Breadcrumb').add('default', () => (
  <Example title="default">
    <Breadcrumb>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
      <Breadcrumb.Link>Current Page</Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb').add('with icon', () => (
  <Example title="with icon">
    <Breadcrumb>
      <Breadcrumb.Link href="/" icon="home-fill">
        Home
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
      <Breadcrumb.Link>Current Page</Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb').add('single link', () => (
  <Example title="single link">
    <Breadcrumb>
      <Breadcrumb.Link href="/" icon="arrow-left-fill">
        Back to Applications
      </Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb').add('advanced', () => (
  <Example title="advanced">
    <MemoryRouter>
      <Breadcrumb>
        <Breadcrumb.Item>
          <ReactRouterLink to="/">
            <Breadcrumb.Icon name="home-fill" />
            Home
          </ReactRouterLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <ReactRouterLink to="/parent">Parent</ReactRouterLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>Current Page</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </MemoryRouter>
  </Example>
))