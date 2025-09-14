import { useState, useEffect, useId } from 'react'

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    function () {
      const handler = setTimeout(function () {
        setDebouncedValue(value)
      }, delay)

      return function () {
        clearTimeout(handler)
      }
    },
    [value, delay]
  )

  return debouncedValue
}

export default function DebouncedInput({
  label,
  placeholder = 'Type here...',
  delay = 300,
  onDebounce,
}) {
  const id = useId()
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, delay)

  useEffect(
    function () {
      if (onDebounce) {
        onDebounce(debouncedValue)
      }
    },
    [debouncedValue, onDebounce]
  )

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-gray-100"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={label}
        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
      />
    </div>
  )
}
