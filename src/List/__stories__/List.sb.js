import React from 'react'
import { storiesOf } from '@storybook/react'
// import Color from 'color'
import Card from 'util/Card'
import List, { ListItem, ListHeader, ListContent, ListDesc } from '../'
import Image from '../../Image'
import Button from '../../Button'
import { VCenter } from '../../Position'

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

  .add('List - Image', () => (
    <Card width={400} height={400}>
      <List divided relaxed>
        <ListItem>
          <ListContent fixed vcenter>
            <Image src={require('./airtable.png')} />
          </ListContent>
          <ListContent vcenter>
            <ListHeader>Airtable</ListHeader>
            <ListDesc>The best app ever to exist</ListDesc>
          </ListContent>
          <ListContent fixed vcenter>
            <Button size='sm'>10</Button>
          </ListContent>
        </ListItem>
        <ListItem>
          <Image src={require('./drive.png')} />Drive
        </ListItem>
        <ListItem>
          <Image src={require('./dropbox.png')} />Dropbox
        </ListItem>
      </List>
    </Card>
  ))

  .add('List - Data', () => (
    <Card width={400} height={400}>
      <List divided data={[
        { title: 'London' },
        { title: 'New York' },
        { title: 'San Francisco' }]} />
    </Card>
  ))
