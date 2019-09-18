import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './views/Landing'
import BartPage from './views/Bart'
import AnimationPage from './views/Animations'
import APIs from './views/APIs'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/animations" component={AnimationPage} />
      <Route exact path="/apis" component={APIs} />
      <Route exact path="/bart" component={BartPage} />
    </Router>
  )
}

export default App
