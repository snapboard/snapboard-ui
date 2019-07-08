import styled from '@emotion/styled'
import Image from '../Image'

const ListItem = styled.div`
  display: flex;
  padding: 0.5em;
  & ${Image} {
    display: table-cell;
    background-color: transparent;
    margin: 0em;
    vertical-align: middle;
    padding-right: 1em;
    width: 2em;
  }
`

export default ListItem
