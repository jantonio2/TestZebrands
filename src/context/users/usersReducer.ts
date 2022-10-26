import { UsersState } from './UsersProvider';
import { Users } from '../../interfaces/users';
import { User } from '../../interfaces/user';

type UsersAction = 
  | { type: 'setLoadingUsers' }
  | { type: 'setUsers', payload: Users[] }

export const usersReducer = ( state: UsersState, action: UsersAction  ): UsersState => {
  switch ( action.type ) {
    case 'setUsers':
      return {
        ...state,

        isLoading: false,
        users: action.payload
      }

    case 'setLoadingUsers':
      return {
        ...state,

        isLoading: true,
        users: []
      } 
  
    default:
      return state;
  }
}