import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

const redCathedral =
  'https://images.unsplash.com/photo-1507491910083-29fad9a7778e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80'

function Landing() {
  return (
    <Grid.Row
      centered="true"
      style={{
        backgroundImage: `url(${redCathedral})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Grid.Column textAlign="center">
        <Segment basic inverted style={{ width: '80%', margin: '0 10%' }}>
          <Header as="h1">
            <Header.Content>codettastone</Header.Content>
          </Header>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Landing
