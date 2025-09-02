import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import BackgroundBubble from '../../components/BackgroundBubble/BackgroundBubble'

export default function Hero() {
  return (
    <>
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
              Swap Debts, Not Friendships
            </h1>
          </div>
          <Link
            to="/dashboard"
            className="text-gray-100 border rounded-full px-4 py-1 block mt-5 max-w-fit mx-auto hover:border-[#3B82F6]"
          >
            <span className="text-gray-400">
              Start managing your debts now.
            </span>{' '}
            <span>Dashboard</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <BackgroundBubble />
      </div>
    </>
  )
}
