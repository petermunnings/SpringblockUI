import React from 'react'
import NavBar from './NavBar';
const Home = () => 
	<div>
		<NavBar></NavBar>
		<h1>Welcome to the Springblock blockchain viewer</h1>
		<div>
			<span>Url of Rest Services&nbsp;&nbsp;</span>
			<span>
				<input type="text" />
			</span>
		</div>
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
export default Home

