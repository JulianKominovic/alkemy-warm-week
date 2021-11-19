import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

const usePosts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const getAllPosts = () => posts;
  const removePostFromContext = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const getPostById = (id) => posts.find((post) => post.id === id);
  const modifyPost = (id, newPost) => {
    setPosts(
      posts.map((post) => {
        return post.id === id ? newPost : post;
      })
    );
  };
  const addPost = (newPost) => setPosts((prev) => [...prev, { ...newPost }]);
  const isAnyPostLoaded = () => posts.length > 0;
  return {
    getAllPosts,
    removePostFromContext,
    getPostById,
    modifyPost,
    addPost,
    isAnyPostLoaded,
  };
};

export default usePosts;
