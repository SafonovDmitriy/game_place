import { AvatarProps, Menu } from "@material-ui/core";
import { Avatar, MenuItem } from "@mui/material";
import React, { BaseSyntheticEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../../redux/actions/user/IUser";
import { logOut } from "../../../redux/actions/user/userActions";
import { userSelector } from "../../../redux/selectors";

interface IAvatar extends AvatarProps {}
const CustomeAvatar: FC<IAvatar> = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (e: BaseSyntheticEvent) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOutHendler = () => {
    dispatch(logOut());
    handleClose();
  };
  const user: IUser = useSelector(userSelector);
  const { photo = "" } = user;
  const photoUrl = `${process.env.REACT_APP_URL_SERVER}${photo}`;

  return (
    <>
      <Avatar src={photoUrl} onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={logOutHendler}>Logout</MenuItem>
      </Menu>
    </>
  );
};
export default CustomeAvatar;
