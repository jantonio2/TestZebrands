import { ChangeEvent, useRef, useContext, useEffect } from 'react';
import { UserList } from '../components'
import { UsersContext } from '../context';
import { Title } from '../styles/pageStyle'
import { Search, SearchContainer } from '../styles/searchInputStyle'

export const UserPage = () => {

  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchUsersByTerm } = useContext(UsersContext)

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) 
      clearTimeout(debounceRef.current);
    
    debounceRef.current = setTimeout(() => {
      searchUsersByTerm( event.target.value );
    }, 500);
  }
  

  return (
    <div>
      <Title> USERS </Title>
  
      <SearchContainer>
        <Search type="text" placeholder="Search" onChange={ onQueryChanged } />
      </SearchContainer>
  
      <UserList />    
    </div>
  )
}
