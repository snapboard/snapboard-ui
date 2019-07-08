import React from 'react'
import styled from '@emotion/styled'
import { VCenter } from '../Position'

const ListContentStyled = styled.div`
  flex: 1 1 auto;
  ${({ fixed }) => fixed ? 'flex-grow: 0; flex-shrink: 0;' : ''}
`

export default function ListContent ({ vcenter, children, ...props }) {
  let childEl = children
  if (vcenter) childEl = <VCenter>{childEl}</VCenter>
  return (
    <ListContentStyled {...props}>
      {childEl}
    </ListContentStyled>
  )
}
