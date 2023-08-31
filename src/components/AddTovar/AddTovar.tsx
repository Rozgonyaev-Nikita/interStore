import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ITovar } from "../../interface/tovar.interface";
import { Add } from "@mui/icons-material";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { tovarsThunkPost } from "../../store/FetchTovars";
import { useForm } from "react-hook-form";

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
  mySelect: string;
};

const AddTovar = () => {
  const [tovar, setTovar] = useState<ITovar>(initialTovar);

  const dispatch = useAppDispatch();

  const addNewTovar = async () => {
    console.log("tovar", tovar);
    // const { data } = await axios.post(
    //   "http://localhost:5000/addProduct",
    //   tovar
    // );
    console.log("sdja;rej");
    // console.log(karp);
    dispatch(tovarsThunkPost(tovar));
    console.log("nwtv", tovar);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit = () => {
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
              minLength: { value: 3, message: "Слишком коротко" },
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
            label="Цена $"
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
          <FormControl variant="filled">
            <InputLabel id="sl">Категория</InputLabel>
            <Select
              id="sl"
              data-testid="selectForm"
              name="mySelect"
              value={tovar.category}
              onChange={(e) => setTovar({ ...tovar, category: e.target.value })}
            >
              <MenuItem value="other">Другое</MenuItem>
              <MenuItem value="men's clothing">Мужская одежда</MenuItem>
              <MenuItem value="jewelery">Драгоценности</MenuItem>
              <MenuItem value="electronics">Электроника</MenuItem>
              <MenuItem value="women's clothing">Женская одежда</MenuItem>
            </Select>
            {/* ref={register("mySelect")} */}
            <FormHelperText>
              {errors.mySelect && errors.mySelect.message}
            </FormHelperText>
          </FormControl>
          <Grid container>
            <Button
              sx={{ width: "60%", margin: "0 auto" }}
              variant="contained"
              endIcon={<Add />}
              onClick={addNewTovar}
              disabled={!isValid}
              data-testid="buttonAddTovar"
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
