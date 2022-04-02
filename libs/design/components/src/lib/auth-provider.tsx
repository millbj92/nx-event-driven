import { User } from '@prisma/client/users';
import axios from 'axios';
import React from 'react';
import { useStore } from '@super-rad-poc/common/hooks';

interface UserLogin {
  email: string;
  password: string;
}
interface AuthContextType {
  token: string | undefined;
  onLogin: (loginInfo: UserLogin, callback: VoidFunction) => void;
  onLogout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setIsAuthenticated, setToken, token } = useStore();

  const handleLogin = async (
    loginUser: UserLogin,
    callback?: (jwt?: string, error?: Error) => void
  ) => {
    try {
      const userJwt = await axios.post(
        'http://localhost:5002/authorize',
        loginUser
      );
      setToken(userJwt.data.token);
      setIsAuthenticated(true);
      if (callback) {
        callback(userJwt.data.token);
      }
    } catch (e: any) {
      if (callback) {
        callback(undefined, e);
      }
    }
  };

  const handleLogout = (callback: () => void) => {
    setToken(undefined);
    setIsAuthenticated(false);
    //Call endpoit to logout.
    callback();
  };

  const value = { token, onLogin: handleLogin, onLogout: handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => React.useContext(AuthContext);
