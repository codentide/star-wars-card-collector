import { useEffect, useState } from 'react'
import { usePackLockTimer } from '../../../stores/album.store'
import { msToDisplay } from '../../../utils'

export const PackLockTimerDisplay = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const expirationTime = usePackLockTimer()

  useEffect(() => {
    if (expirationTime === null) return

    const updateTimerDisplay = () => {
      const remaining = expirationTime - Date.now()

      if (remaining <= 0) {
        setTimeLeft(0)
        return
      }
      setTimeLeft(remaining)
    }

    updateTimerDisplay()
    const interval = setInterval(updateTimerDisplay, 1000)

    return () => clearInterval(interval)
  }, [expirationTime])

  // Display para tiempo terminado
  if (timeLeft <= 0) return <p>TIEMPO TERMINADO</p>

  return (
    <div className="pack-lock-timer">
      <p>{msToDisplay(timeLeft)}</p>
    </div>
  )
}
