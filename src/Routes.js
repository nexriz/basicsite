import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import About from './components/About';
import Index from './components/Index';
import Create from './components/Create';
import Login from './components/Login';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Index}/>
		<Route path="about" component={About}/>
		<Route path="create" component={Create}/>
		<Route path="login" component={Login}/>
	</Route>
);
