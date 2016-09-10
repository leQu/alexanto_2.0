import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createHistory } from 'history';

import css from './styles/style.styl';

import App from './components/App';
import Anna from './components/Anna';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/anna" component={Anna}/>
        <Route path="/peter" component={App}/>
        <Route path="*" component={App}/>
    </Router>
)

render(routes, document.getElementById('root'));
