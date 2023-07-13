import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ITovar,
  ITovarWithCount,
  ITovarsCount,
} from "../interface/tovar.interface";
import { RootState } from ".";

const initialState: ITovarsCount = {
  tovars: [],
  countAll: 0,
};

const listTovarsBasketSlice = createSlice({
  name: "tovarsBasket",
  initialState,
  reducers: {
    AddTovarInBasket(state, action: PayloadAction<ITovar>) {
      const specificProduct: ITovarWithCount | ITovarsCount | undefined =
        state.tovars.find((item) => item.id === action.payload.id);
      if (specificProduct) {
        specificProduct.count++;
        state.countAll++;
      } else {
        state.tovars.push({ ...action.payload, count: 1 });
        state.countAll++;
      }
    },
    DeleteProduct(state: ITovarsCount, action: PayloadAction<number>) {
      const removedProduct = state.tovars.find(
        (state: ITovarWithCount) => state.id == action.payload
      );
      const othersProducts = state.tovars.filter(
        (state: ITovarWithCount) => state.id !== action.payload
      );
      if (removedProduct && removedProduct.count > 1) {
        removedProduct.count--;
        state.countAll--;
      } else {
        // return {...state, basket:karp}
        // state.countO--;
        state.tovars = othersProducts;
        state.countAll--;
      }
    },
  },
});
export const totalPriceSelector = (state: RootState) => {
  return state.tovarsBasket.tovars.reduce(
    (sum, tovar: ITovarWithCount) => sum + tovar.price * tovar.count,
    0
  );
};
export const { AddTovarInBasket, DeleteProduct } =
  listTovarsBasketSlice.actions;
export default listTovarsBasketSlice.reducer;
