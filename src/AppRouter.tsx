import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import Event from './pages/Event/Event'
import CreateEventForm from './pages/CreateEventForm/CreateEventForm'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MainLayout from './layouts/MainLayout/MainLayout'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:eventId" element={<Event />} />
          <Route path="/events/create" element={<CreateEventForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRouter
