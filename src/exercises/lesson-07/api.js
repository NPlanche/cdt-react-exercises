const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

export async function getPosts() {
  const url = `${POSTS_ENDPOINT}?_limit=10`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not load posts (${response.status}).`);
  }

  return response.json();
}

export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  const url = `${POSTS_ENDPOINT}${postId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not load post ${postId} (${response.status}).`);
  }

  return response.json();
}
