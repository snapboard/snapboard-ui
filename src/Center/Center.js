import styled from '@emotion/styled'

const Center = styled('div')({
  left: '50%',
  top: '50%',
  position: 'absolute',
}, ({ width, height }) => ({
  width,
  height,
  marginTop: height / -2,
  marginLeft: width / -2,
  marginBottom: 0,
  marginRight: 0,
}))

export default Center
