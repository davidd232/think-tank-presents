import { createContext } from 'react';
import { User } from 'firebase/auth';

interface AuthContext {
  user: User | null,
  setUser: Function
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {}
});