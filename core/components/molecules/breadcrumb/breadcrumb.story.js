import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Breadcrumb } from '@auth0/cosmos'

storiesOf('Breadcrumb', module).add('single item', () => (
    <Example title="single item">
        <Breadcrumb items={[
            { href: '/', pageTitle: 'Root' }
        ]} />
    </Example>
))

storiesOf('Breadcrumb', module).add('parent + current page', () => (
    <Example title="parent + current page">
        <Breadcrumb items={[
            { href: '/', pageTitle: 'Root' },
            { pageTitle: 'Current Page' }
        ]} />
    </Example>
))

storiesOf('Breadcrumb', module).add('three items', () => (
    <Example title="three items">
        <Breadcrumb items={[
            { href: '/', pageTitle: 'Root' },
            { href: '/p', pageTitle: 'Parent' },
            { pageTitle: 'Current Page' }
        ]} />
    </Example>
))

storiesOf('Breadcrumb', module).add('four items', () => (
    <Example title="four items">
        <Breadcrumb items={[
            { href: '/', pageTitle: 'Root' },
            { href: '/gp', pageTitle: 'Grandparent' },
            { href: '/gp/p', pageTitle: 'Parent' },
            { pageTitle: 'Current Page' }
        ]} />
    </Example>
))


storiesOf('Breadcrumb', module).add('five items', () => (
    <Example title="five items">
        <Breadcrumb items={[
            { href: '/', pageTitle: 'Root' },
            { href: '/ggp', pageTitle: 'Great Grandparent' },
            { href: '/ggp/gp', pageTitle: 'Grandparent' },
            { href: '/ggp/gp/p', pageTitle: 'Parent' },
            { pageTitle: 'Current Page' }
        ]} />
    </Example>
))

storiesOf('Breadcrumb', module).add('more than five items', () => (
    <Example title="more than five items">
        <Breadcrumb items={[
            { href: '/', pageTitle: 'Root' },
            { href: '/gggp', pageTitle: 'Great Great Grandparent' },
            { href: '/gggp/ggp', pageTitle: 'Great Grandparent' },
            { href: '/gggp/ggp/gp', pageTitle: 'Grandparent' },
            { href: '/gggp/ggp/gp/p', pageTitle: 'Parent' },
            { pageTitle: 'Current Page' }
        ]} />
    </Example>
))