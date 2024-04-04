import MyLoader from '../UI/MyLoader/MyLoader';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';

export const Albums = () => {
    const { id } = useParams();
    const [albums, setAlbums] = useState([]);

    const [fetchUserAlbum, isAlbumsLoading, albumsError] = useFetching(async () => {
        const response = await PostService.getUserAlbums(id);
        setAlbums(response.data);
    })

    useEffect(() => {
        fetchUserAlbum()
    }, [])

    return (
        <div className='ui-post'>
            <Helmet>
                <title>Post seo title!</title>
                <meta name='description' content='Post seo description' />
            </Helmet>
            {albumsError &&
                <h1>Произошла ошибка!</h1>
            }
            <div>
                <h1>Вы открыли страницу альбомов пользователя с ID {id}</h1>
                {
                    isAlbumsLoading
                        ?
                        <MyLoader />
                        :
                        <div>
                            {albums.map((album) =>
                                <div className="post">
                                    <div className="post__content">
                                        <strong>{album.id}.</strong>
                                        <div>
                                            {album.title}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}