import { FC } from "react";
import { ITovar } from "../../interface/tovar.interface";
import Rating from "@mui/material/Rating";
import classes from "./TovarFull.module.scss";
import noTovar from "../../assets/no_product.jpg";

interface ITovartProps {
  tovar: ITovar;
}

const ProductFull: FC<ITovartProps> = ({ tovar }) => {
  const { title, description, price, image, rating } = tovar;
  console.log(tovar);

  return (
    <>
      {tovar && (
        <div className={classes.container}>
          <img
            src={image ? image : noTovar}
            alt="Товар"
            className={classes.image}
            width={300}
          />
          <div className={classes.grid}>
            <h1 className={classes.h1}>{title}</h1>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              value={rating?.rate ? rating.rate : 1}
              precision={0.1}
              readOnly
              style={{ verticalAlign: "middle" }}
            />
            <p
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: "10px",
              }}
            >
              {rating?.count ? rating.count : 1} оценок
            </p>
            <h2>{Math.round((price * 85) / 10) * 10} &#x20bd;</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFull;
