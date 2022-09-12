import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../api/postApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // postApi의 키값으로 쓰겠다
    [postApi.reducerPath]: postApi.reducer,
  },
  // 요청보내는 미들웨어 비동기를 스토어에서 한꺼번에 관리한다
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

// 특정한 사용자의 행동이나 요소변화에 따라서 요청 변화를 보내고 싶을때 사용
setupListeners(store.dispatch);
