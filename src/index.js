import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import BlockchainConfig from './components/BlockchainConfig';
import Issue from './components/Issue';
import Trade from './components/Trade';
import History from './components/History';

const store = configureStore();

render(
	<Provider store={store}>
		<HashRouter>
			<div>
				<Route exact path="/" component={BlockchainConfig} />
				<Route path="/home" component={BlockchainConfig} />
				<Route path="/issue" component={Issue} />
				<Route path="/trade" component={Trade} />
				<Route path="/history" component={History} />
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('app')
);
