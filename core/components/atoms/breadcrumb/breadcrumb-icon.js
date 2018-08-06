import React from 'react'
import styled from 'styled-components'
import Icon from '../icon'

import { spacing } from '@auth0/cosmos-tokens'

const StyledIcon = styled(Icon)`
  margin-right: ${spacing.xsmall};
  vertical-align: baseline;
  line-height: 1;
`

const BreadcrumbIcon = props => {
  return <StyledIcon size={13} aria-hidden color="grayMedium" {...props} />
}

BreadcrumbIcon.propTypes = Icon.propTypes

export default BreadcrumbIcon
