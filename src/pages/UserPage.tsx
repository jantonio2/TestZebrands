import { SearchInput, UserList } from '../components'
import { Title } from '../styles/pageStyle'

export const UserPage = () => {
  return (
    <div>
      <Title> USERS </Title>
  
      <SearchInput />
  
      <UserList />    
    </div>
  )
}
