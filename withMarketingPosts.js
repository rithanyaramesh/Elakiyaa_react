// src/withMarketingPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// HOC to fetch marketing posts
const withMarketingPosts = (WrappedComponent) => {
  return (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Use a real endpoint here
          setPosts(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPosts();
    }, []);

    // Pass the posts and loading state as props to the wrapped component
    return (
      <WrappedComponent
        {...props}
        posts={posts}
        loading={loading}
        error={error}
      />
    );
  };
};

export default withMarketingPosts;
