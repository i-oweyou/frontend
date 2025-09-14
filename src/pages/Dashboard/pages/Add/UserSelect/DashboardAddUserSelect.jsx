import { useContext, useTransition, useCallback, useState } from 'react'
import DebouncedInput from '../../../../../components/DebouncedInput/DebouncedInput'
import { DashboardAddContext } from '../DashboardAddContext'
import { searchUsersByUsername } from '../../../../../services/user'
import { getItemFromLocalStorage } from '../../../../../utils/localstorage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

export default function DashboardAddUserSelect() {
  const [isPending, startTransition] = useTransition()
  const { setDebt } = useContext(DashboardAddContext)
  const [users, setUsers] = useState([])

  const searchUser = useCallback(
    function (value) {
      if (!value) {
        setUsers([])
        return
      }

      startTransition(async () => {
        const data = await searchUsersByUsername(value)
        setUsers(data)
      })
    },
    [startTransition]
  )

  return (
    <>
      <div className="w-full">
        <DebouncedInput
          label="Search by username"
          delay={400}
          onDebounce={searchUser}
        />
      </div>
      <div className="flex flex-col mt-2 gap-2">
        {isPending && (
          <div className="text-white text-center">Searching...</div>
        )}
        {!isPending &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </>
  )
}

function UserCard({ user }) {
  const { debt, setDebt, stages, setStages, setBorrower } =
    useContext(DashboardAddContext)
  const localUser = getItemFromLocalStorage('user')

  function selectUser() {
    setBorrower(user)
    setDebt({ ...debt, borrowerId: user?.id })
    setStages({
      ...stages,
      current: stages.current + 1,
    })
  }

  if (localUser?.id === user?.id) return null

  return (
    <>
      <div
        className="flex items-center justify-between w-full cursor-pointer rounded-md bg-white/5 px-3 py-1.5 text-base text-white sm:text-sm/6 hover:bg-white/10"
        onClick={selectUser}
      >
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
