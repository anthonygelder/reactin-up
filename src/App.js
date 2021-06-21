import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Box from './Box.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    const color = 'green'
    return (
      <div>
        <h1>Hello there</h1>
        <Box color={color}/>
      </div>
    );
  }
}

export default App;