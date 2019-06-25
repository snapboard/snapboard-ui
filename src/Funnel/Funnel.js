import React from 'react'
import ReactResizeDetector from 'react-resize-detector'
import FunnelGraph from 'funnel-graph-js'
import FunnelStyled from './styled'

const defaults = {
  gradientDirection: 'horizontal',
  subLabelValue: 'percent',
  direction: 'horizontal',
  displayPercent: true,
}

class Funnel extends React.Component {
  size = {}

  onRef = (ref) => {
    if (!this.ref) {
      const options = this.props.options || {}
      this.graph = new FunnelGraph({
        container: '.funnel',
        ...defaults,
        data: this.props.data,
        width: this.props.width || this.size.width,
        height: this.props.height || this.size.height,
        ...options,
      })
      this.graph.draw()
      this.ref = ref
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.data !== this.props.data) this.graph.updateData(this.props.data)
    if (prevProps.options !== this.props.options) this.graph.update(this.props.options)
  }

  onResize = (width, height) => {
    if (this.graph) {
      if (height !== this.size.height) this.graph.updateHeight(height - 102)
      if (width !== this.size.width) this.graph.updateWidth(width)
    }
    this.size = { width, height }
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

export default Funnel
