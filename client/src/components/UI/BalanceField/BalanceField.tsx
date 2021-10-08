import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IUser } from "../../../redux/actions/user/IUser";
import { userSelector } from "../../../redux/selectors";
import { userRoles } from "../../../utils/constants/userRoles";
import useStyle from "./BalanceFieldStyle";

const BalanceField = () => {
  const classes = useStyle();
  const { balance, role }: IUser = useTypedSelector(userSelector);
  const updateBalanceHendler = (status: number) => {
    console.log(`status`, status);
  };
  return (
    <TextField
      variant="outlined"
      value={`${balance} $`}
      disabled
      className={classes.balanceField}
      InputProps={{
        startAdornment:
          role === userRoles.admin ? (
            <>
              <Button
                children={"+1000"}
                onClick={() => updateBalanceHendler(1)}
              />
              <Button
                children={"-1000"}
                onClick={() => updateBalanceHendler(-1)}
              />
            </>
          ) : null,
      }}
    />
  );
};

export default BalanceField;
