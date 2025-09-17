import Dialog from '../../../../../components/Dialog/Dialog'
import DashboardDebtInfo from '../../Info/DashboardDebtInfo'

export default function DashboardTableCard({ debt, open, onClose }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DashboardDebtInfo debt={debt} />
        <div className="flex">
          <button className="flex w-full justify-center bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white cursor-pointer hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
            Reject
          </button>
          <button className="flex w-full justify-center bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white cursor-pointer hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Accept
          </button>
        </div>
      </Dialog>
    </>
  )
}
