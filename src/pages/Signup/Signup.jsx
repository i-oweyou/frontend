import { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundBubble from '../../components/BackgroundBubble/BackgroundBubble'
import { signup } from '../../services/account'
import logo from '../../assets/logo/ioweyou_transparent.webp'

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    gender: 'male',
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setSubmitting(true)
      setError('')

      const signupData = {
        name: form.name,
        gender: form.gender,
        username: form.username,
        password: form.password,
      }

      const signed = await signup(signupData)
      if (signed) window.location.href = '/'
    } catch (error) {
      setSubmitting(false)
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative isolate flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="iOweyou" src={logo} className="mx-auto h-10 w-auto" />
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
          Create your new account
        </h2>
      </div>

      <div
        className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
        disabled={submitting}
      >
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={form.gender || ''}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              <option
                value="male"
                className="bg-gray-800 text-white hover:bg-gray-700"
              >
                👨 Male
              </option>
              <option
                value="female"
                className="bg-gray-800 text-white hover:bg-gray-700"
              >
                👩 Female
              </option>
            </select>
          </div>

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
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign up
            </button>
          </div>

          <div className="text-center text-gray-100">
            Already have account?{' '}
            <Link to="/login" className="text-indigo-500 hover:text-indigo-400">
              Log in
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
  )
}
