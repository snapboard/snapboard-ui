import React from 'react'
import { css } from '@emotion/core'
import { Grid } from 'react-virtualized'
import scrollbarSize from 'dom-helpers/scrollbarSize'
import HeaderCell from './HeaderCell'
import sharedStyles from './styles'

class Header extends React.Component {
  renderAddColumn = ({ style }) => {
    const { onAddColumn, columnCount } = this.props
    return (
      <div
        css={styles.addColumn}
        style={style}
        onClick={() => onAddColumn && onAddColumn(columnCount - 1)}>+
      </div>
    )
  }

  renderHeaderCell = ({ columnIndex, key, style, onResize }) => {
    const {
      getColumn, columnCount, showAddColumn, columnMenu,
    } = this.props
    if (columnIndex < 1) return null
    if (showAddColumn && columnIndex === columnCount) return this.renderAddColumn({ style })

    const column = getColumn(columnIndex)

    return (
      <HeaderCell
        key={key}
        style={style}
        column={column}
        columnIndex={columnIndex}
        menuData={columnMenu}
        onResize={offset => onResize(columnIndex - 1, offset)}
      />
    )
  }

  render () {
    const {
      rowHeight,
      totalWidth,
      scrollLeft,
      overscanColumnCount,
      columnCount,
      getColumnWidth,
      estimatedColumnWidth,
      onColumnResize,
      innerRef,
      showAddColumn,
    } = this.props

    return (
      <div
        style={{
          height: rowHeight,
          width: totalWidth - scrollbarSize(),
          background: '#f9f9f9',
        }}
      >
        <Grid
          ref={innerRef}
          css={styles.headerGrid}
          columnWidth={getColumnWidth}
          estimatedColumnSize={estimatedColumnWidth}
          columnCount={showAddColumn ? columnCount + 1 : columnCount}
          height={rowHeight}
          overscanColumnCount={overscanColumnCount}
          cellRenderer={(props) => this.renderHeaderCell({
            ...props,
            onResize: onColumnResize,
          })}
          rowHeight={rowHeight}
          rowCount={1}
          scrollLeft={scrollLeft}
          width={totalWidth - scrollbarSize()}
        />
      </div>
    )
  }
}

const styles = {
  headerGrid: css`
    width: 100%;
    overflow: hidden !important;
    outline: none;
`,
  addColumn: css`
    ${sharedStyles.cell}
    border: 0;
    color: #999;
    font-weight: 600;
    text-align: center;
    :hover {
      background: #f4f4f4;
      cursor: pointer;
    }
  `,
}

export default Header
