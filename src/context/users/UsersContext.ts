import { createContext } from 'react';
import { Users } from '../../interfaces/users';
interface UsersContextProps {
  isLoading: boolean;
  users: Users[];

  //Methods
  searchUsersByTerm: (query: string) => Promise<Users[]>
}


export const UsersContext = createContext<UsersContextProps>({} as UsersContextProps);