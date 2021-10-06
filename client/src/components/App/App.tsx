import { Box } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Root, SideBar } from "..";
import { userFetch } from "../../redux/actions/user/userActions";
import useStyles from "./AppStyle";
interface IAppProps {}
const App: FC<IAppProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);
  return (
    <Box className={classes.app}>
      <Header />
      <SideBar />
      <Root />
    </Box>
  );
};

export default App;
