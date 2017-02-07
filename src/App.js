import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './Routes';
import store from './store';
import './App.scss';

render(
	<Provider store={store}>
		<Router routes={routes} history={browserHistory} />
	</Provider>
	,document.getElementById('root'));