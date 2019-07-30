import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const rowStyle = {
  height: '20vh',
  marginTop: '1em',
  marginBottom: '1em',
  background: 'grey'
}

function GoogleMap() {
  return (
    <Grid.Row style={rowStyle}>
      <Grid.Column>
        <Header content="google map"></Header>
      </Grid.Column>
    </Grid.Row>
  )
}

export default GoogleMap
