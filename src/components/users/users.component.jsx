import MyLoader from '../UI/MyLoader/MyLoader';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { NavLink as Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';

export const Users = () => {
    const [users, setUsers] = useState([]);
    // const [search, setSearch] = useState('');
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
        { value: 'asc', name: 'По возрастанию' },
        { value: 'desc', name: 'По убыванию' },
    ]

    return (
        <div>
            <Helmet>
                <title>users seo title!</title>
                <meta name='description' content='users seo description' />
            </Helmet>
            <label htmlFor="search">
                Поиск
            </label>
            <input
                type="text"
                id='search'
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск...'
            />
            <select
                value={filter.sort}
                onChange={event => setFilter({ ...filter, sort: event.target.value })}
            >
                <option disabled value="">Соритировка по</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
            {usersError &&
                <h1>Произошла ошибка!</h1>
            }
            {
                isUsersLoading
                    ?
                    <div>
                        <MyLoader />
                    </div>
                    :
                    <div>
                        <h1 style={{ textAlign: 'center' }}>
                            Список пользователей
                        </h1>
                        {sortedSearchUsers.map((user) =>
                            <div className="post">
                                <div className="post__content">
                                    <strong>{user.id}. {user.name}</strong>
                                    <div>
                                        Username is: <b>{user.username}</b>
                                    </div>
                                </div>
                                <div className="post__btn">
                                    <Link to={`/user/post/${user.id}`} exact={true}>
                                        Открыть список постов
                                    </Link>
                                    <br />
                                    <Link to={`/user/albums/${user.id}`} exact={true}>
                                        Открыть список альбомов
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
            }
        </div>
    )
}