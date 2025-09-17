import { getItemFromLocalStorage } from '../utils/localstorage'

export async function giveDebt(debtData) {
  const token = getItemFromLocalStorage('token')

  const response = await fetch(`${import.meta.env.VITE_BASE_API}/debt/give`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(debtData),
  })

  const resData = await response.json()

  if (!response.ok) {
    throw new Error(resData.error || 'Something went wrong')
  }

  return resData
}

export async function retrieveDebtRequests() {
  const token = getItemFromLocalStorage('token')

  const response = await fetch(
    `${import.meta.env.VITE_BASE_API}/debt/requests`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )

  const resData = await response.json()

  if (!response.ok) {
    throw new Error(resData.error || 'Something went wrong')
  }

  return resData
}
