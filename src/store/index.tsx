import { combineReducers, createStore } from 'redux';
import {appReducer} from './reducers';

const store = createStore(combineReducers({appReducer}));

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;