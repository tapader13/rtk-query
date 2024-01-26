import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { CrudApi } from './services/Crud';

export const store = configureStore({
  reducer: {
    [CrudApi.reducerPath]: CrudApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CrudApi.middleware),
});
setupListeners(store.dispatch);
