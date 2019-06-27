import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from 'util/Card'
import CenterMeasure from '../CenterMeasure'

storiesOf('Components/Center', module)
  .add('CenterMeasure', () => (
    <Card width={400} height={400}>
      <CenterMeasure>
        {({ measureRef }) => (
          <div
            ref={measureRef}
            style={{ background: '#eee', width: '100px', height: '100px' }}
          />
        )}
      </CenterMeasure>
    </Card>
  ))

  .add('CenterMeasure (height only)', () => (
    <Card width={400} height={400}>
      <CenterMeasure autoWidth>
        {({ measureRef }) => (
          <div
            ref={measureRef}
            style={{ background: '#eee', width: '100px', height: '100px' }}
          />
        )}
      </CenterMeasure>
    </Card>
  ))

  .add('CenterMeasure (width only)', () => (
    <Card width={400} height={400}>
      <CenterMeasure autoHeight>
        {({ measureRef }) => (
          <div
            ref={measureRef}
            style={{ background: '#eee', width: '100px', height: '100px' }}
          />
        )}
      </CenterMeasure>
    </Card>
  ))
