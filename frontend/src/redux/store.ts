// store.ts
import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { Persistor } from 'redux-persist/es/types'; // For typing the persistor
import userReducer  from './slices/userSlice';
import signReducer from './slices/signupSlice';



const rootReducer = combineReducers({
    user: userReducer,    // This will be persisted
    signup:signReducer
  });

// Define the RootState type from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Define persist configuration with whitelist to persist only specific slices
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['user'], // Persist only the user slice
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false,
    })
});

// Create the persistor for controlling the persisted state
export const persistor: Persistor = persistStore(store);

// Define the AppDispatch type for use with typed hooks in components
export type AppDispatch = typeof store.dispatch;
