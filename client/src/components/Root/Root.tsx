import { Box, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Route, Switch } from "react-router";
import { HomePage } from "..";
import { minWidthWindow } from "../..";
import { HOME_PAGE } from "../../utils/constants/rootPath";
import useStyles from "./RootStyle";
const Root = () => {
  const classes = useStyles();
  const matches = useMediaQuery<boolean>(`(min-width:${minWidthWindow}px)`);
  return (
    <Box
      className={clsx(
        classes.root,
        matches ? classes.sideBarOpen : classes.sideBarClose
      )}
    >
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePage} />
      </Switch>
    </Box>
  );
};

export default Root;
