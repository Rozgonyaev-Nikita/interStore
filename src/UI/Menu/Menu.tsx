import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { MyModal } from "..";
import { AddTovar } from "../../components";
import { useNavigate } from "react-router-dom";

const MenuC = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };
  const handleClose3 = () => {
    navigate("/flyKarp");
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        sx={{ mr: 2 }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose1}>Добавить товар</MenuItem>
        <MenuItem onClick={handleClose}>В разработке</MenuItem>
        <MenuItem onClick={handleClose3}>Летающий карп</MenuItem>
      </Menu>
      <MyModal setOpen={setOpenModal} isOpen={isOpenModal}>
        <AddTovar></AddTovar>
      </MyModal>
    </>
  );
};

export default MenuC;
