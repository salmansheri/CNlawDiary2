import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'; 

import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER


} from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root', 
    version: 1,
    storage,
}

export const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: {
        user: persistedReducer,
    }, 
    
});

export let persistor = persistStore(store)

