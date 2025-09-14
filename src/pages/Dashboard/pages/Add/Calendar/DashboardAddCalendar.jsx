import { useContext } from 'react'
import Calendar from '../../../../../components/Calendar/Calendar'
import { DashboardAddContext } from '../DashboardAddContext'

export default function DashboardAddCalendar() {
  const { debt, setDebt, stages, setStages } = useContext(DashboardAddContext)

  return (
    <>
      <Calendar setDate={(date) => setDebt({ ...debt, paymentDate: date })} />
      <button
        className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white cursor-pointer hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        disabled={!debt?.paymentDate}
        onClick={() => setStages({ ...stages, current: stages.current + 1 })}
      >
        Next
      </button>
    </>
  )
}
