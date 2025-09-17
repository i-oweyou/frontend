import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../../components/Header/Header'
import DashboardTable from '../../components/Table/DashboardTable'
import { retrieveDebtRequests } from '../../../../services/debt'

export default function DashboardRequests() {
  const [debtRequests, setDebtRequests] = useState([])

  useEffect(() => {
    async function fetchDebtRequests() {
      const debts = await retrieveDebtRequests()
      setDebtRequests(debts)
    }
    fetchDebtRequests()
  }, [])

  return (
    <>
      <Header />
      {debtRequests.length === 0 ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <DashboardTable tableData={debtRequests} />
      )}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
        <Link
          to="/dashboard"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-3xl font-bold h-18 px-4 flex items-center justify-center rounded-full shadow-lg transition-colors"
        >
          <span>Dashboard</span>
        </Link>
      </div>
    </>
  )
}
