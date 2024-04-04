const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router-dom');

// create express application
const app = express();

// import App component
const { App } = require('../src/components/app');

const routes = require('./routes'); // Импортируем маршруты

// serve static assets
app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));
// app.use(express.static(path.resolve(__dirname, '../dist/build')));

// for any other requests, send `index.html` as a response
app.use('*', async (req, res) => {
    const match = routes.find(route => matchPath(req.originalUrl, route));

    if (match) {
        // read `index.html` file
        let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
            encoding: 'utf8',
        });

        // get HTML string from the `App` component
        let appHTML = ReactDOMServer.renderToString(
            <StaticRouter location={req.originalUrl} >
                <App />
            </StaticRouter>
        );

        // populate `#app` element with `appHTML`
        indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

        // set header and status
        res.contentType('text/html');
        res.status(200);

        return res.send(indexHTML);
    } else {
        res.status(404).send('Not Found');
    }
});

// run express server on port 9000
app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});