import React from 'react'
import { Grid } from 'semantic-ui-react'
import BartSchedules from './BartSchedules'
import HeroContent from './HeroContent'

const wallpaper =
  'https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80'
const gridStyle = {
  backgroundImage: `url(${wallpaper})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  marginTop: '1em'
}

function BartPage() {
  return (
    <Grid stackable textAlign="center" divided="vertically" style={gridStyle}>
      <HeroContent />
      <BartSchedules />
    </Grid>
  )
}

export default BartPage
