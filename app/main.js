// Libs
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
import Home from '../components/Home';
import Issue from '../components/Issue';

// Render
render((
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/issue" component={Issue} />
		</div>
	</Router >
), document.getElementById('root'));
