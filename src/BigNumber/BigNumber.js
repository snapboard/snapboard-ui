import React from 'react'
import { css } from '@emotion/core'

class BigNumber extends React.Component {
  render () {
    return (
      <div css={css`font-size: 6em;`}>
        {this.props.data}
      </div>
    )
  }
}

export default BigNumber
