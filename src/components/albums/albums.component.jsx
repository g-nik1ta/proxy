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
        <div className='ui-album'>
            <Helmet>
                <title>Album seo title!</title>
                <meta name='description' content='Album seo description' />
            </Helmet>
            {albumsError &&
                <h1 className="error-message">An error has occurred!</h1>
            }
            <div>
                <h1>You have opened the albums page of the user with ID {id}</h1>
                {
                    isAlbumsLoading
                        ?
                        <MyLoader />
                        :
                        <div className='post-list'>
                            {albums.map((album) =>
                                <div className="post">
                                    <div className="post__content">
                                        <strong className="post-title">{album.id}. {album.title}</strong>
                                        {/* <div className="post-body"></div> */}
                                    </div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}