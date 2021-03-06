import React from 'react'
import styled from '@emotion/styled'
import map from 'lodash/map'
import ListItem from './ListItem'
// import ListContent from './ListContent'

const celledOrDivided = ({ celled, divided }) => {
  if (!celled && !divided) return ''
  const defaultStyle = `
    & > ${ListItem} {
      border-top: 1px solid rgba(34,36,38,.15);
    }
  `

  if (divided) {
    return `
      ${defaultStyle}
      & > ${ListItem}:first-child {
        border-top: 0;
      }
    `
  }

  return `
    ${defaultStyle}
    & > ${ListItem}:last-child {
      border-bottom: 1px solid rgba(34,36,38,.15);
    }
  `
}

const selection = ({ selection }) => {
  if (!selection) return ''
  return `
    & > ${ListItem} {
      cursor: pointer;
      &:hover {
        background: #fafafa;
      }
      &:active {
        background: #f1f1f1;
      }
    }
  `
}

const relaxed = ({ relaxed }) => {
  if (!relaxed) return ''
  return `
    & > ${ListItem} {
      padding: 1em;
    }
  `
}

const StyledList = styled.div`
  ${celledOrDivided}
  ${relaxed}
  ${selection}
`

export default function List ({ data, children, ...props }) {
  let childEl = children
  if (data) {
    childEl = map(data, ({ title, subtitle, image, button }) => {
      return (
        <ListItem>{title}</ListItem>
      )
    })
  }
  return (
    <StyledList {...props}>
      {childEl}
    </StyledList>
  )
}
