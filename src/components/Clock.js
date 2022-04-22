import React, {useState} from 'react'

const Clock = () => {
    const [date, setDate] = useState()

    setInterval(() => {
      const current = new Date();
      const dateTime = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
      setDate(dateTime)
    },1000)
  return (
    <h1>Current date / time is {date}</h1>
  )
}

export default Clock
