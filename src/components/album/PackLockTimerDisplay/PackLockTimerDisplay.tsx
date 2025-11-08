import { useEffect, useState } from 'react'
import { useAlbumActions, usePackLockTimer } from '../../../stores/album.store'
import { msToDisplay } from '../../../utils'
import './pack-lock-timer.scss'

export const PackLockTimerDisplay = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const lockExpirationTime = usePackLockTimer()
  const { generateAvailablePacks } = useAlbumActions()

  useEffect(() => {
    if (lockExpirationTime === null) return

    const updateTimerDisplay = () => {
      const remaining = lockExpirationTime - Date.now()

      if (remaining <= 0) {
        setTimeLeft(0)
        generateAvailablePacks(4)
        return
      }
      setTimeLeft(remaining)
    }

    updateTimerDisplay()
    const interval = setInterval(updateTimerDisplay, 1000)

    return () => clearInterval(interval)
  }, [lockExpirationTime, generateAvailablePacks])

  // Display para tiempo terminado
  if (timeLeft <= 0) return

  return (
    <div className="pack-lock-timer">
      <p className="pack-lock-timer__remaining">{msToDisplay(timeLeft)}</p>
    </div>
  )
}
