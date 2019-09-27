import React from 'react'
import { css } from '@emotion/core'
import { Grid } from 'react-virtualized'
import GutterCell from './GutterCell'
import scrollbarSize from 'dom-helpers/scrollbarSize'

class Gutter extends React.Component {
  renderGutterCell = ({ key, rowIndex, style }) => {
    const { rowCount, showAddRow, gutterOffset, rowMenu } = this.props
    if (showAddRow && rowIndex === rowCount) return

    return (
      <GutterCell
        key={key}
        rowIndex={rowIndex}
        menuData={rowMenu}
        style={style}
        offset={gutterOffset}
      />
    )
  }

  render () {
    const {
      gutterWidth,
      overscanColumnCount,
      overscanRowCount,
      rowHeight,
      totalHeight,
      rowCount,
      scrollTop,
      showAddRow,
    } = this.props
    return (
      <div
        css={styles.gutterGridContainer}
        style={{
          position: 'absolute',
          left: 0,
          top: rowHeight,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Grid
          css={styles.gutterGrid}
          overscanColumnCount={overscanColumnCount}
          overscanRowCount={overscanRowCount}
          cellRenderer={this.renderGutterCell}
          columnWidth={gutterWidth}
          columnCount={1}
          height={totalHeight - rowHeight - scrollbarSize()}
          rowHeight={rowHeight}
          rowCount={showAddRow ? rowCount + 1 : rowCount}
          scrollTop={scrollTop}
          width={gutterWidth}
        />
      </div>
    )
  }
}

const styles = {
  gutterGridContainer: css`
    flex: 0 0 75px;
    z-index: 10;
    outline: none;
  `,
  gutterGrid: css`
    overflow: hidden !important;
    outline: none;
  `,
}

export default Gutter
