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
  return (
    <Grid stackable textAlign="center" divided="vertically" style={gridStyle}>
      <HeroContent />
      <GoogleMap />
      <BartSchedules />
    </Grid>
  )
}

export default BartPage
