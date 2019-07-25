import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import wallpapers from '../../utilities/wallpapers'

const randomNumber = Math.floor(Math.random() * (+wallpapers.length - +0))
const randomWallpaper = wallpapers[randomNumber]

function Landing() {
  return (
    <Grid.Row
      style={{
        // backgroundImage: `url(${testerWallpaper})`,
        backgroundImage: `url(${randomWallpaper.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <Grid.Column textAlign="center">
        <Segment
          basic
          style={{
            backgroundColor: randomWallpaper.accent,
            width: '70%',
            margin: '0 15%'
          }}>
          <Header>
            <Header.Content as="h1" style={{ color: randomWallpaper.font }}>
              codettastone
            </Header.Content>
          </Header>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Landing
