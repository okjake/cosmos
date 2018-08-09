import React from 'react'
import { storiesOf } from '@storybook/react'

import { Breadcrumb } from '@auth0/cosmos'

storiesOf('Breadcrumb', module).add('default', () => (
  <Example title="default">
    <Breadcrumb items={[
      { href: '/', pageTitle: 'Home' },
      { href: '/parent', pageTitle: 'Parent' },
      { pageTitle: 'Current Page' }
    ]} />
  </Example>
))
