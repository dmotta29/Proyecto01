import React from 'react'
import './Button.css'
import Home from './Home'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Confirmation from './Confirmation'
 
class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
render() {
  return (
    <Router>
  <div>
    <Route path = '/' exact strict component = {Home}/>
    <Route path = '/confirmation' exact strict component = {Confirmation}/>
  </div>
  </Router>
  )
}  
}


export default App