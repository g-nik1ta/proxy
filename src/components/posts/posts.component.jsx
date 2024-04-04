import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const Posts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const fetchData = async () => {
        console.log('Post.fetchData()');
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/3');
            setTitle(response.data.title);
            setDescription(response.data.body);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error appropriately, e.g., display an error message
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='ui-post'>
            <Helmet>
                <title>Post seo title!</title>
                <meta name='description' content='Post seo description' />
            </Helmet>
            <p className='ui-post__title'>Post Widget</p>
            {
                isLoading ? 'loading...' : (
                    <div className='ui-post__body'>
                        <p className='ui-post__body__title'>{title}</p>
                        <p className='ui-post__body__description'>{description}</p>
                    </div>
                )
            }
        </div>
    )
}