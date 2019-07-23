import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import LandingPage from './views/Landing'
import BartPage from './views/Bart'
import Navigation from './components/Navigation'
import * as ROUTES from './utilities/routes'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Grid
        stackable
        style={{
          height: '98vh'
        }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.BART} component={BartPage} />
      </Grid>
    </Router>
  )
}

export default App
