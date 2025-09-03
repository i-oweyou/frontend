import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackgroundBubble from '../../components/BackgroundBubble/BackgroundBubble'
import { login } from '../../services/account'
import { getItemFromLocalStorage } from '../../utils/localstorage'
import logo from '../../assets/logo/ioweyou_transparent.webp'

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const userData = getItemFromLocalStorage('user')

  useEffect(() => {
    if (userData) navigate('/me')
  }, [userData])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setSubmitting(true)
      setError('')

      const loggedIn = await login(form.username, form.password)
      if (loggedIn) navigate('/')
    } catch (error) {
      setSubmitting(false)
      setError(error.message)
    }
  }

  if (userData) return null

  return (
    <>
      <div className="relative isolate flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="iOweyou" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
            Log in to your account
          </h2>
        </div>

        <div
          className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
          disabled={submitting}
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                value={form.username}
                onChange={handleChange}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white cursor-pointer hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Log in
            </button>

            <div className="text-center text-gray-100">
              Do not have account?{' '}
              <Link
                to="/signup"
                className="text-indigo-500 hover:text-indigo-400"
              >
                Create one
              </Link>{' '}
              or{' '}
              <Link to="/" className="text-indigo-500 hover:text-indigo-400">
                Go back home
              </Link>
            </div>
          </form>
        </div>
        <BackgroundBubble />
      </div>
    </>
  )
}
