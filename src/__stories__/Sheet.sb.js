import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Sheet from '../Sheet'

const styles = {
  margin: 30,
  height: 300,
  width: 700,
  position: 'relative',
  border: '1px solid #eee',
}

const columns = [
  { key: 'id', name: 'ID', editable: true, width: 40 },
  { key: 'title', name: 'Title', editable: true },
  { key: 'complete', name: 'Complete', editable: true },
]

const rows = [
  { id: 10, title: 'Task 1', complete: 20 },
  { id: 20, title: 'Task 2', complete: 40 },
  { id: 30, title: 'Task 3', complete: 60 },
  { id: 40, title: 'Task 4', complete: 20 },
  { id: 50, title: 'Task 5', complete: 40 },
  { id: 60, title: 'Task 6', complete: 20 },
  { id: 70, title: 'Task 7', complete: 40 },
  { id: 80, title: 'Task 8', complete: 60 },
  { id: 90, title: 'Task 9', complete: 20 },
  { id: 100, title: 'Task 10', complete: 20 },
  { id: 110, title: 'Task 11', complete: 20 },
  { id: 120, title: 'Task 12', complete: 20 },
  { id: 130, title: 'Task 13', complete: 20 },
]

const columnMenu = [{
  text: 'Rename',
  onClick: action('Rename'),
}, {
  text: 'Insert Left',
  onClick: action('Insert Left'),
}, {
  text: 'Insert Right',
  onClick: action('Insert Right'),
}, {
  text: 'Delete',
  onClick: action('Delete'),
}]

const rowMenu = [{
  text: 'Insert Above',
  onClick: action('Insert Above'),
}, {
  text: 'Insert Below',
  onClick: action('Insert Below'),
}, {
  text: 'Delete',
  onClick: action('Delete'),
}]

storiesOf('Sheet', module)
  .add('Default', () => (
    <div style={styles}>
      <Sheet
        columns={columns}
        rowCount={rows.length}
        rowGetter={i => rows[i]}
        gutterOffset={0}
      />
    </div>
  ))
  .add('Add Buttons', () => (
    <div style={styles}>
      <Sheet
        columns={columns}
        rowCount={rows.length}
        rowGetter={i => rows[i]}
        gutterOffset={0}
        columnMenu={columnMenu}
        rowMenu={rowMenu}
        onAddColumn={action('onAddColumn')}
        onAddRow={action('onAddRow')}
      />
    </div>
  ))
  .add('Read-only', () => (
    <div style={styles}>
      <Sheet
        columns={columns}
        rowCount={rows.length}
        rowGetter={i => rows[i]}
        gutterOffset={0}
        columnMenu={columnMenu}
        rowMenu={rowMenu}
        readOnly
      />
    </div>
  ))
