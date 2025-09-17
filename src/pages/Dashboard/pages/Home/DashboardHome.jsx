import { Link } from 'react-router-dom'
import Header from '../../../../components/Header/Header'
import DashboardTable from '../../components/Table/DashboardTable'

export default function DashboardHome() {
  const debts = [
    {
      name: 'cdMQo6F5bHVZSbKnTB5I',
      createdAt: '2025-09-10',
      paymentDate: '2025-09-20',
      amount: '50k',
    },
    {
      name: 'John Doe',
      createdAt: '2025-08-15',
      paymentDate: '2025-09-25',
      amount: '30k',
    },
    {
      name: 'Jane Smith',
      createdAt: '2025-07-28',
      paymentDate: '2025-09-18',
      amount: '75k',
    },
  ]

  return (
    <>
      <Header />
      <DashboardTable tableData={debts} />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
        <Link
          to="/dashboard/add"
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-3xl font-bold h-18 px-4 flex items-center justify-center rounded-full shadow-lg transition-colors"
        >
          <span>New debt</span>
        </Link>
      </div>
      <div className="fixed bottom-10 right-6">
        <Link
          to="/dashboard/requests"
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-3xl font-bold h-18 px-4 flex items-center justify-center rounded-full shadow-lg transition-colors"
        >
          <span>Requests</span>
        </Link>
      </div>
    </>
  )
}
