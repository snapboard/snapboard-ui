import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
// import { ThemeProvider } from 'emotion-theming'
import Badge from '../Badge'

const Container = styled.div`& > button { display: block; margin-bottom: 1em; }`
// const theme = {
//   colors: {
//     primary: 'red',
//   },
// }

storiesOf('Components/Badge', module)
  .add('Colors', () => (
    <Container>
      <Badge>Default</Badge>
      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='success'>Success</Badge>
      <Badge color='info'>Info</Badge>
      <Badge color='warning'>Warning</Badge>
      <Badge color='danger'>Danger</Badge>
      <Badge color='light'>Danger</Badge>
    </Container>
  ))

  .add('Pills', () => (
    <Container>
      <Badge pill>Default</Badge>
      <Badge pill color='primary'>Primary</Badge>
      <Badge pill color='secondary'>Secondary</Badge>
      <Badge pill color='success'>Success</Badge>
      <Badge pill color='info'>Info</Badge>
      <Badge pill color='warning'>Warning</Badge>
      <Badge pill color='danger'>Danger</Badge>
    </Container>
  ))

  .add('Sizes', () => (
    <Container>
      <Badge>Default</Badge>
      <Badge size='lg'>Default</Badge>
      <Badge size='sm'>Primary</Badge>
    </Container>
  ))
