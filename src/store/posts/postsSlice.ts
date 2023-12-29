import { createSlice } from "@reduxjs/toolkit";

import { StoreProps } from "../../interfaces/interfaces";

import posts from "../../posts.json"

const initialState:StoreProps = {
  posts,
  ascendent: false,
  descendent: false
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    orderAscendingPosts: (state: StoreProps) => {
      state.posts.sort((a, b) => a.votes - b.votes)
      state.ascendent = true
      state.descendent = false
    },
    orderDescendingPosts: (state: StoreProps) => {
      state.posts.sort((a, b) => b.votes - a.votes)
      state.ascendent = false
      state.descendent = true
    },
    likePost: (state, action: { payload: { id: number } }) => {
      const post = state.posts.find(post => post.id === action.payload.id);
      if (post) {
        post.votes++;
      }
    },
    dislikePost: (state, action: { payload: { id: number } }) => {
      const post = state.posts.find(post => post.id === action.payload.id);
      if (post) {
        post.votes--;
      }
    }
  }
}) ;

export const {
  orderAscendingPosts,
  orderDescendingPosts,
  likePost,
  dislikePost
} = postsSlice.actions