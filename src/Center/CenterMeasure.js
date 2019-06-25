import React from 'react'
import PropTypes from 'prop-types'
import { withContentRect } from 'react-measure'
import Center from './Center'

function CenterMeasure ({ children, height, width, measureRef, contentRect, ...props }) {
  const { bounds } = contentRect
  return (
    <Center width={width || bounds.width || 100} height={height || bounds.height || 100} {...props}>
      <div ref={measureRef}>
        {children}
      </div>
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
  measureRef: PropTypes.func,
  contentRect: PropTypes.object,
}

export default withContentRect('bounds')(CenterMeasure)
