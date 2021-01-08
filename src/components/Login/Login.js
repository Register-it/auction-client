import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useLoginApi } from "../../api/LoginApi";
import ButtonWithLoader from "../ButtonWithLoader";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { performLogin, loading, errors } = useLoginApi();


  function onChangeHandler(event) {
    const newState = {
      ...state,
    };
    newState[event.target.name] = event.target.value;
    setState(newState);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const { username, password } = state;
    performLogin(username, password);
  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={onFormSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Your username"
          name="username"
          autoFocus
          disabled={loading}
          value={state.username}
          onChange={onChangeHandler}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={loading}
          value={state.password}
          onChange={onChangeHandler}
        />
        <FormControlLabel
          control={
            <Checkbox value="remember" color="primary" disabled={loading} />
          }
          label="Remember me"
        />
        <ButtonWithLoader
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          loading={loading}
        >
          Sign In
        </ButtonWithLoader>
        {errors && <Alert severity="warning">{errors.join(". ")}</Alert>}
      </form>
    </div>
  );
}
