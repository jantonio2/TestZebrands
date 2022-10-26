import { useReducer } from 'react';
import searchApi from '../../api/searchApi';
import { Repositories, MainRepositorie } from '../../interfaces/repositorie';
import { RepositoriesContext } from './RepositoriesContext';
import { repositoriesReducer } from './repositoriesReducer';


export interface RepositoriesState {
  isLoading: boolean;
  repositories: Repositories[];
}

const INITIAL_STATE: RepositoriesState = {
  isLoading: false,
  repositories: []
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const RepositoriesProvider = ({ children }: Props) => {
  
  const [state, dispatch] = useReducer(repositoriesReducer, INITIAL_STATE);

   // Function that loads data on the repositorie context
  const searchRepositoriesByTerm = async( query: string ): Promise<Repositories[]> => {
    

    if ( query.length === 0 ) {
      dispatch({ type: 'setRepositories', payload: [] });
      return [];
    }
    dispatch({ type: 'setLoadingRepositories' });

    const resp = await searchApi.get<MainRepositorie>(`/repositories`, {
      params: {
        q: query,
        per_page: 12
      }
    });

    dispatch({ type: 'setRepositories', payload: resp.data.items });
    return resp.data.items;

  }

  return (
    <RepositoriesContext.Provider value={{
      ...state,
      // Methods
      searchRepositoriesByTerm
    }}>
      { children }
    </RepositoriesContext.Provider>
  )
}
