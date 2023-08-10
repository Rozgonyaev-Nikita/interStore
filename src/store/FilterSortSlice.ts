import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const categoriesFilter: string[] = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery",
  "other",
];

interface ISort {
  categor: string;
  filterCategory: string[];
  sliderPrice: number | number[];
}

const initialState: ISort = {
  categor: "id",
  filterCategory: [],
  sliderPrice: [0, 0],
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    changeСategory(state, action: PayloadAction<string>) {
      state.categor = action.payload;
    },
    changeFilterCategory(state, action: PayloadAction<number>) {
      const index = action.payload;
      const newFilterCategory = [...state.filterCategory]; // создаем копию массива filterCategory

      if (newFilterCategory.includes(categoriesFilter[index])) {
        newFilterCategory.splice(
          newFilterCategory.indexOf(categoriesFilter[index]),
          1
        );
      } else {
        newFilterCategory.push(categoriesFilter[index]);
      }
      state.filterCategory = newFilterCategory;
    },
    changeSliderPrice(state, action: PayloadAction<number | number[]>) {
      state.sliderPrice = action.payload;
    },
  },
});

export const filterSortSelector = (state: RootState) => state.filterSort;

export const sliderPriceSelector = (state: RootState) =>
  state.filterSort.sliderPrice;

export const { changeСategory, changeFilterCategory, changeSliderPrice } =
  filterSortSlice.actions;
export default filterSortSlice.reducer;
