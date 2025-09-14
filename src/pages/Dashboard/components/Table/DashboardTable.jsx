export default function DashboardTable() {
  const rows = [
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
      <div className="px-6 text-white select-none pb-40">
        <div className="hidden md:grid grid-cols-4 font-bold pb-2">
          <div>Name</div>
          <div>Given date</div>
          <div>Until payment</div>
          <div>Amount</div>
        </div>
        <div className="flex flex-col gap-1">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-4 gap-2 p-3 rounded-lg cursor-pointer ${
                idx % 2 === 0
                  ? 'dark:bg-gray-600 md:hover:bg-gray-700'
                  : 'bg-transparent'
              } hover:bg-gray-800 transition-colors`}
            >
              <div className="break-words md:break-normal">{row.name}</div>
              <div>{row.createdAt}</div>
              <div>{row.paymentDate}</div>
              <div>{row.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
