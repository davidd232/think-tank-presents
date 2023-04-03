import { ReactNode } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider (props: AuthProviderProps) {
  const { children } = props

  return (
    <AuthContext.Provider value={{
      user: 'David',
      setUser: () => {}
    }}>
      {children}
    </AuthContext.Provider>
  )
}