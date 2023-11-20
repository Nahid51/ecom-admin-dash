import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '../features/users/userSlice';
import { productApi } from '../features/product/productSlice';
import { categoryApi } from '../features/product/categorySlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(productApi.middleware)
        .concat(categoryApi.middleware)
})

setupListeners(store.dispatch);