import { useContext, useEffect } from 'react';

import { GridUserCard } from '../../styles/userCardStyle';
import { UserCardResult } from './UserCardResult';
import { UsersContext } from '../../context/users/UsersContext';
import { Users } from '../../interfaces/users';
import { LoadingPage } from '../LoadingPage';


export const UserList = () => {

  // isLoading refers to if the process of requesting data from Github Api is completed
  // users has the data list
  const { isLoading, users } = useContext(UsersContext);
  
  // if the request is not complete yet shows a LoadingPage
  if (isLoading) {
    return <LoadingPage />
  }
  
  // if there are not result or the search input is empty shows a empty page 
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
