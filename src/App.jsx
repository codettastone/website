import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './views/Landing'
import BartPage from './views/Bart'
import Navigation from './components/Navigation'
import * as ROUTES from './utilities/routes'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.BART} component={BartPage} />
    </Router>
  )
}

export default App
