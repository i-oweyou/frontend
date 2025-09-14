const userCache = new Map()

export async function searchUsersByUsername(username) {
  if (userCache.has(username)) return userCache.get(username)

  const response = await fetch(
    `${import.meta.env.VITE_BASE_API}/user/search/${username}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const resData = await response.json()

  if (!response.ok) {
    throw new Error(resData.error || 'Something went wrong')
  }

  userCache.set(username, resData)
  return resData
}
