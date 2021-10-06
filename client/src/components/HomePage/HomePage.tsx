import { Box } from "@material-ui/core";
import React, { FC } from "react";
import useStyles from "./HomePageStyle";
interface IHomePageProps {}
const HomePage: FC<IHomePageProps> = () => {
  const classes = useStyles();

  return <Box className={classes.home}></Box>;
};

export default HomePage;
