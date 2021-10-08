import { Box } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Root, SideBar } from "..";
import { userFetch } from "../../redux/actions/user/userActions";
import { isAuthErrorSelector } from "../../redux/selectors";
import useStyles from "./AppStyle";
interface IAppProps {}
const App: FC<IAppProps> = () => {
  const classes = useStyles();
  const isAuthError = useSelector(isAuthErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  return isAuthError !== null ? (
    <Box className={classes.app}>
      <Header />
      <SideBar />
      <Root />
    </Box>
  ) : null;
};

export default App;
