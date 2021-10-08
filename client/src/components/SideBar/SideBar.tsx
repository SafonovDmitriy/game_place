import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useMediaQuery,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { minWidthWindow } from "../..";
import { logo } from "../../img";
import { HOME_PAGE } from "../../utils/constants/rootPath";
import useStyles from "./SideBarStyle";

interface IMenuItem {
  title: string;
  href: string;
  icon: React.ReactChild | React.ReactNode;
}
interface ISideBarProps {}

const SideBar: FC<ISideBarProps> = () => {
  const classes = useStyles();
  const matches = useMediaQuery<boolean>(`(min-width:${minWidthWindow}px)`);
  const menu: [IMenuItem] = [
    { title: "About us", href: "/about", icon: <Info /> },
  ];

  return (
    <Box
      className={clsx(classes.sidebar, matches ? classes.open : classes.close)}
    >
      <List
        subheader={
          <Link to={HOME_PAGE}>
            <ListSubheader className={classes.logoWrapper}>
              <img src={logo} alt="" className={classes.logo} />
            </ListSubheader>
          </Link>
        }
      >
        {menu.map((menuItem) => (
          <Link to={menuItem.href} key={menuItem.title}>
            <ListItem button>
              <ListItemIcon children={menuItem.icon} />
              <ListItemText primary={menuItem.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
