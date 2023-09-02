import { useEffect, useState } from "react"
import { Posts } from "../components/posts"
import { Comments } from "../components/comments"
import React from "react";

export default function Home() {
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        const firstHundredComments = data.slice(0, 100);
        setComments(firstHundredComments);
      });
  }, []);
  return (
    <div className="grid grid-cols-2 gap-2 max-h-screen">
      <Posts comments={comments} setPostId={setPostId} />
      <Comments comments={comments} postId={postId} />
    </div>
  )
}
