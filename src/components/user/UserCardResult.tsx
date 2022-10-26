import { UserCard, UserDetail, UserDetails, UserDetailText, UserImage, UserName } from '../../styles/userCardStyle';
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
      <UserName>{ data.login }</UserName>
      
      {/* <UserDetails>
        <UserDetail>
          <div>5</div>
          <UserDetailText>Repositories</UserDetailText>
        </UserDetail>
        <UserDetail>
          <div>30</div>
          <UserDetailText>Followers</UserDetailText>
        </UserDetail>
        <UserDetail>
          <div>35</div>
          <UserDetailText>Following</UserDetailText>
        </UserDetail>
      </UserDetails> */}
    </UserCard>
  )
}
