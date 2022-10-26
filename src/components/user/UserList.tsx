import { useContext, useEffect } from 'react';

import { GridUserCard } from '../../styles/userCardStyle';
import { UserCardResult } from './UserCardResult';
import { UsersContext } from '../../context/users/UsersContext';
import { Users } from '../../interfaces/users';


export const UserList = () => {

  const { isLoading, users } = useContext(UsersContext);
  console.log(users)
  
  
  if (isLoading) {
    return <>
      <h6>Buscando</h6>
      <p>Espere por favor...</p>
    </>;
  }
  
  if ( users.length === 0 ){
    return <></>
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
