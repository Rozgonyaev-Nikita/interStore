import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { ITovar } from "../../interface/tovar.interface";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addTovarsThunk, tovarsThunkPost } from "../../store/FetchTovars";

const initialTovar: ITovar = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

const AddTovar = () => {
  const [tovar, setTovar] = useState<ITovar>(initialTovar);

  const dispatch = useAppDispatch();

  const addNewTovar = () => {
    const newTovar = {
      image: "https://i.pravatar.cc",
      ...tovar,
      category: "electronic",
    };
    dispatch(tovarsThunkPost(newTovar));
    console.log("nwtv", newTovar);
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: "300px" }}>
        <TextField
          id="filled-basicf"
          onChange={(e) => setTovar({ ...tovar, title: e.target.value })}
          label="Заголовок"
          variant="filled"
        />
        <TextField
          id="filled-basicg"
          onChange={(e) =>
            setTovar({ ...tovar, price: Number(e.target.value) })
          }
          label="Цена"
          variant="filled"
        />
        <TextField
          id="filled-basicj"
          onChange={(e) => setTovar({ ...tovar, description: e.target.value })}
          label="Описание"
          variant="filled"
        />
        <Grid container>
          <Button
            sx={{ width: "60%", margin: "0 auto" }}
            variant="contained"
            endIcon={<Add />}
            onClick={addNewTovar}
          >
            Добавить
          </Button>
        </Grid>
      </Stack>
    </>
  );
};

export default AddTovar;
