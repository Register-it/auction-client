import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Button, Divider, Paper } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  inline: {
    display: "inline",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
  },
}));

export default function Notification({ isOpen, notification, onClose }) {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose(notification);
  };

  const { type, title, action, content } = notification;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isOpen}
      autoHideDuration={4500}
      onClose={handleClose}
    >
      <Paper className={classes.root} elevation={6}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={type}
          onClose={handleClose}
        >
          {title}
        </MuiAlert>
        {content && <Content content={content} classes={classes} />}
        {action && content && <Divider />}
        {action && (
          <ListItem className={classes.actions}>
            {action.label && (
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            )}
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </ListItem>
        )}
      </Paper>
    </Snackbar>
  );
}

function Content({ content, classes }) {
  const { image, primaryText, secondaryText, description } = content;
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={primaryText} src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={primaryText}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {secondaryText}
              </Typography>
              {description}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
