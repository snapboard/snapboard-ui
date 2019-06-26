import withProps from 'recompose/withProps'
import Color from 'color'
import { getColor } from './colorPalette'

const datasetDefaults = {
  pointBackgroundColor: '#fff',
  fill: false,
}

export default withProps(({ data }) => {
  if (!data) return {}
  const { datasets } = data
  data.datasets = datasets.map((dataset, i) => {
    if (dataset.backgroundColor) return dataset
    const baseColor = Color(getColor(i))
    return {
      ...datasetDefaults,
      backgroundColor: baseColor.fade(0.8).rgb(),
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
