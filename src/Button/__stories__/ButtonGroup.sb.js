import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Button, { ButtonGroup } from '../'

const Container = styled.div`& > div { display: block; margin-bottom: 1em; }`

storiesOf('Components/Button', module)
  .add('Button Group', () => (
    <Container>
      <ButtonGroup>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
        <Button>Btn 3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Btn 1</Button>
      </ButtonGroup>
    </Container>
  ))
