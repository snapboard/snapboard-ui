// import Color from 'color'
// import times from 'lodash/times'

// const base = '#bb4848'

// const colors = times(36, (i) => Color(base).rotate(i * -10 + 180))

// export default colors
const colors = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#c0ca33',
  '#e53935',
  '#86319D',
  '#43a047',
  '#364BA1',
  '#ffb300',
  '#00897b',
  '#fb8c00',
  '#6d4c41',
  '#039be5',
  '#7cb342',
  '#546e7a',
  '#5e35b1',
  '#A2B0C0',
  '#00acc1',
  '#3949ab',
  '#263238',
  '#1e88e5',
]

export const getColor = i => colors[i === 0 ? 0 : i - (Math.floor(i / colors.length) * colors.length)]

export default colors
