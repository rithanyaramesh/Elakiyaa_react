// src/MarketingPosts.js
import React from 'react';
import withMarketingPosts from './withMarketingPosts';

const MarketingPosts = ({ posts, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error}</div>;

  return (
    <div>
      <h1>Marketing Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Wrap the component with the HOC
export default withMarketingPosts(MarketingPosts);
