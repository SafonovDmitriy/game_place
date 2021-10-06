import { Fab } from "@material-ui/core";
import { Add } from "@mui/icons-material";
import { FC } from "react";
interface IAddFabBtn {
  onClick: () => void;
}
const AddFabBtn: FC<IAddFabBtn> = ({ onClick }) => (
  <Fab
    aria-label="Add"
    color="primary"
    style={{ marginLeft: "auto" }}
    onClick={onClick}
    children={<Add />}
  />
);
export default AddFabBtn;
