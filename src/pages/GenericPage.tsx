import { Title } from '../styles/pageStyle'
import { SearchInput } from '../components/SearchInput';

interface GenericPageProps {
  title: string;
}

export const GenericPage = ({ title }: GenericPageProps) => {
  return (
    <div>
      <Title>{ title.toUpperCase() }</Title>

      <SearchInput />
    </div>
  )
}
