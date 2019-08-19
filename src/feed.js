import React from 'react';
import Post from './post.js';

const Feed = (props) =>{
   const eachPost = props.allPosts.map(post => {
        return <Post post={post}  />
    })    

    return eachPost
    
       
}

export default Feed;