import { UserCard, UserImage, NickName } from '../../styles/userCardStyle';
import { Users } from '../../interfaces/users';

interface UserProps {
  data: Users;
}

export const UserCardResult = ( { data }: UserProps ) => {

  return (
    <UserCard>
      <a href={ data.html_url } target="_blank">
        <UserImage src={ data.avatar_url } alt="Profile" />
      </a>
      {/* <UserName>{ data.user?.name }</UserName> */}
      <NickName><b>NickName:</b> { data.login }</NickName>
    </UserCard>
  )
}
