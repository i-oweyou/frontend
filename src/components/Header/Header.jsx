import { Link } from 'react-router-dom'
import { getItemFromLocalStorage } from '../../utils/localstorage'
import logo from '../../assets/logo/ioweyou_transparent.webp'

export default function Header() {
  const userToken = getItemFromLocalStorage('token')

  return (
    <>
      <header className="z-1">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/">
              <span className="sr-only">iOweyou</span>
              <img alt="" src={logo} className="h-8 w-auto dark:hidden" />
              <img alt="" src={logo} className="h-8 w-auto not-dark:hidden" />
            </Link>
          </div>
          <div className="flex flex-1 justify-end">
            {userToken && (
              <Link
                to="/me"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                  loading="lazy"
                  decoding="async"
                  alt="Rounded avatar"
                />
              </Link>
            )}
            {!userToken && (
              <Link
                to="/login"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}
