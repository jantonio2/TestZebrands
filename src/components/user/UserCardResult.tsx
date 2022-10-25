import { Card, Detail, Details, DetailText, Image, Name, OutLink } from '../../styles/userCardStyle';


// 
export const UserCardResult = ({ user }: any ) => {
  console.log(user)
  console.log(user.avatar_url)
  return (
    <Card>
      <Image src={ user.avatar_url } alt="Profile" />
      <Name>{ user.login }</Name>
      
      <Details>
        <Detail>
          <div>5</div>
          <DetailText>Repositories</DetailText>
        </Detail>
        <Detail>
          <div>30</div>
          <DetailText>Followers</DetailText>
        </Detail>
        <Detail>
          <OutLink />
          <DetailText>Link</DetailText>
        </Detail>
      </Details>
    </Card>
  )
}
