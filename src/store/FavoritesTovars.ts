import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITovar } from "../interface/tovar.interface";
import { RootState } from ".";

interface IFavorites {
  favoritesTovars: ITovar[];
  status: boolean;
}

const initialState: IFavorites = {
  favoritesTovars: [],
  status: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    AddFavorites(state, action: PayloadAction<ITovar>) {
      const favTovar = state.favoritesTovars.find(
        (item) => item.id === action.payload.id
      );
      if (!favTovar) {
        state.favoritesTovars.push(action.payload);
      }
    },
    DeleteFavorites(state, action: PayloadAction<number>) {
      state.favoritesTovars = state.favoritesTovars.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const favouritesSelector = (state: RootState) =>
  state.favorites.favoritesTovars;

export const { AddFavorites, DeleteFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
