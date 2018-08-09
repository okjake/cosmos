import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Breadcrumb } from '@auth0/cosmos'

storiesOf('Breadcrumb', module).add('single item', () => (
  <Example title="single item">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Applications' }
    ]} />
  </Example>
))

storiesOf('Breadcrumb', module).add('two items', () => (
  <Example title="two items">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Home' },
      { pageTitle: 'Current Page' }
    ]} />
  </Example>
))

storiesOf('Breadcrumb', module).add('three items', () => (
  <Example title="three items">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Home' },
      { href: '/parent', pageTitle: 'Parent' },
      { pageTitle: 'Current Page' }
    ]} />
  </Example>
))

storiesOf('Breadcrumb', module).add('four items', () => (
  <Example title="four items">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Home' },
      { href: '/grandparent', pageTitle: 'Grandparent' },
      { href: '/parent', pageTitle: 'Parent' },
      { pageTitle: 'Current Page' }
    ]} />
  </Example>
))


storiesOf('Breadcrumb', module).add('five items', () => (
  <Example title="five items">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Home' },
      { href: '/great-grandparent', pageTitle: 'Great Grandparent' },
      { href: '/grandparent', pageTitle: 'Grandparent' },
      { href: '/parent', pageTitle: 'Parent' },
      { pageTitle: 'Current Page' }
    ]} />
  </Example>
))

storiesOf('Breadcrumb', module).add('more than five items', () => (
  <Example title="more than five items">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Home' },
      { href: '/great-great-grandparent', pageTitle: 'Great Great Grandparent' },
      { href: '/great-grandparent', pageTitle: 'Great Grandparent' },
      { href: '/grandparent', pageTitle: 'Grandparent' },
      { href: '/parent', pageTitle: 'Parent' },
      { pageTitle: 'Current Page' }
    ]} />
  </Example>
))