import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
} from "@material-ui/core";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import React, { FC } from "react";
import useStyles from "./CheckboxStyle";
interface ICheckbox extends CheckboxProps {
  label?: string;
}
const CustomeCheckbox: FC<ICheckbox> = ({
  label,
  checked,
  onChange,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.checkbox}>
      <FormControlLabel
        control={
          <Checkbox
            {...props}
            checked={checked}
            onChange={onChange}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            style={{
              color: `#54ab26`,
            }}
          />
        }
        label={`${label}`}
      />
    </Box>
  );
};
export default CustomeCheckbox;
