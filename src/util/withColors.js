import withProps from 'recompose/withProps'
import Color from 'color'
import colorPalette, { getColor } from './colorPalette'

const datasetDefaults = {
  pointBackgroundColor: '#fff',
  // fill: false,
}

export default ({ solid, colorEachData } = {}) => withProps(({ data }) => {
  if (!data) return {}
  const { datasets } = data
  data.datasets = datasets.map((dataset, i) => {
    if (dataset.backgroundColor) return dataset
    const baseColor = Color(getColor(i))
    const bgColor = solid ? baseColor.hex() : baseColor.alpha(0.1).string()
    if (solid) {
      return {
        backgroundColor: colorEachData ? colorPalette : bgColor,
        borderColor: baseColor.hex(),
        ...dataset,
      }
    }
    return {
      ...datasetDefaults,
      backgroundColor: bgColor,
      borderColor: baseColor.hex(),
      pointBorderColor: baseColor.hex(),
      pointBackgroundColor: baseColor.hex(),
      pointHoverBackgroundColor: baseColor.hex(),
      pointHoverBorderColor: baseColor.hex(),
      ...dataset,
    }
  })
  return data
})
