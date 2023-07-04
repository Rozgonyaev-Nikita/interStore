import {configureStore} from '@reduxjs/toolkit'
import ListProductsBasketSlice from './ListProductsBasketSlice';
import FetchTovars from './FetchTovars';


const store = configureStore({
    reducer:{
        tovarsBasket: ListProductsBasketSlice,
        fetchTovar: FetchTovars
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;