import React from 'react'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import OutsideClickHandler from 'react-outside-click-handler'
// import KeyboardEventHandler from 'react-keyboard-event-handler'
import { css } from '@emotion/core'
import sharedStyles from './styles'

class Cell extends React.Component {
  state = {
    updatedValue: null,
  }

  static getDerivedStateFromProps (props) {
    if (props.isEditing) return null
    return {
      updatedValue: props.value,
    }
  }

  getCellRef = (ref) => {
    this.cellRef = ref
  }

  getInputRef = (ref) => {
    if (!this.input) {
      ref.focus()
      ref.select()
    }
    this.input = ref
  }

  componentDidUpdate (prevProps) {
    if (this.props.isEditing !== prevProps.isEditing) {
      if (!this.props.isEditing) {
        this.input = null
      }
      if (prevProps.isEditing && this.cellRef) {
        this.cellRef.focus()
      }
    }
  }

  onChange = (e) => {
    const value = e.target.value
    this.props.onChange(value, e)
    this.setState({
      updatedValue: value,
    })
  }

  render () {
    const {
      value,
      updatedValue,
      isSelected,
      isEditing,
      onEditDone,
      onClick,
      onChange,
      ...rest
    } = this.props

    const cellStyles = [sharedStyles.cell, styles.cell]

    if (!isEditing) {
      cellStyles.push(styles.display)
    }

    if (isSelected && !isEditing) {
      cellStyles.push(css`background: #eee;`)
    }

    const cellInnerEl = isEditing ? (
      <input
        value={this.state.updatedValue}
        onChange={this.onChange}
        ref={this.getInputRef}
        css={styles.input}
      />
    ) : getValue(value)

    return (
      <OutsideClickHandler disabled={!isEditing} onOutsideClick={onEditDone}>
        <div
          tabIndex='0'
          ref={this.getCellRef}
          css={cellStyles}
          onClick={onClick}
          {...rest}
        >
          {cellInnerEl}
        </div>
      </OutsideClickHandler>
    )
  }
}

function getValue (value) {
  if (isArray(value)) return value[0]
  if (isObject(value)) return JSON.stringify(value)
  return value
}

const styles = {
  cell: css`
    outline: none;
    background: #fff;
  `,
  input: css`
    font-size: 100%;
    outline: none;
    width: 100%;
    height: 100%;
    border: 0;
    box-shadow: none;
    background: #fff;
    border-radius: 0;
  `,
  display: css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
}

export default Cell
