import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import router from 'next/router';

// @ts-ignore
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, cookie) => {
    // @ts-ignore
    setUser({ email, cookie });

  };

  const checkUser = () => {
    // @ts-ignore
    console.log("user:  "+user.email)
    // @ts-ignore
    console.log("user:  "+user.cookie)
    // @ts-ignore
    if(user.email!=null && user.cookie!=null) {
      return true;
    }
    else
    {
      return false;
    }

  };

  const logout = () => {

    doSignOut()
  };
  async function doSignOut() {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/admin/signout/',
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true
        }
      );
      console.log(response)
        setUser(null);
        // @ts-ignore
        document.cookie = null;

        router.push('../LogIn.js');
      

    } catch (error) {
      console.error('error failed: ', error);
    }
  }
  return (
    <
// @ts-ignore
    AuthContext.Provider value={{ user, login, logout,checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);