import { UserCard, UserDetail, UserDetails, UserDetailText, UserImage, UserName, OutLink } from '../../styles/userCardStyle';


// 
export const UserCardResult = ({ user }: any ) => {
  console.log(user)
  console.log(user.avatar_url)
  return (
    <UserCard>
      <UserImage src={ user.avatar_url } alt="Profile" />
      <UserName>{ user.login }</UserName>
      
      <UserDetails>
        <UserDetail>
          <div>5</div>
          <UserDetailText>Repositories</UserDetailText>
        </UserDetail>
        <UserDetail>
          <div>30</div>
          <UserDetailText>Followers</UserDetailText>
        </UserDetail>
        <UserDetail>
          <OutLink />
          <UserDetailText>Link</UserDetailText>
        </UserDetail>
      </UserDetails>
    </UserCard>
  )
}
