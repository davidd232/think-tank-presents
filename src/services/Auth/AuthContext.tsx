import { createContext } from 'react';

interface AuthContext {
  user: string,
  setUser: Function
}

export const AuthContext = createContext<AuthContext>({
  user: '',
  setUser: () => {}
});