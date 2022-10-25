import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { UserPage, RepositoriePage } from '../pages';
import { Navbar } from '../components';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="users" element= { <UserPage /> } />
        <Route path="repositories" element= { <RepositoriePage /> } />
        
        <Route path="/*" element= { <Navigate to="users" /> } />
      </Routes>
    </BrowserRouter>
  )
}
