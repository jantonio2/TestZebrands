import { FaCopy, FaEye, FaStar } from 'react-icons/fa';
import { Repositories } from '../../interfaces/repositorie';
import { RepositorieCard, RepositorieHeaderCard, RepositorieContent, RepositorieTopics, RepositorieBody, RepositorieBodyOwner, RepositorieDetails, RepositorieDetail } from '../../styles/repositorieCardStyle';

interface RepositoriesProps {
  data: Repositories;
}

export const RepositoriesCardResult = ({ data }: RepositoriesProps) => {

  return (
    <RepositorieCard>
      <RepositorieHeaderCard>
        <a href={ data.owner.html_url } target="_blank">
          <img src={ data.owner.avatar_url } alt="Profile" />
        </a>
        <a href={ data.html_url } target="_blank">
          <div>{ data.name }</div> 
        </a>
      </RepositorieHeaderCard>

      <RepositorieContent>
        <RepositorieTopics>
          {
            (data.topics.length > 0)
            ?
            data.topics.map((topic: string) =>
              <div
                key={ topic }
                className='topic'
              > 
                { topic } 
              </div>
            )
            :
            <i>Sin etiquetas</i>
          }
        </RepositorieTopics>
        <RepositorieBody>
          <RepositorieBodyOwner>{ data.owner.login }</RepositorieBodyOwner>
          <div> { data.description } </div>
        </RepositorieBody>

        <RepositorieDetails>
          <RepositorieDetail>
            <FaStar />
            <div>{ data.stargazers_count }</div>
          </RepositorieDetail>
          <RepositorieDetail>
            <FaEye />
            <div>{ data.watchers }</div>
          </RepositorieDetail>
          <RepositorieDetail>
            <FaCopy />
            <div>{ data.forks }</div>
          </RepositorieDetail>
        </RepositorieDetails>
      </RepositorieContent>
    </RepositorieCard>
  )
}
