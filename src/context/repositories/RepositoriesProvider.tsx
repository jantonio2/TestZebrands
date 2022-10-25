import { RepositoriesContext } from './RepositoriesContext';


interface RepositoriesState {
  isLoading: boolean;
}

const INITIAL_STATE: RepositoriesState = {
  isLoading: true
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const RepositoriesProvider = ({ children }: Props) => {
  return (
    <RepositoriesContext.Provider value={{
      isLoading: true
    }}>
      { children }
    </RepositoriesContext.Provider>
  )
}
