import {
  removeItemFromLocalStorage,
  setItemToLocalStorage,
} from '../utils/localstorage'

export async function login(username, password) {
  const response = await fetch(
    import.meta.env.VITE_BASE_API + '/account/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }
  )

  if (!response.ok) {
    throw new Error('Login failed')
  }

  const resData = await response.json()

  setItemToLocalStorage('token', resData?.token)
  setItemToLocalStorage('user', resData?.account)
  return resData
}

export async function signup(data) {
  const response = await fetch(
    import.meta.env.VITE_BASE_API + '/account/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) {
    throw new Error('Signup failed')
  }

  const resData = await response.json()

  setItemToLocalStorage('token', resData?.token)
  setItemToLocalStorage('user', resData?.account)
  return resData
}

export function logout() {
  removeItemFromLocalStorage('token')
  removeItemFromLocalStorage('user')
}
