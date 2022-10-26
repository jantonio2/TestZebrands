import { UserCard, UserDetail, UserDetails, UserDetailText, UserImage, UserName, NickName } from '../../styles/userCardStyle';
import { Users } from '../../interfaces/users';
import { User } from '../../interfaces/user';
import { useContext } from 'react';
import { UsersContext } from '../../context';

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
    
      {/* <UserDetails>
        <UserDetail>
          <div>{ data.user?.public_repos }</div>
          <UserDetailText>Repositories</UserDetailText>
        </UserDetail>
        <UserDetail>
          <div>{ data.user?.followers }</div>
          <UserDetailText>Followers</UserDetailText>
        </UserDetail>
        <UserDetail>
          <div>{ data.user?.following }</div>
          <UserDetailText>Following</UserDetailText>
        </UserDetail>
      </UserDetails>      */}
    </UserCard>
  )
}
