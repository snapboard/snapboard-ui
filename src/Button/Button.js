import styled from '@emotion/styled'
import color from 'color'
import theme from '../themes/default'
import { mergeThemes } from '../util/ui'

const blockProp = props => props.block && 'width: 100%;'
const disabledProp = props => props.disabled && `
  cursor: default;
  opacity: 0.6;
`

const colorProp = props => {
  const colors = mergeThemes(theme, props.theme, 'colors')
  const base = props.color ? colors[props.color] || props.color : colors.primary
  const active = props.active ? `
    background-color: ${color(base).darken(0.15)};
  ` : ''
  return `
    background-color: ${base};
    &:hover {
      background-color: ${color(base).darken(0.07)};
    }
    &:active {
      background-color: ${color(base).darken(0.15)};
    }
    ${active}
  `
}

const sizeProp = props => ({
  lg: `
    padding: .5rem 1rem;
    font-size: 1.25em;
    line-height: 1.5;
    border-radius: .3rem;
  `,
  sm: `
    padding: .25rem .5rem;
    font-size: .875em;
    line-height: 1.5;
    border-radius: .2rem;
  `,
}[props.size])

const caretProp = props => props.caret && `
  ::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .4em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }
`

/**
* @render react
* @name Button
* @example
* <Button>Test</Button>
*/
const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1em;
  line-height: 1.5;
  border-radius: .25rem;
  outline: none;
  cursor: pointer;
  margin-bottom: 0;
  color: #fff;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
  ${colorProp}
  ${sizeProp}
  ${blockProp}
  ${disabledProp}
  ${caretProp}
`

export default Button
