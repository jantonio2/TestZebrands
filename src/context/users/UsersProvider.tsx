import { UsersContext } from './UsersContext';

export interface UsersState {
  isLoading: boolean;
}

const INITIAL_STATE: UsersState = {
  isLoading: true
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UsersProvider = ({ children }: Props) => {
  return (
    <UsersContext.Provider value={{
      isLoading: true
    }}>
      { children }
    </UsersContext.Provider>
  )
}
