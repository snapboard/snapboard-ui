import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from 'util/Card'
import BigNumber from '../BigNumber'

export const data = 10

storiesOf('Components/Charts', module)
  .add('BigNumber', () => (
    <Card width={400} height={400}>
      <BigNumber data={data} />
    </Card>
  ))
