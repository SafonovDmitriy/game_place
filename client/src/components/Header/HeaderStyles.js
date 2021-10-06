import { makeStyles } from "@material-ui/core";

export default makeStyles({
  header: {
    height: 50,
    transition: "all 1s",
    display: "flex",
    justifyContent: "end",
    padding: 5,
    boxSizing: "border-box",
    backgroundColor: "#7b757a52",
  },
  sideBarOpen: {
    marginLeft: 180,
  },
  sideBarClose: {
    marginLeft: 60,
  },
});
