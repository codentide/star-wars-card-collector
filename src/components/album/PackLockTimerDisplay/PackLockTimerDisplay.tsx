import { useEffect, useState } from 'react'
import { useAlbumActions, usePackLockTimer } from '../../../stores/album.store'
import { msToDisplay } from '../../../utils'

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
  if (timeLeft <= 0) return <p>TIEMPO TERMINADO</p>

  return (
    <div className="pack-lock-timer">
      <p>{msToDisplay(timeLeft)}</p>
    </div>
  )
}
