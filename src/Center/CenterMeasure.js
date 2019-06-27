import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Measure from 'react-measure'
import Center from './Center'

function CenterMeasure ({ children, autoHeight, autoWidth, height, width, ...props }) {
  const [size, setSize] = useState({})
  return (
    <Center width={autoWidth ? null : size.width} height={autoHeight ? null : size.height}>
      <Measure
        bounds
        onResize={contentRect => setSize(contentRect.bounds)}>
        {children}
      </Measure>
    </Center>
  )
}

CenterMeasure.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  height: PropTypes.number,
  width: PropTypes.number,
  autoHeight: PropTypes.bool,
  autoWidth: PropTypes.bool,
  contentRect: PropTypes.object,
}

export default CenterMeasure
