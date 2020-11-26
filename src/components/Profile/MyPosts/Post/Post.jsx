import React from 'react';
import s from './Post.module.css';

const Post = ({message, src, likeCount}) => {
    return (
        <div className={s.item}>
            <img src={src} alt=""/>
            {message}
            <div>
                <span>{likeCount} like</span>
            </div>
        </div>
    )
}

export default Post;