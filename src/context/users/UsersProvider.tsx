import { useReducer } from 'react';
import { UsersContext } from './UsersContext';
import { MainUser, Users } from '../../interfaces/users';
import { usersReducer } from './usersReducer';
import searchApi from '../../api/searchApi';
import { User } from '../../interfaces/user';
import userApi from '../../api/userApi';

export interface UsersState {
  isLoading: boolean;
  users: Users[];
}

const INITIAL_STATE: UsersState = {
  isLoading: false,
  users: [],
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UsersProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(usersReducer, INITIAL_STATE);

  const searchUsersByTerm = async( query: string ): Promise<Users[]> => {

    if ( query.length === 0 ) {
      dispatch({ type: 'setUsers', payload: [] });
      return [];
    }
    dispatch({ type: 'setLoadingUsers' });

    const resp = await searchApi.get<MainUser>(`/users`, {
      params: {
        q: query,
        per_page: 12
      }
    });

    dispatch({ type: 'setUsers', payload: resp.data.items });

    return resp.data.items;

  }

  const searchUser = async( query: string ): Promise<User> => {

    const resp = await userApi.get<User>(`/${ query }`, {});

    return resp.data;

  }

  return (
    <UsersContext.Provider value={{
      ...state,
      // Methods
      searchUsersByTerm
    }}>
      { children }
    </UsersContext.Provider>
  )
}
