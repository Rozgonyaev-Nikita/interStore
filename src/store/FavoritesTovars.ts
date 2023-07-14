import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITovar } from "../interface/tovar.interface";
import { Favorite } from "@mui/icons-material";
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
      state.favoritesTovars.push(action.payload);
    },
  },
});

export const favouritesSelector = (state: RootState) =>
  state.favorites.favoritesTovars;

export const { AddFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
