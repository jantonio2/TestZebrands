import styled from 'styled-components';

export const GridRepositorieCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 75px;
  max-width: 1440px;
`

export const RepositorieCard = styled.div`
  background-color: #131923;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  flex: 0 1 calc(25% - 1em);
  color: #C1D9D0;
  grid-column-end: 5;
  max-width: 400px;
  padding: 35px 20px;
  text-align: center;
`

export const RepositorieHeaderCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;

  div {
    font-weight: bold;
    font-size: 26px;
  }

  img {
    border-radius: 50%;
    display: block;
    height: 120px;
    /* margin: 0 auto 20px auto; */
    object-fit: cover;
    width: 120px;
  }

`

export const RepositorieContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const RepositorieTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div{
    background-color: #C1D9D0;
    color: #131923;
    padding: 1px 5px;
    margin: 3px;
    border-radius: 10px;
  }
`

export const RepositorieBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const RepositorieBodyOwner = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  padding: 5px;
`

export const RepositorieDetails = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-evenly;
  margin-top: 25px;
  transition: 0.5s all ease;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.5s all ease;
  }
`

export const RepositorieDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    transition: 0.5s all ease;
  }
`