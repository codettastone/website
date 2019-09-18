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

  function pullKanye() {
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      // eslint-disable-next-line no-console
      .then(data => setKanye(data.quote))
      // eslint-disable-next-line no-console
      .catch(err => console.error(err))
  }

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
