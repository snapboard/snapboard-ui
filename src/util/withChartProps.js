import mapProps from 'recompose/mapProps'

export default mapProps(({ options = {}, ...props }) => ({
  width: 'auto',
  height: 'auto',
  options: { maintainAspectRatio: false, ...options },
  ...props,
}))
