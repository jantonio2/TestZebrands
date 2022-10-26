import { useReducer } from 'react';
import { UsersContext } from './UsersContext';
import { MainUser, Users } from '../../interfaces/users';
import { usersReducer } from './usersReducer';
import searchApi from '../../api/searchApi';

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

  // Function that loads data on the user context
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
