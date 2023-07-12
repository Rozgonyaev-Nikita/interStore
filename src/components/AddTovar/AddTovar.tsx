import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { ITovar } from "../../interface/tovar.interface";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addTovarsThunk, tovarsThunkPost } from "../../store/FetchTovars";
import { useForm, SubmitHandler } from "react-hook-form";

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
type Inputs = {
  title: string;
  name: string;
  price: string;
};

const AddTovar = () => {
  const [tovar, setTovar] = useState<ITovar>(initialTovar);

  const dispatch = useAppDispatch();

  const addNewTovar = () => {
    const newTovar = tovar;

    dispatch(tovarsThunkPost(newTovar));
    console.log("nwtv", newTovar);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("caz", JSON.stringify(onSubmit));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1} sx={{ width: "300px" }}>
          <TextField
            id="name"
            {...register("name", {
              required: "Поле обязательное",
              minLength: { value: 5, message: "Слишком коротко" },
            })}
            onChange={(e) => setTovar({ ...tovar, title: e.target.value })}
            label="Заголовок"
            variant="filled"
            autoComplete="off"
          />
          {errors?.name ? (
            <div
              style={{
                margin: "0 0",
                padding: "0 0",
                color: "red",
                fontSize: "14px",
              }}
            >
              {errors?.name?.message || "karp"}
            </div>
          ) : (
            <div
              style={{
                padding: "0 0 20px 0px",
                margin: "0 0",
                color: "red",
                fontSize: "14px",
              }}
            ></div>
          )}
          <TextField
            id="price"
            type="number"
            {...register("price", {
              required: "Поле обязательное",
            })}
            onChange={(e) =>
              setTovar({ ...tovar, price: Number(e.target.value) })
            }
            label="Цена"
            variant="filled"
            autoComplete="off"
          />
          {errors?.price ? (
            <div
              style={{
                margin: "0 0",
                padding: "0 0",
                color: "red",
                fontSize: "14px",
              }}
            >
              {errors?.price?.message || "karp"}
            </div>
          ) : (
            <div
              style={{ padding: "0 0 20px 0px", margin: "0 0", color: "red" }}
            ></div>
          )}
          <TextField
            id="title"
            {...register("title", {
              required: "Поле обязательное",
              minLength: { value: 5, message: "Слишком коротко" },
            })}
            onChange={(e) =>
              setTovar({ ...tovar, description: e.target.value })
            }
            label="Описание"
            variant="filled"
            autoComplete="off"
          />
          {errors?.title ? (
            <div
              style={{
                margin: "0 0",
                padding: "0 0",
                color: "red",
                fontSize: "14px",
              }}
            >
              {errors?.title?.message || "karp"}
            </div>
          ) : (
            <div
              style={{ padding: "0 0 20px 0px", margin: "0 0", color: "red" }}
            ></div>
          )}
          <Grid container>
            <Button
              sx={{ width: "60%", margin: "0 auto" }}
              variant="contained"
              endIcon={<Add />}
              onClick={addNewTovar}
              disabled={!isValid}
            >
              Добавить
            </Button>
          </Grid>
        </Stack>
      </form>
    </>
  );
};

export default AddTovar;
