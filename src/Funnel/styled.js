import styled from '@emotion/styled'

const v = {
  shadowLight: 'rgba(0, 0, 0, .07)',
  shadowMedium: 'rgba(0, 0, 0, 0.32)',
  shadowDark: 'rgba(0, 0, 0, 0.62)',
  shadowWhiteMedium: 'rgba(255, 255, 255, 0.32)',
  shadowWhiteDark: 'rgba(255, 255, 255, 0.62)',
  labelTitleColor: '#aaa',
  labelValueColor: '#333',
  labelPercentColor: '#333',
  labelLightColor: '#fff',
  primary: '#05df9d',
  lightGray: '#b0b0b0',
  lighterGray: '#d8d8d8',
  lineColor: 'rgba(0, 0, 0, 0.05)',
  text: '#55606e',
  value: '#21ffa2',
  secondary: '#9896dc',
  percentageHover: 'rgba(8, 7, 48, 0.8)',
}

// [target]_[property]_[variation]_[state]

// const tokens = {
//   Funnel_fontFamily: `"Source Sans Pro", -apple-system, BlinkMacSystemFont,
//   "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
//   "Helvetica Neue", sans-serif`,
//   Funnel_FunnelLabelTitle_color: '#333',
//   Funnel_FunnelLabelValue_color: '#333',
//   Funnel_FunnelLabelPercentage_color: '#333',
// }

export default styled.div`
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
    "Helvetica Neue", sans-serif;
  display: inline-block;
  position: relative;

  svg {
    display: block;
  }

  .svg-funnel-js__labels {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &.svg-funnel-js--vertical {
      .svg-funnel-js__labels {
          flex-direction: column;
      }
  }

  .svg-funnel-js__container {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
  }

  .svg-funnel-js__labels {
    width: 100%;
    box-sizing: border-box;

    .svg-funnel-js__label {
      flex: 1 1 0;
      position: relative;

      .label__value {
        font-size: 24px;
        color: ${v.labelValueColor};
        line-height: 18px;
        margin-bottom: 6px;
        display: block;
      }

      .label__title {
        font-size: 12px;
        font-weight: bold;
        padding: 3px 0;
        color: ${v.labelTitleColor};
      }

      .label__percentage {
        font-size: 16px;
        font-weight: bold;
        color: ${v.labelPercentColor};
      }

      .label__segment-percentages {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        left: 0;
        padding: 8px 24px;
        box-sizing: border-box;
        background-color: ${v.percentageHover};
        margin-top: 24px;
        opacity: 0;
        transition: opacity 0.1s ease;
        cursor: default;
        z-index: 1;

        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;

          li {
            font-size: 13px;
            line-height: 16px;
            color: ${v.labelLightColor};
            margin: 18px 0;

            .percentage__list-label {
              font-weight: bold;
              color: ${v.primary};
              display: block;
            }
          }
        }
      }

      &:hover {
        .label__segment-percentages {
          opacity: 1;
        }
      }
    }
  }

  &:not(.svg-funnel-js--vertical) {
    padding-top: 64px;
    padding-bottom: 16px;

    .svg-funnel-js__label {
      text-align: center;
      &:not(:first-child) {
        border-left: 1px solid ${v.lineColor};
      }
    }
  }

  &.svg-funnel-js--vertical {
    padding-left: 120px;
    padding-right: 16px;

    .svg-funnel-js__label {
      padding-top: 24px;

      &:not(:first-child) {
        border-top: 1px solid ${v.lineColor};
      }

      .label__segment-percentages {
        margin-top: 0;
        margin-left: 106px;
        width: calc(100% - 106px);

        .segment-percentage__list {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }

  .svg-funnel-js__subLabels {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    position: absolute;
    width: 100%;
    left: 0;

    .svg-funnel-js__subLabel {
      display: flex;
      font-size: 12px;
      color: ${v.labelColor};
      line-height: 16px;

      &:not(:first-child) {
        margin-left: 16px;
      }

      .svg-funnel-js__subLabel--color {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 2px 8px 2px 0;
      }
    }
  }
`
