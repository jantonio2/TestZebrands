import { useRef, useContext, ChangeEvent } from 'react';
import { RepositoriesList } from '../components'
import { Title } from '../styles/pageStyle'
import { Search, SearchContainer } from '../styles/searchInputStyle'
import { RepositoriesContext } from '../context/repositories/RepositoriesContext';

export const RepositoriePage = () => {

  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchRepositoriesByTerm } = useContext(RepositoriesContext)

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) 
      clearTimeout(debounceRef.current);
    
    debounceRef.current = setTimeout(() => {
      searchRepositoriesByTerm( event.target.value );
    }, 500);
  }

  return (
    <div>
      <Title> REPOSITORIES </Title>
  
      <SearchContainer>
        <Search type="text" placeholder="Search" onChange={ onQueryChanged } />
      </SearchContainer>
  
      <RepositoriesList />  
    </div>
  )
}
