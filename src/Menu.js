import React from 'react'
import { css } from '@emotion/core'

export function MenuItem ({ children, ...props }) {
  return (
    <div css={styles.menuItem} {...props}>
      {children}
    </div>
  )
}

function Menu ({ data, context, onRequestClose }) {
  const menuItemsEl = data.map(({ text, onClick }) => {
    return (
      <MenuItem
        key={text}
        onClick={(e) => {
          if (onClick) onClick(context, e)
          onRequestClose()
        }}
      >
        {text}
      </MenuItem>
    )
  })

  return (
    <div css={styles.menu}>
      {menuItemsEl}
    </div>
  )
}

const styles = {
  menu: css`
    font-size: 0.85em;
    background: #3d3d3d;
    border: 0px;
    min-width: 160px;
    border-radius: 3px;
    overflow: hidden;
    color: #eaeaea;
  `,
  menuItem: css`
    padding: 0.5em 1em;
    // border-bottom: 1px solid #545454;
    cursor: pointer;
    :hover {
      background: #545454; 
    }
  `,
}

export default Menu
