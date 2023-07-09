import { Stack, TextField } from "@mui/material";
import React from "react";

const addTovar = () => {
  return (
    <>
      <Stack spacing={2} sx={{ width: "300px" }}>
        <TextField id="filled-basicf" label="Заголовок" variant="filled" />
        <TextField id="filled-basicg" label="Цена" variant="filled" />
        <TextField id="filled-basicj" label="Описание" variant="filled" />
      </Stack>
    </>
  );
};

export default addTovar;
