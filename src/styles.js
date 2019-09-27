import { css } from '@emotion/core'

export default {
  cell: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 0 .5em;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    cursor: default;
    user-select: none;
  `,
}
