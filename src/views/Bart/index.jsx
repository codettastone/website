import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'
import BartSchedules from './BartSchedules'

// const mapsKey = 'AIzaSyBCFO3Lg7DaNsVjeBpK3CBalUEH3RfEANE'
const accent = 'red'
const wallpaper =
  'https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80'
const mainGridStyle = {
  backgroundImage: `url(${wallpaper})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  marginTop: '1em'
}
const heroRowStyle = {
  maxWidth: 450,
  marginTop: '2em',
  background: 'rgba(0,0,0,0.5)',
  border: 'solid 1px rgba(255,255,255,0.2)'
}

function HeroContent() {
  return (
    <Header icon color={accent} className="typewriter">
      <Icon name="train" />
      <Header.Content style={{ maxWidth: '130px' }} as="h1">
        Bart App
      </Header.Content>
      <Header.Subheader style={{ color: 'red' }}>
        Calculates train ETA based on location & walking speed
      </Header.Subheader>
    </Header>
  )
}

function BartPage() {
  return (
    <Grid stackable textAlign="center" divided="vertically" verticalAlign="middle" style={mainGridStyle}>
      <Grid.Row style={heroRowStyle}>
        <Grid.Column>
          <HeroContent />
        </Grid.Column>
      </Grid.Row>
      <BartSchedules />
    </Grid>
  )
}

export default BartPage
