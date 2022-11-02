import { createContext, useState } from 'react';

const AuthContext = createContext({});

const getToken = () => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);
  return token?.token;
}

const saveToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
}

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({
    isLoggedIn: getToken()? true : false,
    isAdmin: false,
  });

  const setAuthr = (token, isAdmin) => {
    saveToken(token);
    setAuth({isLoggedIn: true, isAdmin});
    console.log("setAuthr called**********")
  }

  return <AuthContext.Provider value={{ auth, setAuthr }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
