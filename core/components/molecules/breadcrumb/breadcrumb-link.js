import styled from 'styled-components'
import { fonts, colors } from '@auth0/cosmos-tokens'

import Link from '../../atoms/link'

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};
  color: ${colors.breadcrumb.link};

  &:hover,
  &:focus {
    color: ${colors.breadcrumb.linkHover};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${colors.breadcrumb.linkHover};
  }

  &:not([href]) {
    color: ${colors.breadcrumb.current};
  }
`

BreadcrumbLink.propTypes = Link.propTypes

export default BreadcrumbLink