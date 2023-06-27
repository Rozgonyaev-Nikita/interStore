import {configureStore} from '@reduxjs/toolkit'
import ListProductsBasketSlice from './ListProductsBasketSlice';


const store = configureStore({
    reducer:{
        tovarsBasket: ListProductsBasketSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;