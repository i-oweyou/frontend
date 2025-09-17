import { useState } from 'react'
import DashboardTableCard from './DashboardTableCard/DashboardTableCard'
import { isoToYMD } from '../../utils/utils'

export default function DashboardTable({ tableData }) {
  const [dialog, setDialog] = useState({ debt: {}, opened: false })

  return (
    <>
      <div className="px-6 text-white select-none pb-40">
        <div className="hidden md:grid grid-cols-4 font-bold pb-2">
          <div>Name</div>
          <div>Given date</div>
          <div>Until payment</div>
          <div>Amount</div>
        </div>
        <div className="flex flex-col gap-1">
          {tableData.map((debt, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-4 gap-2 p-3 rounded-lg cursor-pointer ${
                idx % 2 === 0
                  ? 'dark:bg-gray-600 md:hover:bg-gray-700'
                  : 'bg-transparent'
              } hover:bg-gray-800 transition-colors`}
              onClick={() => setDialog({ debt, opened: true })}
            >
              <div className="break-words md:break-normal">
                {debt?.name || 'Loading...'}
              </div>
              <div>{isoToYMD(debt?.createdAt)}</div>
              <div>{debt?.paymentDate}</div>
              <div>{debt?.amount}</div>
            </div>
          ))}
        </div>
      </div>
      <DashboardTableCard
        debt={dialog.debt}
        open={dialog.opened}
        onClose={() => setDialog({ debt: {}, opened: false })}
      />
    </>
  )
}
