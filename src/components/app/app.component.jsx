import React from 'react';
import { NavLink as Link, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import child components
import { Users } from '../users';
import { Posts } from '../posts';
import { Albums } from '../albums';

export const App = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>Common seo title</title>
                <meta name='description' content='Common seo description' />
            </Helmet>
            <div className='ui-app'>
                {/* navigation */}
                <div className='ui-app__navigation'>
                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/'
                        exact={true}
                    >Users List</Link>
                </div>

                <Switch>
                    <Route
                        path='/'
                        exact={true}
                        component={Users}
                    />

                    <Route
                        path='/user/post/:id'
                        exact={true}
                        component={Posts}
                    />

                    <Route
                        path='/user/albums/:id'
                        exact={true}
                        component={Albums}
                    />
                </Switch>

            </div>
        </HelmetProvider>
    )
}