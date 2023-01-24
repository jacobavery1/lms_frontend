import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const _persistReducer = persistReducer({ key: 'root', storage }, userReducer)

export const store = configureStore({
    reducer: {
        user: _persistReducer, 
        middleware: [thunk]
    }
})

export const persistor = persistStore(store)