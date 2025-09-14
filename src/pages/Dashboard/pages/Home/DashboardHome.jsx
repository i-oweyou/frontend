import { Link } from 'react-router-dom'
import Header from '../../../../components/Header/Header'
import DashboardTable from '../../components/Table/DashboardTable'

export default function DashboardHome() {
  return (
    <>
      <Header />
      <DashboardTable />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
        <Link
          to="/dashboard/add"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-3xl font-bold h-18 px-4 flex items-center justify-center rounded-full shadow-lg transition-colors"
        >
          <span>New debt</span>
        </Link>
      </div>
    </>
  )
}
