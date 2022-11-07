import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const MyContext = createContext();

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google or facebook sign in with
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
    setLoading(true);
  };
  // create user email and password section
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  // for user login and password section
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  // observe user with useEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // for signOut handler
  const logOut = () => {
    return signOut(auth);
  };

  // update profile with
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const authInfo = {
    providerLogin,
    user,
    logOut,
    createUser,
    userLogin,
    loading,
    updateUserProfile,
  };
  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default AuthContext;
