import { Modal, ModalProps } from "@material-ui/core";
import { Box } from "@mui/system";
import clsx from "clsx";
import React, { FC } from "react";
import useStyles from "./ModalStyle";

interface IModal extends ModalProps {}

const CustomeModal: FC<IModal> = ({
  children,
  open,
  onClose,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      {...props}
      className={clsx(className, classes.modal)}
    >
      <Box className={classes.modalWindow}> {children}</Box>
    </Modal>
  );
};
export default CustomeModal;
