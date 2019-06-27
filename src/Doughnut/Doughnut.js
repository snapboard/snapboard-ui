import { Doughnut } from 'react-chartjs-2'
import withProps from 'recompose/withProps'
import withChartProps from '../util/withChartProps'
import colorPalette from '../util/colorPalette'

export default withProps(({ data }) => {
  if (!data) return {}
  const { datasets } = data
  data.datasets = datasets.map((dataset, i) => {
    if (dataset.backgroundColor) return dataset
    return {
      backgroundColor: colorPalette,
      ...dataset,
    }
  })
  return data
})(withChartProps(Doughnut))
