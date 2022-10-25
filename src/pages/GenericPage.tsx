import { Title } from '../styles/pageStyle'
import { SearchInput, UserList } from '../components';

interface GenericPageProps {
  title: string;
}

export const GenericPage = ({ title }: GenericPageProps) => {
  return (
    <div>
      <Title>{ title.toUpperCase() }</Title>

      <SearchInput />

      <UserList />  
    </div>
  )
}
