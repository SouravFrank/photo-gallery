import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Modal = ({ uri, toggleModal }) => {
  return (
    <Dialog
      onClose={toggleModal}
      aria-labelledby="customized-dialog-title"
      open={uri}
    >
      <IconButton
        disableFocusRipple
        label="close"
        aria-label="close"
        onClick={toggleModal}
      >
        <CloseIcon />
      </IconButton>
      <MuiDialogContent onClose={toggleModal}>
        <img src={uri} alt={uri} />
      </MuiDialogContent>
    </Dialog>
  );
};

export default Modal;
