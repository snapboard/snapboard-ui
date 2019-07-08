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

  .add('Primary', () => (
    <Container>
      <Button primary>Default</Button>
      <Button primary color='primary'>Primary</Button>
      <Button primary color='secondary'>Secondary</Button>
      <Button primary color='success'>Success</Button>
      <Button primary color='info'>Info</Button>
      <Button primary color='warning'>Warning</Button>
      <Button primary color='danger'>Danger</Button>
    </Container>
  ))

  .add('Minimal', () => (
    <Container>
      <Button minimal>Default</Button>
      <Button minimal color='primary'>Primary</Button>
      <Button minimal color='secondary'>Secondary</Button>
      <Button minimal color='success'>Success</Button>
      <Button minimal color='info'>Info</Button>
      <Button minimal color='warning'>Warning</Button>
      <Button minimal color='danger'>Danger</Button>
    </Container>
  ))

  .add('Faded', () => (
    <Container>
      <Button faded>Default</Button>
      <Button faded minimal>Default</Button>
      <Button faded color='primary'>Primary</Button>
      <Button faded color='secondary'>Secondary</Button>
      <Button faded color='success'>Success</Button>
      <Button faded color='info'>Info</Button>
      <Button faded color='warning'>Warning</Button>
      <Button faded color='danger'>Danger</Button>
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
      <Button size='sm'>Small</Button>
      <Button size='xs'>Extra Small</Button>
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
