import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'

// const bartKey = 'MW9S-E7SL-26DU-VV8V'
// const mapsKey = 'AIzaSyBCFO3Lg7DaNsVjeBpK3CBalUEH3RfEANE'
const accent = 'red'
const wallpaper =
  'https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80'

function BartPage() {
  return <HeroContent />
}

function HeroContent() {
  return (
    <Grid.Row
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <Grid.Column style={{ maxWidth: 600, background: 'rgba(0,0,0,0.5)', paddingTop: '2em', paddingBottom: '2em' }}>
        <Header icon color={accent} className="typewriter">
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

export default BartPage
