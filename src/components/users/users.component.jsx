import MyLoader from '../UI/MyLoader/MyLoader';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { NavLink as Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await PostService.getAllUsers();
        setUsers(response.data);
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    const sortedSearchUsers = useUsers(users, filter.sort, filter.query);

    const options = [
        { value: 'asc', name: 'Ascending' },
        { value: 'desc', name: 'Descending' },
    ]

    return (
        <div className='container'>
            <Helmet>
                <title>User Page title</title>
                <meta name='description' content='User Page description' />
            </Helmet>
            <label className="label" htmlFor="search">
                Search
            </label>
            <input
                className="input"
                type="text"
                id='search'
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder='Search...'
            />
            <select
                className="select"
                value={filter.sort}
                onChange={event => setFilter({ ...filter, sort: event.target.value })}
            >
                <option disabled value="">Sort by</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
            {usersError &&
                <h1>An error has occurred!</h1>
            }
            {
                isUsersLoading
                    ?
                    <div>
                        <MyLoader />
                    </div>
                    :
                    <div className="user-list">
                        <h1 style={{ textAlign: 'center' }}>
                            A list of users
                        </h1>
                        {sortedSearchUsers.map((user) =>
                            <div className="user-card">
                                <div className="user-name">
                                    {user.id}. {user.name}
                                </div>
                                <div className='username'>
                                    Username is: <b>{user.username}</b>
                                </div>
                                <div className="user-links">
                                    <Link className="link" to={`/user/post/${user.id}`} exact={true}>
                                        Open list of posts
                                    </Link>
                                    <Link className="link" to={`/user/albums/${user.id}`} exact={true}>
                                        Open album list
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
            }
        </div>
    )
}