import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/app';
import basename from '../config';
import { HashRouter } from 'react-router-dom';

ReactDOM.hydrate( <HashRouter basename={basename}><App/></HashRouter>, document.getElementById( 'app' ) );