import React from 'react'
import { css } from '@emotion/core'
import { Grid, ArrowKeyStepper } from 'react-virtualized'
import Cell from './Cell'
import sharedStyles from './styles'

class Body extends React.Component {
  renderAddRow = ({ style }) => {
    const { onAddRow, rowCount } = this.props
    return (
      <div
        onClick={() => onAddRow && onAddRow(rowCount)}
        css={styles.addRow}
        style={{ ...style, width: this.getColumnWidths() }}>
        + Add Row
      </div>
    )
  }

  renderCell = ({ columnIndex, selectedCell, editingCell, key, rowIndex, style }) => {
    const { rowGetter, getColumn, onEditDone, rowCount, showAddRow } = this.props

    if (columnIndex < 1) return
    if (showAddRow && rowIndex === rowCount && columnIndex !== 1) return
    if (showAddRow && rowIndex === rowCount) return this.renderAddRow({ style })

    const isSelected = columnIndex === selectedCell.columnIndex && rowIndex === selectedCell.rowIndex
    const isEditing = editingCell && columnIndex === editingCell.columnIndex && rowIndex === editingCell.rowIndex

    const onSelectCell = () => {
      if (isEditing) return
      this.props.selectCell({
        columnIndex,
        rowIndex,
      })
    }

    const onEditCell = () => {
      this.props.editCell({
        columnIndex,
        rowIndex,
      })
    }

    const onChange = (updatedValue) => {
      this.props.editCell({
        columnIndex,
        rowIndex,
        updatedValue,
      })
    }

    const row = rowGetter(rowIndex)
    const column = getColumn(columnIndex)
    const value = isEditing && editingCell.updatedValue ? editingCell.updatedValue : row[column.key]

    return (
      <Cell
        key={key}
        value={value}
        updatedValue={isEditing && editingCell.updatedValue}
        style={style}
        isSelected={isSelected}
        isEditing={isEditing}
        onClick={onSelectCell}
        onDoubleClick={onEditCell}
        onChange={onChange}
        onEditDone={onEditDone}
      />
    )
  }

  onSelectChange = ({ scrollToRow, scrollToColumn }) => {
    this.props.selectCell({
      rowIndex: scrollToRow,
      columnIndex: scrollToColumn,
    })
  }

  getColumnWidths = () => {
    const { getColumnWidth, columnCount, estimatedColumnWidth } = this.props
    let total = 0
    for (let index = 1; index < columnCount; index++) {
      total += getColumnWidth({ index }) || estimatedColumnWidth || 75
    }
    return total
  }

  render () {
    const {
      innerRef,
      onScroll,
      selectedCell,
      scrolledToCell,
      editingCell,
      overscanColumnCount,
      overscanRowCount,
      columnCount,
      rowCount,
      totalHeight,
      totalWidth,
      rowHeight,
      getColumnWidth,
      estimatedColumnWidth,
      showAddRow,
    } = this.props

    return (
      <ArrowKeyStepper
        isControlled
        disabled={!!editingCell}
        onScrollToChange={this.onSelectChange}
        scrollToColumn={scrolledToCell.columnIndex}
        scrollToRow={scrolledToCell.rowIndex}
        columnCount={columnCount}
        rowCount={showAddRow ? rowCount + 1 : rowCount}
        mode='cells'
      >
        {({ onSectionRendered, scrollToColumn, scrollToRow }) => (
          <div
            style={{
              height: totalHeight - rowHeight,
              width: totalWidth,
            }}
          >
            <Grid
              ref={innerRef}
              css={styles.bodyGrid}
              onSectionRendered={onSectionRendered}
              cellRenderer={({ columnIndex, key, rowIndex, style }) => (
                this.renderCell({
                  columnIndex,
                  key,
                  rowIndex,
                  selectedCell,
                  editingCell,
                  style,
                })
              )}
              scrollToColumn={scrollToColumn}
              scrollToRow={scrollToRow}
              estimatedColumnSize={estimatedColumnWidth}
              columnWidth={getColumnWidth}
              columnCount={columnCount}
              height={totalHeight - rowHeight}
              onScroll={onScroll}
              overscanColumnCount={overscanColumnCount}
              overscanRowCount={overscanRowCount}
              rowHeight={rowHeight}
              rowCount={showAddRow ? rowCount + 1 : rowCount}
              width={totalWidth}
            />
          </div>
        )}
      </ArrowKeyStepper>
    )
  }
}

const styles = {
  bodyGrid: css`
    width: 100%;
    outline: none;
  `,
  addRow: css`
    ${sharedStyles.cell}
    border-bottom: 0;
    background: #f9f9f9;
    color: #999;
    font-size: 0.9em;
    font-weight: 600;
    :hover {
      background: #f4f4f4;
      cursor: pointer;
    }
  `,
}

export default Body
