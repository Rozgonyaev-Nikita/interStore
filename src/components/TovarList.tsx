import { FC, useState } from "react";
import { ITovar } from "../interface/tovar.interface";
import { TovarItem } from "./index";
// import { useSearchParams } from 'react-router-dom'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ITovarA {
  tovars: ITovar[];
  page?: number;
  ntip?: number; // numberTovarsInPage
}

const TovarList: FC<ITovarA> = ({ tovars, page = 0, ntip = 8 }) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log("lf", tovars);
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="itemsGrid">
      {tovars.slice(page * ntip, page * ntip + ntip).map((tovar) => (
        <TovarItem
          tovar={tovar}
          setOpen={() => setOpen(true)}
          key={tovar.id}
        ></TovarItem>
      ))}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">Товар добавлен в корзину!</Alert>
      </Snackbar>
    </div>
  );
};

export default TovarList;
