import { makeStyles } from "@material-ui/core";

export default makeStyles({
  modal: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: 15,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    minWidth: 300,
    padding: 15,
  },
  flipModeBtn: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "none",
    borderRadius: 10,
    transition: "all 1s",
    "& .MuiButton-label": {
      transition: "all 1s",
      color: "black",
    },
    "&:hover": {
      backgroundColor: "#5bb16121",
      boxShadow: "0 0 5px #448aff",

      "& .MuiButton-label": {
        color: "#de6969",
      },
    },
  },
});
