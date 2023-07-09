import { Stack, TextField } from "@mui/material";
import classes from "./MyModal.module.css";
import cn from "classnames";
import React from "react";

interface IModal {
  isOpen: boolean;
  children: JSX.Element;
}

const MyModal: React.FC<IModal> = ({ isOpen, children }) => {
  return (
    <div className={cn(classes.modal, { [classes.active]: isOpen == true })}>
      <div className={classes.component}>{children}</div>
    </div>
  );
};

export default MyModal;
