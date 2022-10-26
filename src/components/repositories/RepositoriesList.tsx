import { useContext } from 'react';
import { RepositoriesCardResult } from './RepositoriesCardResult';
import { GridRepositorieCard } from '../../styles/repositorieCardStyle';
import { RepositoriesContext } from '../../context/repositories/RepositoriesContext';
import { Repositories } from '../../interfaces/repositorie';

export const RepositoriesList = () => {

  const { isLoading, repositories } = useContext(RepositoriesContext);

  if (isLoading) {
    return <>
      <h6>Buscando</h6>
      <p>Espere por favor...</p>
    </>;
  }

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
