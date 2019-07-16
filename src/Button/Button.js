import styled from '@emotion/styled'
import color from 'color'
import theme from '../themes/default'
import { mergeThemes } from '../util/ui'

const blockProp = props => props.block && 'width: 100%;'
const disabledProp = props => props.disabled && `
  cursor: default;
  opacity: 0.6;
  background: #f3f3f3;
  color: #777;
  &:hover {
    color: #777;
  }
`

const colorProp = props => {
  const colors = mergeThemes(theme, props.theme, 'colors')
  const base = props.color ? colors[props.color] || props.color : colors.primary
  const active = props.active ? `
    background-color: ${color(base).darken(0.15)};
  ` : ''
  if (props.primary) {
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
  return `
    color: ${props.faded ? '#999' : base};
    border: 1px solid #eee;
    &:hover {
      background-color: #f8f8f8;
      color: ${base};
    }
    &:active {
      background-color: #f3f3f3;
      color: ${base};
    }
  `
}

const minimalProp = props => props.minimal && `
  border: 1px solid transparent;
`

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
  xs: `
    padding: .15rem .4rem;
    font-size: .75em;
    line-height: 1.3;
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 
  "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
  "Helvetica Neue", sans-serif;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  background-color: #fff;
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
  ${minimalProp}
`

export default Button
