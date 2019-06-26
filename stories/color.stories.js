import React, { useState } from 'react'
import { css } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { withKnobs, color, boolean, number } from '@storybook/addon-knobs'
import Color from 'color'
import colorPallate from 'util/colorPalette'

const styles = css`
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 10px;
  float: left;
  background: #eee;
  font-weight: semi-bold;
  padding: 10px;
  color: #fff;
  border: 3px solid transparent;
`

const ColorBlock = ({ color, negate, rotate, saturate, lighten, onClick, selected }) => {
  let bgColor = Color(color)
  if (negate) bgColor = bgColor.negate()
  if (rotate) bgColor = bgColor.rotate(rotate)
  if (saturate > 0) bgColor = bgColor.saturate(saturate)
  if (saturate < 0) bgColor = bgColor.desaturate(Math.abs(saturate))
  if (lighten > 0) bgColor = bgColor.lighten(lighten)
  if (lighten < 0) bgColor = bgColor.darken(Math.abs(lighten))
  return (
    <div css={[styles, selected ? { border: '3px solid #eee' } : {}]} style={{ backgroundColor: bgColor.hex() }} onClick={onClick}>
      {bgColor.hex()}
    </div>
  )
}

const ColorBlockList = ({ negate, rotate, saturate, lighten }) => {
  const [selected, setSelected] = useState(0)
  return colorPallate.map((hex, i) => {
    const props = selected === i ? { negate, rotate, saturate, lighten, color: color('Color', hex) } : {}
    return (
      <ColorBlock
        onClick={() => setSelected(i)}
        color={hex}
        {...props}
      />
    )
  })
}

storiesOf('Color', module)
  .add('Color Picker', () => (
    <ColorBlock
      color={color('Initial color', '#BB4848')}
      negate={boolean('Negate', false)}
      rotate={number('Rotate', 0, { range: true, min: -180, max: 180, step: 1 })}
      saturate={number('Saturate', 0, { range: true, min: -1, max: 1, step: 0.01 })}
      lighten={number('Lighten', 0, { range: true, min: -1, max: 1, step: 0.01 })}
    />
  ))
  .add('Color Pallette', () => (
    <ColorBlockList
      negate={boolean('Negate', false)}
      rotate={number('Rotate', 0, { range: true, min: -180, max: 180, step: 1 })}
      saturate={number('Saturate', 0, { range: true, min: -1, max: 1, step: 0.01 })}
      lighten={number('Lighten', 0, { range: true, min: -1, max: 1, step: 0.01 })}
    />
  ))
  .addDecorator(withKnobs)
