import React, { createContext, useState, useEffect } from "react";
import { getAllPosts } from "../services/postsApi";
export const PostsContext = createContext();
export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
