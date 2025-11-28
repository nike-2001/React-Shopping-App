import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, updateUser } from '../redux/userSlice';

const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserContextProvider');
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user);
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    // Sync with Redux state
    if (reduxUser.isLoggedIn && reduxUser.user) {
      setLocalUser(reduxUser.user);
    } else {
      setLocalUser(null);
    }
  }, [reduxUser]);

  const loginUser = (userData) => {
    dispatch(login(userData));
    setLocalUser(userData);
  };

  const logoutUser = () => {
    dispatch(logout());
    setLocalUser(null);
  };

  const updateUserData = (userData) => {
    dispatch(updateUser(userData));
    setLocalUser((prev) => ({ ...prev, ...userData }));
  };

  const value = {
    user: localUser,
    isLoggedIn: reduxUser.isLoggedIn,
    login: loginUser,
    logout: logoutUser,
    updateUser: updateUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

