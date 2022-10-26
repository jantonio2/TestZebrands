import { createContext } from 'react';
import { Repositories } from '../../interfaces/repositorie';

interface RepositorieContextProps {
  isLoading: boolean;
  repositories: Repositories[],

  //Methods
  searchRepositoriesByTerm: (query: string) => Promise<Repositories[]>
}


export const RepositoriesContext = createContext<RepositorieContextProps>({} as RepositorieContextProps);