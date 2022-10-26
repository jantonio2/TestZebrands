import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, Container, Logo, Menu, MenuItem, MenuItemLink, Toggle } from '../styles/navbarStyles';
import logo from '../assets/imagotipo.svg'

export const Navbar = () => {

  // This state is for responsive navbar
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Nav>
      <Container>
        <Logo>
          <img src={ logo }  alt="Logo" />
        </Logo>

        <Menu isActive={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={ () => setShowMobileMenu(!showMobileMenu) } to='/users'>Users</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={ () => setShowMobileMenu(!showMobileMenu) } to='/repositories'>Repositories</MenuItemLink>
          </MenuItem>
        </Menu>

        {/* Menu mobile */}
        <Toggle onClick={ () => setShowMobileMenu(!showMobileMenu) }>
          {
            showMobileMenu ? <FaTimes /> : <FaBars />
          }
        </Toggle>
      </Container>
    </Nav>
  )
}
