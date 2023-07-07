import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

const AddTovarPage = () => {
  return (
    <div>
      <Stack spacing={2}>
        <TextField id="filled-basicf" label="Заголовок" variant="filled" />
        <TextField id="filled-basicg" label="Цена" variant="filled" />
        <TextField id="filled-basicj" label="Описание" variant="filled" />
      </Stack>
    </div>
  );
};

export default AddTovarPage;
