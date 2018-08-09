import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacing, fonts, colors } from '@auth0/cosmos-tokens'

import Link from '../../atoms/link'
import Icon from '../../atoms/icon'

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

const BreadcrumbItemLink = styled(Link)`
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
`

const BreadcrumbItemIcon = styled(Icon)`
  margin-right: ${spacing.xsmall};
  vertical-align: baseline;
  line-height: 1;
`

const BreadcrumbItem = props => (
  <BreadcrumbItemContainer>
    <BreadcrumbItemLink {...props}>
      {props.icon && (
        <BreadcrumbItemIcon name={props.icon} size={13} aria-hidden color="grayMedium" />
      )}
      {props.pageTitle}
    </BreadcrumbItemLink>
  </BreadcrumbItemContainer >
)

BreadcrumbItem.propTypes = {
  ...Link.propTypes,
  /** name of an icon to use **/
  icon: PropTypes.string,
  /** page title **/
  pageTitle: PropTypes.string.isRequired
}

export default BreadcrumbItem
export { BreadcrumbItemContainer, BreadcrumbItemLink }