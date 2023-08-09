import { configureStore, ThunkAction, ThunkDispatch, AnyAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';
const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;
export type AppDispatch = typeof store.dispatch;
