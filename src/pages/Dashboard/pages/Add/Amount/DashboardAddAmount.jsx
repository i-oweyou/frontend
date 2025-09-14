import { useContext } from 'react'
import { DashboardAddContext } from '../DashboardAddContext'

export default function DashboardAddAmount() {
  const { debt, setDebt, stages, setStages } = useContext(DashboardAddContext)

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm/6 font-medium text-gray-100"
          >
            Amount of debt (so'm)
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            min={1}
            required
            value={debt?.amount || ''}
            onChange={(e) => setDebt({ ...debt, amount: +e.target.value })}
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm/6 font-medium text-gray-100"
          >
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            value={debt?.description || ''}
            onChange={(e) => setDebt({ ...debt, description: e.target.value })}
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
        </div>
        <button
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white cursor-pointer hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          disabled={debt?.amount <= 0}
          onClick={() => setStages({ ...stages, current: stages.current + 1 })}
        >
          Next
        </button>
      </div>
    </>
  )
}
