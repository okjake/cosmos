import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, spacing, fonts } from '@auth0/cosmos-tokens'

import Link from '../../atoms/link'

const DropdownNavigationListItem = styled.li`
  &:hover {
    background-color: ${colors.dropdown.linkBackgroundHover};
  }
`

const DropdownNavigationLink = styled(Link)`
  padding: ${spacing.xsmall} ${spacing.small};
  display: block;
  color: ${colors.dropdown.link};
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};
  &:hover {
    color: ${colors.dropdown.linkHover};
    background-color: ${colors.dropdown.linkBackgroundHover};
  }
`

const DropdownNavigationItem = props => (
  <DropdownNavigationListItem>
    <DropdownNavigationLink {...props}>
      {props.pageTitle}
    </DropdownNavigationLink>
  </DropdownNavigationListItem>
)

DropdownNavigationItem.propTypes = {
  ...Link.propTypes,
  /** page title **/
  pageTitle: PropTypes.string.isRequired
}

export default DropdownNavigationItem