import { useEffect, useState } from "react";
import usePosts from "./usePosts";
import { getPostById as getPostByIdApi } from "../services/postsApi";
import { useParams } from "react-router";

export default function useSpecificPost() {
  const [currentPost, setCurrentPost] = useState({ empty: true });
  const { getPostById, isAnyPostLoaded } = usePosts();
  const { id } = useParams();
  const [postId, setPostId] = useState(id);

  useEffect(() => {
    setPostId(id);
  }, [id]);

  useEffect(() => {
    isAnyPostLoaded()
      ? setCurrentPost(getPostById(parseInt(postId)))
      : getPostByIdApi(parseInt(postId))
          .then((res) => setCurrentPost(res))
          .catch((err) => console.log(err));
  }, [postId]); //eslint-disable-line
  return { postId, currentPost, setPostId, setCurrentPost };
}
