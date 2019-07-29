import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'

const rowStyle = {
  maxWidth: 450,
  marginTop: '2em',
  background: 'rgba(0,0,0,0.5)',
  border: 'solid 1px rgba(255,255,255,0.2)'
}

function HeroContent() {
  return (
    <Grid.Row style={rowStyle}>
      <Grid.Column>
        <Header icon color="red" className="typewriter">
          <Icon name="train" />
          <Header.Content style={{ maxWidth: '130px' }} as="h1">
            Bart App
          </Header.Content>
          <Header.Subheader style={{ color: 'red' }}>
            Calculates train ETA based on location & walking speed
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  )
}

export default HeroContent
