import { createContext } from 'react';

interface UsersContextProps {
  isLoading: boolean;
}


export const UsersContext = createContext<UsersContextProps>({} as UsersContextProps);