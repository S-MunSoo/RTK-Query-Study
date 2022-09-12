import React from "react";
import { useGetPostByIdQuery } from "../api/postApi";

const Post = () => {
  const { data: post, isLoading, isError } = useGetPostByIdQuery(1);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError || !post) {
    return <div>에러발생</div>;
  }

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
