import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Alert, Link } from '@auth0/cosmos'

const alertForTypes = props => {
  const types = ['default', 'information', 'success', 'warning', 'danger']
  return <Example>{types.map(type => <Alert type={type} {...props} />)}</Example>
}

storiesOf('Alert').add('default', () =>
  alertForTypes({
    children: (
      <span>
        This is the <strong>alert</strong> <Link href="#">content</Link>.
      </span>
    )
  })
)

storiesOf('Alert').add('with string text', () =>
  alertForTypes({
    text: 'This is the alert content'
  })
)

storiesOf('Alert').add('with title', () =>
  alertForTypes({
    title: 'A title',
    children: (
      <span>
        This is the <strong>alert</strong> <Link href="#">content</Link>.
      </span>
    )
  })
)

storiesOf('Alert').add('with title and string text', () =>
  alertForTypes({
    title: 'A title',
    children: 'This is the alert content'
  })
)

storiesOf('Alert').add('with title and link', () =>
  alertForTypes({
    title: 'A title',
    link: '/test',
    children: (
      <span>
        This is the <strong>alert</strong> <Link href="#">content</Link>.
      </span>
    )
  })
)
