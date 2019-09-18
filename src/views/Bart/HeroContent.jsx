import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'

const rowStyle = {
  maxWidth: 450,
  marginTop: '2em',
  background: 'rgba(0,0,0,0.7)',
  border: 'solid 2px rgba(0,0,0,0.2)',
  paddingTop: '2em'
}

function HeroContent() {
  return (
    <Grid.Row style={rowStyle}>
      <Grid.Column>
        <Header inverted icon className="typewriter">
          <Icon name="train" />
          <Header.Content style={{ maxWidth: '130px' }} as="h1">
            Bart App
          </Header.Content>
          <Header.Subheader>
            Calculates train ETA based on your location & walking speed
          </Header.Subheader>
          <Header.Subheader>
            Leave your location within the given amount of time.
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  )
}

export default HeroContent
