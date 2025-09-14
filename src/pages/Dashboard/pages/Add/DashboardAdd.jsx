import { useState } from 'react'
import { DashboardAddContext } from './DashboardAddContext'
import DashboardAddHeader from './Header/DashboardAddHeader'
import DashboardAddUserSelect from './UserSelect/DashboardAddUserSelect'
import DashboardAddAmount from './Amount/DashboardAddAmount'
import DashboardAddCalendar from './Calendar/DashboardAddCalendar'
import DashboardAddSend from './Send/DashboardAddSend'

export default function DashboardAdd() {
  const [stages, setStages] = useState({
    current: 1,
    stages: [
      <DashboardAddUserSelect />,
      <DashboardAddAmount />,
      <DashboardAddCalendar />,
      <DashboardAddSend />,
    ],
  })
  const [debt, setDebt] = useState({
    borrowerId: null,
    amount: 0,
    description: '',
    paymentDate: null,
  })
  const [borrower, setBorrower] = useState(null)

  return (
    <>
      <DashboardAddContext.Provider
        value={{ debt, setDebt, stages, setStages, borrower, setBorrower }}
      >
        <DashboardAddHeader />
        <div className="flex justify-center">
          <div className="w-full max-w-[400px]">
            {stages.stages[stages.current - 1]}
          </div>
        </div>
      </DashboardAddContext.Provider>
    </>
  )
}
