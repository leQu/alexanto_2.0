import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import css from './styles/style.styl';

import App from './components/App';
import Anna from './components/Anna';
import Peter from './components/Peter';
import Alexander from './components/Alexander';
import Antonia from './components/Antonia';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/anna" component={Anna}/>
        <Route path="/peter" component={Peter}/>
        <Route path="/alexander" component={Alexander}/>
        <Route path="/antonia" component={Antonia}/>
    </Router>
)

render(routes, document.getElementById('root'));
