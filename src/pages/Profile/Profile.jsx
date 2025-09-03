import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import BackgroundBubble from '../../components/BackgroundBubble/BackgroundBubble'
import { logout } from '../../services/account'
import { getItemFromLocalStorage } from '../../utils/localstorage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {
  const navigate = useNavigate()
  const userData = getItemFromLocalStorage('user')

  useEffect(() => {
    if (!userData) navigate('/login')
  }, [userData])

  function logoutProfile() {
    logout()
    navigate('/')
  }

  if (!userData) return null

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 overflow-hidden rounded-lg shadow-md border border-gray-200 w-full max-w-md">
          <div className="relative isolate flex flex-col items-center space-y-3">
            <img
              className="w-24 h-24 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              loading="lazy"
              decoding="async"
              alt="Rounded avatar"
            />
            <div className="flex items-center flex-col mb-4">
              <h2 className="text-2xl text-white font-semibold">
                {userData?.name}
                {userData?.gender === 'male' && (
                  <FontAwesomeIcon icon={faMars} className="text-blue-500" />
                )}
                {userData?.gender === 'female' && (
                  <FontAwesomeIcon icon={faVenus} className="text-pink-500" />
                )}
              </h2>
              <span className="text-sm text-gray-400">
                @{userData?.username}
              </span>
            </div>
            <Link
              to="/dashboard"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Dashboard
            </Link>
            <button
              className="flex w-full justify-center rounded-md text-red-400 px-3 py-1.5 text-sm/6 font-semibold cursor-pointer hover:bg-red-400 hover:text-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              onClick={logoutProfile}
            >
              Log out
            </button>
            <BackgroundBubble />
          </div>
        </div>
      </div>
    </>
  )
}
