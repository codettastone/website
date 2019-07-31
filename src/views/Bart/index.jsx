import React from 'react'
import { Grid, Label } from 'semantic-ui-react'
import BartSchedules from './BartSchedules'
import GoogleMap from './GoogleMap'
import HeroContent from './HeroContent'

import './styles.css'

const gridStyle = {
  marginTop: '1em'
}
const labelStyle = { paddingLeft: '3em', background: 'rgba(0,0,0)', color: 'white', textAlign: 'center' }

function BartPage() {
  const [location, setLocation] = React.useState({
    userLocation: { lat: null, lng: null },
    gMarker: { lat: 37.78954, lng: -122.389988 },
    nearestLocation: {
      position: { lat: 0, lng: 0 },
      address: '',
      station: 'Embarcadero',
      abbr: 'EMBR',
      distance: 666,
      minutes: '11 minutes'
    }
  })
  return (
    <Grid stackable textAlign="center" divided="vertically" style={gridStyle}>
      <HeroContent />
      <GoogleMap location={location} setLocation={setLocation} />
      <Grid.Row>
        <Label
          style={labelStyle}
          attached="top left"
          content={`${location.nearestLocation.station} station is ${location.nearestLocation.minutes} away`}
        />
      </Grid.Row>
      <BartSchedules location={location} />
    </Grid>
  )
}

export default BartPage
