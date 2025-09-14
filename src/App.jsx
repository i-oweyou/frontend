import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Hero = lazy(() => import('./pages/Hero/Hero'))
const Signup = lazy(() => import('./pages/Signup/Signup'))
const Login = lazy(() => import('./pages/Login/Login'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 h-full flex flex-col">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
