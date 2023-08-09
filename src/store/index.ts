import { configureStore } from "@reduxjs/toolkit";
import ListProductsBasketSlice from "./ListProductsBasketSlice";
import FetchTovars from "./FetchTovars";
import FilterSortSlice from "./FilterSortSlice";

const store = configureStore({
  reducer: {
    tovarsBasket: ListProductsBasketSlice,
    fetchTovar: FetchTovars,
    filterSort: FilterSortSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
