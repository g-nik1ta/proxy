import MyLoader from '../UI/MyLoader/MyLoader';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { NavLink as Link } from 'react-router-dom';

export const Users = () => {
    const [users, setUsers] = useState([]);

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await PostService.getAllUsers();
        setUsers(response.data);
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <Helmet>
                <title>users seo title!</title>
                <meta name='description' content='users seo description' />
            </Helmet>
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
                        {users.map((user) =>
                            <div className="post">
                                <div className="post__content">
                                    <strong>{user.id}. {user.name}</strong>
                                    <div>
                                        {user.email}
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