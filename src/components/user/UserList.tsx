import { useContext } from 'react';

import { GridUserCard } from '../../styles/userCardStyle';
import { UserCardResult } from './UserCardResult';
import { UsersContext } from '../../context/users/UsersContext';
import { Users } from '../../interfaces/users';


export const UserList = () => {

  const { isLoading, users } = useContext(UsersContext);

  console.log(isLoading)
  
  if ( users.length === 0 ){
    return <></>
  }

  if (isLoading) {
    return <>
      <h6>Buscando</h6>
      <p>Espere por favor...</p>
    </>;
  }

  return (
    <GridUserCard>
      {
        users.map( (user: Users) => (
          <UserCardResult 
            key={ user.id }
            data = { user } 
          />
        ))
      }
    </GridUserCard>
  )
}
