import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ITovar } from "../interface/tovar.interface";
import { RootState } from ".";

export const tovarsThunk = createAsyncThunk("tovars/getTovars", async () => {
  const { data } = await axios.get<ITovar[]>(
    `https://fakestoreapi.com/products`
  );
  return data;
});

export const tovarsThunkPost = createAsyncThunk(
  "tovars/postikTovars",
  async (tovar: ITovar, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post<ITovar>(
        `https://fakestoreapi.com/products`,
        {
          title: tovar.title,
          price: tovar.price,
          description: tovar.description,
          // image: "https://i.pravatar.cc",
          category: "other",
        }
      );
      console.log("dgkarp", tovar);
      dispatch(addTovar(data));
    } catch (error) {
      return rejectWithValue(error);
    }

    // return [data];
  }
);

export const addTovarsThunk = createAsyncThunk(
  "th/postTovars",
  async (_, { dispatch }) => {
    const { data } = await axios.post<ITovar>(
      `https://fakestoreapi.com/products`,
      {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }
    );
    console.log(data);
    dispatch(addTovar(data));
    // return data;
  }
);

interface ITovarArr {
  tovars: ITovar[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ITovarArr = {
  tovars: [],
  status: "idle",
};

const thunkTovarSlice = createSlice({
  name: "thunkTovars",
  initialState,
  reducers: {
    addTovar(state, action: PayloadAction<ITovar>) {
      state.tovars.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        tovarsThunk.fulfilled,
        (state, action: PayloadAction<ITovar[]>) => {
          state.tovars = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(tovarsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(tovarsThunk.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(tovarsThunkPost.rejected, (state) => {
        state.status = "failed";
        // console.log("ня");
      });
  },
});

export const tovarsSelector = (state: RootState) => state.fetchTovar;
export const statusSelector = (state: RootState) => state.fetchTovar.status;

export const tovarByIdSelector = (id: number) => (state: RootState) =>
  state.fetchTovar.tovars.find((item) => item.id === id);

const { addTovar } = thunkTovarSlice.actions;
export default thunkTovarSlice.reducer;
