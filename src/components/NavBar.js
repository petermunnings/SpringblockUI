import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = props => {

  var ul = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#333"
	};

	var li = {
    float: "left",
    borderRight: "1px solid #bbb"
	};

  var li_a = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none"
  };

	return (
		<div>
			<ul style={ul}>
				<li style={li}><Link to='/home' style={li_a}>Home</Link></li>
				<li style={li}><Link to='/issue' style={li_a}>Issue</Link></li>
				<li style={li}><Link to='/trade' style={li_a}>Trade</Link></li>
				<li style={li}><Link to='/history' style={li_a}>Trade History</Link></li>
				{props.children}
			</ul>
			<h1>Welcome to Springblock.  The South African Financial Services testing ground for blockchains</h1>
		</div>
	)
}

export default NavBar
