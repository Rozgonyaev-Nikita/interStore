import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { ITovar } from "../../interface/tovar.interface";
import noTovar from "../../assets/no_product.jpg";
import IconButtons from "./IconButtons";

interface ITovarItem {
  tovar: ITovar;
  setOpen?: () => void;
  isFull?: true | false;
}

const TovarItem: FC<ITovarItem> = ({ tovar, setOpen, isFull = true }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 140,
          maxWidth: 345,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        image={tovar.image ? tovar.image : noTovar}
        title={tovar.title}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 60, overflow: "hidden" }}
        >
          {tovar.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          // sx={{ height: 60, overflow: "hidden" }}
        >
          Цена: <span style={{ color: "red" }}>{tovar.price}</span> $
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: 100, overflow: "hidden" }}
        >
          {tovar.description}
        </Typography>
      </CardContent>
      {isFull && (
        <IconButtons tovar={tovar} setOpen={() => setOpen && setOpen} />
      )}
    </Card>
  );
};

export default TovarItem;
