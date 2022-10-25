import { createContext } from 'react';

interface RepositorieContextProps {
  isLoading: boolean;
}


export const RepositoriesContext = createContext<RepositorieContextProps>({} as RepositorieContextProps);