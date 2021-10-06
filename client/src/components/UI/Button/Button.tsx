import { Button, ButtonProps } from "@material-ui/core";
import clsx from "clsx";
import React, { FC } from "react";
import useStyles from "./ButtonStyle";
interface IButton extends ButtonProps {}
const CustomButton: FC<IButton> = ({ children, className, ...props }) => {
  const classes = useStyles();
  return (
    <Button {...props} className={clsx(className, classes.btn)}>
      {children}
    </Button>
  );
};

export default CustomButton;
