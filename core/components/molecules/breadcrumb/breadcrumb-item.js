import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacing, fonts, colors } from '@auth0/cosmos-tokens'

import Icon from '../../atoms/icon';
import BreadcrumbLink from './breadcrumb-link'
import BreadcrumbIcon from './breadcrumb-icon'

const BreadcrumbItemContainer = styled.li`
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
`

const BreadcrumbItem = props => (
  <BreadcrumbItemContainer>
    <BreadcrumbLink {...props}>
      {props.icon && (
        <BreadcrumbIcon name={props.icon} size={13} aria-hidden color="grayMedium" />
      )}
      {props.pageTitle}
    </BreadcrumbLink>
  </BreadcrumbItemContainer >
)

BreadcrumbItem.propTypes = {
  ...BreadcrumbLink.propTypes,
  /** name of an icon to use **/
  icon: PropTypes.string,
  /** page title **/
  pageTitle: PropTypes.string.isRequired
}

export default BreadcrumbItem
export { BreadcrumbItemContainer }