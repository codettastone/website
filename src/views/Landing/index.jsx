import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import wallpapers from '../../utilities/wallpapers'

const randomNumber = Math.floor(Math.random() * (+wallpapers.length - +0))
const randomWallpaper = wallpapers[randomNumber]

const gridStyle = {
    height: '98vh'
  },
  rowStyle = {
    backgroundImage: `url(${randomWallpaper.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  segmentStyle = {
    backgroundColor: randomWallpaper.accent,
    width: '70%',
    margin: '0 15%'
  },
  headerStyle = { color: randomWallpaper.font }

function Landing() {
  return (
    <Grid stackable style={gridStyle} textAlign="center" verticalAlign="middle">
      <Grid.Row style={rowStyle}>
        <Grid.Column textAlign="center">
          <Segment basic style={segmentStyle}>
            <Header>
              <Header.Content as="h1" style={headerStyle}>
                codettastone
              </Header.Content>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Landing
