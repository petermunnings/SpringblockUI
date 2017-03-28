import React, { Component } from 'react'
import { createStore } from 'redux'
import blockConfig from '../reducers'
import NavBar from './NavBar'
import FetchConfig from './FetchConfig'


class Home extends Component {

  render() {
    return (
			<div>
				<NavBar></NavBar>
				<h1>Welcome to the Springblock blockchain viewer</h1>
				<FetchConfig></FetchConfig>
				<div>----</div>
				<div>
					<span>Blockchain technology&nbsp;&nbsp;</span>
					<span>Test Blockchain</span>
				</div>
				<div>
					<span>Organisation&nbsp;&nbsp;</span>
					<span>Test Org</span>
				</div>
				<div>
					<span>Cash balance&nbsp;&nbsp;</span>
					<span>1000</span>
				</div>
			</div>
    )
  }
}

export default Home

