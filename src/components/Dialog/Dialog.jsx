import { useEffect, useRef } from 'react'

export default function Dialog({ open, onClose, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    function handleClick(e) {
      if (e.target === dialog) {
        onClose?.()
      }
    }

    dialog.addEventListener('click', handleClick)
    return () => dialog.removeEventListener('click', handleClick)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="min-w-[400px] max-w-[90vw] rounded-xl shadow-2xl bg-white text-black dark:bg-neutral-900 dark:text-white border-0 outline-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/80 dark:backdrop:bg-black/80"
    >
      {children}
    </dialog>
  )
}
