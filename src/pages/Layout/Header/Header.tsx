import { ShoppingBasket } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { BasketSide } from "../../../components/BasketSide/BasketSide";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { SearchInp } from "./Search";
import { Menu } from "../../../UI";

export const Header = () => {
  const [isOpenBasket, setOpenBasket] = useState<boolean>(false);

  const countAllTovars = useAppSelector((state) => state.tovarsBasket.countAll);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Menu />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Типо сайт
            </Typography>
            <SearchInp />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenBasket(true)}
              color="inherit"
            >
              {/* <Badge badgeContent={countO} color="secondary"> */}
              <Badge badgeContent={countAllTovars} color="secondary">
                <ShoppingBasket color="action" />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <BasketSide
          open={isOpenBasket}
          onClose={() => setOpenBasket(false)}
        ></BasketSide>
      </Box>
    </>
  );
};
