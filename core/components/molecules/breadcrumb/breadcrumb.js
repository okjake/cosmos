import React from 'react'
import PropTypes from 'prop-types'

import BreadcrumbItem from './breadcrumb-item'
import BreadcrumbDropdownNavigation from './breadcrumb-dropdown-navigation'

// Config: # items before collapsing the breadcrumb
const __MAX_ITEMS__ = 4
// Precomputed param for slice operations
const __SLICE_END__ = -1 * (__MAX_ITEMS__ - 1)
// Config: Appended to single items
const __SINGLE_ITEM_PREFIX__ = 'Back to'
// Config: Icon shown for single items
const __SINGLE_ITEM_ICON__ = 'arrow-left-fill'

const Breadcrumb = props => {
  const { items } = props

  // Mapping function
  const createBreadcrumbItem = item => (
    <BreadcrumbItem key={item.pageTitle} {...item} />
  )

  // If there's only one, or parent -> child, render it as <- Back to Page
  if (items.length <= 2) {
    const item = {
      ...items[0],
      icon: __SINGLE_ITEM_ICON__,
      pageTitle: `${__SINGLE_ITEM_PREFIX__} ${items[0].pageTitle}`
    }

    return <Nav>{createBreadcrumbItem(item)}</Nav>
  }

  // Return early if simple breadcrumb
  if (items.length <= __MAX_ITEMS__) {
    return <Nav>{items.map(createBreadcrumbItem)}</Nav>
  }

  // Otherwise, split the items
  const principalItems = items.slice(0, 1)
  const collapsedItems = items.slice(1, __SLICE_END__)
  const secondaryItems = items.slice(__SLICE_END__)

  return (
    <Nav>
      {principalItems.map(createBreadcrumbItem)}
      <BreadcrumbDropdownNavigation items={collapsedItems} />
      {secondaryItems.map(createBreadcrumbItem)}
    </Nav>
  )
}

// Simple wrapper to avoid duplicating markup
const Nav = props => (
  <nav aria-label="breadcrumb">
    <ol>
      {props.children}
    </ol>
  </nav>
)

Breadcrumb.propTypes = {
  /** Array of page link items **/
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** title of page for display */
      pageTitle: PropTypes.string.isRequired,
      /** URL to follow */
      href: PropTypes.string,
      /** specifies where to open the linked document */
      target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
      /** function to be called on click */
      onClick: PropTypes.func
    })
  )
}

Breadcrumb.defaultProps = {
  items: []
}

export default Breadcrumb
