import React from 'react'
import { css } from '@emotion/core'
import numeral from 'numeral'
import { CenterMeasure } from '../Center'
// import IconCropOriginal from 'mineral-ui-icons/IconCropOriginal'

const resizeThreshold = 400
const baseSize = 10

const calcFontSize = contentRect => !contentRect || !contentRect.bounds
  ? baseSize
  : calSize(contentRect.bounds.width)

const calSize = dimention => dimention > resizeThreshold ? baseSize : dimention / resizeThreshold * baseSize

const formatData = (data, showPlus) => numeral(data).format(`${(showPlus && '+') || ''}0.[00]a`)

class BigNumber extends React.Component {
  render () {
    const { data } = this.props
    const { showRelative, datasets = [] } = data
    const primary = datasets[0]
    const secondary = datasets.slice(1).map(({ label, data }) => (
      <div css={styles.stat}>
        {showRelative
          ? formatData(primary.data - data, true)
          : formatData(data)}
        {label && <span css={[styles.label, css`margin-left: 5px;`]}>{label}</span>}
      </div>
    ))
    return (
      <div css={styles.container}>
        <CenterMeasure autoWidth>
          {({ measureRef, contentRect }) => (
            <div ref={measureRef}>
              <div css={styles.value} style={{ fontSize: `${calcFontSize(contentRect)}em` }}>
                {formatData(primary.data)}
              </div>
              {primary.label && (
                <div css={[styles.label, styles.primaryLabel]}>
                  {primary.label}
                </div>
              )}
              <div css={styles.secondary}>
                {secondary}
              </div>
            </div>
          )}
        </CenterMeasure>
      </div>
    )
  }
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
    line-height: 1;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  primaryLabel: css`
    margin-top: 0.5em;
    font-size: 1.6em;
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
    min-width: 100px;
    text-align: center;
    padding: 1em 0.5em;
    font-weight: 600;
  `,
}

export default BigNumber
