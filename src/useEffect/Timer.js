import { useEffect, useState } from "react"

const getLocaDateString = () => new Date().toLocaleString()

const Timer = () => {
  const [time, setTime] = useState(getLocaDateString())

  useEffect(() => {
    const interval = setInterval(() => setTime(getLocaDateString()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <time>{time}</time>
    </div>
  )
}

export default Timer
