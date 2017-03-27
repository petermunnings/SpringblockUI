import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = props => {
	return (
		<ul>
			<li><Link to='/home'>Home</Link></li>
			<li><Link to='/issue'>Issue</Link></li>
			<li><Link to='/trade'>Trade</Link></li>
			<li><Link to='/history'>Trade History</Link></li>
			{props.children}
		</ul>
	)
}

export default NavBar

