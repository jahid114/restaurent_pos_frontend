import { createContext, useState } from 'react';

const AuthContext = createContext({});

const getToken = () => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);
  return token;
}

const saveToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
}
const saveIsAdmin = (isAdmin) => {
  localStorage.setItem("isAdmin", isAdmin);
}

const getIsAdmin = () => {
  const isAdminString = localStorage.getItem("isAdmin");
  const isAdmin = JSON.parse(isAdminString);
  return isAdmin;
}

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({
    isLoggedIn: getToken()? true : false,
    isAdmin: getIsAdmin(),
  });

  const setAuthr = (token, isAdmin = false) => {
    if(token != undefined && isAdmin != undefined) {saveToken(token); saveIsAdmin(isAdmin);}
    setAuth({isLoggedIn: getToken()? true : false,
      isAdmin: getIsAdmin(),});
    
  }

  return <AuthContext.Provider value={{ auth, setAuthr }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
