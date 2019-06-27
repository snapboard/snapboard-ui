import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from 'util/Card'
import Center from '../'

storiesOf('Components/Center', module)
  .add('Center', () => (
    <Card width={400} height={400}>
      <Center width={100} height={100}>
        <div style={{ background: '#eee', height: '100%', width: '100%' }} />
      </Center>
    </Card>
  ))

  .add('Center (height only)', () => (
    <Card width={400} height={400}>
      <Center height={100}>
        <div style={{ background: '#eee', height: '100%', width: '100%' }} />
      </Center>
    </Card>
  ))

  .add('Center (width only)', () => (
    <Card width={400} height={400}>
      <Center width={100}>
        <div style={{ background: '#eee', height: '100%', width: '100%' }} />
      </Center>
    </Card>
  ))
