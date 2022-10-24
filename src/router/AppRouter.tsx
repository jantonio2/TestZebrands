import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { GenericPage } from '../pages';
import { Navbar } from '../components';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="users" element= { <GenericPage title="users" /> } />
        <Route path="repositories" element= { <GenericPage title="repositories" /> } />
        
        <Route path="/*" element= { <Navigate to="users" /> } />
      </Routes>
    </BrowserRouter>
  )
}
