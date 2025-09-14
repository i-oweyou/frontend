import { getItemFromLocalStorage } from '../utils/localstorage'

export async function giveDebt(debtData) {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/debt/give`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getItemFromLocalStorage('token')}`,
    },
    body: JSON.stringify(debtData),
  })

  const resData = await response.json()

  if (!response.ok) {
    throw new Error(resData.error || 'Something went wrong')
  }

  return resData
}
