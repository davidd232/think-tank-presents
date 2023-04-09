import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider (props: AuthProviderProps) {
  const { children } = props;
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}