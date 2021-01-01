import { useState } from "react";
import {
  useSetStoreValue,
  useStoreValue,
  useDeleteStoreValue,
} from "react-context-hook";
import { useHistory } from "react-router-dom";
import { Store } from "./Store";

const DEMO_USER = {
  username: "username",
  displayName: "Demo user",
  email: "username@example.com",
};

export function useLoggedUser() {
  return useStoreValue(Store.LOGGED_USER);
}
export function useLogout() {
  const deleteUser = useDeleteStoreValue(Store.LOGGED_USER);
  return function logout() {
    deleteUser();
  };
}

export function useLoginApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const setUsername = useSetStoreValue(Store.LOGGED_USER);
  const history = useHistory();

  async function performLogin(username, password) {
    setLoading(true);
    setError(false);
    if (username === "username" && password === "password") {
      await setTimeout(async () => {
        setLoading(false);
        setError(null);
        await setUsername(DEMO_USER);
        history.goBack();
      }, Math.floor(Math.random() * 500));
    } else {
      setTimeout(() => {
        setLoading(false);
        setError(
          "Invalid password, the username should be: 'username' and the password: 'password'"
        );
      }, Math.floor(Math.random() * 500));
    }
  }

  return {
    loading,
    error,
    performLogin,
  };
}
