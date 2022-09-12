import React, { useState } from "react";
import { useCrearePostMutation } from "../api/postApi";

const PostInput = () => {
  const [postInput, setPostInput] = useState({ title: "", body: "" });
  const [createPost, { data: post }] = useCrearePostMutation();
  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setPostInput({ ...postInput, [name]: value });
  };

  return (
    <div>
      <input type="text" name="title" onChange={inputChangeHandle} />
      <input type="text" name="body" onChange={inputChangeHandle} />
      <button onClick={() => createPost({ data: postInput })}>글쓰기</button>
    </div>
  );
};

export default PostInput;
