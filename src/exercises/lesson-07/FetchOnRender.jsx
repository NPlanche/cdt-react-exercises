import { useEffect, useState } from 'react';
import { getPosts } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      try {
        const data = await getPosts();
        if (active) setPosts(data);
      } catch (err) {
        if (active) setError(`Unable to load posts. ${err.message}`);
      } finally {
        if (active) setIsLoading(false);
      }
    }

    loadPosts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        {isLoading && <p role="status">Loading posts...</p>}
        {error && <p role="alert">{error}</p>}

        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
