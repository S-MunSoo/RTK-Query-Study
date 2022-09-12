import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["Posts"], //providesTags의 태그 타입명
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
      //post를 보내고 다시 get 해오기 위해서는 tag라는 기능을 사용해야 한다
      // tag: 값요청에 대한 캐시라는 이름이다
      providesTags: [{ type: "Posts", id: "LIST" }],
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`,
      // providesTags 는 세가지 데이터를 매개변수로 받아올 수 있다
      providesTags: (result, error, postId) => [{ type: "Posts ", id: postId }],
    }),
    crearePost: builder.mutation({
      query: ({ data }) => ({
        url: "posts",
        method: "POST",
        body: data,
      }),
      //  invalidatesTags : 이미 존재하는 캐시데이터를 유효하지 않은걸로 판단한다
      invalidatesTags: (result) =>
        result ? [{ type: "Posts", id: "LIST" }] : [],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCrearePostMutation } =
  postApi;
