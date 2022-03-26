import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ActionButton } from "./Controls";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    margin: 0,
    padding: theme.spacing(1),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup(props) {
  const {
    title,
    children,
    openPopup,
    setOpenPopup,
    footer,
    maxWidth = "md",
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={openPopup}
        maxWidth={maxWidth}
        classes={{ paper: classes.dialogWrapper }}
      >
        <DialogTitle>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <ActionButton color="primary" onClick={() => setOpenPopup(false)}>
              <CloseIcon />
            </ActionButton>
          </div>
        </DialogTitle>
        <DialogContent>{children ? children : null}</DialogContent>
        {footer ? <Divider /> : null}
        {footer ? <DialogActions>{footer}</DialogActions> : null}
      </Dialog>
    </div>
  );
}
