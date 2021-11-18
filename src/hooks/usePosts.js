import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

//TODO custom hook entire
const usePosts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const removePostFromContext = (id) => {};
  return {};
};

export default usePosts;
