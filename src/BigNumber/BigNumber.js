import React from 'react'
import { css } from '@emotion/core'
import numeral from 'numeral'
import { CenterMeasure } from '../Center'
import List, { ListItem, ListContent, ListHeader } from '../List'

const resizeThreshold = 400
const baseSize = 9

const calcFontSize = contentRect => !contentRect || !contentRect.bounds
  ? baseSize
  : calSize(contentRect.bounds.width)
const calSize = dimention => dimention > resizeThreshold ? baseSize : dimention / resizeThreshold * baseSize
const formatNumber = (data, showPlus) => isNaN(numeral(data).value()) || numeral(data).value() === null
  ? data
  : numeral(data).format(`${(showPlus && '+') || ''}0.[00]a`)

function BigNumber ({ data, number, label, ...rest }) {
  const normalized = normalizeData({ data, number, label })
  if (!normalized) return null
  if (normalized.datasets.length === 1) return <SingleDataset data={normalized} {...rest} />
  return <MultiDataset data={normalized} {...rest} />
}

function MultiDataset ({ data, showRelative }) {
  const { datasets = [], labels = [] } = data
  const size = labels && labels.length ? labels.length : 1
  const datasetsEl = datasets.map((dataset) => {
    const primaryNumber = dataset.data[size - 1]
    const datapointsEl = dataset.data.slice(0).reverse().map((number, i) => {
      const label = labels.slice(0).reverse()[i]
      return (
        <ListContent vcenter>
          <div css={[styles.stat, css`text-align: left; padding: 0;`]}>
            {showRelative
              ? formatNumber(primaryNumber - number, true)
              : formatNumber(number)}
          </div>
          <div css={[styles.label, css`text-align: left; font-size: 0.9em;`]}>
            {label}
          </div>
        </ListContent>
      )
    })
    return (
      <ListItem css={{ display: 'block' }}>
        <ListHeader css={css`margin-bottom: 0.5em; font-size: 1.2em;`}>{ dataset.label }</ListHeader>
        <div css={css`display: flex;`}>
          {datapointsEl}
        </div>
      </ListItem>
    )
  })
  return (
    <div css={css`overflow: auto; height: 100%; width: 100%;`}>
      <List divided relaxed>
        {datasetsEl}
      </List>
    </div>
  )
}

function SingleDataset ({ data, showRelative }) {
  const { datasets = [], labels = [] } = data
  const size = labels && labels.length ? labels.length : 1
  const dataset = datasets[0]
  const primaryNumber = dataset.data[size - 1]
  const primaryLabel = dataset.label && labels[size - 1]
    ? `${dataset.label} - ${labels[size - 1]}`
    : labels[size - 1] || dataset.label
  const secondary = size > 2 ? dataset.data.slice(0, size - 1).map((number, i) => {
    const label = labels[i]
    return (
      <div css={styles.stat}>
        {showRelative
          ? formatNumber(primaryNumber - number, true)
          : formatNumber(number)}
        {label && <span css={[styles.label, css`margin-left: 5px;`]}>{label}</span>}
      </div>
    )
  }) : null
  return (
    <div css={styles.container}>
      <CenterMeasure autoWidth>
        {({ measureRef, contentRect }) => (
          <div ref={measureRef}>
            <div css={styles.value} style={{ fontSize: `${calcFontSize(contentRect)}em` }}>
              {formatNumber(primaryNumber)}
            </div>
            {primaryLabel && (
              <div css={[styles.label, styles.primaryLabel]}>
                {primaryLabel}
              </div>
            )}
            {secondary && <div css={styles.secondary}>
              {secondary}
            </div>}
          </div>
        )}
      </CenterMeasure>
    </div>
  )
}

function normalizeData (props) {
  const { data, number, label } = props || {}
  if (!data && number !== undefined) {
    return { labels: [label], datasets: [{ data: [number] }] }
  }
  return data
}

const styles = {
  container: css`
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 1;
  `,
  value: css`
    font-size: 10em;
    text-align: center; 
    line-height: 1;
  `,
  label: css`
    color: #999;
    font-weight: 600;
    text-align: center; 
    line-height: 1.1;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  primaryLabel: css`
    margin-top: 0.5em;
    font-size: 1.5em;
  `,
  secondary: css`
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.3em;
  `,
  stat: css`
    flex: 1 1 auto;
    min-width: 90px;
    text-align: center;
    padding: 1em 0.5em;
    font-weight: 600;
  `,
}

export default BigNumber
