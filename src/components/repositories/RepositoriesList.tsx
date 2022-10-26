import { useContext } from 'react';
import { RepositoriesCardResult } from './RepositoriesCardResult';
import { GridRepositorieCard } from '../../styles/repositorieCardStyle';
import { RepositoriesContext } from '../../context/repositories/RepositoriesContext';
import { Repositories } from '../../interfaces/repositorie';
import { LoadingPage } from '../LoadingPage';

export const RepositoriesList = () => {

  // isLoading refers to if the process of requesting data from Github Api is completed
  // repositories has the data list
  const { isLoading, repositories } = useContext(RepositoriesContext);

  // if the request is not complete yet shows a LoadingPage
  if (isLoading) {
    return <LoadingPage />;
  }

  // if there are not result or the search input is empty shows a empty page 
  if ( repositories.length === 0 ){
    return <></>
  }

  return (
    <GridRepositorieCard>
      {
        repositories.map( (repositories: Repositories) => (
          <RepositoriesCardResult
            key = { repositories.id }
            data = { repositories }
          />
        ))
      }
    </GridRepositorieCard>
  )
}
