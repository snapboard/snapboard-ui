import React from 'react'
import { css } from '@emotion/core'

class BigNumber extends React.Component {
  render () {
    return (
      <div css={style}>
        {this.props.data}
      </div>
    )
  }
}

const style = css`
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
    "Helvetica Neue", sans-serif;
  text-align: center; 
  font-size: 6em;
`

export default BigNumber
