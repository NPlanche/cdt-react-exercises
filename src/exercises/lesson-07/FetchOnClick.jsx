import { useState } from 'react';
import { getSinglePost } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    setIsLoading(true);
    setError('');
    setPost(null);

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(`Unable to load the post. ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleGetPost} disabled={isLoading}>
        Get post
      </button>

      <div className="content">
        {isLoading && <p role="status">Loading post...</p>}
        {error && <p role="alert">{error}</p>}

        {post && (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        )}
      </div>
    </div>
  );
}
