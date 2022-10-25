import { FaCopy, FaEye, FaStar } from 'react-icons/fa';
import { RepositorieCard, RepositorieHeaderCard, RepositorieContent, RepositorieTopics, RepositorieBody, RepositorieBodyOwner, RepositorieDetails, RepositorieDetail } from '../../styles/repositorieCardStyle';

export const RepositoriesCardResult = ({ repositorie }: any) => {
  console.log(repositorie);
  return (
    <RepositorieCard>
      <RepositorieHeaderCard>
        <img src={ repositorie.owner.avatar_url } alt="Profile" />
        <div>{ repositorie.name }</div>
      </RepositorieHeaderCard>

      <RepositorieContent>
        <RepositorieTopics>
          {
            repositorie.topics.map((topic: any) =>
              <div className='topic'> { topic } </div>
            )
          }
        </RepositorieTopics>
        <RepositorieBody>
          <RepositorieBodyOwner>{ repositorie.owner.login }</RepositorieBodyOwner>
          <div> { repositorie.description } </div>
        </RepositorieBody>

        <RepositorieDetails>
          <RepositorieDetail>
            <FaStar />
            <div>{ repositorie.stargazers_count }</div>
          </RepositorieDetail>
          <RepositorieDetail>
            <FaEye />
            <div>{ repositorie.watchers }</div>
          </RepositorieDetail>
          <RepositorieDetail>
            <FaCopy />
            <div>{ repositorie.forks }</div>
          </RepositorieDetail>
        </RepositorieDetails>
      </RepositorieContent>
    </RepositorieCard>
  )
}
