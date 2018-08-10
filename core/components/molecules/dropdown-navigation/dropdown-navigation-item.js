import React from 'react'
import styled from 'styled-components'

import { colors } from '@auth0/cosmos-tokens'
import DropdownNavigationLink from './dropdown-navigation-link'

const DropdownNavigationItemContainer = styled.li`
  &:hover {
    background-color: ${colors.dropdown.linkBackgroundHover};
  }
`

const DropdownNavigationItem = props => (
  <DropdownNavigationItemContainer>
    <DropdownNavigationLink {...props}>
      {props.pageTitle}
    </DropdownNavigationLink>
  </DropdownNavigationItemContainer>
)

DropdownNavigationItem.propTypes = DropdownNavigationLink.propTypes

export default DropdownNavigationItem