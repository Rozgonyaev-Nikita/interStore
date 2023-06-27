import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { ITovar, ITovarWithCount, ITovarsCount } from '../interface/tovar.interface';


const initialState: ITovarsCount = {
    tovars: [],
    countAll: 0
};

const listTovarsBasketSlice = createSlice({
    name: 'tovarsBasket',
    initialState,
    reducers:{
        AddTovarInBasket(state, action: PayloadAction<ITovar>){
            const specificProduct:ITovarWithCount | ITovarsCount | undefined = state.tovars.find(item => item.id === action.payload.id);
            if(specificProduct){
                specificProduct.count++;
                state.countAll++;
            }
            else{
                state.tovars.push({...action.payload, count: 1});
                state.countAll++;
            }
        }
    }
})

export const {AddTovarInBasket} = listTovarsBasketSlice.actions;
export default listTovarsBasketSlice.reducer;