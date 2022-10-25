
export const RepositoriesCardResult = ({ repositorie }: any) => {
  console.log(repositorie);
  return (
    <div className='Card'>
      <div className='HeaderCard'>
        <img src={ repositorie.owner.avatar_url } alt="Profile" />
        <div>{ repositorie.name }</div>
      </div>

      <div className='Content'>
        <div className='Topics'>
          {
            repositorie.topics.map((topic: any) =>
              <div className='topic'> { topic } </div>
            )
          }
        </div>
        <div className='Body'>
          <div className='Owner'>{ repositorie.owner.login }</div>
          <div className='Description'> { repositorie.description } </div>
        </div>

        <div className='Details'>
          <div className='Detail'>
            <div>{ repositorie.stargazers_count }</div>
            <div>icon</div>
          </div>
          <div className='Detail'>
            <div>{ repositorie.watchers }</div>
            <div>icon</div>
          </div>
          <div className='Detail'>
            <div>{ repositorie.forks }</div>
            <div>icon</div>
          </div>
        </div>
      </div>
    </div>
  )
}
