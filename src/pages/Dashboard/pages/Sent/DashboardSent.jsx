import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackgroundBubble from '../../../../components/BackgroundBubble/BackgroundBubble'

export default function DashboardSent() {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    if (countdown === 0) {
      navigate('/dashboard')
      return
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, navigate])

  return (
    <div className="relative isolate h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-semibold">Debt sent!</h2>
      <Link
        to="/dashboard"
        className="flex w-[400px] justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white cursor-pointer hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        disabled={!countdown}
      >
        Dashboard {countdown > 0 && `(${countdown})`}
      </Link>
      <BackgroundBubble />
    </div>
  )
}
