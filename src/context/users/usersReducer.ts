import { UsersState } from './UsersProvider';
import { Users } from '../../interfaces/users';
import { User } from '../../interfaces/user';

type UsersAction = 
  | { type: 'setLoadingUsers' }
  | { type: 'setLoadingDetailsUser' }
  | { type: 'setUsers', payload: Users }
  | { type: 'setUser', payload: User }

export const placesReducer = ( state: UsersState, action: UsersAction  ): UsersState => {
  switch ( action.type ) {
    case 'setUsers':
      return {
        ...state,
        
      }
  
    default:
      return state;
  }
}