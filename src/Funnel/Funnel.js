import React from 'react'
import ReactResizeDetector from 'react-resize-detector'
import FunnelGraph from 'funnel-graph-js'
import isString from 'lodash/isString'
import Color from 'color'
import withColors from '../util/withColors'
import FunnelStyled from './styled'

const defaults = {
  gradientDirection: 'horizontal',
  subLabelValue: 'percent',
  direction: 'horizontal',
  displayPercent: true,
}

const getColors = base => {
  if (isString(base)) return [Color(base).lighten(0.1), Color(base).darken(0.1).rotate(-10)]
  return base
}

class Funnel extends React.Component {
  size = {}

  onRef = (ref) => {
    if (!this.ref) {
      const options = this.props.options || {}
      this.graph = new FunnelGraph({
        container: '.funnel',
        ...defaults,
        data: this.format(this.props.data),
        width: this.props.width || this.size.width,
        height: this.props.height || this.size.height,
        ...options,
      })
      this.graph.draw()
      this.ref = ref
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.data !== this.props.data) this.updateData(this.props.data)
    if (prevProps.options !== this.props.options) this.graph.update(this.props.options)
  }

  onResize = (width, height) => {
    if (this.graph) {
      if (height !== this.size.height) this.graph.updateHeight(height - 102)
      if (width !== this.size.width) this.graph.updateWidth(width)
    }
    this.size = { width, height }
  }

  updateData (data) {
    this.graph.updateData(this.format(data))
    return this
  }

  format = ({ labels, datasets }) => {
    const values = datasets.map(({ data }) => data)
    const colors = datasets.map(({ backgroundColor }) => getColors(backgroundColor))
    const subLabels = datasets.map(({ label }) => label)
    return {
      labels,
      values,
      colors,
      subLabels,
    }
  }

  render () {
    let el = <FunnelStyled ref={this.onRef} className='funnel' />
    if (!this.props.width && !this.props.height) {
      el = (
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
          {el}
        </ReactResizeDetector>
      )
    }
    return el
  }
}

export default withColors({ solid: true })(Funnel)
