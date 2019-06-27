import styled from '@emotion/styled'
import theme from '../themes/default'
import { mergeThemes } from '../util/ui'

const colorProp = props => {
  const colors = mergeThemes(theme, props.theme, 'colors')
  if (props.color === 'light') {
    return `
      background-color: ${colors.gray200};
      color: ${colors.gray600};
    `
  }
  const base = props.color ? colors[props.color] || props.color : colors.primary
  return `
    background-color: ${base};
  `
}

const pillProp = props => props.pill && `
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
`

const sizeProp = props => ({
  lg: `
    padding: .5rem 0.5rem;
    font-size: 100%;
    border-radius: .3rem;
  `,
  sm: `
    padding: .25rem .5rem;
    font-size: 70%;
    border-radius: .2rem;
  `,
}[props.size])

const Badge = styled.span`
  display: inline-block;
  padding: .5em .4em;
  color: #fff;
  font-size: 80%;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  :empty {
    display: none;
  }
  ${colorProp}
  ${sizeProp}
  ${pillProp}
`

export default Badge
