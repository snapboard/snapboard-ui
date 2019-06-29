import React from 'react'
import styled from '@emotion/styled'
import Center from '../Center'

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 3px;
  background: #fff;
  scroll: auto;
`

function Card ({ children, width, height }) {
  return (
    <Center width={width} height={height}>
      <Container>
        {children}
      </Container>
    </Center>
  )
}

export default Card
