import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = props => (
  <nav aria-label="breadcrumb">
    <ol>
      {props.children}
    </ol>
  </nav>
)

Breadcrumb.propTypes = {
  /** One or more Breadcrumb.Link or Breadcrumb.Item components */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default Breadcrumb
