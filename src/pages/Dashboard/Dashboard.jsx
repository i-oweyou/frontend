import { lazy, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getItemFromLocalStorage } from '../../utils/localstorage'

const DashboardHome = lazy(() => import('./pages/Home/DashboardHome'))
const DashboardAdd = lazy(() => import('./pages/Add/DashboardAdd'))
const DashboardRequests = lazy(() =>
  import('./pages/Requests/DashboardRequests')
)
const DashboardSent = lazy(() => import('./pages/Sent/DashboardSent'))

export default function Dashboard() {
  const navigate = useNavigate()
  const userData = getItemFromLocalStorage('user')

  useEffect(() => {
    if (!userData) navigate('/login')
  }, [userData])

  if (!userData) return null

  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/add" element={<DashboardAdd />} />
        <Route path="/requests" element={<DashboardRequests />} />
        <Route path="/sent" element={<DashboardSent />} />
      </Routes>
    </>
  )
}
