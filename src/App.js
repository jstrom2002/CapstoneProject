//Referencing BarChart.js in App.js

import React, { Component } from 'react'
import './App.css'
import BarChart from './BarChart'
import { parseXLSX} from "./xlsParser";
//import { parseXLSX } from './xlsParser'
//import XMLloader from './XMLloader'

class App extends Component {
  render() {
    return (
        <div className='App'>
          <div className='App-header'>
            <h2>CMPT 495 Capstone Project</h2>
          </div>
            <script>parseXLSX()</script>
            Bar Chart 1
          <div>
              <BarChart data={[5,10,1,3]} size={[600,200]} /></div>
            Bar Chart 2
            <div><BarChart data={[4,3.94,5,5,4,3,1,2,1,4,6,4,,2.3,5,13]} size={[600,200]} /></div>
            Bar Chart 3
            <div><BarChart data={[5,3.9,3,2.8,2]} size={[600,200]} /></div>
          </div>
    )
  }
}

export default App