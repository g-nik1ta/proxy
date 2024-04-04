import MyLoader from '../UI/MyLoader/MyLoader';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';

export const Posts = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    const [fetchUserPost, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getUserPosts(id);
        setPosts(response.data);
    })

    useEffect(() => {
        fetchUserPost()
    }, [])

    return (
        <div className='ui-post'>
            <Helmet>
                <title>Post seo title!</title>
                <meta name='description' content='Post seo description' />
            </Helmet>
            {postsError &&
                <h1 className="error-message">Произошла ошибка!</h1>
            }
            <div>
                <h1>Вы открыли страницу постов пользователя с ID {id}</h1>
                {
                    isPostsLoading
                        ?
                        <MyLoader />
                        :
                        <div className="post-list">
                            {posts.map((post) =>
                                <div className="post">
                                    <div className="post__content">
                                        <strong className="post-title">{post.id}. {post.title}</strong>
                                        <div className="post-body">{post.body}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}