import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import BlockchainConfig from './components/BlockchainConfig';

const store = configureStore();

render(
	<Provider store={store}>
		<HashRouter>
			<div>
				<Route exact path="/" component={BlockchainConfig} />
				<Route path="/home" component={BlockchainConfig} />
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('app')
);
