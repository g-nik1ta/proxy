import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './components/app';
import basename from '../config';

ReactDOM.render( <HashRouter basename={basename}><App/></HashRouter>, document.getElementById( 'app' ) );