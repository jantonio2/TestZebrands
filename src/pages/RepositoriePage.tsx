import { RepositoriesList, SearchInput } from '../components'
import { Title } from '../styles/pageStyle'

export const RepositoriePage = () => {
  return (
    <div>
      <Title> REPOSITORIES </Title>
  
      <SearchInput />
  
      <RepositoriesList />  
    </div>
  )
}
