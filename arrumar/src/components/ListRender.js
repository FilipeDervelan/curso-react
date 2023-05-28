import { useState } from "react"

export const ListRender = () => {
  const [list] = useState(['Filipe', 'Ana', 'João', 'Pedro'])

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Filipe",
      age: 18,
    },
    {
      id: 2,
      name: "Ana",
      age: 20,
    },
    {
      id: 3,
      name: "João",
      age: 30,
    }
  ])

  //previous state
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <div>
        <ul>
          {list.map((nome, i) => (
            <li key={i}>{nome}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  )
}