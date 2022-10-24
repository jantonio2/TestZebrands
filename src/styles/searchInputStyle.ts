import styled from 'styled-components';

export const SearchContainer = styled.div`
  height: 50px;
  margin: 0 auto;
  position: relative;
  width: 300px;
`

export const Search = styled.input`
  background: transparent;
  border: 2px solid #1F1F1F;
  border-radius: 10px;
  font-size: 20px;
  height: 100%;
  outline: none;
  padding: 0 10px;
  width: 100%;

  &:focus ~ label {
    top: -9px;
  }
`