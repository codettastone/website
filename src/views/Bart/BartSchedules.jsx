/* eslint-disable no-console */
import React from 'react'
import { Grid, Header, List, Segment, Transition } from 'semantic-ui-react'

function BartSchedules() {
  const [routes, setRoutes] = React.useState([])
  const [station] = React.useState('EMBR')
  const [state, setState] = React.useState({ visible: false })

  const bartKey = 'MW9S-E7SL-26DU-VV8V'
  const bartUrl = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${station}&key=${bartKey}&json=y`
  const segmentStyle = { background: 'rgba(0,0,0,0.5)', color: 'white' }
  // res = item: { abbreviation, destination, limited, estimate }
  // estimate = { bikeflag, color, hexcolor, delay, direction,
  // // length (of train), minutes (until arrival), and platform }
  function pullRoutes() {
    fetch(bartUrl)
      .then(res => res.json())
      .then(data => utilizateBartData(data.root.station[0].etd))
      .catch(err => console.log(err))
  }

  const toggleVisibility = () => setState(prevState => ({ visible: !prevState.visible }))

  // Mainly for troubleshooting data-related issues
  function utilizateBartData(rawRoutes) {
    setRoutes(rawRoutes)
    setTimeout(toggleVisibility, 1000)
  }

  const departureTimes = routes.map(item => (
    <Grid.Column width={5} textAlign="center" key={item.destination}>
      <Transition visible={state.visible} animation="scale" duration={1000}>
        <Segment compact style={segmentStyle} color={item.estimate[0].color.toLowerCase()}>
          <Header inverted as="h4" content={`${item.destination}`} />
          <List horizontal>
            <List.Item>{item.estimate[0].minutes !== 'Leaving' && `${item.estimate[0].minutes} minutes`}</List.Item>
            <List.Item>{item.estimate[1] && `${item.estimate[1].minutes} minutes`}</List.Item>
            <List.Item>{item.estimate[2] && `${item.estimate[2].minutes} minutes`}</List.Item>
          </List>
        </Segment>
      </Transition>
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
