import { FaExternalLinkAlt } from 'react-icons/fa';
import styled, { StyledComponent } from 'styled-components';

export const GridUserCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 75px;
  max-width: 1440px;
`

export const UserCard = styled.div`
  /* background-color: #010409; */
  background-color: #131923;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #C1D9D0;
  border-radius: 15px;
  flex: 0 1 calc(25% - 1em);
  grid-column-end: 5;
  max-width: 500px;
  padding: 35px 20px;
  text-align: center;
`

export const UserImage = styled.img`
  border-radius: 50%;
  display: block;
  height: 180px;
  margin: 0 auto 20px auto;
  object-fit: cover;
  width: 180px;
`

export const UserName = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  transition: 0.5s all ease;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.5s all ease;
  }
`

export const UserDetail = styled.div`
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

export const OutLink = styled(FaExternalLinkAlt)`
  margin-bottom: 6px;
`

export const UserDetailText = styled.div`
  font-weight: bold;
`