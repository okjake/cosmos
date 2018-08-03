import React from 'react'
import PropTypes from 'prop-types'

import Link from '../link'
import BreadcrumbItem from './breadcrumb-item'
import BreadcrumbIcon from './breadcrumb-icon'

const BreadcrumbLink = props => {
  const children = React.Children.toArray(props.children)
  props.icon && children.unshift(<BreadcrumbIcon key="icon" name={props.icon} />)

  return (
    <BreadcrumbItem>
      <Link {...props}>
        {children}
      </Link>
    </BreadcrumbItem>
  )
}

BreadcrumbLink.propTypes = {
  icon: PropTypes.string,
  ...Link.propTypes
}

export default BreadcrumbLink
