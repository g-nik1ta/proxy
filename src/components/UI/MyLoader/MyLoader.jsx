import React from 'react';
import './MyLoader.scss';

const MyLoader = () => {
    return (
        <div className="lds__ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MyLoader;