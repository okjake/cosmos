import React from 'react'
import styled from 'styled-components'
import Icon from '../icon'

const StyledIcon = styled(Icon)`
  margin-right: 12px;
  vertical-align: bottom;
  margin-bottom: 0.28rem;
`

const BreadcrumbIcon = props => {
  return <StyledIcon size={13} aria-hidden color="grayMedium" {...props} />
}

BreadcrumbIcon.propTypes = Icon.propTypes

export default BreadcrumbIcon
