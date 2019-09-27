import React from 'react'
import { css } from '@emotion/core'
import isFunction from 'lodash/isFunction'
import isEqual from 'lodash/isEqual'
import { ScrollSync, AutoSizer } from 'react-virtualized'
import 'react-virtualized/styles.css'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Notch from './Notch'
import Gutter from './Gutter'
import Header from './Header'
import Body from './Body'

const getWidths = columns => columns.map(({ width }) => width)

class Sheet extends React.Component {
  static defaultProps = {
    rowHeight: 28,
    columns: [],
    gutterWidth: 30,
    estimatedColumnWidth: 75,
    overscanColumnCount: 0,
    overscanRowCount: 5,
    columnMenu: [],
    rowMenu: [],
  }

  state = {
    selectedCell: { rowIndex: 0, columnIndex: 0 },
    scrolledToCell: { rowIndex: 0, columnIndex: 0 },
    editingCell: null,
  }

  componentWillUpdate (nextProps) {
    const { columns } = this.props

    if (!isEqual(getWidths(columns), getWidths(nextProps.columns))) {
      this.headerRef.recomputeGridSize()
      this.bodyRef.recomputeGridSize()
      this.isUpdatingGrid = true
    }
  }

  onScroll = (pos) => {
    if (this.isUpdatingGrid) {
      this.bodyRef.scrollToPosition(this.scrollPos)
      this.isUpdatingGrid = false
    }
    this.scrollPos = pos
  }

  getColumn = (index) => {
    if (index === 0) return null
    return this.props.columns[index - 1]
  }

  getCellValue = ({ columnIndex, rowIndex }) => {
    const column = this.getColumn(columnIndex)
    const row = this.props.rowGetter(rowIndex)
    return row[column.key]
  }

  getColumnWidth = ({ index }) => {
    const { columns, estimatedColumnWidth, gutterWidth } = this.props
    // Gutter and add column btn
    if (index === 0 || index > columns.length) return gutterWidth

    const column = this.getColumn(index)
    return column.width || estimatedColumnWidth
  }

  selectCell = (cell) => {
    this.setState((prevState) => {
      const { columnIndex, rowIndex } = isFunction(cell) ? cell(prevState.selectedCell) : cell
      const { columns, rowCount } = this.props
      const maxRow = rowCount - 1
      const maxColumn = columns.length

      // Skip update if at the end of the range
      if (columnIndex === 0 ||
          columnIndex > maxColumn ||
          rowIndex < 0 ||
          rowIndex > maxRow // Additional minus for add row btn
      ) return prevState

      return {
        selectedCell: { columnIndex, rowIndex },
        scrolledToCell: { columnIndex, rowIndex },
      }
    })
    this.handleOnEditDone()
  }

  editCell = (cell) => {
    if (this.props.readOnly) return
    if (cell === null) {
      this.setState({ editingCell: null })
      return
    }
    const { columnIndex, rowIndex } = cell
    const updatedValue = cell.updatedValue || this.getCellValue(cell)
    this.setState({
      editingCell: { columnIndex, rowIndex, updatedValue },
      selectedCell: { columnIndex, rowIndex },
      scrolledToCell: { columnIndex, rowIndex },
    })
  }

  handleOnEditDone = () => {
    const { editingCell } = this.state
    const { rowGetter } = this.props

    if (!editingCell) return

    const column = this.getColumn(editingCell.columnIndex)
    const row = rowGetter(editingCell.rowIndex)

    this.setState({
      editingCell: null,
    })

    if (!editingCell.updatedValue ||
      row[column.key] === editingCell.updatedValue) return

    if (this.props.onRowsChange) {
      this.props.onRowsChange({
        fromRow: editingCell.rowIndex,
        toRow: editingCell.rowIndex,
        updated: { [column.key]: editingCell.updatedValue },
      })
    }
  }

  scrollToCell = ({ columnIndex, rowIndex }) => {
    this.setState({
      scrolledToCell: {
        columnIndex,
        rowIndex,
      },
    })
  }

  handleOnKeyEvent = (key, e) => {
    if (key === 'enter') {
      this.selectCell(({ columnIndex, rowIndex }) => ({
        columnIndex,
        rowIndex: rowIndex + 1,
      }))
      return
    }
    if (key === 'shift+enter') {
      this.selectCell(({ columnIndex, rowIndex }) => ({
        columnIndex,
        rowIndex: rowIndex - 1,
      }))
      return
    }
    if (key === 'tab') {
      e.preventDefault()
      this.selectCell(({ columnIndex, rowIndex }) => ({
        columnIndex: columnIndex + 1,
        rowIndex,
      }))
      return
    }
    if (key === 'shift+tab') {
      e.preventDefault()
      this.selectCell(({ columnIndex, rowIndex }) => ({
        columnIndex: columnIndex - 1,
        rowIndex,
      }))
      return
    }
    if (key === 'esc') {
      e.stopImmediatePropagation()
      return this.editCell(null)
    }
    if (this.state.selectedCell && !this.state.editingCell) {
      this.editCell({
        ...this.state.selectedCell,
        updatedValue: key,
      })
    }
  }

  render () {
    const {
      rowCount,
      columns,
      rowHeight,
      gutterWidth,
      gutterOffset,
      estimatedColumnWidth,
      overscanColumnCount,
      overscanRowCount,
      onColumnResize,
      rowGetter,
      columnMenu,
      rowMenu,
      onAddRow,
      onAddColumn,
    } = this.props

    const {
      selectedCell,
      scrolledToCell,
      editingCell,
    } = this.state

    const columnCount = columns.length + 1

    return (
      <KeyboardEventHandler
        handleKeys={[
          'enter', 'shift+enter', 'ctrl+enter', 'meta+enter',
          'tab', 'shift+tab', 'esc', 'alphanumeric', 'shift',
        ]}
        onKeyEvent={this.handleOnKeyEvent}
        style={{ height: '100%', display: 'block' }}
      >
        <AutoSizer disableWidth>
          {({ height: totalHeight }) => (
            <ScrollSync>
              {({
                onScroll,
                scrollLeft,
                scrollTop,
              }) => {
                return (
                  <div css={styles.grid} ref={ref => { this.gridRef = ref }} tabIndex='0'>
                    <Notch
                      gutterWidth={gutterWidth}
                      rowHeight={rowHeight}
                    />
                    <Gutter
                      overscanColumnCount={overscanColumnCount}
                      overscanRowCount={overscanRowCount}
                      gutterWidth={gutterWidth}
                      gutterOffset={gutterOffset}
                      rowHeight={rowHeight}
                      totalHeight={totalHeight}
                      rowCount={rowCount}
                      scrollTop={scrollTop}
                      rowMenu={rowMenu}
                      showAddRow={!!onAddRow}
                      onAddRow={onAddRow}
                    />
                    <div css={styles.gridColumn}>
                      <AutoSizer disableHeight>
                        {({ width: totalWidth }) => (
                          <div>
                            <Header
                              innerRef={ref => { this.headerRef = ref }}
                              rowHeight={rowHeight}
                              totalWidth={totalWidth}
                              scrollLeft={scrollLeft}
                              overscanColumnCount={overscanColumnCount}
                              columnCount={columnCount}
                              getColumn={this.getColumn}
                              getColumnWidth={this.getColumnWidth}
                              estimatedColumnWidth={estimatedColumnWidth}
                              columnMenu={columnMenu}
                              onColumnResize={onColumnResize}
                              onAddColumn={onAddColumn}
                              showAddColumn={!!onAddColumn}
                            />
                            <Body
                              innerRef={ref => { this.bodyRef = ref }}
                              rowGetter={rowGetter}
                              overscanColumnCount={overscanColumnCount}
                              overscanRowCount={overscanRowCount}
                              onScroll={pos => {
                                onScroll(pos)
                                this.onScroll(pos)
                              }}
                              columnCount={columnCount}
                              rowCount={rowCount}
                              totalHeight={totalHeight}
                              totalWidth={totalWidth}
                              rowHeight={rowHeight}
                              editingCell={editingCell}
                              selectedCell={selectedCell}
                              scrolledToCell={scrolledToCell}
                              onEditDone={this.handleOnEditDone}
                              editCell={this.editCell}
                              selectCell={this.selectCell}
                              scrollToCell={this.scrollToCell}
                              getColumn={this.getColumn}
                              getColumnWidth={this.getColumnWidth}
                              estimatedColumnWidth={estimatedColumnWidth}
                              onAddRow={onAddRow}
                              showAddRow={!!onAddRow}
                            />
                          </div>
                        )}
                      </AutoSizer>
                    </div>
                  </div>
                )
              }}
            </ScrollSync>
          )}
        </AutoSizer>
      </KeyboardEventHandler>
    )
  }
}

const styles = {
  grid: css`
    position: relative;
    display: flex;
    flex-direction: row;
    font-size: 0.9em;
    * {
      box-sizing: border-box;
    }
`,
  gridColumn: css`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`,
  notchGrid: css`
    width: 100%;
    overflow: hidden !important;
    outline: none;
  `,
  notch: css`
    flex: 0 0 75px;
    z-index: 10;
    outline: none;
  `,
}

export default Sheet
