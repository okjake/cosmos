import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing, fonts, colors } from '@auth0/cosmos-tokens'
import Icon from '../icon'

// Component responsible for rendering it's children
// with breadcrumb styles to allow different link
// implementations to be used, eg react-router

const BreadcrumbItem = styled.li`
  display: inline-block;
  white-space: nowrap;
  
  &:not(:last-child)::after {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    width: ${fonts.size.small};
    height: ${fonts.size.small};
    margin: 0 ${spacing.small};
    mask: ${Icon.getDataUrl('chevron-right-fill', 12)};
    background-color: ${colors.breadcrumb.separator};
  }

  a {
    text-decoration: none;
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.medium};
    color: ${colors.breadcrumb.link};

    &:hover {
      color: ${colors.breadcrumb.linkHover};
    }

    &:hover svg path {
      fill: ${colors.breadcrumb.linkHover};
    }

    &:not([href]) {
      color: ${colors.breadcrumb.current};
    }
  }
`

BreadcrumbItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default BreadcrumbItem
