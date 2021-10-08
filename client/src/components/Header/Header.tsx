import { Box, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import React, { FC } from "react";
import { minWidthWindow } from "../..";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { isUserSelector } from "../../redux/selectors";
import { Avatar, BalanceField } from "../UI";
import useStyles from "./HeaderStyles";
import SignInButtonWithModal from "./SignInButtonWithModal/SignInButtonWithModal";

interface IHeaderProps {}
const Header: FC<IHeaderProps> = () => {
  const classes = useStyles();

  const matches = useMediaQuery<boolean>(`(min-width:${minWidthWindow}px)`);
  const isUser = useTypedSelector(isUserSelector);

  return (
    <Box
      className={clsx(
        classes.header,
        matches ? classes.sideBarOpen : classes.sideBarClose
      )}
    >
      {isUser ? (
        <Box className={classes.balanceFieldWrapper}>
          <BalanceField />
          <Avatar />
        </Box>
      ) : (
        <SignInButtonWithModal />
      )}
    </Box>
  );
};

export default Header;
