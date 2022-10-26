import { createContext } from 'react';
import { User } from '../../interfaces/user';
import { Users } from '../../interfaces/users';

interface UsersContextProps {
  isLoading: boolean;
  users: Users[];
  isLoadingDetail: boolean;
  userDetail?: User;

  //Methods
  searchUsersByTerm: (query: string) => Promise<Users[]>
  searchUser: (query: string) => Promise<User>
}


export const UsersContext = createContext<UsersContextProps>({} as UsersContextProps);