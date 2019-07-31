/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, List, Segment, Transition } from 'semantic-ui-react'

function BartSchedules({ location }) {
  const [routes, setRoutes] = React.useState([])
  const [state, setState] = React.useState({ station: 'EMBR', visible: false })

  const bartKey = 'MW9S-E7SL-26DU-VV8V'
  const bartUrl = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${state.station}&key=${bartKey}&json=y`
  const segmentStyle = { background: 'rgba(0,0,0,0.7)', color: 'white' }

  function pullRoutes() {
    fetch(bartUrl)
      .then(res => res.json())
      // res = item: { abbreviation, destination, limited, estimate }
      .then(data => {
        // estimate = { bikeflag, color, hexcolor, delay, direction,
        // length (of train), minutes (until arrival), and platform }
        utilizateBartData(data.root.station[0].etd)
        setTimeout(setState((state.visible = true)), 1000)
      })
      .catch(err => console.log(err))
  }

  function utilizateBartData(rawRoutes) {
    setRoutes(rawRoutes)
  }

  const departureTimes = routes.map(item => (
    <Grid.Column width={5} textAlign="left" style={{ margin: '.5em', padding: 0 }} key={item.destination}>
      <Header inverted as="h2" content={`Embarcadero ${location.lon}`} />
      <Transition visible={state.visible} animation="scale" duration={1000}>
        <Segment compact style={segmentStyle}>
          <Header as="h4" color={item.estimate[0].color.toLowerCase()} content={`${item.destination}`} />
          <List horizontal>
            <List.Item>{item.estimate[0].minutes === 'Leaving' && `${item.estimate[0].minutes}`}</List.Item>
            <List.Item>{item.estimate[0].minutes !== 'Leaving' && `${item.estimate[0].minutes} minutes`}</List.Item>
            <List.Item>{item.estimate[1] && `${item.estimate[1].minutes} minutes`}</List.Item>
            <List.Item>{item.estimate[2] && `${item.estimate[2].minutes} minutes`}</List.Item>
          </List>
        </Segment>
      </Transition>
    </Grid.Column>
  ))

  React.useEffect(pullRoutes, [])

  return <Grid.Row>{departureTimes}</Grid.Row>
}

BartSchedules.propTypes = {
  location: PropTypes.object
}

export default BartSchedules
