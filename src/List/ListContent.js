import styled from '@emotion/styled'

const ListContent = styled.div`
  flex: 1 1 auto;
  ${({ fixed }) => fixed ? 'flex-grow: 0; flex-shrink: 0;' : ''}
`

export default ListContent
