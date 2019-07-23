import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'

// const bartKey = 'MW9S-E7SL-26DU-VV8V'
// const mapsKey = 'AIzaSyBCFO3Lg7DaNsVjeBpK3CBalUEH3RfEANE'
const accent = 'red'

function BartPage() {
  return <HeroContent />
}

function HeroContent() {
  return (
    <Grid.Row style={{ maxWidth: 450, paddingTop: '2em', paddingBottom: '2em', margin: 0 }}>
      <Grid.Column>
        <Header as="h2" icon color={accent} className="typewriter">
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
