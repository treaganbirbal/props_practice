import React from 'react';

const Post = (props) => {
    const { id, title, body } = props.post;
    return (
        <section id={id}>
         <h3>{ title }</h3>
         <p>{ body }</p>
        </section>
    )
}

export default Post