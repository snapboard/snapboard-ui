import React from 'react'
import { storiesOf } from '@storybook/react'
// import Color from 'color'
import Card from 'util/Card'
import List, { ListItem, ListContent } from '../'

storiesOf('Components/List', module)
  .add('List - Celled', () => (
    <Card width={400} height={400}>
      <List celled>
        <ListItem>London</ListItem>
        <ListItem>New York</ListItem>
        <ListItem>San Francisco</ListItem>
      </List>
    </Card>
  ))

  .add('List - Divided', () => (
    <Card width={400} height={400}>
      <List divided>
        <ListItem>London</ListItem>
        <ListItem>New York</ListItem>
        <ListItem>San Francisco</ListItem>
      </List>
    </Card>
  ))

  .add('List - Relaxed', () => (
    <Card width={400} height={400}>
      <List divided relaxed>
        <ListItem>London</ListItem>
        <ListItem>New York</ListItem>
        <ListItem>San Francisco</ListItem>
      </List>
    </Card>
  ))

  .add('List - Content', () => (
    <Card width={400} height={400}>
      <List divided relaxed>
        <ListItem>
          <ListContent>
            London
          </ListContent>
          <ListContent fixed>
            <button>Visit</button>
          </ListContent>
        </ListItem>
        <ListItem>
          <ListContent>
            New York
          </ListContent>
          <ListContent fixed>
            <button>Visit</button>
          </ListContent>
        </ListItem>
        <ListItem>
          <ListContent>
            San Francisco
          </ListContent>
          <ListContent fixed>
            <button>Visit</button>
          </ListContent>
        </ListItem>
      </List>
    </Card>
  ))

  .add('List - Selection', () => (
    <Card width={400} height={400}>
      <List divided relaxed selection>
        <ListItem>London</ListItem>
        <ListItem>New York</ListItem>
        <ListItem>San Francisco</ListItem>
      </List>
    </Card>
  ))
