import PropTypes from 'prop-types'
import Link from '../../atoms/link'
import styled from 'styled-components'

import { colors, spacing, fonts } from '@auth0/cosmos-tokens'

const DropdownNavigationLink = styled(Link)`
  display: block;
  position: relative;
  color: ${colors.dropdown.link};
  padding: ${spacing.xsmall} ${spacing.small};
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};
  
  &:hover,
  &:focus {
    color: ${colors.dropdown.linkHover};
    background-color: ${colors.dropdown.linkBackgroundHover};
  }
`

DropdownNavigationLink.propTypes = {
  ...Link.propTypes,
  /** page title **/
  pageTitle: PropTypes.string.isRequired
}


export default DropdownNavigationLink