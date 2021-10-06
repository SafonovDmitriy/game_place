import { Tab, Tabs } from "@material-ui/core";
import React, { FC } from "react";
import useStyles from "./TabsStyle";
interface ITabButtons {
  label: string;
  value: string;
}
interface ITabs {
  tabs: string;
  tabBtns: [ITabButtons];
}
const CustomeTabs: FC<ITabs> = ({ tabs, tabBtns }) => {
  const classes = useStyles();
  return (
    <Tabs {...tabs} className={classes.tabs}>
      {tabBtns.map((tab, idx) => (
        <Tab {...tab} key={idx} tabIndex={idx} />
      ))}
    </Tabs>
  );
};

export default CustomeTabs;
