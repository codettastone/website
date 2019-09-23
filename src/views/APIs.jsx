/* eslint-disable no-console */
import React, { useState } from 'react'
import { Grid, Container, Button } from 'semantic-ui-react'

const container = {
  background: 'teal',
  height: '98vh',
  marginTop: '50px',
  padding: 10
}

function KanyeRest() {
  const [kanye, setKanye] = useState()
  const [weather, setWeather] = useState()

  // * HTTP requests
  function pullWeather() {
    let lat = `37.663200`
    let lon = `-121.865887`
    let key = `566e89d9efc24baf7e686646e289bb00`
    let url = `https://api.darksky.net/forecast/${key}/${lat},${lon}`

    fetch(`${url}`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.log(err))
  }

  function pullKanye() {
    let url = `https://api.kanye.rest`
    fetch(`${url}`)
      .then(res => res.json())
      .then(data => setKanye(data.quote))
      .catch(err => console.error(err))
  }

  weather && console.log(weather)

  return (
    <Container text>
      <Grid.Column>
        <Grid.Row style={{ height: '2em' }}>
          {kanye ? kanye : 'Click the button for some KaaS'}
        </Grid.Row>
        <br />
        <Grid.Row>
          <Button onClick={pullKanye}>Yeezy me!</Button>
        </Grid.Row>
        <Grid.Row style={{ height: '2em' }}>
          {weather
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
          <Button onClick={pullWeather}>Weather me!</Button>
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
