import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardAddContext } from '../DashboardAddContext'
import { giveDebt } from '../../../../../services/debt'
import { getItemFromLocalStorage } from '../../../../../utils/localstorage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMars,
  faVenus,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

export default function DashboardAddSend() {
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const user = getItemFromLocalStorage('user')
  const { debt, borrower } = useContext(DashboardAddContext)
  const navigate = useNavigate()

  async function send() {
    setSending(true)

    try {
      const sent = await giveDebt(debt)
      if (sent) navigate('/dashboard/sent')
    } catch (err) {
      setError(err.message)
      setSending(false)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <UserCard user={user} />
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-center text-3xl"
        />
        <UserCard user={borrower} />
        <DebtInfo />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div
        className="fixed bottom-10 left-1/2 -translate-x-1/2"
        disabled={sending}
        onClick={send}
      >
        <div className="bg-indigo-500 hover:bg-indigo-600 text-white text-3xl font-bold h-18 px-4 cursor-pointer flex items-center justify-center rounded-full shadow-lg transition-colors">
          <span>{sending ? 'Sending' : 'Send'}</span>
        </div>
      </div>
    </>
  )
}

function UserCard({ user }) {
  return (
    <>
      <div className="flex items-center justify-between w-full rounded-md bg-white/5 px-4 py-8 text-base text-white sm:text-sm/6">
        <b className="text-lg text-white font-semibold">
          {user?.name}
          {user?.gender === 'male' && (
            <FontAwesomeIcon icon={faMars} className="text-blue-500 text-sm" />
          )}
          {user?.gender === 'female' && (
            <FontAwesomeIcon icon={faVenus} className="text-pink-500 text-sm" />
          )}
        </b>
        <span className="text-sm text-gray-400">@{user?.username}</span>
      </div>
    </>
  )
}

function DebtInfo() {
  const { debt } = useContext(DashboardAddContext)

  return (
    <div className="flex flex-col w-full rounded-md bg-white/5 px-4 py-8 text-base text-white sm:text-sm/6 space-y-2">
      <div className="flex items-baseline">
        <span>Amount</span>
        <span className="flex-1 border-b border-dotted border-gray-600 mx-2"></span>
        <span>{debt?.amount} so'm</span>
      </div>
      <div className="flex items-baseline">
        <span>Payment date</span>
        <span className="flex-1 border-b border-dotted border-gray-600 mx-2"></span>
        <span>{debt?.paymentDate || 'Unknown'}</span>
      </div>
      <div className="flex flex-col">
        <span>Description</span>
        <p className="text-sm text-gray-400">
          {debt?.description || 'No description provided'}
        </p>
      </div>
    </div>
  )
}
