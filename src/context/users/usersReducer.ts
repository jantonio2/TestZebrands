import { UsersState } from './UsersProvider';
import { Users } from '../../interfaces/users';
import { User } from '../../interfaces/user';

type UsersAction = 
  | { type: 'setLoadingUsers' }
  | { type: 'setLoadingDetailsUser' }
  | { type: 'setUsers', payload: Users[] }
  | { type: 'setDetailUser', payload?: User }

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

    case 'setDetailUser':
      return {
        ...state,

        isLoadingDetail: false,
        userDetail: action.payload
      }  

    case 'setLoadingDetailsUser':
      return {
        ...state,
        isLoadingDetail: true,
      }
  
    default:
      return state;
  }
}