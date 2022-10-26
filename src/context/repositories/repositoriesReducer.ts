import { Repositories } from '../../interfaces/repositorie'
import { RepositoriesState } from './RepositoriesProvider';

type RepositoriesAction = 
| { type: 'setLoadingRepositories' }
| { type: 'setRepositories', payload: Repositories[] }

export const repositoriesReducer = ( state: RepositoriesState, action: RepositoriesAction ): RepositoriesState => {
  switch ( action.type ) {
    case 'setRepositories':
      return {
        ...state,

        isLoading: false,
        repositories: action.payload
      }

    case 'setLoadingRepositories':
      return {
        ...state,

        isLoading: true,
        repositories: []
      }
  
    default:
      return state;
  }
}