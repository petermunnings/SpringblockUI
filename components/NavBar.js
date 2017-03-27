import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = props => {
	return (
		<ul>
			<li><Link to='/home'>Home</Link></li>
			<li><Link to='/issue'>Issue</Link></li>
			{props.children}
		</ul>
	)
}

export default NavBar

