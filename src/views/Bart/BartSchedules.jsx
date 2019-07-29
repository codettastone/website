/* eslint-disable no-console */
import React from 'react'
import { Grid, Header, List, Segment } from 'semantic-ui-react'

function BartSchedules() {
  const bartKey = 'MW9S-E7SL-26DU-VV8V'
  const abbr = 'EMBR'
  const bartUrl = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${abbr}&key=${bartKey}&json=y`

  const [routes, setRoutes] = React.useState([])

  // res = item: { abbreviation, destination, limited, estimate }
  // estimate = { bikeflag, color, hexcolor, delay, direction,
  // // length (of train), minutes (until arrival), and platform }
  function pullRoutes() {
    fetch(bartUrl)
      .then(res => res.json())
      .then(data => utilizateBartData(data.root.station[0].etd))
      .catch(err => console.log(err))
  }

  function utilizateBartData(rawRoutes) {
    setRoutes(rawRoutes)
    // rawRoutes.forEach(console.log(rawRoutes.destination))
    console.log('RawRoutes', rawRoutes)
  }

  const departureTimes = routes.map(item => (
    <Grid.Column width={5} textAlign="left" key={item.destination}>
      <Segment
        style={{ background: 'black', color: 'white' }}
        color={item.estimate[0].color.toLowerCase() === 'white' ? 'black' : item.estimate[0].color.toLowerCase()}>
        <Grid.Row>
          <Header inverted as="h4" content={`${item.destination} (${item.estimate[0].direction}bound)`} />
        </Grid.Row>
        <Grid.Row>
          <List horizontal>
            <List.Item>{item.estimate[0].minutes !== 'Leaving' && `${item.estimate[0].minutes} minutes`}</List.Item>
            <List.Item>{item.estimate[1] && `${item.estimate[1].minutes} minutes`}</List.Item>
            <List.Item>{item.estimate[2] && `${item.estimate[2].minutes} minutes`}</List.Item>
          </List>
        </Grid.Row>
      </Segment>
    </Grid.Column>
  ))

  React.useEffect(pullRoutes, [])

  return (
    <Grid.Row columns={5} style={{ margin: '0' }}>
      {departureTimes}
    </Grid.Row>
  )
}

export default BartSchedules
