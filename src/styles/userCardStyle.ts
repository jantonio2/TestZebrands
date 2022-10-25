import { FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const GridCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 75px;
  max-width: 1440px;
`

export const Card = styled.div`
  /* background-color: #2F2C2C; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  /* color: #C8BFBF; */
  flex: 0 1 calc(25% - 1em);
  grid-column-end: 5;
  max-width: 500px;
  padding: 35px 20px;
  text-align: center;
`

export const Image = styled.img`
  border-radius: 50%;
  display: block;
  height: 180px;
  margin: 0 auto 20px auto;
  object-fit: cover;
  width: 180px;
`

export const Name = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`

export const OutLink = styled(FaExternalLinkAlt)`
  margin-bottom: 6px;
`

export const DetailText = styled.div`
  font-weight: bold;
`