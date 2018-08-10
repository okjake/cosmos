import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '@auth0/cosmos-tokens'
import { icons } from './icons.json'

import { renderToStaticMarkup } from 'react-dom/server'

const Icon = props => (
  <Icon.Element {...props}>
    <Icon.Image {...props} />
  </Icon.Element>
)

Icon.Image = props => {
  // If the icon name isn't found, show a question mark instead.
  const icon = icons[props.name] || icons.help

  // Use an color name from tokens, fallback to hexcode (without validation)
  const color = colors.base[props.color] || props.color

  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon.paths.map((path, index) => <path key={index} d={path} />)}
    </Svg>
  )
}

Icon.getDataUrl = (name, size) => {
  const image = <Icon.Image name={name} size={size} />
  const svg = renderToStaticMarkup(image)
  const escapedSvg = svg.replace(/"/g, "'")
  return `url("data:image/svg+xml;utf-8, ${escapedSvg}")`
}

Icon.Element = styled.i`
  display: inline-block;
  vertical-align: middle;
  line-height: 1
`

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  path {
    fill: ${props => props.color};
  }
`

const __ICONNAMES__ = Object.keys(icons)
const __COLORS__ = Object.keys(colors.base)

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.oneOf(__ICONNAMES__).isRequired,
  /** Icon size */
  size: PropTypes.number,
  /** Icon foreground color */
  color: PropTypes.oneOf(__COLORS__)
}

Icon.defaultProps = {
  size: 20,
  color: 'default'
}

export default Icon
export { __ICONNAMES__ }
