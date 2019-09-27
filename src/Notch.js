import React from 'react'
import { css } from '@emotion/core'
import { Grid } from 'react-virtualized'
import sharedStyles from './styles'

class Notch extends React.Component {
  renderNotchCell = ({ key, style }) => {
    return (
      <div key={key} style={style} css={sharedStyles.cell} />
    )
  }

  render () {
    const {
      gutterWidth,
      rowHeight,
    } = this.props

    return (
      <div
        css={styles.notch}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          background: '#f9f9f9',
        }}
      >
        <Grid
          css={styles.notchGrid}
          cellRenderer={this.renderNotchCell}
          width={gutterWidth}
          height={rowHeight}
          rowHeight={rowHeight}
          columnWidth={gutterWidth}
          rowCount={1}
          columnCount={1}
        />
      </div>
    )
  }
}

const styles = {
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

export default Notch
