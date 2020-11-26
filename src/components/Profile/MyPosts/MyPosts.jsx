import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({addNewPost, updateNewPostText, posts, newPostText}) => {

    let newPost = React.createRef();
    let postElements = posts.map(post => <Post likeCount={post.likeCount} message={post.message} src={post.src}/>)


    let onAddPost = () => {
        addNewPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={newPostText} onChange={onPostChange} ref={newPost} name="" id="" cols="20" rows="5"></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;