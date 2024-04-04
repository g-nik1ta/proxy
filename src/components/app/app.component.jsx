import React from 'react';
import { NavLink as Link, Route, Switch } from 'react-router-dom';

// import child components
import { Users } from '../users';
import { Posts } from '../posts';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const App = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>React App</title>
                <meta name='description' content='Web site created using create-react-app' />
            </Helmet>
            <div className='ui-app'>
                {/* navigation */}
                <div className='ui-app__navigation'>
                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/'
                        exact={true}
                    >Counter</Link>

                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/posts'
                        exact={true}
                    >Post</Link>
                </div>

                <Switch>
                    <Route
                        path='/'
                        exact={true}
                        component={Users}
                    />

                    <Route
                        path='/posts'
                        exact={true}
                        component={Posts}
                    />
                </Switch>

            </div>
        </HelmetProvider>
    )
}