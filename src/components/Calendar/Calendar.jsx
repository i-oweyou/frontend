import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function Calendar({ setDate }) {
  const today = new Date()
  const [view, setView] = useState('date')
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState(null)

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
  }

  function handleDateClick(day) {
    const selected = new Date(currentYear, currentMonth, day)
    const formatted = `${selected.getFullYear()}-${String(
      selected.getMonth() + 1
    ).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')}`
    setDate(formatted)
    setSelectedDate(formatted)
  }

  function renderDates() {
    const days = []
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} />)
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentYear, currentMonth, d)
      const formatted = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
      const isPastOrToday =
        date <= new Date(today.getFullYear(), today.getMonth(), today.getDate())
      const isSelected = selectedDate === formatted

      days.push(
        <button
          key={d}
          disabled={isPastOrToday}
          onClick={() => handleDateClick(d)}
          className={`flex items-center justify-center w-10 h-10 rounded-md text-white transition
            ${
              isPastOrToday
                ? 'opacity-40 pointer-events-none'
                : isSelected
                ? 'bg-indigo-600'
                : 'hover:bg-indigo-500 cursor-pointer'
            }
          `}
        >
          {d}
        </button>
      )
    }

    return days
  }

  function renderMonths() {
    return months.map((m, idx) => {
      const isPastOrThisMonth =
        currentYear === today.getFullYear() && idx <= today.getMonth()
      return (
        <button
          key={m}
          disabled={isPastOrThisMonth}
          onClick={() => {
            setCurrentMonth(idx)
            setView('date')
          }}
          className={`px-3 py-2 rounded-md text-white transition
            ${
              isPastOrThisMonth
                ? 'opacity-40 pointer-events-none'
                : 'hover:bg-indigo-500 cursor-pointer'
            }
          `}
        >
          {m}
        </button>
      )
    })
  }

  function renderYears() {
    const years = []
    const start = today.getFullYear()
    const end = start + 10
    for (let y = start; y <= end; y++) {
      years.push(
        <button
          key={y}
          onClick={() => {
            setCurrentYear(y)
            setView('month')
          }}
          className="px-3 py-2 rounded-md text-white hover:bg-indigo-500 cursor-pointer transition"
        >
          {y}
        </button>
      )
    }
    return years
  }

  function goPrev() {
    if (view === 'date') {
      if (currentMonth === 0) {
        setCurrentYear(currentYear - 1)
        setCurrentMonth(11)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else if (view === 'month') {
      setCurrentYear(currentYear - 1)
    } else if (view === 'year') {
      setCurrentYear(currentYear - 12)
    }
  }

  function goNext() {
    if (view === 'date') {
      if (currentMonth === 11) {
        setCurrentYear(currentYear + 1)
        setCurrentMonth(0)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    } else if (view === 'month') {
      setCurrentYear(currentYear + 1)
    } else if (view === 'year') {
      setCurrentYear(currentYear + 12)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4 text-white w-full">
        <button onClick={goPrev} className="px-2 cursor-pointer">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={() =>
            setView(
              view === 'date' ? 'month' : view === 'month' ? 'year' : 'date'
            )
          }
          className="flex-1 font-semibold rounded-md px-3 py-1 cursor-pointer hover:bg-indigo-600 transition mx-2 text-center"
        >
          {view === 'date' && `${months[currentMonth]} ${currentYear}`}
          {view === 'month' && currentYear}
          {view === 'year' && 'Select Year'}
        </button>

        <button onClick={goNext} className="px-2 cursor-pointer">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {view === 'date' && (
        <div className="grid grid-cols-7 gap-0.5 text-center text-gray-300">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className="font-semibold py-1">
              {d}
            </div>
          ))}
          {renderDates()}
        </div>
      )}

      {view === 'month' && (
        <div className="grid grid-cols-3 gap-2">{renderMonths()}</div>
      )}

      {view === 'year' && (
        <div className="grid grid-cols-3 gap-2">{renderYears()}</div>
      )}
    </div>
  )
}
