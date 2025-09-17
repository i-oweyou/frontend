import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DashboardAddContext } from '../DashboardAddContext'

export default function DashboardAddHeader() {
  const { sending, stages, setStages } = useContext(DashboardAddContext)
  const { current, stages: stageList } = stages

  const goPrevious = () => {
    setStages({
      ...stages,
      current: Math.max(1, current - 1),
    })
  }

  return (
    <div className="flex items-center p-6">
      <div className="flex gap-3" disabled={sending}>
        <Link
          to="/dashboard"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full shadow-lg transition-colors"
        >
          Cancel
        </Link>
        {current > 1 && (
          <button
            onClick={goPrevious}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1 rounded-full shadow-lg transition-colors"
          >
            Previous
          </button>
        )}
      </div>
      <div className="flex flex-1 gap-2 h-2 mx-6">
        {stageList.map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 rounded-full ${
              idx < current ? 'bg-indigo-600' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
