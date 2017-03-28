// Libs
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Components
import Home from '../components/Home';
import Issue from '../components/Issue';
import Trade from '../components/Trade';
import History from '../components/History';

import reducer from '../reducers'

const store = createStore(reducer)

store.subscribe(() =>
	console.log('store state: ', store.getState())
)

// Render
render((
  <Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/issue" component={Issue} />
				<Route path="/trade" component={Trade} />
				<Route path="/history" component={History} />
			</div>
		</Router>
	</Provider>
), document.getElementById('root'));
