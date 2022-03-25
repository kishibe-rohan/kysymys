import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./components/Home";
import Login from "./components/Login";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { login, selectUser } from "./redux/features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
      }
    });
  }, [dispatch]);

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default App;
