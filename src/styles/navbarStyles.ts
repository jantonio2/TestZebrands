import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MenuProps {
  isActive: boolean;
}

export const Nav = styled.nav`
  background-color: #1F1F1F;
  height: 85px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 999;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  max-width: 1440px;
  width: 100%;
  z-index: 100;
`

export const Logo = styled.div`
  /* cursor: pointer; */
  margin-left: 60px;
  transition: 0.5s all ease;
  width: 150px;
  z-index: 100;

  @media (max-width: 400px) {
    margin-left: 30px;
    transition: 0.5s all ease;
    width: 100px;
  }
`

export const Menu = styled.ul<MenuProps>`
  display: flex;
  height: 100%;
  justify-content: space-between;
  list-style: none;
  margin-right: 60px;

  @media (max-width: 800px) {
    align-items: center;
    background-color: #1F1F1F;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: ${({isActive}) => isActive ? "0" : "-100%"};
    position: absolute;
    top: 85px;
    transition: 0.5s all ease;
    width: 100%;
  }
`
export const MenuItem = styled.li`
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    height: 85px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
`

export const MenuItemLink = styled(Link)`
  align-items: center;
  color: #888888;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 100%;
  justify-content: center;
  padding: 0rem 2.5rem;
  text-decoration: none;
  
  &:hover, 
  &:focus {
    background-color: #2F2C2C;
    color: #E1E1E1;
    transition: 0.5s all ease;
  }
`

export const Toggle = styled.div`
  color: #888888;
  cursor: pointer;
  display: none;
  font-size: 30px;
  margin-right: 60px;
  transition: .3s;

  &:hover{
    color: #E1E1E1;
    transition: 0.5s all ease;
  }

  @media (max-width: 800px){
    display: inline-block;
  }
`