
import { GridCard } from '../../styles/userCardStyle';
import { UserCardResult } from './UserCardResult';

export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  repos_url: string;
}

export const UserList = () => {

  const user: User = {
    login: "jantonio2",
    avatar_url: "https://avatars.githubusercontent.com/u/48572583?v=4",
    html_url: "https://github.com/jantonio2",
    followers_url: "https://api.github.com/users/jantonio2/followers",
    repos_url: "https://api.github.com/users/jantonio2/repos",
  }

  return (
    <GridCard>
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
      <UserCardResult user={ user } />
    </GridCard>
  )
}
