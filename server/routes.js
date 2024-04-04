const { Users } = require( '../src/components/users' );
const { Posts } = require( '../src/components/posts' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Users,
    },
    {
        path: '/posts',
        exact: true,
        component: Posts,
    }
];