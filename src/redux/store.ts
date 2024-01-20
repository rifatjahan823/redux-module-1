import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice/counterSlice'
import logger from './middleware/logger'
// import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools:true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch