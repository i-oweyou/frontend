import { getDifference, isoToYMD } from '../../utils/utils'

export default function DashboardDebtInfo({ debt }) {
  return (
    <div className="flex flex-col w-full rounded-md bg-white/5 px-4 py-8 text-base text-white sm:text-sm/6 space-y-2">
      <div className="flex items-baseline">
        <span>Amount</span>
        <span className="flex-1 border-b border-dotted border-gray-600 mx-2"></span>
        <span>{debt?.amount} so'm</span>
      </div>
      {debt?.createdAt && (
        <div className="flex items-baseline">
          <span>Given date</span>
          <span className="flex-1 border-b border-dotted border-gray-600 mx-2"></span>
          <span>{isoToYMD(debt?.createdAt) || 'Unknown'}</span>
        </div>
      )}
      <div className="flex items-baseline">
        <span>Payment date</span>
        <span className="flex-1 border-b border-dotted border-gray-600 mx-2"></span>
        <span>{debt?.paymentDate || 'Unknown'}</span>
      </div>
      {debt?.createdAt && debt?.paymentDate && (
        <div className="flex items-baseline">
          <span>Days left</span>
          <span className="flex-1 border-b border-dotted border-gray-600 mx-2"></span>
          <span>
            {getDifference(debt?.createdAt, debt?.paymentDate) || 'Unknown'}
          </span>
        </div>
      )}
      {debt?.description && (
        <div className="flex flex-col">
          <span>Description</span>
          <p className="text-sm text-gray-400">{debt?.description}</p>
        </div>
      )}
    </div>
  )
}
