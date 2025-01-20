import React from 'react';
import Post from './Post';  // Component to display a single post

const NewsFeed = () => {
  const posts = [
    { id: 1, content: "Learning React is awesome!" },
    { id: 2, content: "Just finished a project!" },
    { id: 3, content: "Can't wait for the next React update!" },
  ];

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
};

export default NewsFeed;
