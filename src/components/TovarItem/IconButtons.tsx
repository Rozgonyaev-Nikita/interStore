import { FavoriteBorder, ShoppingBagOutlined } from "@mui/icons-material";
import { CardActions, Button, IconButton, Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import {
  AddFavorites,
  AddTovarInBasket,
  DeleteFavorites,
} from "../../store/ListProductsBasketSlice";
import { ITovar } from "../../interface/tovar.interface";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IIconButtons {
  tovar: ITovar;
  setOpen: (is: boolean) => void;
}

const IconButtons: React.FC<IIconButtons> = ({ tovar, setOpen }) => {
  const [addedInBasket, setAddedInBasket] = useState<boolean>(false);
  // const [isFavorites, setFavorites] = useState<boolean>(false);
  const isFavorites = useAppSelector(
    (state) =>
      state.tovarsBasket.favoritesTovars.find((item) => item.id == tovar.id)
        ?.isFavoutites
  );

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const countInBasket = useAppSelector(
    (state) =>
      state.tovarsBasket.tovars.find((item) => item.id == tovar.id)?.count
  );

  const shoppingBagIcon: JSX.Element = addedInBasket ? (
    <ShoppingBagOutlined style={{ color: "red" }} />
  ) : (
    <ShoppingBagOutlined />
  );

  useEffect(() => {
    if (countInBasket) {
      setAddedInBasket(true);
    } else {
      setAddedInBasket(false);
    }
  }, [countInBasket]);

  const AddTovarBasket = (tovar: ITovar): void => {
    if (setOpen) {
      setOpen(true);
    }
    dispatch(AddTovarInBasket(tovar));
    setAddedInBasket(true);
  };
  const addFavourites = () => {
    if (!isFavorites) {
      dispatch(AddFavorites(tovar));
    } else {
      dispatch(DeleteFavorites(tovar.id));
    }
    // setFavorites(!isFavorites);
  };
  const detailetNavigate = () => {
    navigate(`/${tovar.id}`);
  };

  return (
    <CardActions
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          maxWidth: "200px",
        }}
      >
        <Link to={`/${tovar.id}`} className="detailed">
          <Button size="small">Подробнее</Button>
        </Link>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 1 }}
          className="info iconItem"
          onClick={detailetNavigate}
        >
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          data-testid="addkor"
          className="iconItem korzinaIcon"
          sx={{ ml: 1 }}
          onClick={() => AddTovarBasket(tovar)}
        >
          <Badge
            badgeContent={countInBasket}
            data-testid="countBadge"
            color="secondary"
          >
            {shoppingBagIcon}
          </Badge>
        </IconButton>
      </div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        data-testid="favo"
        className="iconItem favourites"
        sx={{
          ml: 1,
          marginLeft: "15px",
          ...(isFavorites && { color: "red" }),
        }}
        onClick={addFavourites}
      >
        <FavoriteBorder />
      </IconButton>
    </CardActions>
  );
};

export default IconButtons;
