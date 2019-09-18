import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import wallpaper from '../images/rain-walk-red.jpg'

const gridStyle = {
    height: '98vh'
  },
  rowStyle = {
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  segmentStyle = {
    backgroundColor: 'red',
    width: '70%',
    margin: '0 15%'
  },
  headerStyle = { color: 'white' }

function Animations() {
  return (
    <Grid stackable style={gridStyle} textAlign="center" verticalAlign="middle">
      <Grid.Row style={rowStyle}>
        <Grid.Column textAlign="center">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"></script>
          <Segment basic style={segmentStyle}>
            <Header>
              <Header.Content as="h1" style={headerStyle}>
                ?
              </Header.Content>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Animations
