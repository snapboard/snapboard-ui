import styled from '@emotion/styled'

const Center = styled('div')({
  position: 'absolute',
}, ({ width, height }) => ({
  width: width || '100%',
  left: width ? '50%' : 0,
  top: height ? '50%' : 0,
  bottom: height ? 'auto' : 0,
  height,
  marginTop: height && height / -2,
  marginLeft: width && width / -2,
  marginBottom: 0,
  marginRight: 0,
}))

export default Center
