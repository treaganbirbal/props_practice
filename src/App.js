import React from 'react';
import logo from './logo.svg';
import './App.css';
import blog_posts from './blog_posts.json';
import Feed from './feed.js';
import Post from './post.js';

class App extends React.Component {
  state = {
    allPosts: blog_posts,
  }
  render(){
    const {allPosts} = this.state
  return (
    <div className="App">
      
        <Post allPosts={ allPosts } />
      
    </div>
  );
  }
}

export default App;
