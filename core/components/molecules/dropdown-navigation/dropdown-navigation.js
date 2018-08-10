import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import DropdownNavigationItem from './dropdown-navigation-item'
import { colors, misc, spacing } from '@auth0/cosmos-tokens';

/*
  Menu is the outer wrapper for our component
  responsible for setting the rounded corners
  and drop shadow.

  We add the disclosure triangle as a pseudo
  element, it's a square rotated 45 degrees
  that sits above the Menu and below the List

  The 'hide' logic here is preferable to using
  display: none or visibility: hidden because
  this way they receive focus as though visible
  https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
*/
const DropdownNavigationMenu = styled.div`
  position: absolute;
  background: ${colors.dropdown.background};
  margin-top: ${spacing.small};
  margin-left: -${spacing.medium};
  box-shadow: 0 0 ${spacing.xsmall} ${colors.dropdown.shadow};
  border-radius: ${misc.radius};
  padding: ${spacing.xxsmall} 0;

  ${props => !props.open && `
    overflow: hidden;
    clip: rect(0 0 0 0); 
    height: 1px;
    width: 1px; 
    margin: -1px; 
  `}

  &::before {
    content: '';
    position: absolute;
    top: -${spacing.xsmall};
    left: ${spacing.medium};
    background-color: ${colors.dropdown.background};
    padding: ${spacing.xsmall};
    transform: rotate(45deg);
    box-shadow: -${spacing.xxsmall} -${spacing.xxsmall} ${spacing.xxsmall} rgba(0, 0, 0, 0.05);
  }
`

/*
  Ordered list to contain dropdown navigation links
  The order of links is reversed using flexbox to maintain
  the correct semantic order in the DOM

  The empty transform is necessary to create a new stacking
  context and sandbox the z-index changes in the child items
*/
const DropdownNavigationList = styled.ol`
  background: ${colors.dropdown.background};
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  transform: translate(0);
`

/*
  Styles for displaying the dropdown trigger element
  Will not need to be included in a generic dropdown
*/
const DropdownNavigationWrapper = styled.div`
  display: inline-block;
  cursor: pointer;

  & > a {
    color: ${colors.breadcrumb.link}
  }
  & > a:hover {
    color: ${colors.breadcrumb.linkHover}
  }
`

class DropdownNavigation extends Component {
  constructor() {
    super();
    this.state = { open: false }

    this.menuRef = React.createRef()
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleTriggerClick = this.handleTriggerClick.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick)
  }

  // Logic to dismiss the menu on click outside
  handleDocumentClick(event) {
    if (this.state.open && !this.menuRef.current.contains(event.target)) {
      this.setState({ open: false })
    }
  }

  handleTriggerClick() {
    this.setState({ open: !this.state.open });
  }

  handleFocus() {
    this.setState({ open: true })
  }

  handleBlur() {
    this.setState({ open: false })
  }

  render() {
    const { items, trigger } = this.props;

    return (
      <DropdownNavigationWrapper innerRef={this.menuRef}>
        <a tabIndex={-1} onClick={this.handleTriggerClick}>{trigger}</a>

        <DropdownNavigationMenu
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          open={this.state.open}>

          <DropdownNavigationList role="menu">
            {items.map(item => (
              <DropdownNavigationItem key={item.href} {...item} />
            ))}
          </DropdownNavigationList>

        </DropdownNavigationMenu>
      </DropdownNavigationWrapper>
    )
  }
}

DropdownNavigation.defaultProps = {
  trigger: 'Menu'
}

DropdownNavigation.propTypes = {
  /** string or component to trigger the dropdown **/
  trigger: PropTypes.node,

  /** array of Links **/
  items: PropTypes.arrayOf(
    PropTypes.shape(
      DropdownNavigationItem.propTypes
    )
  )
}

export default DropdownNavigation