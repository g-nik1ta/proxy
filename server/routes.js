const { Users } = require( '../src/components/users' );
const { Posts } = require( '../src/components/posts' );
const { Albums } = require('../src/components/albums');

module.exports = [
    {
        path: '/',
        exact: true,
        component: Users,
    },

    {
        path: '/user/post/:id',
        exact: true,
        component: Posts,
    },
    {
        path: '/user/albums/:id',
        exact: true,
        component: Albums,
    },
];