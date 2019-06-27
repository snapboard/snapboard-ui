import { Bar } from 'react-chartjs-2'
import withChartProps from '../util/withChartProps'
import withColors from '../util/withColors'

export default withColors({
  solid: true,
})(withChartProps(Bar))
