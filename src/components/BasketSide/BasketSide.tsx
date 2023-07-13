import { useRef, FC } from "react";
import classes from "./BasketSide.module.scss";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import { DeleteOutlineOutlined, ShoppingBasket } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  DeleteProduct,
  totalPriceSelector,
} from "../../store/ListProductsBasketSlice";

interface IDrawer {
  open: boolean;
  onClose: () => void;
}

export const BasketSide: FC<IDrawer> = ({ open, onClose }): JSX.Element => {
  const tovars = useAppSelector((state) => state.tovarsBasket.tovars);
  const totalPrice = useAppSelector(totalPriceSelector);

  const divRef = useRef<HTMLUListElement>(null);
  const DrawerRef = useRef<HTMLDivElement>(null);

  // const openBasket = useAppSelector(state => state.openBasket);

  const dispatch = useAppDispatch();
  console.log(totalPrice);

  // useEffect(() => {
  //   document.body.addEventListener('click',(e: unknown): void => {
  //     if(!e.composedPath().includes(divRef.current) & e.composedPath().includes(DrawerRef.current)){
  //         dispatch(OpenBasket(false));
  //       console.log(e.composedPath().includes(divRef.current));
  //     }
  //   },[])

  // }, [])

  return (
    <Drawer ref={DrawerRef} anchor="right" open={open} onClose={onClose}>
      <List ref={divRef} sx={{ width: "400px", height: "100%" }}>
        <ListItem alignItems="center">
          <ListItemIcon onClick={onClose}>
            <ShoppingBasket
            // onClick={() => dispatch(OpenBasket(false))}
            />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
          <ListItemText
            primary={`Общая цена: `}
            secondary={<span style={{ color: "red" }}>{totalPrice} $</span>}
          />
        </ListItem>
        <Divider />
        {tovars.length !== 0 ? (
          tovars.map((tovar) => (
            <ListItem
              key={tovar.id}
              className={classes.cartBaskTovar}
              sx={{ width: "auto", justifyContent: "space-between" }}
            >
              <h2 className="post--title">{tovar.title}</h2>
              <p>{tovar.count}</p>
              <DeleteOutlineOutlined
                onClick={() => dispatch(DeleteProduct(tovar.id))}
                className={classes.deleteIcon}
              />
            </ListItem>
          ))
        ) : (
          <h1 style={{ color: "red", fontSize: "36px", textAlign: "center" }}>
            Корзина пуста
          </h1>
        )}
      </List>
    </Drawer>
  );
};
