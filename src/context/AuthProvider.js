import { createContext, useState } from 'react';

const AuthContext = createContext({});

const getToken = () => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);
  return token;
};

const saveToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};
const saveIsAdmin = (isAdmin) => {
  localStorage.setItem('isAdmin', isAdmin);
};

const getIsAdmin = () => {
  const isAdminString = localStorage.getItem('isAdmin');
  const isAdmin = JSON.parse(isAdminString);
  return isAdmin;
};

const getName = () => {
  const nameString = localStorage.getItem('name');
  const name = JSON.parse(nameString);
  return name;
};

const saveName = (name) => {
  localStorage.setItem('name', JSON.stringify(name));
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: getToken() ? true : false,
    isAdmin: getIsAdmin(),
    name: getName(),
    token: getToken(),
  });

  const setAuthr = (token, isAdmin = false, name = '') => {
    if (token !== undefined && isAdmin !== undefined && name !== undefined) {
      saveToken(token);
      saveIsAdmin(isAdmin);
      saveName(name);
    }
    setAuth({ token, isLoggedIn: getToken() ? true : false, isAdmin: getIsAdmin(), name });
  };

  return <AuthContext.Provider value={{ auth, setAuthr }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
