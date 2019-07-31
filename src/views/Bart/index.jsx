import React from 'react'
import { Grid } from 'semantic-ui-react'
import BartSchedules from './BartSchedules'
import GoogleMap from './GoogleMap'
import HeroContent from './HeroContent'

import './styles.css'

const gridStyle = {
  marginTop: '1em'
}

function BartPage() {
  const [location, setLocation] = React.useState({})

  return (
    <Grid stackable textAlign="center" divided="vertically" style={gridStyle}>
      <HeroContent />
      <GoogleMap location={location} setLocation={setLocation} />
      <BartSchedules location={location} />
    </Grid>
  )
}

export default BartPage
