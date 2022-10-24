import React from 'react'
import { SearchContainer, Search } from '../styles/searchInputStyle'

export const SearchInput = () => {
  return (
    <SearchContainer>
      <Search type="text" placeholder="Search" />
    </SearchContainer>
  )
}
