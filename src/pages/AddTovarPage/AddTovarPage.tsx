import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const AddTovarPage = () => {
  return (
    <div>
      <Stack spacing={2} sx={{ width: "300px" }}>
        <TextField id="filled-basicf" label="Заголовок" variant="filled" />
        <TextField id="filled-basicg" label="Цена" variant="filled" />
        <TextField id="filled-basicj" label="Описание" variant="filled" />
      </Stack>
    </div>
  );
};

export default AddTovarPage;
