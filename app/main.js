// Libs
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
import Home from '../components/Home';
import Issue from '../components/Issue';
import Trade from '../components/Trade';
import History from '../components/History';

// Render
render((
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/issue" component={Issue} />
			<Route path="/trade" component={Trade} />
			<Route path="/history" component={History} />
		</div>
	</Router >
), document.getElementById('root'));
