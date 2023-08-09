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
}

const initialState: ISort = {
  categor: "id",
  filterCategory: [],
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    changeСategory(state, action: PayloadAction<string>) {
      state.categor = action.payload;
    },
    changeFilterCategory(
      state,
      action: PayloadAction<number>
    ) {
      const index  = action.payload;
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
  },
});

export const filterSortSelector = (state: RootState) => state.filterSort;

export const { changeСategory, changeFilterCategory } = filterSortSlice.actions;
export default filterSortSlice.reducer;
