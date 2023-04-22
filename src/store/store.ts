import { Action, configureStore, combineReducers, ThunkAction } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import user from './slices/user'

const rootReducer = combineReducers({
    user,
})
const config = {key: 'root', storage}
const persistedReducer = persistReducer(config, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.VITE_ENV !== 'production',
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)