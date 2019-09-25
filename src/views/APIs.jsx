/* eslint-disable no-console */
import React, { useState } from 'react'
import axios from 'axios'
import { Grid, Container, Button } from 'semantic-ui-react'

const container = {
  background: 'teal',
  height: '98vh',
  marginTop: '50px',
  padding: 10
}

const apiProxy =
  'https://us-central1-codettastone.cloudfunctions.net/api/weather'

function KanyeRest() {
  const [kanye, setKanye] = useState(null)
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  // * HTTP requests
  function pullWeather() {
    // Pleasanton
    const location = { lat: 37.6632, lon: -121.865887 }
    setLoading(true)
    axios
      .post(`${apiProxy}`, location)
      .then(res => {
        setLoading(false)
        setWeather(res.data)
      })
      .catch(err => console.log(err, 'weather'))
  }

  function pullKanye() {
    let url = `https://api.kanye.rest`
    setLoading(true)
    axios
      .get(`${url}`)
      .then(res => res.data)
      .then(data => {
        setLoading(false)
        setKanye(data.quote)
      })
      .catch(err => console.error(err))
  }

  return (
    <Container text>
      <Grid.Column>
        <Grid.Row style={{ height: '2em' }}>
          {kanye && !loading ? kanye : 'Click the button for some KaaS'}
        </Grid.Row>
        <br />
        <Grid.Row>
          <Button onClick={pullKanye}>Yeezy me!</Button>
        </Grid.Row>
        <Grid.Row style={{ height: '2em' }}>
          {weather && !loading
            ? `Currently: ${Math.round(
                weather.currently.apparentTemperature
              )} (°F) at ${new Date(
                weather.currently.time * 1000
              ).toLocaleString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}`
            : 'Click the button for some Weather'}
        </Grid.Row>
        <br />
        <Grid.Row>
          <Button onClick={pullWeather}>
            {loading ? 'Loading...' : 'Weather me!'}
          </Button>
        </Grid.Row>
      </Grid.Column>
    </Container>
  )
}

function APIs() {
  return (
    <Grid style={container}>
      <KanyeRest />
    </Grid>
  )
}

export default APIs
