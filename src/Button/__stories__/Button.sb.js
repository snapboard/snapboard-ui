import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import Button from '../'

const Container = styled.div`& > button { display: block; margin-bottom: 1em; }`
const theme = {
  colors: {
    primary: 'red',
  },
}

storiesOf('Components/Button', module)
  .add('Colors', () => (
    <Container>
      <Button>Default</Button>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='success'>Success</Button>
      <Button color='info'>Info</Button>
      <Button color='warning'>Warning</Button>
      <Button color='danger'>Danger</Button>
    </Container>
  ))

  .add('Block', () => (
    <Container>
      <Button block>Default</Button>
      <Button block color='primary'>Primary</Button>
      <Button block color='secondary'>Secondary</Button>
      <Button block color='success'>Success</Button>
      <Button block color='info'>Info</Button>
      <Button block color='warning'>Warning</Button>
      <Button block color='danger'>Danger</Button>
    </Container>
  ))

  .add('Size', () => (
    <Container>
      <Button>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium</Button>
      <Button size='sm'>small</Button>
    </Container>
  ))

  .add('Disabled', () => (
    <Container>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </Container>
  ))

  .add('Caret', () => (
    <Container>
      <Button caret size='lg'>Disabled</Button>
      <Button caret>Default</Button>
      <Button caret size='sm'>Disabled</Button>
    </Container>
  ))

  .add('Themed', () => (
    <ThemeProvider theme={theme}>
      <Container>
        <Button>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='success'>Success</Button>
        <Button color='info'>Info</Button>
        <Button color='warning'>Warning</Button>
        <Button color='danger'>Danger</Button>
      </Container>
    </ThemeProvider>
  ))
