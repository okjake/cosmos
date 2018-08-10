import styled from 'styled-components'
import { spacing } from '@auth0/cosmos-tokens'

import Icon from '../../atoms/icon'

const BreadcrumbIcon = styled(Icon)`
  margin-right: ${spacing.xsmall};
  vertical-align: baseline;
  line-height: 1;
`

BreadcrumbIcon.propTypes = Icon.propTypes

export default BreadcrumbIcon