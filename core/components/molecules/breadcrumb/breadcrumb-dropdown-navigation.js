import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BreadcrumbItemContainer } from './breadcrumb-item'
import BreadcrumbLink from './breadcrumb-link'
import DropdownNavigation from '../../molecules/dropdown-navigation'
import { fonts } from '@auth0/cosmos-tokens'

/*
  Defines the disclosure trigger for use in a breadcrumb
  These are specific values for making the ellipsis
  utf-8 character display as desired
*/
const DropdownTrigger = styled.span`
  font-size: 16px;
  line-height: 0;
  vertical-align: middle;
  font-weight: bold;
  padding: 0 ${fonts.size.small};
  margin: 0 -${fonts.size.small};
`

const BreadcrumbDropdownNavigation = props => {
  // Build the DropdownNavigation
  const trigger = <DropdownTrigger>⋯</DropdownTrigger>

  return (
    <BreadcrumbItemContainer key="_dropdown-navigation">
      <DropdownNavigation trigger={trigger} items={props.items} />
    </BreadcrumbItemContainer>
  )
}

BreadcrumbDropdownNavigation.propTypes = {
  /** Array of page link items **/
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...BreadcrumbLink.propTypes,
      pageTitle: PropTypes.string.isRequired
    })
  )
}

export default BreadcrumbDropdownNavigation