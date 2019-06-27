import styled from '@emotion/styled'
import Button from './Button'

const ButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  ${Button} {
    flex: 0 1 auto;
    position: relative;
    &:first-child {
      margin-left: 0;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`

export default ButtonGroup
