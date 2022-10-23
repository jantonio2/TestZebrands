import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { UserPage, RepositoriesPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element= { <UserPage /> } />
        <Route path="repositories" element= { <RepositoriesPage /> } />
        
        <Route path="/*" element= { <Navigate to="users" /> } />
      </Routes>
    </BrowserRouter>
  )
}
