import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Fetch posts on page load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 20)));
  }, []);

  // Update post (CRUD - Update)
  const updatePost = (id, newTitle, newBody) => {
    setPosts(
      posts.map(post =>
        post.id === id
          ? { ...post, title: newTitle, body: newBody }
          : post
      )
    );
  };

  // Delete post (CRUD - Delete)
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};
