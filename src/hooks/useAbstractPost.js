import { useState } from "react";

export default function useAbstractPost() {
  const [post, setPost] = useState({ userId: 2 });

  return { post, setPost };
}
