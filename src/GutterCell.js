import React, { useState, useRef } from 'react'
import { css } from '@emotion/core'
import Popover from 'react-tiny-popover'
import Menu from './Menu'
import sharedStyles from './styles'

function GutterCell ({ rowIndex, style, menuData, offset = 1 }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  const onContextMenu = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  const cellStyles = [sharedStyles.cell, styles.gutterCell]
  if (isOpen) {
    cellStyles.push('background: #eee;')
  }

  return (
    <Popover
      position='right'
      containerStyle={{ zIndex: '10' }}
      content={() => (
        <Menu
          data={menuData}
          onRequestClose={() => setIsOpen(false)}
          context={{ rowIndex, ref: ref.current }}
        />
      )}
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
    >
      <div
        ref={ref}
        onContextMenu={onContextMenu}
        style={style}
        css={cellStyles}
      >
        {rowIndex + offset}
      </div>
    </Popover>
  )
}

const styles = {
  gutterCell: css`
    text-align: center;
    color: #888;
    font-size: 0.95em;
  `,
}

export default GutterCell
