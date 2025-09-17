export function isoToYMD(isoString) {
  if (!isoString) return 'Unknown'

  const date = new Date(isoString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function getDifference(isoString, ymdString) {
  if (!isoString || !ymdString) return 'Unknown'

  const startDate = new Date(isoString)
  const endDate = new Date(ymdString)
  const diffTime = endDate - startDate
  let days = new Date(diffTime).getDate() - 1

  if (!days) days = 'Today'
  if (days === 1) days = 'Tomorrow'
  if (days < 0) days = 'Overdue'
  if (days > 1) days = `${days} days`

  return days
}
