import { useState } from "react"

export const ManageData = () => {
  const [number, setNumber] = useState(1)

  console.log(number)
  return (
    <div>
      <p>Total: {number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}